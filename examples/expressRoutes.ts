import express, {Request, RequestHandler} from 'express';

import * as H5P from '../src';
import {
    IRequestWithUser,
    IRequestWithLanguage
} from '../src/adapters/expressTypes';
import { verifyToken } from './jwt';

/**
 * @param h5pEditor
 * @param h5pPlayer
 * @param languageOverride the language to use. Set it to 'auto' to use the
 * language set by a language detector in the req.language property.
 * (recommended)
 */
export default function (
    h5pEditor: H5P.H5PEditor,
    h5pPlayer: H5P.H5PPlayer,
    languageOverride: string | 'auto' = 'auto'
): express.Router {
    const router = express.Router();

    router.get(`${h5pEditor.config.playUrl}/:contentId`, async (req, res) => {
        try {
            const h5pPage = await h5pPlayer.render(req.params.contentId);
            res.send(h5pPage);
            res.status(200).end();
        } catch (error) {
            res.status(500).end(error.message);
        }
    });

    // router.get('/edit/:contentId', async (req: IRequestWithLanguage, res) => {
    //     const page = await h5pEditor.render(
    //         req.params.contentId,
    //         languageOverride === 'auto'
    //             ? req.language ?? 'en'
    //             : languageOverride
    //     );
    //     res.send(page);
    //     res.status(200).end();
    // });

    // router.post('/edit/:contentId', async (req: IRequestWithUser, res) => {
    //     const contentId = await h5pEditor.saveOrUpdateContent(
    //         req.params.contentId.toString(),
    //         req.body.params.params,
    //         req.body.params.metadata,
    //         req.body.library,
    //         req.user
    //     );

    //     res.send(JSON.stringify({ contentId }));
    //     res.status(200).end();
    // });

    router.get('/new', async (req: IRequestWithLanguage, res) => {
        const page = await h5pEditor.render(
            undefined,
            languageOverride === 'auto'
                ? req.language ?? 'en'
                : languageOverride
        );
        res.send(page);
        res.status(200).end();
    });

    router.post('/new', async (req: IRequestWithUser, res) => {
        if (
            !req.body.params ||
            !req.body.params.params ||
            !req.body.params.metadata ||
            !req.body.library ||
            !req.user
        ) {
            res.status(400).send('Malformed request').end();
            return;
        }
        const contentId = await h5pEditor.saveOrUpdateContent(
            undefined,
            req.body.params.params,
            req.body.params.metadata,
            req.body.library,
            req.user
        );

        res.send(JSON.stringify({ contentId }));
        res.status(200).end();
    });

    // router.get('/delete/:contentId', async (req: IRequestWithUser, res) => {
    //     try {
    //         await h5pEditor.deleteContent(req.params.contentId, req.user);
    //     } catch (error) {
    //         res.send(
    //             `Error deleting content with id ${req.params.contentId}: ${error.message}<br/><a href="javascript:window.location=document.referrer">Go Back</a>`
    //         );
    //         res.status(500).end();
    //         return;
    //     }

    //     res.send(
    //         `Content ${req.params.contentId} successfully deleted.<br/><a href="javascript:window.location=document.referrer">Go Back</a>`
    //     );
    //     res.status(200).end();
    // });


    router.get('/token/:token', requireTokenParameter, async (req: IRequestWithUser&IRequestWithLanguage, res, next) => {
        try {
            if(typeof res.locals["token"] !== "object") { res.sendStatus(401).end(); return}
            const subject = res.locals["token"]["sub"]
            if(typeof subject !== "string") { res.sendStatus(400).end(); return}
            const contentId = res.locals["token"]["contentId"]


            switch(subject) {
                case "view":
                    if(typeof contentId !== "string") { res.sendStatus(400).end(); return}
                    const h5pPage = await h5pPlayer.render(contentId);
                    res.status(200)
                        .send(h5pPage)
                        .end();
                    return

                case "edit":
                    if(typeof contentId !== "string") { res.sendStatus(400).end(); return}
                case "new":
                    if(subject === "new" && contentId) { res.sendStatus(400).end(); return}
                    const page = await h5pEditor.render(
                        contentId?contentId:undefined,
                        languageOverride === 'auto'
                            ? req.language ?? 'en'
                            : languageOverride
                    );
                    res.status(200)
                        .send(page)
                        .end();
                    return

                case "delete":
                    if(typeof contentId !== "string") { res.sendStatus(400).end(); return}
                    await h5pEditor.deleteContent(contentId, req.user);
                    res.sendStatus(200).end()
                    return

                case "download":
                    if(typeof contentId !== "string") { res.sendStatus(400).end(); return}
                    const {h5p: {title}} = await h5pEditor.getContent(contentId)
                    const filename = encodeURI(`${title}.h5p`)
                    res.setHeader("Content-Disposition", `attachment; filename=${filename}`)
                    await h5pEditor.exportContent(contentId, res, req.user);
                    return
            }
        } catch(e) {
            console.error(e)
        }
        res.sendStatus(500).end()
    })

    router.post('/token/:token', requireTokenParameter, async (req: IRequestWithUser&IRequestWithLanguage, res, next) => {
        try {
            if(typeof res.locals["token"] !== "object") { res.sendStatus(401).end(); return}
            const subject = res.locals["token"]["sub"]
            if(typeof subject !== "string") { res.sendStatus(400).end(); return}
            const contentId = res.locals["token"]["contentId"]
            
            switch(subject) {
                case "edit":
                    if(typeof contentId !== "string") { res.sendStatus(400).end(); return}
                case "new":
                    if(subject === "new" && contentId) { res.sendStatus(400).end(); return}
                    if (
                        !req.body.params ||
                        !req.body.params.params ||
                        !req.body.params.metadata ||
                        !req.body.library ||
                        !req.user
                    ) {
                        res.sendStatus(400).end();
                        return;
                    }
                    const newContentId = await h5pEditor.saveOrUpdateContent(
                        contentId?contentId:undefined,
                        req.body.params.params,
                        req.body.params.metadata,
                        req.body.library,
                        req.user
                    );
                    res.status(200)
                        .send(JSON.stringify({ contentId: newContentId }))
                        .end();
                        return
            }
        } catch(e) {
            console.error(e)
        }
        res.sendStatus(500).end()
    })

    return router;
}

const requireTokenParameter: RequestHandler = async (req, res, next) => {
    try {
        const encodedToken = req.params.token
        if(typeof encodedToken !== "string") { res.sendStatus(401).end(); return }
        res.locals["token"] = await verifyToken(encodedToken)
        next()
    } catch(e) {
        console.error(e)
        res.sendStatus(403).end()
        return
    }

}