import { MediaUploader, XapiUploader } from 'kidsloop-xapi-uploader';

const h5p = window.H5P;
const h5pIntegration = window.H5PIntegration;
const domain = h5pIntegration?.DOMAIN;
const xapiServiceEndpoint = h5pIntegration?.XAPI_SERVICE_ENDPOINT;
const mediaServiceEndpoint = h5pIntegration?.MEDIA_STORAGE_SERVICE_ENDPOINT;

let liveUrl = new URL(window.location.toString());
if (!liveUrl) {
    try {
        liveUrl = new URL(window.parent.location.toString());
    } catch (e) {
        console.warn(
            '[xAPI Uploader] Failed to retrieve live authorization token. ' +
                'The media uploader needs it to authorize uploads and identify the room.',
            e
        );
    }
}
const liveAuthorizationToken = liveUrl?.searchParams?.get('token');
let userId = liveUrl?.searchParams?.get('userId');

// Detect the currently selected user.
// https://github.com/KL-Engineering/kidsloop-live-frontend/blob/main/src/components/interactiveContent/InteractionRecorder.tsx
if (domain) {
    window.addEventListener('message', (messageEvent) => {
        if (
            messageEvent.origin !== `https://live.${domain}` ||
            messageEvent.data?.type !== 'CLASS_ACTIVE_USER'
        ) {
            return;
        }
        userId = messageEvent.data.user;
    });
}

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
    h5p.externalDispatcher.on('xAPI', (xapiEvent) => {
        Object.assign(xapiEvent, { userId, clientTimestamp: Date.now() });
        console.log(xapiEvent);
        // Don't upload xAPI events if it wasn't done in a Live class.
        if (!liveAuthorizationToken) {
            return
        }
        xapiUploader.uploadEvent(JSON.stringify(xapiEvent));
    });
    console.log('[xAPI Uploader] xAPI upload listener attached');
}

if (mediaServiceEndpoint && typeof mediaServiceEndpoint === 'string') {
    const mediaUploader = new MediaUploader(
        mediaServiceEndpoint,
        liveAuthorizationToken
    );
    h5p.externalDispatcher.on('exportFile', (mediaEvent) => {
        Object.assign(mediaEvent, { userId });
        console.log('media event:', mediaEvent);
        const mimeType = mediaEvent?.data?.blob?.type
        // Don't upload screenshots if it wasn't done in a Live class.
        if (!liveAuthorizationToken && mimeType && mimeType.startsWith('image/')) {
            return
        }
        mediaUploader
            .uploadMedia(mediaEvent)
            .then(() => console.log('Media upload succeeded'))
            .catch((e) => console.error('Media upload failed', e));
    });
    console.log('[xAPI Uploader] Media upload listener attached');
}
