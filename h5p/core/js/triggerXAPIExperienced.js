// ES5 to not break on IE11
var H5P = H5P || {};

// Self invoking function to not clutter the global variable space
(function() {
  'use strict';

  // Keep track of content being loaded
  var loaded = false;

  /**
   * Handle document loaded.
   */
  function handleDocumentCompleted() {
    // Will only be 0 or 1 since we're inside the iframe context
    if (H5P.instances.length) {
      triggerXAPIExperienced(H5P.instances[0]);
    }
  };

  /**
   * Build xAPI statement from instance info and trigger 'experienced'.
   * @param {object} H5P content instance.
   */
  function triggerXAPIExperienced(instance) {
    const xAPIEvent = H5P.externalDispatcher.createXAPIEventTemplate('experienced');
    xAPIEvent.setContext(instance);
    xAPIEvent.setObject(instance);

    instance.trigger(xAPIEvent);
  };

  // Run once document is completed
  if (document.readyState === 'complete') {
    handleDocumentCompleted();
  }
  else {
    document.addEventListener('readystatechange', function() {
      if (document.readyState === 'complete') {
        handleDocumentCompleted();
      }
    });
  }
})();
