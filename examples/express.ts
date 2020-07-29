import bodyParser from 'body-parser';
import express from 'express';
import fileUpload from 'express-fileupload';
import i18next from 'i18next';
import i18nextHttpMiddleware from 'i18next-http-middleware';
import i18nextFsBackend from 'i18next-fs-backend';
import jwt from 'jsonwebtoken';
import path from 'path';

import * as H5P from '../src';
import expressRoutes from './expressRoutes';
import startPageRenderer from './startPageRenderer';
import User from './User';
import createH5PEditor from './createH5PEditor';
import { displayIps } from './utils';

const start = async () => {
    // We use i18next to localize messages sent to the user. You can use any
    // localization library you like.
    const translationFunction = await i18next
        .use(i18nextFsBackend)
        .use(i18nextHttpMiddleware.LanguageDetector) // This will add the
        // properties language and languages to the req object.
        // See https://github.com/i18next/i18next-http-middleware#adding-own-detection-functionality
        // how to detect language in your own fashion. You can also choose not
        // to add a detector if you only want to use one language.
        .init({
            backend: {
                loadPath: 'assets/translations/{{ns}}/{{lng}}.json'
            },
            debug: process.env.DEBUG && process.env.DEBUG.includes('i18n'),
            defaultNS: 'server',
            fallbackLng: 'en',
            ns: [
                'client',
                'copyright-semantics',
                'metadata-semantics',
                'mongo-s3-content-storage',
                's3-temporary-storage',
                'server',
                'storage-file-implementations'
            ],
            preload: ['en', 'de'] // If you don't use a language detector of
            // i18next, you must preload all languages you want to use!
        });

    // Load the configuration file from the local file system
    const config = await new H5P.H5PConfig(
        new H5P.fsImplementations.JsonStorage(
            path.resolve('examples/config.json')
        )
    ).load();

    // The H5PEditor object is central to all operations of h5p-nodejs-library
    // if you want to user the editor component.
    //
    // To create the H5PEditor object, we call a helper function, which
    // uses implementations of the storage classes with a local filesystem
    // or a MongoDB/S3 backend, depending on the configuration values set
    // in the environment variables.
    // In your implementation, you will probably instantiate H5PEditor by
    // calling new H5P.H5PEditor(...) or by using the convenience function
    // H5P.fs(...).
    const h5pEditor: H5P.H5PEditor = await createH5PEditor(
        config,
        path.resolve('h5p/libraries'), // the path on the local disc where libraries should be stored)
        path.resolve('h5p/content'), // the path on the local disc where content is stored. Only used / necessary if you use the local filesystem content storage class.
        path.resolve('h5p/temporary-storage'), // the path on the local disc where temporary files (uploads) should be stored. Only used / necessary if you use the local filesystem temporary storage class.
        (key, language) => {
            return translationFunction(key, { lng: language });
        }
    );

    // The H5PPlayer object is used to display H5P content.
    const h5pPlayer = new H5P.H5PPlayer(
        h5pEditor.libraryStorage,
        h5pEditor.contentStorage,
        config
    );

    // We now set up the Express server in the usual fashion.
    const server = express();

    server.use(bodyParser.json({ limit: '500mb' }));
    server.use(
        bodyParser.urlencoded({
            extended: true
        })
    );
    server.use(
        fileUpload({
            limits: { fileSize: h5pEditor.config.maxTotalSize }
        })
    );

    // It is important that you inject a user object into the request object!
    // The Express adapter below (H5P.adapters.express) expects the user
    // object to be present in requests.
    // In your real implementation you would create the object using sessions,
    // JSON webtokens or some other means.
    server.use((req: H5P.IRequestWithUser, res, next) => {
        req.user = new User();
        const token = getAppCookies(req)['token'];

        if (token) {
            try {
                const publicKey = process.env.JWT_PUBLIC_KEY || '';
                const user = jwt.verify(token, publicKey, { algorithms: ['RS256'] }) as object;
                req.user.id = user['userId'];
                req.user.groupId = user['groupId'] || '';
                req.user.token = token;
            } catch(e) {
                // IF THE TOKEN IS INVALID, WE SHOULD REDIRECT THE USER TO A LOGIN PAGE HERE.
                console.log('jwt verify failed. Error: ', e);
            }
        } else {
            // IF THE TOKEN IS NOT PRESENT, WE SHOULD REDIRECT THE USER TO A LOGIN PAGE HERE.
        }

        next();
    });

    // TEMPORARY MIDDLEWARE TO SET HARD-CODED TOKEN
    server.use((req, res, next) => {
        if(!getAppCookies(req)['token']) {
            const jwtV = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxIiwiaWF0IjoxNTk1OTc5NzU1LCJleHAiOjE2Mjc1MzczNTV9.gzJALPl0s1HGPkj5Ku7g2OswVULG-yDKBpU-ft8OhLmKbNlQJSv8bL6uybSXSMMgfYVGG-sqjK-GWJeE0HJvzr2a3r2SL0meqLHoJM844MSY4zDRnqa1XVA8KsyqWovPsRXcGOJzGI4iPZ_2uyzZLVXMAtRD3zx7LU6OFu-GogsoNKJGjXUfP1_5or1nNhNVky5ywLB0ifcFWtZ8cSUJTlykukQbNg-g4Tv19X3iEaznsQwAws0Pqk0J0K6VvdcOoqjqrGuuL5f0iLju0HL19w6Dptvpiy-9mNyCxPoMKNSU_xg4ANienSYTA8XRHj5g512__og5lIYScv69w1fUMw6RCYO5D_rwH65KvlZFVcx9xMHPTqDoyhO6dlUbo9XhHsur_jle42XiiiBbpEDG7gg7n24OS_-DqYMlksZXNRKrOoVLazBw2BwLa7ApsaGdUuMznTiMFpzwg_FW5UjSw2RZf00dkRZZN89Rk13zQHkSp5EXXhp1JYZMbOh1JUMPURdQ_ppy2mhb9Z6ndM8bE_cjli3I892j3tXTNib-08HC1_3xVrgRDQsffgeW11bueNKbSmzuKqD9arskfYQ6bXU7V9lbewkFlTWuxsVjjAfNsgw5hfCJ7ZAd4_rVeBKWtc8LwuOVuhGLfOJnEp_UOiE-ComhBYdcbI0s41rqGA4`;
            res.cookie('token',jwtV, { maxAge: 900000, httpOnly: true });

            // WITHOUT THIS LINE, IF THERE IS AT LEAST ONE CONTENT ELEMENT 
            // LISTED, AND THE PAGE IS LOADED FROM SCRATCH (i.e. a browser 
            // in privacy mode), THE CODE CRASHES. REDIRECTION TO A LOGIN 
            // PAGE IF THE TOKEN IS NOT PRESENT IN COOKIES IN THE PREVIOUS 
            // MIDDLEWARE IS NEEDED TO ADDRESS THIS
            req['user'].token = jwtV;
        }
        next();
    });

    // The i18nextExpressMiddleware injects the function t(...) into the req
    // object. This function must be there for the Express adapter
    // (H5P.adapters.express) to function properly.
    server.use(i18nextHttpMiddleware.handle(i18next));

    // The Express adapter handles GET and POST requests to various H5P
    // endpoints. You can add an options object as a last parameter to configure
    // which endpoints you want to use. In this case we don't pass an options
    // object, which means we get all of them.
    server.use(
        h5pEditor.config.baseUrl,
        H5P.adapters.express(
            h5pEditor,
            path.resolve('h5p/core'), // the path on the local disc where the files of the JavaScript client of the player are stored
            path.resolve('h5p/editor'), // the path on the local disc where the files of the JavaScript client of the editor are stored
            undefined,
            'auto' // You can change the language of the editor here by setting
            // the language code you need here. 'auto' means the route will try
            // to use the language detected by the i18next language detector.
        )
    );

    // The expressRoutes are routes that create pages for these actions:
    // - Creating new content
    // - Editing content
    // - Saving content
    // - Deleting content
    server.use(
        h5pEditor.config.baseUrl,
        expressRoutes(
            h5pEditor,
            h5pPlayer,
            'auto' // You can change the language of the editor here by setting
            // the language code you need here. 'auto' means the route will try
            // to use the language detected by the i18next language detector.
        )
    );

    // The LibraryAdministrationExpress routes are REST endpoints that offer library
    // management functionality.
    server.use(
        `${h5pEditor.config.baseUrl}/libraries`,
        H5P.adapters.LibraryAdministrationExpressRouter(h5pEditor)
    );

    // The ContentTypeCacheExpress routes are REST endpoints that allow updating
    // the content type cache manually.
    server.use(
        `${h5pEditor.config.baseUrl}/content-type-cache`,
        H5P.adapters.ContentTypeCacheExpressRouter(h5pEditor.contentTypeCache)
    );

    // The startPageRenderer displays a list of content objects and shows
    // buttons to display, edit, delete and download existing content.
    server.get('/', startPageRenderer(h5pEditor));

    server.use(
        '/client',
        express.static(path.resolve('build/examples/client'))
    );

    const port = process.env.PORT || '8080';

    // For developer convenience we display a list of IPs, the server is running
    // on. You can then simply click on it in the terminal.
    displayIps(port);

    server.listen(port);
};

// For testing purposes. If needed, this should be moved to a helper file
const getAppCookies = (req) => {
    const parsedCookies = {};

    if (undefined === req.headers.cookie) {
        return parsedCookies;
    }
    const rawCookies = req.headers.cookie.split('; ');
   
    rawCookies.forEach(rawCookie=>{
        const parsedCookie = rawCookie.split('=');
        parsedCookies[parsedCookie[0]] = parsedCookie[1];
    });
    return parsedCookies;
};

// We can't use await outside a an async function, so we use the start()
// function as a workaround.

start();
