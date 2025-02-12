import { expect } from 'chai';
import { H5PConfig, H5PPlayer, ILibraryName } from '@lumieducation/h5p-server';
import User from '../../src/User';

import { JSDOM } from 'jsdom';
import path from 'path';
import fs from 'fs';
import sinon from 'sinon';

describe('H5PPlayer.render', () => {
    it('includes custom endpoints in the H5P integration object', () => {
        const contentId = 'foo';
        const contentObject = {};
        const h5pObject = {};
        const config = new H5PConfig(undefined);
        const xapiEndpoint = 'ws://stub.xapi-endpoint.live';
        const audioEndpoint = 'https://stub.media-endpoint.live';

        return new H5PPlayer(
            undefined,
            undefined,
            config,
            {
                XAPI_SERVICE_ENDPOINT: xapiEndpoint,
                MEDIA_STORAGE_SERVICE_ENDPOINT: audioEndpoint
            } as any,
            undefined,
            undefined
        )
            .setRenderer((model) => model)
            .render(contentId, new User(), 'en', {
                parametersOverride: contentObject,
                metadataOverride: h5pObject as any
            })
            .then((model) => {
                expect(
                    (model as any).integration.XAPI_SERVICE_ENDPOINT
                ).to.equal(xapiEndpoint);
                expect(
                    (model as any).integration.MEDIA_STORAGE_SERVICE_ENDPOINT
                ).to.equal(audioEndpoint);
            });
    });

    it.skip("h5p.externalDispatcher.on is called twice: once for 'xAPI' and once for 'export file' when xapi-uploader script is executed", async () => {
        const contentId = 'foo';
        const contentObject = {
            my: 'content'
        };
        const h5pObject = {};
        const config = new H5PConfig(undefined);
        const h5p = { externalDispatcher: { on: (x, y) => {} } };
        const h5pStub = sinon.spy(h5p.externalDispatcher, 'on');

        await new H5PPlayer(
            undefined,
            undefined,
            config,
            {
                XAPI_SERVICE_ENDPOINT: 'ws://stub.xapi-endpoint.live',
                MEDIA_STORAGE_SERVICE_ENDPOINT:
                    'https://stub.media-endpoint.live'
            } as any,
            undefined,
            undefined,
            {
                customization: {
                    global: {
                        scripts: ['/h5p/custom/customScripts.js']
                    }
                }
            }
        )
            .render(contentId, new User(), 'en', {
                parametersOverride: contentObject,
                metadataOverride: h5pObject as any
            })
            .then((html) => {
                const dom = new JSDOM(html, {
                    runScripts: 'dangerously',
                    resources: 'usable',
                    beforeParse(window) {
                        window.H5P = h5p;
                    }
                });
                const xapiUploaderCode = fs
                    .readFileSync(
                        path.resolve(
                            __dirname,
                            '../../h5p/custom/customScripts.js'
                        )
                    )
                    .toString();
                dom.window.eval(xapiUploaderCode);
                dom.window.close();
            });

        expect(h5pStub.calledWith('xAPI')).to.be.true;
        expect(h5pStub.calledWith('exportFile')).to.be.true;
        expect(h5pStub.calledTwice).to.be.true;
    });
});
