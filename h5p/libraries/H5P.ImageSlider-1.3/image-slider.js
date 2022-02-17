var H5P = H5P || {};

H5P.ImageSlider = (function ($) {
  /**
   * Constructor function.
   */
  function C(options, id) {
    this.$ = $(this);
    var self = this;

    H5P.EventDispatcher.call(this);
    // Extend defaults with provided options
    this.options = $.extend(true, {}, {
      imageSlides: [
        {
          imageSlide: null
        }
      ],
      a11y: {
        nextSlide: 'Next Image',
        prevSlide: 'Previous Image',
        gotoSlide: 'Go to image %slide'
      },
      l10n: {
        mute: 'Mute audio',
        unmute: 'Unmute audio'
      },
      aspectRatioMode: 'auto',
      aspectRatio: {
        aspectWidth: 4,
        aspectHeight: 3
      },
      autoplay: false
    }, options);

    // Keep provided id.
    this.id = id;
    this.currentSlideId = 0;
    this.imageSlides = [];
    this.imageSlideHolders = [];
    this.audios = [];
    this.muted = false;

    // Filter out slides without images
    this.options.imageSlides = this.options.imageSlides.filter(function (slide) {
      return slide.imageSlide && slide.imageSlide.params && slide.imageSlide.params.image && slide.imageSlide.params.image.params && slide.imageSlide.params.image.params.file;
    });

    this.determineAspectRatio();

    for (var i = 0; i < this.options.imageSlides.length; i++) {
      this.imageSlides[i] = H5P.newRunnable(this.options.imageSlides[i].imageSlide, this.id, undefined, undefined, {
        aspectRatio: this.aspectRatio
      });
      this.imageSlides[i].on('loaded', function() {
        self.trigger('resize');
      });
      this.imageSlideHolders[i] = false;

      this.audios = this.createAudios(this.options.imageSlides);
    }

    this.on('enterFullScreen', function() {
      self.enterFullScreen();
    });
    this.on('exitFullScreen', function(){
      self.exitFullScreen();
    });

    this.on('resize', function() {
      var fullScreenOn = self.$container.hasClass('h5p-fullscreen') || self.$container.hasClass('h5p-semi-fullscreen');
      if (fullScreenOn) {
        self.$slides.css('height', '');
        var newAspectRatio = window.innerWidth / (window.innerHeight - self.$progressBar.outerHeight());
        for (var i = 0; i < self.imageSlides.length; i++) {
          self.imageSlides[i].setAspectRatio(newAspectRatio);
        }
      }
      else {
        if (self.aspectRatio && self.$slides) {
          self.$slides.height(self.$slides.width() / self.aspectRatio);
        }
      }
      self.updateNavButtons();
      self.updateProgressBar();
    });
  }

  C.prototype = Object.create(H5P.EventDispatcher.prototype);
  C.prototype.constructor = C;

  /**
   * Create audio elements from items.
   * @param {object[]} items Items from params.
   * @return {object[]} Audio elements.
   */
  C.prototype.createAudios = function (items) {
    const that = this;
    const audioElements = [];

    items.forEach(function (item) {
      if (!item.audio || item.audio.length < 1 || !item.audio[0].path) {
        audioElements.push(null);
        return;
      }

      const player = document.createElement('audio');
      player.style.display = 'none';
      player.src = H5P.getPath(item.audio[0].path, that.id);
      audioElements.push({
        player: player,
        promise: null
      });
    });

    return audioElements;
  };

  /**
   * Set the aspect ratio for this image-slider
   */
  C.prototype.determineAspectRatio = function() {
    // Set aspectRatio to default
    this.aspectRatio = 4/3;

    // Try to identify aspectRatio according to settings
    switch (this.options.aspectRatioMode) {
      case 'auto':
        var imageRatios = [];
        for (var i = 0; i < this.options.imageSlides.length; i++) {
          var imageFile = this.options.imageSlides[i].imageSlide.params.image.params.file;
          imageRatios[i] = imageFile.width / imageFile.height;
        }
        imageRatios.sort(function (a, b) {
          return a - b;
        });
        // Get the median image ratio
        this.aspectRatio = imageRatios[Math.round(imageRatios.length / 2) - 1];
        break;

      case 'custom':
        if (this.options.aspectRatio.aspectWidth && this.options.aspectRatio.aspectHeight) {
          this.aspectRatio = this.options.aspectRatio.aspectWidth / this.options.aspectRatio.aspectHeight;
        }
        break;

      case 'notFixed':
        this.aspectRatio = undefined;
        break;
    }
  };

  /**
   * Attach function called by H5P framework to insert H5P content into
   * page
   *
   * @param {jQuery} $container
   */
  C.prototype.attach = function ($container) {
    const that = this;

    this.$container = $container;
    // Set class on container to identify it as a greeting card
    // container.  Allows for styling later.
    $container.addClass("h5p-image-slider").addClass('h5p-image-slider-using-mouse');

    $container.bind('keydown', function(e) {
      var keyboardNavKeys = [32, 13, 9];
      if (keyboardNavKeys.indexOf(e.which) !== -1) {
        $container.removeClass('h5p-image-slider-using-mouse');
      }
    });
    $container.bind('mousedown', function() {
      $container.addClass('h5p-image-slider-using-mouse');
    });

    this.$slidesHolder = $('<div>', {
      class: 'h5p-image-slider-slides-holder'
    }).appendTo($container);

    // KidsLoop customization to prevent dragging the image on desktop
    this.$slidesHolder.get(0).addEventListener('dragstart', function (event) {
      event.preventDefault();
    });

    this.$slides = $('<div>', {
      class: 'h5p-image-slider-slides'
    }).appendTo(this.$slidesHolder);

    this.loadImageSlides();
    this.addAudios();

    this.$currentSlide = this.imageSlideHolders[0].addClass('h5p-image-slider-current');

    // If there's audio, we need a button to toggle it.
    if (this.audios.some(function (audio) {
      return audio !== null;
    })) {
      this.buttonAudio = document.createElement('button');
      this.buttonAudio.classList.add('h5p-image-slider-audio-button');
      this.buttonAudio.classList.add('unmuted');
      this.buttonAudio.addEventListener('click', function () {
        const muted = that.toggleButtonAudio();
        if (!muted) {
          that.playAudio(that.currentSlideId);
        }
        else {
          that.stopAudios();
        }
      });
      this.$slidesHolder.get(0).appendChild(this.buttonAudio);
    }

    if (this.audios[0] && this.options.autoplay) {
      this.playAudio(0);
    }

    this.attachControls();
  };

  /**
   * Update layout when entering fullscreen.
   *
   * Many layout changes are handled on resize.
   */
  C.prototype.enterFullScreen = function() {
    this.updateNavButtons();
    this.updateProgressBar();
  };

  /**
   * Update layout when entering fullscreen.
   *
   * Many layout changes are handled on resize.
   */
  C.prototype.exitFullScreen = function() {
    for (var i = 0; i < this.imageSlides.length; i++) {
      this.imageSlides[i].resetAspectRatio();
    }
    this.updateNavButtons();
    this.updateProgressBar();
  };

  /**
   * Adds the HTML for the next three slides to the DOM
   */
  C.prototype.loadImageSlides = function() {
    // Load next three imageSlides (not all for performance reasons)
    for (var i = this.currentSlideId; i < this.imageSlides.length && i < this.currentSlideId + 3; i++) {
      if (this.imageSlideHolders[i] === false) {
        this.imageSlideHolders[i] = $('<div>', {
          'class': 'h5p-image-slide-holder'
        });
        if (i > 0) {
          this.imageSlideHolders[i].attr('aria-hidden', true);
        }
        if (i > this.currentSlideId) {
          this.imageSlideHolders[i].addClass('h5p-image-slider-future');
        }
        this.imageSlides[i].attach(this.imageSlideHolders[i]);
        this.$slides.append(this.imageSlideHolders[i]);

        if (this.audios[i]) {
          this.imageSlideHolders[i].get(0).appendChild(this.audios[i].player);
        }
      }
    }
  };

  /**
   * Add audios.
   */
  C.prototype.addAudios = function() {
    const that = this;

    this.imageSlideHolders.forEach( function (holder, index) {
      if (that.audios[index]) {
        if (!holder) {
          return; // Not yet loaded
        }

        holder.get(0).appendChild(that.audios[index].player);
      }
    });
  };

  /**
   * Start audio.
   * @param {number} id Index.
   */
  C.prototype.playAudio = function (id) {
    if (this.audios.length <= id) {
      return;
    }

    const currentAudio = this.audios[id];
    if (!currentAudio) {
      return;
    }

    // People might slide quickly ...
    if (!currentAudio.promise) {
      currentAudio.promise = currentAudio.player.play();
      currentAudio.promise
        .then(() => {
          currentAudio.promise = null;
        })
        .catch(() => {
          // Browser policy prevents playing
          currentAudio.promise = null;
          this.toggleButtonAudio(true);
        });
    }
  };

  /**
   * Stop audios
   */
  C.prototype.stopAudios = function () {
    /*
     * People may switch the images quickly, and audios that should
     * be stopped may not have loaded yet.
     */
    this.audios.forEach(audio => {
      if (!audio) {
        return; // skip, no audio
      }

      if (audio.promise) {
        audio.promise.then(() => {
          audio.player.pause();
          audio.player.load(); // Reset
          audio.promise = null;
        });
      }
      else {
        audio.player.pause();
        audio.player.load(); // Reset
      }
    });
  };

  /**
   * Toggle audio button mute state.
   * @param {boolean} [muted] If set, will override toggling.
   * @param {boolean} True, if muted, else false.
   */
  C.prototype.toggleButtonAudio = function (muted) {
    if (!this.buttonAudio) {
      return;
    }

    this.muted = (typeof muted === 'boolean') ? muted : !this.muted;

    if (this.muted) {
      this.buttonAudio.classList.remove('unmuted');
      this.buttonAudio.classList.add('muted');
      this.buttonAudio.title = this.options.l10n.unmute;
    }
    else {
      this.buttonAudio.classList.add('unmuted');
      this.buttonAudio.classList.remove('muted');
      this.buttonAudio.title = this.options.l10n.mute;
    }

    return this.muted;
  };

  /**
   * Attaches controls to the DOM
   */
  C.prototype.attachControls = function() {
    var self = this;
    this.$leftButton = this.createControlButton(this.options.a11y.prevSlide, 'left');
    this.$rightButton = this.createControlButton(this.options.a11y.nextSlide, 'right');
    C.handleButtonClick(this.$leftButton, function () {
      if (!self.dragging) {
        self.gotoSlide(self.currentSlideId - 1);
      }
    });

    C.handleButtonClick(this.$rightButton, function() {
      if (!self.dragging) {
        self.gotoSlide(self.currentSlideId + 1);
      }
    });

    this.$slidesHolder.append(this.$leftButton);
    this.$slidesHolder.append(this.$rightButton);
    this.updateNavButtons();
    this.attachProgressBar();
    this.initDragging();
    this.initKeyEvents();
  };

  /**
   * Attaches the progress bar to the DOM
   */
  C.prototype.attachProgressBar = function() {
    this.$progressBar = $('<ul>', {
      class: 'h5p-image-slider-progress'
    });
    for (var i = 0; i < this.imageSlides.length; i++) {
      this.$progressBar.append(this.createProgressBarElement(i));
    }
    this.$slidesHolder.append(this.$progressBar);
  };

  /**
   * Creates a progress bar button
   *
   * @param {Integer} index  - slide index the progress bare element corresponds to
   * @return {jQuery} - progress bar button
   */
  C.prototype.createProgressBarElement = function(index) {
    var self = this;
    var $progressBarElement = $('<li>', {
      class: 'h5p-image-slider-progress-element',
      role: 'button',
      "aria-label": self.options.a11y.gotoSlide.replace('%slide', index + 1),
      tabindex: 0,
    });

    C.handleButtonClick($progressBarElement, function() {
      self.gotoSlide(index);
    });

    if (index === 0) {
      $progressBarElement.addClass('h5p-image-slider-current-progress-element');
    }
    return $progressBarElement;
  };

  /**
   * Creates a next or previous button
   *
   * @param {string} text - label for the button
   * @param {string} dir - next or prev
   * @return {jQuery} control button
   */
  C.prototype.createControlButton = function(text, dir) {
    var $controlButton = $('<div>', {
      class: 'h5p-image-slider-button ' + 'h5p-image-slider-' + dir + '-button',
    });

    var $controlBg = $('<div>', {
      class: 'h5p-image-slider-button-background'
    });
     $controlButton.append($controlBg);

    var $controlText = $('<div>', {
      class: 'h5p-image-slider-button-text',
      'aria-label': text,
      'role': 'button',
      'tabindex': 0
    });
    $controlButton.append($controlText);

    return $controlButton;
  };

  /**
   * Go to a specific slide
   *
   * @param {Integer} slideId the index of the slide we want to go to
   * @return {Boolean} false if failed(typically the slide didn't exist), true if not
   */
  C.prototype.gotoSlide = function(slideId) {
    if (slideId < 0 || slideId >= this.imageSlideHolders.length) {
      return false;
    }
    $('.h5p-image-slider-removing', this.$container).removeClass('.h5p-image-slider-removing');
    var nextSlideDirection = (this.currentSlideId < slideId) ? 'future' : 'past';
    var prevSlideDirection = nextSlideDirection === 'past' ? 'future' : 'past';
    this.currentSlideId = slideId;
    this.loadImageSlides();
    var $prevSlide = this.$currentSlide;
    var $nextSlide = (this.imageSlideHolders[slideId]);
    if (!this.dragging) {
      this.prepareNextSlideForAnimation($nextSlide, nextSlideDirection);
    }
    setTimeout(function() {
      $nextSlide.removeClass('h5p-image-slider-no-transition');
      $prevSlide.removeClass('h5p-image-slider-current')
        .addClass('h5p-image-slider-removing')
        .removeClass('h5p-image-slider-' + nextSlideDirection)
        .addClass('h5p-image-slider-' + prevSlideDirection)
        .attr('aria-hidden', true);
      $nextSlide.removeClass('h5p-image-slider-past')
        .removeClass('h5p-image-slider-future')
        .addClass('h5p-image-slider-current')
        .removeAttr('aria-hidden');
    }, 1);

    if (!this.muted) {
      this.stopAudios();
      this.playAudio(slideId);
    }

    this.$currentSlide = $nextSlide;

    this.updateNavButtons();
    this.updateProgressBar();
    return true;
  };

  /**
   * Position the next slide correctly so that it is ready to be aimated in
   *
   * @param {jQuery} $nextSlide the slide to be prepared
   * @param {String} direction prev or next
   */
  C.prototype.prepareNextSlideForAnimation = function($nextSlide, direction) {
    $nextSlide.removeClass('h5p-image-slider-past')
      .removeClass('h5p-image-slider-future')
      .addClass('h5p-image-slider-no-transition')
      .addClass('h5p-image-slider-' + direction);
  };

  /**
   * Updates all navigation buttons, typically toggling and positioning
   */
  C.prototype.updateNavButtons = function() {
    if (this.currentSlideId >= this.imageSlides.length - 1) {
      this.$rightButton.hide();
    }
    else {
      this.$rightButton.show();
    }
    if (this.currentSlideId <= 0) {
      this.$leftButton.hide();
    }
    else {
      this.$leftButton.show();
    }
    var heightInPercent = 100;
    var fullScreenOn = this.$container.hasClass('h5p-fullscreen') || this.$container.hasClass('h5p-semi-fullscreen');
    if (!fullScreenOn) {
      heightInPercent = this.$currentSlide.height() / this.$slides.height() * 100;
    }
    this.$leftButton.css('height', heightInPercent + '%');
    this.$rightButton.css('height', heightInPercent + '%');
  };

  /**
   * Update the progress bar
   *
   * Highlights the element in the progress bar corresponding to the current slide
   * and reposition the progress bar
   */
  C.prototype.updateProgressBar = function () {
    $('.h5p-image-slider-current-progress-element', this.$container).removeClass('h5p-image-slider-current-progress-element');
    $('.h5p-image-slider-progress-element', this.$container).eq(this.currentSlideId).addClass('h5p-image-slider-current-progress-element');
    var heightInPercent = this.$currentSlide.height() / this.$slides.height() * 100;
    $('.h5p-image-slider-progress', this.$container).css('top', heightInPercent + '%');
  };

  /**
   * Make a slide draggable
   */
  C.prototype.initDragging = function () {
    var self = this;
    this.$slidesHolder.on('touchstart', function(event) {
      self.dragging = true;
      self.dragStartX = event.originalEvent.touches[0].pageX;
      self.$currentSlide.addClass('h5p-image-slider-dragging');
      if (self.isButton(event.target)) {
        event.preventDefault();
        event.stopPropagation();
        var d = new Date();
        self.dragStartTime = d.getTime();
      }
    });

    this.$slidesHolder.on('touchmove', function(event) {
      event.preventDefault();
      self.dragActionUpdate(event.originalEvent.touches[0].pageX);
    });

    this.$slidesHolder.on('touchend', function(event) {
      self.finishDragAction();
      if (self.dragStartTime !== false && self.isButton(event.target)) {
        // This was possibly a click
        var d = new Date();
        if (d.getTime() - self.dragStartTime < 300) {
          if (self.isRightButton(event.target)) {
            self.gotoSlide(self.currentSlideId + 1);
          }
          else {
            self.gotoSlide(self.currentSlideId - 1);
          }
        }
      }
      self.dragStartTime = false;
    });

    this.$slidesHolder.on('touchcancel', function() {
      self.finishDragAction();
      self.dragStartTime = false;
    });
  };

  /**
   * Initialize key press events.
   *
   * @returns {undefined} Nothing.
   */
  C.prototype.initKeyEvents = function () {
    if (this.keydown !== undefined) {
      return;
    }

    var self = this;

    this.keydown = function (event) {
      // Left
      if (event.which === 37) {
        self.gotoSlide(self.currentSlideId - 1);
      }

      // Right
      else if (event.which === 39) {
        self.gotoSlide(self.currentSlideId + 1);
      }
    };
    H5P.jQuery('body').keydown(this.keydown);
  };

  /**
   * Is the domElement a button?
   *
   * @param {DOMElement} domElement the element to be checked
   * @return {Boolean} whether or not the element is a button
   */
  C.prototype.isButton = function (domElement) {
    var $target = $(domElement);
    return $target.hasClass('h5p-image-slider-button-background')
      || $target.hasClass('h5p-image-slider-button-text')
      || $target.hasClass('h5p-image-slider-button');
  };

  /**
   * Is the element the right/next button?
   *
   * @param {DOMElement} domElement the DOM element to be checked
   * @return {Boolean} Whether or not the element is the right button
   */
  C.prototype.isRightButton = function (domElement) {
    var $target = $(domElement);
    return $target.hasClass('h5p-image-slider-right-button')
      || $target.parent().hasClass('h5p-image-slider-right-button');
  };

  /**
   * Update the current and next slide in response to a drag action
   */
  C.prototype.dragActionUpdate = function(x) {
    this.dragXMovement = x - this.dragStartX;
    this.$currentSlide.css('transform', 'translateX(' + this.dragXMovement + 'px)');
    if (this.currentSlideId > 0) {
      var $prevSlide = this.imageSlideHolders[this.currentSlideId - 1].addClass('h5p-image-slider-dragging');
      if (this.dragXMovement < 0) {
        $prevSlide.css('transform', 'translateX(-100.001%)');
      }
      else {
        $prevSlide.css('transform', 'translateX(' + (this.dragXMovement - $prevSlide.width()) + 'px)');
      }
    }
    if (this.currentSlideId < this.imageSlideHolders.length - 1) {
      var $nextSlide = this.imageSlideHolders[this.currentSlideId + 1].addClass('h5p-image-slider-dragging');
      if (this.dragXMovement > 0) {
        $nextSlide.css('transform', 'translateX(100.001%)');
      }
      else {
        $nextSlide.css('transform', 'translateX(' +(this.dragXMovement + $nextSlide.width()) + 'px)');
      }
    }
  };

  /**
   * Actions to be done when a drag action is finished
   *
   * Will either go back to the current slide or finish the transition to the next slide
   */
  C.prototype.finishDragAction = function() {
    $('.h5p-image-slider-dragging', this.$container).removeClass('h5p-image-slider-dragging').each(function() {
      this.style.removeProperty('transform');
    });
    this.dragStartX = undefined;
    var xInPercent = this.dragXMovement / this.$currentSlide.width();
    if (xInPercent < -0.3) {
      if (this.currentSlideId < this.imageSlideHolders.length - 1) {
        this.gotoSlide(this.currentSlideId + 1);
      }
      else {
        this.$currentSlide.css('transform', 'translateX(0%)');
      }
    }
    else if (xInPercent > 0.3) {
      if (this.currentSlideId > 0) {
        this.gotoSlide(this.currentSlideId - 1);
      }
      else {
        this.$currentSlide.css('transform', 'translateX(0%)');
      }
    }
    this.dragging = false;
    this.dragXMovement = 0;
  };

  /**
   * Make a non-button element behave as a button. I.e handle enter and space
   * keydowns as click
   *
   * @param  {H5P.jQuery} $element The "button" element
   * @param  {Function} callback
   */
  C.handleButtonClick = function ($element, callback) {
    $element.click(function (event) {
      callback.call(this, event);
    });
    $element.keydown(function (event) {
      // 32 - space, 13 - enter
      if ([32, 13].indexOf(event.which) !== -1) {
        event.preventDefault();
        callback.call(this, event);
      }
    });
  };

  return C;
})(H5P.jQuery);
