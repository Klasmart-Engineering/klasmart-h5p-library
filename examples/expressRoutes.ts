import express from 'express';

import * as H5P from '../src';

// import getACLPermission from '../src/GetACLPermission';
import ACLPermission from '../src/ACLPermission';

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

    router.get(
        '/edit/:contentId',
        async (req: H5P.IRequestWithLanguage, res) => {
            console.log(`CHECK FOR PERMISSIONS HERE <GET /edit/${req.params.contentId.toString()}>?`);
            const page = await h5pEditor.render(
                req.params.contentId,
                languageOverride === 'auto'
                    ? req.language ?? 'en'
                    : languageOverride
            );
            res.send(page);
            res.status(200).end();
        }
    );

    router.post('/edit/:contentId', async (req: H5P.IRequestWithUser, res) => {
        console.log(`CHECK FOR PERMISSIONS HERE <POST /edit/${req.params.contentId.toString()}>?`);
        const contentId = await h5pEditor.saveOrUpdateContent(
            req.params.contentId.toString(),
            req.body.params.params,
            req.body.params.metadata,
            req.body.library,
            req.user
        );

        res.send(JSON.stringify({ contentId }));
        res.status(200).end();
    });

    router.get('/new', async (req: H5P.IRequestWithLanguage, res) => {
        // Don't check for permissions. This renders the Content Type list.
        const page = await h5pEditor.render(
            undefined,
            languageOverride === 'auto'
                ? req.language ?? 'en'
                : languageOverride
        );
        res.send(page);
        res.status(200).end();
    });

    router.post('/new', async (req: H5P.IRequestWithUser, res) => {
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

        // Create ACL obj in acl API for permissions
        const aclApi = new ACLPermission(req.user.token);
        const aclRes = await aclApi.createACL(req.user.id, `h5p:${contentId}`, 'Full');
        console.log('ACL CREATED: ', aclRes);

        res.send(JSON.stringify({ contentId }));
        res.status(200).end();
    });

    router.get('/delete/:contentId', async (req: H5P.IRequestWithUser, res) => {
        try {
            console.log(`CHECK FOR PERMISSIONS HERE <GET /delete/${req.params.contentId}>?`);
            await h5pEditor.deleteContent(req.params.contentId, req.user);

            // Delete acl obj from acl api
            const aclApi = new ACLPermission(req.user.token);
            const aclRes = await aclApi.rmACL(`h5p:${req.params.contentId}`);
            console.log(`ACL WITH ID '${aclRes['rmACL']}' DELETED.`);

            // we can verify permissions here and throw an error if the user doesn't have proper permissions for the obj.
        } catch (error) {
            res.send(
                `Error deleting content with id ${req.params.contentId}: ${error.message}<br/><a href="javascript:window.location=document.referrer">Go Back</a>`
            );
            res.status(500).end();
            return;
        }

        res.send(
            `Content ${req.params.contentId} successfully deleted.<br/><a href="javascript:window.location=document.referrer">Go Back</a>`
        );
        res.status(200).end();
    });

    return router;
}
