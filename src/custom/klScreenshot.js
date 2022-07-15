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
    if (!H5P.KLFileExporter) {
      return; // Cannot export
    }

    if (!instance) {
      instance = (Array.isArray(H5P?.instances) && H5P.instances.length) ? H5P.instances[0] : null;
    }

    if (!element) {
      element = document.body; // Could have been null
    }

    const canvas = await html2canvas(element);
    canvas.toBlob((blob) => {
      let index = document.querySelector('.h5p-footer-slide-count-current').innerHTML;
      index = parseInt(index);
      let url = URL.createObjectURL(blob);
      let result = [];
      try {
        if (localStorage.getItem('cp_slides_screenshots_with_id')) {
          result = localStorage.getItem('cp_slides_screenshots_with_id');
          result = JSON.parse(result);
        }
        let check = false;
        result.forEach(item => {
          if (item.id === index) {
            check = true;
            return false;
          }
        });
        if (!check) {
          result.push({ id: index, url: url });
        }
        result = JSON.stringify(result);
        localStorage.setItem('cp_slides_screenshots_with_id', result);
      }
      catch (error) {
        console.log('Couldn\'t read local storage', error);
      }

      this.triggerFileExport(
        instance,
        { type: 'image/jpeg', blob: blob }
      );
    }, 'image/jpeg', this.imageQuality);
  }
}

/** @constant {number} Default image quality */
KLScreenshot.IMAGE_QUALITY = .9;
