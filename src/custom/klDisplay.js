export default class KLDisplay {

  /**
   * Get device orientation.
   * @return {string} 'portrait' or 'landscape'.
   */
  static getDeviceOrientation() {
    if (screen?.orientation?.type) {
      if (screen.orientation.type.includes('portrait')) {
        return 'portrait';
      }
      else if (screen.orientation.type.includes('landscape')) {
        return 'landscape';
      }
    }

    // Unreliable, as not clear what device's natural orientation is
    if (typeof window.orientation === 'number') {
      if ([0, 180].includes(window.orientation)) {
        return 'portrait';
      }
      else if ([90, -90, 270].includes(window.orientation)) {
        return 'landscape';
      }
    }

    return 'landscape'; // Assume default
  }

  /**
   * Detect mobile devices (http://detectmobilebrowsers.com/).
   * @return {boolean} True if running on a mobile device.
   */
  static isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    return (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(userAgent.substr(0, 4))
    );
  }

  /**
   * Determine whether mobile device in landscape orientation.
   * @return {boolean} True, if mobile device in landscape orientation.
   */
  static isMobileLandscape() {
    return KLDisplay.isMobileDevice() && KLDisplay.getDeviceOrientation() === 'landscape';
  }

  /**
   * Detect whether user is running iOS.
   * @return {boolean} True, if user is running iOS.
   */
  static isIOS() {
    return (
      ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
    );
  }

  /**
   * Compute display limits for KidsLoop Live.
   * @param {HTMLElement} referenceContainer H5P reference container.
   * @return {object|null} Height and width in px or null if cannot be determined.
   */
  static computeDisplayLimitsKLL(referenceContainer) {
    /*
     * If this sanitizing is used, this may yield weird results in a subcontent
     * context.
     */
    referenceContainer = referenceContainer ||
      document.querySelector('.h5p-container');

    const displayLimits = this.computeDisplayLimits();

    // This only works because KLL enforces height on H5P's iframe
    displayLimits.height = Math.min(displayLimits.height, document.body.offsetHeight);

    return displayLimits;
  }

  /**
   * Compute display limits.
   * @param {HTMLElement} referenceContainer H5P reference container.
   * @return {object|null} Height and width in px or null if cannot be determined.
   */
  static computeDisplayLimits(referenceContainer) {
    /*
     * If this sanitizing is used, this may yield weird results in a subcontent
     * context.
     */
    referenceContainer = referenceContainer ||
      document.querySelector('.h5p-container');

    let topWindow = KLDisplay.getTopWindow();

    // iOS doesn't change screen dimensions on rotation
    let screenSize = (KLDisplay.isIOS() && KLDisplay.getDeviceOrientation() === 'landscape') ?
      { height: screen.width, width: screen.height } :
      { height: screen.height, width: screen.width };

    topWindow = topWindow || {
      innerHeight: screenSize.height,
      innerWidth: screenSize.width
    };

    // Smallest value of viewport and container wins
    return {
      height: Math.min(topWindow.innerHeight, screenSize.height),
      width: Math.min(topWindow.innerWidth, referenceContainer.offsetWidth)
    };
  }

  /**
	 * Get top DOM Window object.
	 * @param {Window} [startWindow=window] Window to start looking from.
	 * @return {Window|null} Top window.
	 */
  static getTopWindow(startWindow) {
    let sameOrigin;
    startWindow = startWindow || window;

    // H5P iframe may be on different domain than iframe content
    try {
      sameOrigin = startWindow.parent.location.host === window.location.host;
    }
    catch (error) {
      sameOrigin = null;
    }

    if (!sameOrigin) {
      return null;
    }

    if (startWindow.parent === startWindow || ! startWindow.parent) {
      return startWindow;
    }

    return KLDisplay.getTopWindow(startWindow.parent);
  }
}
