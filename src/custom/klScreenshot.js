import html2canvas from 'html2canvas';
import URLTools from './helpers/urltools';

export default class KLScreenshot {

  /**
   * @constructor
   * @param {object} [params={}] Parameters.
   * @param {number} [params.imageQuality] Image quality [0.5-1];
   */
  constructor(params = {}) {
    this.imageQuality = typeof (params.imageQuality) === 'number' ? params.imageQuality : KLScreenshot.IMAGE_QUALITY;
    this.imageQuality = Math.max(0.5, Math.min(this.imageQuality, 1));

    this.handleProgressingWhileIncomplete = this.handleProgressingWhileIncomplete.bind(this);

    // Keep track of pending uploads
    this.pendingUploadUUIDs = [];
  }

  /**
   * Take screenshot of DOM element.
   * @param {H5PContent} instance H5P instance.
   * @param {HTMLElement} [element=document.body] DOM element.
   */
  async takeScreenshot(instance, element = document.body) {
    if (!instance) {
      instance = (Array.isArray(H5P?.instances) && H5P.instances.length) ? H5P.instances[0] : null;
    }

    if (!element) {
      element = document.body; // Could have been null
    }

    const canvas = await html2canvas(element);
    canvas.toBlob((blob) => {
      this.triggerFileExport(
        instance,
        { type: 'image/jpeg', blob: blob }
      );
    }, 'image/jpeg', this.imageQuality);
  }

  /**
   * Get H5P content id.
   * Assuming there's only one H5P instance on page!
   * @return {string} H5P content id.
   */
  getContentId() {
    const contents = Object.keys(H5PIntegration?.contents || {});
    if (!contents.length) {
      return null; // No contents listed
    }

    // contents[0] is where assuming just one H5P instance on page
    const idSegments = contents[0].split('-');
    if (idSegments.length !== 2) {
      return null; // No id
    }

    /*
     * Please note: Regular H5P integrations use numbers for the contentId,
     * while the KidsLoop integration uses strings. May cause trouble at some
     * point in the future.
     */
    if (idSegments[1].trim() === '') {
      return null; // No id
    }

    return idSegments[1];
  }

  /**
   * Determine whether there are file uploads pending.
   * @return {boolean} True, if upload is pending, else false.
   */
  hasPendingUploads() {
    return this.pendingUploadUUIDs.length !== 0;
  }

  /**
   * Handle attempt to progress while file upload is incomplete.
   * @param {Event} event Event.
   * @return {string} Former custom message. Deprecated.
   */
  handleProgressingWhileIncomplete(event) {
    event.preventDefault();

    // Overriding the default message is deprecated and will not work on all browsers
    return (event.returnValue = 'Your result is not stored yet. Please wait until it is completed. If you want to continue without storing it, click continue.');
  }

  /**
   * Stop waiting for file export has completed.
   * @param {string} uuid UUID of export process.
   */
  stopWaitingFileExportConfirmation(uuid) {
    if (!this.pendingUploadUUIDs.includes(uuid)) {
      return; // May have already been handled
    }

    this.pendingUploadUUIDs = this.pendingUploadUUIDs.filter(id => id !== uuid);
    if (!this.hasPendingUploads()) {
      ['beforeunload', 'unload'].forEach(eventName => {
        removeEventListener(eventName, this.handleProgressingWhileIncomplete);
      });
    }
  }

  /**
   * Wait until file export has completed.
   * @param {string} uuid UUID of export process.
   * @param {number} [timeout=30000] Timeout in ms.
   */
  waitForFileExportConfirmation(uuid, timeout = 30000) {
    if (typeof timeout !== 'number' || timeout < 100) {
      timeout = 30000; // 30 seconds default
    }

    if (!this.hasPendingUploads()) {
      ['beforeunload', 'unload'].forEach(eventName => {
        addEventListener(eventName, this.handleProgressingWhileIncomplete);
      });
    }

    this.pendingUploadUUIDs.push(uuid);

    // Wait for response
    H5P.externalDispatcher.once('exportFileDone', (event) => {
      if (event?.data?.uuid === uuid) {
        this.stopWaitingFileExportConfirmation(uuid);
      }
    });

    // Wait for timeout
    if (timeout) {
      setTimeout(() => {
        this.stopWaitingFileExportConfirmation(uuid);
      }, timeout);
    }
  }

  /**
    * Trigger file export.
    * @param {H5PContent} instance H5P instance to work on.
    * @param {object} data Any data to be exported.
    */
   triggerFileExport(instance, data) {
     // Set content id
     if (!data.contentId) {
       data.contentId = this.getContentId();
     }

     if (instance) {
       // Set subcontent id (if is subcontent)
       if (!data.subContentId && instance.subContentId) {
         data.subContentId = instance.subContentId;
       }

       // Try to add title
       if (typeof instance.getTitle === 'function') {
         data.description = instance.getTitle();
       }
     }

     // Set user just like xAPI actor
     if (!data.user) {
       const event = new H5P.XAPIEvent();
       event.setActor();
       data.user = event.data.statement.actor;
     }

     // If no trigger function on instance found, use H5P.externalDispatcher directly
     const triggerSource = (typeof instance?.trigger === 'function') ?
       instance :
       H5P.externalDispatcher;

     if (!triggerSource?.trigger) {
       return; // No trigger source available
     }

     data.uuid = H5P.createUUID();
     const token = URLTools.getToken({ decoded: true });
     if (token?.classtype === 'study') {
       this.waitForFileExportConfirmation(data.uuid);
     }

     // Trigger event with screenshot
     triggerSource.trigger(
       'exportFile',
       data,
       { external: true }
     );
   }
}

/** @constant {number} Default image quality */
KLScreenshot.IMAGE_QUALITY = .9;
