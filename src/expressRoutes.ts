import express, { RequestHandler } from 'express';

import * as H5P from '@lumieducation/h5p-server';
import {
    IRequestWithUser,
    IRequestWithLanguage
} from '@lumieducation/h5p-express';
import { verifyToken } from './jwt';

const requireTokenParameter: RequestHandler = async (req, res, next) => {
    try {
        const encodedToken = req.params.token;
        if (typeof encodedToken !== 'string') {
            res.sendStatus(401).end();
            return;
        }
        res.locals.token = await verifyToken(encodedToken);
        next();
    } catch (e) {
        console.error(e);
        res.sendStatus(403).end();
    }
};

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

    router.get(
        `${h5pEditor.config.playUrl}/:contentId`,
        async (req: IRequestWithUser, res) => {
            try {
                const h5pPage = await h5pPlayer.render(
                    req.params.contentId,
                    req.user,
                    languageOverride === 'auto'
                        ? req.language ?? 'en'
                        : languageOverride,
                    {
                        showCopyButton: false,
                        showDownloadButton: false,
                        showFrame: false,
                        showH5PIcon: false,
                        showLicenseButton: false
                    }
                );
                res.send(h5pPage);
                res.status(200).end();
            } catch (error) {
                res.status(500).end(error.message);
            }
        }
    );

    /*
     * This route was a custom KidsLoop customization that's not actually
     * needed (anymore) and also will be implemented in the official
     * node.js port of H5P shortly. Stub already in express.ts
     */

    // router.get(
    //     '/edit/:contentId',
    //     async (req: IRequestWithLanguage & IRequestWithUser, res) => {
    //         const page = await h5pEditor.render(
    //             req.params.contentId,
    //             languageOverride === 'auto'
    //                 ? req.language ?? 'en'
    //                 : languageOverride,
    //             req.user
    //         );
    //         res.send(page);
    //         res.status(200).end();
    //     }
    // );

    /*
     * This seems to be handled differently outside the integration
     */

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

    /*
     * This was just for testing whether JWT authentication works - can
     * probably be removed.
     */

    // Set sample cookie for 24 hours, TODO: Remove
    // router.get(
    //     '/testcookie',
    //     async (req: express.Request, res: express.Response): Promise<void> => {
    //         res.cookie(
    //             'access',
    //             'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEyMzQ1Njc4OTAiLCJuYW1lIjoiSm9obiBEb2UiLCJlbWFpbCI6ImpvaG5AZG9lLmZvbyJ9.b9EvbWp5V1xJREgyaGhhgwouc04q51jrHcE5O5QdmQY',
    //             {
    //                 expires: new Date(
    //                     new Date().getTime() + 60 * 60 * 1000 * 24
    //                 ),
    //                 httpOnly: true,
    //                 secure: false
    //             }
    //         )
    //             .status(200)
    //             .send('Test JWT cookie set')
    //             .end();
    //         return;
    //     }
    // );

    /*
     * This route was a custom KidsLoop customization that's not actually
     * needed (anymore) and also will be implemented in the official
     * node.js port of H5P shortly. Stub already in express.ts
     */

    // Route for posting content state data for a user
    // router.post(
    //     '/contentUserData/:contentId/:dataType/:subContentId',
    //     async (req: express.Request, res: express.Response): Promise<void> => {
    //         const userId = await new H5P.H5PUser(req).getId();

    //         if (
    //             !req.body.data ||
    //             !req.body.preload ||
    //             !req.body.invalidate ||
    //             !req.params.contentId ||
    //             !req.params.dataType ||
    //             !req.params.subContentId ||
    //             !userId
    //         ) {
    //             res.status(400).send('Invalid request').end();
    //             return;
    //         }

    //         h5pPlayer.getContentUserDataStorage().set({
    //             userId: userId,
    //             contentId: req.params.contentId,
    //             subContentId: req.params.subContentId,
    //             dataType: req.params.dataType,
    //             data: req.body.data,
    //             invalidate: req.body.invalidate === '0' ? 0 : 1,
    //             preload: req.body.preload === '0' ? 0 : 1,
    //             updatedAt: Date.now()
    //         });

    //         res.status(200).send({ success: true }).end();
    //     }
    // );

    /*
     * This route was a custom KidsLoop customization that's not actually
     * needed (anymore) and also will be implemented in the official
     * node.js port of H5P shortly. Stub already in express.ts
     */

    // // Route for getting content state data for a user
    // router.get(
    //     '/contentUserData',
    //     async (req: express.Request, res: express.Response): Promise<void> => {
    //         const userId = await new H5P.H5PUser(req).getId();

    //         if (
    //             !req.query.contentId ||
    //             !req.query.dataType ||
    //             !req.query.subContentId ||
    //             !userId
    //         ) {
    //             res.status(400).send('Invalid request').end();
    //             return;
    //         }

    //         res.send(
    //             await h5pPlayer
    //                 .getContentUserDataStorage()
    //                 .getData(
    //                     req.query.contentId as string,
    //                     userId,
    //                     req.query.subContentId as string,
    //                     req.query.dataType as string
    //                 )
    //         )
    //             .status(200)
    //             .end();
    //     }
    // );

    /*
     * This route was a custom KidsLoop customization that's not actually
     * needed (anymore) and also will be implemented in the official
     * node.js port of H5P shortly. Stub already in express.ts
     */

    // // Route for getting content state data for a user
    // router.get(
    //     '/contentUserData/:contentId/:dataType/:subContentId',
    //     async (req: express.Request, res: express.Response): Promise<void> => {
    //         const userId = await new H5P.H5PUser(req).getId();

    //         if (
    //             !req.params.contentId ||
    //             !req.params.dataType ||
    //             !req.params.subContentId ||
    //             !userId
    //         ) {
    //             res.status(400).send('Invalid request').end();
    //             return;
    //         }

    //         res.send(
    //             await h5pPlayer
    //                 .getContentUserDataStorage()
    //                 .getData(
    //                     req.params.contentId,
    //                     userId,
    //                     req.params.subContentId,
    //                     req.params.dataType
    //                 )
    //         )
    //             .status(200)
    //             .end();
    //     }
    // );

    /*
     * TODO: delete route + function to delete data for user (required if user is removed or garbage collection cron)
     */

    router.get(
        '/new',
        async (req: IRequestWithLanguage & IRequestWithUser, res) => {
            const page = await h5pEditor.render(
                undefined,
                languageOverride === 'auto'
                    ? req.language ?? 'en'
                    : languageOverride,
                req.user
            );
            res.send(page);
            res.status(200).end();
        }
    );

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

    /*
     * This seems to be handled differently outside the integration
     */

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

    router.get(
        '/token/:token',
        requireTokenParameter,
        async (req: IRequestWithUser & IRequestWithLanguage, res, next) => {
            try {
                if (typeof res.locals.token !== 'object') {
                    res.sendStatus(401).end();
                    return;
                }
                const subject = res.locals.token.sub;
                if (typeof subject !== 'string') {
                    res.sendStatus(400).end();
                    return;
                }
                const { contentId } = res.locals.token;

                switch (subject) {
                    case 'view':
                        if (typeof contentId !== 'string') {
                            res.sendStatus(400).end();
                            return;
                        }
                        const h5pPage = await h5pPlayer.render(
                            contentId,
                            req.user
                        );
                        res.status(200).send(h5pPage).end();
                        return;

                    case 'edit':
                    case 'clone':
                        if (typeof contentId !== 'string') {
                            res.sendStatus(400).end();
                            return;
                        }
                    case 'new':
                        if (subject === 'new' && contentId) {
                            res.sendStatus(400).end();
                            return;
                        }
                        const page = await h5pEditor.render(
                            contentId || undefined,
                            languageOverride === 'auto'
                                ? req.language ?? 'en'
                                : languageOverride,
                            req.user
                        );
                        res.status(200).send(page).end();
                        return;

                    case 'delete':
                        if (typeof contentId !== 'string') {
                            res.sendStatus(400).end();
                            return;
                        }
                        await h5pEditor.deleteContent(contentId, req.user);
                        res.sendStatus(200).end();
                        return;

                    case 'download':
                        if (typeof contentId !== 'string') {
                            res.sendStatus(400).end();
                            return;
                        }
                        const {
                            h5p: { title }
                        } = await h5pEditor.getContent(contentId);
                        const filename = encodeURI(`${title}.h5p`);
                        res.setHeader(
                            'Content-Disposition',
                            `attachment; filename=${filename}`
                        );
                        await h5pEditor.exportContent(contentId, res, req.user);
                        return;
                    default:
                        console.warn(
                            `'/token/:token' subject(${subject}) not supported`
                        );
                }
            } catch (e) {
                console.error(e);
            }
            res.sendStatus(500).end();
        }
    );

    router.post(
        '/token/:token',
        requireTokenParameter,
        async (req: IRequestWithUser & IRequestWithLanguage, res, next) => {
            try {
                if (typeof res.locals.token !== 'object') {
                    res.sendStatus(401).end();
                    return;
                }
                const subject = res.locals.token.sub;
                if (typeof subject !== 'string') {
                    res.sendStatus(400).end();
                    return;
                }
                const { contentId } = res.locals.token;

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

                switch (subject) {
                    case 'edit':
                        if (typeof contentId !== 'string' && contentId) {
                            res.sendStatus(400).end();
                            return;
                        }
                    case 'new':
                        if (subject === 'new' && contentId) {
                            res.sendStatus(400).end();
                            return;
                        }
                        {
                            const newContentId = await h5pEditor.saveOrUpdateContent(
                                // When subject is 'edit', save the update with the previous contentId
                                // Otherwise subject is 'new', allow h5p to create new contentId
                                subject === 'edit' ? contentId : undefined,
                                req.body.params.params,
                                req.body.params.metadata,
                                req.body.library,
                                req.user
                            );
                            res.status(200)
                                .send(
                                    JSON.stringify({ contentId: newContentId })
                                )
                                .end();
                        }
                        return;
                    case 'clone':
                        if (typeof contentId !== 'string' && contentId) {
                            res.sendStatus(400).end();
                            return;
                        }
                        {
                            const newContentId = await h5pEditor.cloneContent(
                                contentId,
                                req.body.params.params,
                                req.body.params.metadata,
                                req.body.library,
                                req.user
                            );
                            res.status(200)
                                .send(
                                    JSON.stringify({ contentId: newContentId })
                                )
                                .end();
                        }
                        return;
                    default:
                        console.warn(
                            `'/token/:token' subject(${subject}) not supported`
                        );
                }
            } catch (e) {
                console.error(e);
            }
            res.sendStatus(500).end();
        }
    );

    return router;
}
