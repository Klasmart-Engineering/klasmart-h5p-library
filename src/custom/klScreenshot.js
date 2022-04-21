import html2canvas from 'html2canvas';

export default class KLScreenshot {

  /**
   * @constructor
   * @param {object} [params={}] Parameters.
   * @param {number} [params.imageQuality] Image quality [0.5-1];
   */
  constructor(params = {}) {
    this.imageQuality = typeof (params.imageQuality) === 'number' ? params.imageQuality : KLScreenshot.IMAGE_QUALITY;
    this.imageQuality = Math.max(0.5, Math.min(this.imageQuality, 1));
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
