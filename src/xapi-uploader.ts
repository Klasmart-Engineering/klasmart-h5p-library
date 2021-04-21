import {xAPIUploader} from "kidsloop-xapi-uploader"


const h5p = (window as any).H5P;
const h5pIntegration = (window as any).H5PIntegration;
const endpoint = h5pIntegration?.xapi_events_endpoint;

console.log(h5p)
console.log(h5pIntegration)
console.log(endpoint)

if(!h5p) {
    console.error("Could locate h5p to listen for xAPI events")
} else if (!h5pIntegration) {
    console.error("Could locate h5p integration paramaters endpoint to send xAPI events to")
} else if(!endpoint || typeof endpoint !== "string" ) {
    console.error(`Invalid xapi endpoint '${h5pIntegration.xapi_events_endpoint}'`)
} else {
    console.log(h5p)
    console.log(h5pIntegration)
    console.log(endpoint)
    const uploader = new xAPIUploader(endpoint)
    h5p.externalDispatcher.on('xAPI', (event: any) => {
        console.log(event)
        Object.assign(event, { clientTimestamp: Date.now() })
        uploader.send(JSON.stringify(event))
    });
    console.log("XAPI uploader listener attached")
} 
