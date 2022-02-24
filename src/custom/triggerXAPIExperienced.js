export default class XAPIExperienced {
  constructor() {
    if (!H5P || !H5P.externalDispatcher) {
      return; // H5P not running properly
    }

    // Trigger once H5P content is initialized
    H5P.externalDispatcher.once('initialized', () => {
      if (H5P.instances?.length) {
        // Assuming there's only one H5P instance on page!
        this.triggerXAPIExperienced(H5P.instances[0]);
      }
    });
  }

  /**
   * Build xAPI statement from instance info and trigger 'experienced'.
   * @param {object} H5P content instance.
   */
  triggerXAPIExperienced(instance) {
    const xAPIEvent = H5P.externalDispatcher.createXAPIEventTemplate('experienced');
    xAPIEvent.setContext(instance);
    xAPIEvent.setObject(instance);

    instance.trigger(xAPIEvent);
  }
}
