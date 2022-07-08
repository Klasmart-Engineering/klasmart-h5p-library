var H5P = H5P || {};

/**
 * Guess the answer module
 */
H5P.GuessTheAnswer = (function () {
  /**
   * Triggers 'resize' event on an instance. Stops infinite loops
   * by not re-triggering the event, when it comes from a sibling
   *
   * @param {object} siblingInstance
   * @return {Function}
   */
  function triggerResize(siblingInstance) {
    return function (event) {
      var fromSibling = event.data && (event.data.fromSibling === true);

      if (!fromSibling) {
        siblingInstance.trigger('resize', { fromSibling: true });
      }
    };
  }

  /**
   * Create the media element
   *
   * @param {object} params
   * @param {number} contentId
   * @param {object} instance
   * @return {Element}
   */
  function createMediaElement(params, contentId, instance) {
    var element = document.createElement('div');

    let displayLimits = (
      instance.isRoot() &&
      H5P.KLDisplay && H5P.KLDisplay.computeDisplayLimitsKLL
    ) ?
      H5P.KLDisplay.computeDisplayLimitsKLL(instance.rootElement.parentNode) :
      null;

    if (
      displayLimits &&
      params.library && params.library.split(' ')[0] === 'H5P.Video' &&
      params.params && params.params.sources && params.params.sources.length &&
      params.params.sources[0].path && params.params.sources[0].path.indexOf('youtube.com') !== -1
    ) {
      params.visuals = params.visuals || {};
      params.visuals.fit = false
    }

    var mediaInstance = H5P.newRunnable(params, contentId, H5P.jQuery(element), true);

    if (displayLimits) {
      instance.on('resize', function () {
        limitMediaHeight(instance, mediaInstance, displayLimits);
      });
    }

    // Resize this instance, on video resize, and vise versa
    instance.on('resize', triggerResize(mediaInstance));
    mediaInstance.on('resize', triggerResize(instance));

    return element;
  }

  /**
   * Limit media height.
   * @param {H5P.ContentType} instance This.
   * @param {H5P.ContentType} mediaInstance Instance of medium.
   * @param {object} displayLimits Display limits.
   */
  function limitMediaHeight(instance, mediaInstance, displayLimits) {
    // Determine height of answer title to be deduced from available height
    var answerTitle = instance.rootElement.querySelector('.h5p-guess-answer-title');
    var answerTitleHeight = 0;
    if (answerTitle) {
      var answerTitleStyle = window.getComputedStyle(answerTitle);
      answerTitleHeight = answerTitle.offsetHeight +
        parseFloat(answerTitleStyle.getPropertyValue('margin-top')) +
        parseFloat(answerTitleStyle.getPropertyValue('margin-bottom'));
    }

    // Determine height of show solution button to be deduced from available height
    var showSolutionButton = instance.rootElement.querySelector('.show-solution-button');
    var showSolutionButtonHeight = 0;
    if (showSolutionButton) {
      var showSolutionButtonStyle = window.getComputedStyle(showSolutionButton);
      showSolutionButtonHeight = showSolutionButton.offsetHeight +
        parseFloat(showSolutionButtonStyle.getPropertyValue('margin-top')) +
        parseFloat(showSolutionButtonStyle.getPropertyValue('margin-bottom'));
    }

    // Determine available height
    var availableHeight = Math.max(0, displayLimits.height - answerTitleHeight - showSolutionButtonHeight);

    // Set max width that would allow available height
    var maxWidth = '';
    if (mediaInstance.libraryInfo && mediaInstance.libraryInfo.machineName === 'H5P.Image') {
      maxWidth = (mediaInstance.height && mediaInstance.height > 0) ?
        availableHeight * mediaInstance.width / mediaInstance.height :
        '100%';
    }
    else if (mediaInstance.libraryInfo && mediaInstance.libraryInfo.machineName === 'H5P.Video') {
      var video = instance.rootElement.querySelector('.media .h5p-video');
      if (video) {
        maxWidth = video.offsetHeight > 0 ?
          availableHeight * video.offsetWidth / video.offsetHeight :
          '100%';

        // YouTube needs one extra resize when ready
        if (video.classList.value.indexOf('h5p-youtube') !== -1) {
          mediaInstance.once('ready', () => {
            instance.trigger('resize');
          });
        }
      }
    }

    instance.rootElement.querySelector('.media').style.maxWidth = (maxWidth === '') ? maxWidth : maxWidth + 'px';
  }

  /**
   * Initializes the image
   *
   * @param {Element} imageElement
   * @param {object} instance
   */
  function initImage(imageElement, instance) {
    // if has image, resize on load
    if (imageElement) {
      imageElement.style.width = null;
      imageElement.style.height = null;
      imageElement.addEventListener('load', function () {
        instance.trigger('resize');
      }, false);
    }
  }

  /**
   * Simple recusive function the helps set default values without
   * destroying object references.
   *
   * Note: Can be removed if 'babel-plugin-transform-object-assign' is added
   *
   * @param {object} params values
   * @param {object} values default values
   */
  var setDefaults = function (params, values) {
    for (var prop in values) {
      if (values.hasOwnProperty(prop)) {
        if (params[prop] === undefined) {
          params[prop] = values[prop];
        }
        else if (params[prop] instanceof Object && !(params[prop] instanceof Array)) {
          setDefaults(params[prop], values[prop]);
        }
      }
    }
  };

  /**
   * Initialize module.
   *
   * @class
   * @alias H5P.GuessTheAnswer
   * @param {object} params
   * @param {number} contentId
   */
  function C(params, contentId) {
    // Set default behavior.
    setDefaults(params, {
      taskDescription: '',
      solutionLabel: 'Click to see the answer.',
      solutionText: ''
    });

    // get element references
    var rootElement = this.rootElement = this.createRootElement(params);
    var mediaElement = rootElement.querySelector('.media');
    var buttonElement = rootElement.querySelector('.show-solution-button');
    var solutionElement = rootElement.querySelector('.solution-text');

    // add media
    if (params.media) {
      var el = createMediaElement(params.media, contentId, this);
      initImage(el.querySelector('img'), this);
      mediaElement.appendChild(el);
    }

    // add show solution text on button click
    buttonElement.addEventListener('click', function() {
      buttonElement.classList.add('hidden');
      solutionElement.classList.remove('hidden');
      solutionElement.focus();
    });
  }

  /**
   * Creates the root element with the markup for the content type
   *
   * @param {object} params
   * @return {Element}
   */
  C.prototype.createRootElement = function (params) {
    var element = document.createElement('div');

    element.classList.add('h5p-guess-answer');
    element.innerHTML = '<div class="h5p-guess-answer-title">' + params.taskDescription +'</div>' +
      '<div class="media"></div>' +
      '<button class="show-solution-button">' + params.solutionLabel + '</button>' +
      '<span class="empty-text-for-nvda">&nbsp;</span>' +
      '<div class="solution-text hidden" tabindex="-1">' + params.solutionText + '</div>';

    // KidsLoop customization to prevent dragging the image on desktop
    element.addEventListener('dragstart', function (event) {
      event.preventDefault();
    });

    return element;
  };

  /**
   * Attach function called by H5P framework to insert H5P content into page.
   *
   * @param {jQuery} $container The container which will be appended to.
   */
  C.prototype.attach = function ($container) {
    this.setActivityStarted();
    $container.get(0).appendChild(this.rootElement);
  };

  return C;
})();
