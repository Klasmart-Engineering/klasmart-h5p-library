import { AudioUploader, XapiUploader } from 'kidsloop-xapi-uploader'

const h5p = (window as any).H5P;
const h5pIntegration = (window as any).H5PIntegration;
const xapiServiceEndpoint = h5pIntegration?.xapi_events_endpoint;
const audioServiceEndpoint = h5pIntegration?.audio_service_endpoint;

console.log('h5p:', h5p)
console.log('h5pIntegration:', h5pIntegration)
console.log('xapiServiceEndpoint:', xapiServiceEndpoint)
console.log('audioServiceEndpoint:', audioServiceEndpoint)

if(!h5p) {
    console.error("[xAPI Uploader] Could not locate H5P")
} else if (!h5pIntegration) {
    console.error("Could not locate H5P.H5PIntegration")
} else if(!xapiServiceEndpoint || typeof xapiServiceEndpoint !== "string" ) {
    console.error(`Invalid xAPI endpoint '${xapiServiceEndpoint}'`)
} else if(!audioServiceEndpoint || typeof audioServiceEndpoint !== "string" ) {
    console.error(`Invalid audio endpoint '${audioServiceEndpoint}'`)
} else {
    const xapiUploader = new XapiUploader(xapiServiceEndpoint)
    h5p.externalDispatcher.on('xAPI', (event: any) => {
        console.log(event)
        Object.assign(event, { clientTimestamp: Date.now() })
        xapiUploader.uploadEvent(JSON.stringify(event))
    });

    const audioUploader = new AudioUploader(audioServiceEndpoint)
    h5p.externalDispatcher.on('exportFile', (event: any) => {
        console.log('audio', event)
        // TODO: Replace the roomId placeholder when live implements passing it to us.
        const roomId = 'roomId'
        Object.assign(event, { roomId })
        // TODO: Replace organizationId placeholder.
        const organizationId = 'org1'
        Object.assign(event, { organizationId })
        audioUploader.uploadAudio(event)
          .then(() => console.log('Audio upload succeeded'))
          .catch(e => console.error('Audio upload failed', e))
    });
    
    console.log("xAPI uploader listener attached")
} 
