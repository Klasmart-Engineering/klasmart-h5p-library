import { AudioUploader, XapiUploader } from 'kidsloop-xapi-uploader';

const h5p = window.H5P;
const h5pIntegration = window.H5PIntegration;
const xapiServiceEndpoint = h5pIntegration?.XAPI_SERVICE_ENDPOINT;
const audioServiceEndpoint = h5pIntegration?.AUDIO_SERVICE_ENDPOINT;

let liveUrl = new URL(window.location.toString());
if (!liveUrl) {
    try {
        liveUrl = new URL(window.parent.location.toString());
    } catch (e) {
        console.warn(
            '[xAPI Uploader] Failed to retrieve live authorization token. ' +
                'The audio uploader needs it to authorize uploads and identify the room.',
            e
        );
    }
}
const liveAuthorizationToken = liveUrl?.searchParams?.get('token');

if (!h5p) {
    console.error('[xAPI Uploader] Could not locate H5P');
} else if (!h5pIntegration) {
    console.error('[xAPI Uploader] Could not locate H5P.H5PIntegration');
}

if (xapiServiceEndpoint && typeof xapiServiceEndpoint === 'string') {
    const xapiUploader = new XapiUploader(
        xapiServiceEndpoint,
        liveAuthorizationToken
    );
    h5p.externalDispatcher.on('xAPI', (event) => {
        console.log(event);
        Object.assign(event, { clientTimestamp: Date.now() });
        xapiUploader.uploadEvent(JSON.stringify(event));
    });
    console.log('[xAPI Uploader] xAPI upload listener attached');
}

if (audioServiceEndpoint && typeof audioServiceEndpoint === 'string') {
    const audioUploader = new AudioUploader(
        audioServiceEndpoint,
        liveAuthorizationToken
    );
    h5p.externalDispatcher.on('exportFile', (event) => {
        console.log('audio', event);
        audioUploader
            .uploadAudio(event)
            .then(() => console.log('Audio upload succeeded'))
            .catch((e) => console.error('Audio upload failed', e));
    });
    console.log('[xAPI Uploader] Audio upload listener attached');
}
