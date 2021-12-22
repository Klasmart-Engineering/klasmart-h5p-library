H5P.MemoryGame = (function (EventDispatcher, $) {

  // We don't want to go smaller than 100px per card(including the required margin)
  var CARD_MIN_SIZE = 100; // PX
  var CARD_STD_SIZE = 116; // PX
  var STD_FONT_SIZE = 16; // PX
  var LIST_PADDING = 1; // EMs
  var numInstances = 0;

  /**
   * Memory Game Constructor
   *
   * @class H5P.MemoryGame
   * @extends H5P.EventDispatcher
   * @param {Object} parameters
   * @param {Number} id
   */
  function MemoryGame(parameters, id) {
    /** @alias H5P.MemoryGame# */
    var self = this;

    // Initialize event inheritance
    EventDispatcher.call(self);

    var flipped, timer, counter, popup, $bottom, $taskComplete, $feedback, $wrapper, numCols, audioCard;
    var cards = [];
    var flipBacks = []; // Que of cards to be flipped back
    var numFlipped = 0;
    var removed = 0;
    numInstances++;

    // Add defaults
    parameters = $.extend(true, {
      behaviour: {
        ratio: {},
        keepLayout: false
      },
      l10n: {
        cardTurns: 'Card turns',
        timeSpent: 'Time spent',
        feedback: 'Good work!',
        tryAgain: 'Reset',
        closeLabel: 'Close',
        label: 'Memory Game. Find the matching cards.',
        done: 'All of the cards have been found.',
        cardPrefix: 'Card %num: ',
        cardUnturned: 'Unturned.',
        cardMatched: 'Match found.'
      }
    }, parameters);

    /**
     * Check if these two cards belongs together.
     *
     * @private
     * @param {H5P.MemoryGame.Card} card
     * @param {H5P.MemoryGame.Card} mate
     * @param {H5P.MemoryGame.Card} correct
     */
    var check = function (card, mate, correct) {
      if (mate !== correct) {
        // Incorrect, must be scheduled for flipping back
        flipBacks.push(card);
        flipBacks.push(mate);

        // Wait for next click to flip them back…
        if (numFlipped > 2) {
          // or do it straight away
          processFlipBacks();
        }
        return;
      }

      // Update counters
      numFlipped -= 2;
      removed += 2;

      var isFinished = (removed === cards.length);

      // Remove them from the game.
      card.remove(!isFinished);
      mate.remove();

      var desc = card.getDescription();
      if (desc !== undefined) {
        // Pause timer and show desciption.
        timer.pause();
        var imgs = [card.getImage()];
        if (card.hasTwoImages) {
          imgs.push(mate.getImage());
        }
        popup.show(desc, imgs, cardStyles ? cardStyles.back : undefined, function (refocus) {
          if (isFinished) {
            // Game done
            card.makeUntabbable();
            finished();
          }
          else {
            // Popup is closed, continue.
            timer.play();

            if (refocus) {
              card.setFocus();
            }
          }
        });
      }
      else if (isFinished) {
        // Game done
        card.makeUntabbable();
        finished();
      }
    };

    /**
     * Game has finished!
     * @private
     */
    var finished = function () {
      timer.stop();
      $taskComplete.show();
      $feedback.addClass('h5p-show'); // Announce
      $bottom.focus();

      // Create and trigger xAPI event 'completed'
      var completedEvent = self.createXAPIEventTemplate('completed');
      completedEvent.setScoredResult(1, 1, self, true, true);
      completedEvent.data.statement.result.duration = 'PT' + (Math.round(timer.getTime() / 10) / 100) + 'S';
      self.trigger(completedEvent);

      if (parameters.behaviour && parameters.behaviour.allowRetry) {
        // Create retry button
        var retryButton = createButton('reset', parameters.l10n.tryAgain || 'Reset', function () {
          // Trigger handler (action)

          retryButton.classList.add('h5p-memory-transout');
          setTimeout(function () {
            // Remove button on nextTick to get transition effect
            $wrapper[0].removeChild(retryButton);
          }, 300);

          resetGame();
        });
        retryButton.classList.add('h5p-memory-transin');
        setTimeout(function () {
          // Remove class on nextTick to get transition effectupd
          retryButton.classList.remove('h5p-memory-transin');
        }, 0);

        // Same size as cards
        retryButton.style.fontSize = (parseFloat($wrapper.children('ul')[0].style.fontSize) * 0.75) + 'px';

        $wrapper[0].appendChild(retryButton); // Add to DOM
      }
    };

    /**
     * Shuffle the cards and restart the game!
     * @private
     */
    var resetGame = function () {

      // Reset cards
      removed = 0;

      // Remove feedback
      $feedback[0].classList.remove('h5p-show');
      $taskComplete.hide();

      // Reset timer and counter
      timer.reset();
      counter.reset();

      // Randomize cards
      H5P.shuffleArray(cards);

      setTimeout(function () {
        // Re-append to DOM after flipping back
        for (var i = 0; i < cards.length; i++) {
          cards[i].reAppend();
        }
        for (var j = 0; j < cards.length; j++) {
          cards[j].reset();
        }

        // Scale new layout
        $wrapper.children('ul').children('.h5p-row-break').removeClass('h5p-row-break');
        self.trigger('resize');
        cards[0].setFocus();
      }, 600);
    };

    /**
     * Game has finished!
     * @private
     */
    var createButton = function (name, label, action) {
      var buttonElement = document.createElement('div');
      buttonElement.classList.add('h5p-memory-' + name);
      buttonElement.innerHTML = label;
      buttonElement.setAttribute('role', 'button');
      buttonElement.tabIndex = 0;
      buttonElement.addEventListener('click', function () {
        action.apply(buttonElement);
      }, false);
      buttonElement.addEventListener('keypress', function (event) {
        if (event.which === 13 || event.which === 32) { // Enter or Space key
          event.preventDefault();
          action.apply(buttonElement);
        }
      }, false);
      return buttonElement;
    };

    /**
     * Adds card to card list and set up a flip listener.
     *
     * @private
     * @param {H5P.MemoryGame.Card} card
     * @param {H5P.MemoryGame.Card} mate
     */
    var addCard = function (card, mate) {
      card.on('flip', function () {
        if (audioCard) {
          audioCard.stopAudio();
        }

        // Always return focus to the card last flipped
        for (var i = 0; i < cards.length; i++) {
          cards[i].makeUntabbable();
        }
        card.makeTabbable();

        popup.close();
        self.triggerXAPI('interacted');
        // Keep track of time spent
        timer.play();

        // Keep track of the number of flipped cards
        numFlipped++;

        // Announce the card unless it's the last one and it's correct
        var isMatched = (flipped === mate);
        var isLast = ((removed + 2) === cards.length);
        card.updateLabel(isMatched, !(isMatched && isLast));

        if (flipped !== undefined) {
          var matie = flipped;
          // Reset the flipped card.
          flipped = undefined;

          setTimeout(function () {
            check(card, matie, mate);
          }, 800);
        }
        else {
          if (flipBacks.length > 1) {
            // Turn back any flipped cards
            processFlipBacks();
          }

          // Keep track of the flipped card.
          flipped = card;
        }

        // Count number of cards turned
        counter.increment();
      });
      card.on('audioplay', function () {
        if (audioCard) {
          audioCard.stopAudio();
        }
        audioCard = card;
      });
      card.on('audiostop', function () {
        audioCard = undefined;
      });

      /**
       * Create event handler for moving focus to the next or the previous
       * card on the table.
       *
       * @private
       * @param {number} direction +1/-1
       * @return {function}
       */
      var createCardChangeFocusHandler = function (direction) {
        return function () {
          // Locate next card
          for (var i = 0; i < cards.length; i++) {
            if (cards[i] === card) {
              // Found current card

              var nextCard, fails = 0;
              do {
                fails++;
                nextCard = cards[i + (direction * fails)];
                if (!nextCard) {
                  return; // No more cards
                }
              }
              while (nextCard.isRemoved());

              card.makeUntabbable();
              nextCard.setFocus();

              return;
            }
          }
        };
      };

      // Register handlers for moving focus to next and previous card
      card.on('next', createCardChangeFocusHandler(1));
      card.on('prev', createCardChangeFocusHandler(-1));

      /**
       * Create event handler for moving focus to the first or the last card
       * on the table.
       *
       * @private
       * @param {number} direction +1/-1
       * @return {function}
       */
      var createEndCardFocusHandler = function (direction) {
        return function () {
          var focusSet = false;
          for (var i = 0; i < cards.length; i++) {
            var j = (direction === -1 ? cards.length - (i + 1) : i);
            if (!focusSet && !cards[j].isRemoved()) {
              cards[j].setFocus();
              focusSet = true;
            }
            else if (cards[j] === card) {
              card.makeUntabbable();
            }
          }
        };
      };

      // Register handlers for moving focus to first and last card
      card.on('first', createEndCardFocusHandler(1));
      card.on('last', createEndCardFocusHandler(-1));

      cards.push(card);
    };

    /**
     * Will flip back two and two cards
     */
    var processFlipBacks = function () {
      flipBacks[0].flipBack();
      flipBacks[1].flipBack();
      flipBacks.splice(0, 2);
      numFlipped -= 2;
    };

    /**
     * @private
     */
    var getCardsToUse = function () {
      var numCardsToUse = (parameters.behaviour && parameters.behaviour.numCardsToUse ? parseInt(parameters.behaviour.numCardsToUse) : 0);
      if (numCardsToUse <= 2 || numCardsToUse >= parameters.cards.length) {
        // Use all cards
        return parameters.cards;
      }

      // Pick random cards from pool
      var cardsToUse = [];
      var pickedCardsMap = {};

      var numPicket = 0;
      while (numPicket < numCardsToUse) {
        var pickIndex = Math.floor(Math.random() * parameters.cards.length);
        if (pickedCardsMap[pickIndex]) {
          continue; // Already picked, try again!
        }

        cardsToUse.push(parameters.cards[pickIndex]);
        pickedCardsMap[pickIndex] = true;
        numPicket++;
      }

      return cardsToUse;
    };

    var cardStyles, invertShades;
    if (parameters.lookNFeel) {
      // If the contrast between the chosen color and white is too low we invert the shades to create good contrast
      invertShades = (parameters.lookNFeel.themeColor &&
                      getContrast(parameters.lookNFeel.themeColor) < 1.7 ? -1 : 1);
      var backImage = (parameters.lookNFeel.cardBack ? H5P.getPath(parameters.lookNFeel.cardBack.path, id) : null);
      cardStyles = MemoryGame.Card.determineStyles(parameters.lookNFeel.themeColor, invertShades, backImage);
    }

    // Initialize cards.
    var cardsToUse = getCardsToUse();
    for (var i = 0; i < cardsToUse.length; i++) {
      var cardParams = cardsToUse[i];
      if (MemoryGame.Card.isValid(cardParams)) {
        // Create first card
        var cardTwo, cardOne = new MemoryGame.Card(cardParams.image, id, cardParams.imageAlt, parameters.l10n, cardParams.description, cardStyles, cardParams.audio);

        if (MemoryGame.Card.hasTwoImages(cardParams)) {
          // Use matching image for card two
          cardTwo = new MemoryGame.Card(cardParams.match, id, cardParams.matchAlt, parameters.l10n, cardParams.description, cardStyles, cardParams.matchAudio);
          cardOne.hasTwoImages = cardTwo.hasTwoImages = true;
        }
        else {
          // Add two cards with the same image
          cardTwo = new MemoryGame.Card(cardParams.image, id, cardParams.imageAlt, parameters.l10n, cardParams.description, cardStyles, cardParams.audio);
        }

        // Add cards to card list for shuffeling
        addCard(cardOne, cardTwo);
        addCard(cardTwo, cardOne);
      }
    }
    H5P.shuffleArray(cards);

    /**
     * Attach this game's html to the given container.
     *
     * @param {H5P.jQuery} $container
     */
    self.attach = function ($container) {
      const that = this;

      this.$container = $container;

      this.triggerXAPI('attempted');
      // TODO: Only create on first attach!
      $wrapper = $container.addClass('h5p-memory-game').html('');
      if (invertShades === -1) {
        $container.addClass('h5p-invert-shades');
      }

      // Add cards to list
      var $list = $('<ul/>', {
        role: 'application',
        'aria-labelledby': 'h5p-intro-' + numInstances
      });
      for (var i = 0; i < cards.length; i++) {
        cards[i].appendTo($list);
      }

      if ($list.children().length) {
        // Determine enforced number of columns
        const ratio = parameters.behaviour.ratio;
        if (ratio.rows || ratio.columns) {
          if (ratio.rows && !ratio.columns) {
            this.forceCols = Math.ceil($list.children().length / Math.min(ratio.rows, $list.children().length));
          }
          else if (!ratio.rows && ratio.columns) {
            this.forceCols = Math.min(ratio.columns, $list.children().length);
          }
          else if ($list.children().length / ratio.rows === ratio.columns) {
            this.forceCols = ratio.columns;
          }
        }

        cards[0].makeTabbable();

        $('<div/>', {
          id: 'h5p-intro-' + numInstances,
          'class': 'h5p-memory-hidden-read',
          html: parameters.l10n.label,
          appendTo: $container
        });
        $list.appendTo($container);

        $bottom = $('<div/>', {
          'class': 'h5p-programatically-focusable',
          tabindex: '-1',
          appendTo: $container
        });
        $taskComplete = $('<div/>', {
          'class': 'h5p-memory-complete h5p-memory-hidden-read',
          html: parameters.l10n.done,
          appendTo: $bottom
        });

        $feedback = $('<div class="h5p-feedback">' + parameters.l10n.feedback + '</div>').appendTo($bottom);

        // Add status bar
        var $status = $('<dl class="h5p-status">' +
                        '<dt>' + parameters.l10n.timeSpent + ':</dt>' +
                        '<dd class="h5p-time-spent"><time role="timer" datetime="PT0M0S">0:00</time><span class="h5p-memory-hidden-read">.</span></dd>' +
                        '<dt>' + parameters.l10n.cardTurns + ':</dt>' +
                        '<dd class="h5p-card-turns">0<span class="h5p-memory-hidden-read">.</span></dd>' +
                        '</dl>').appendTo($bottom);

        timer = new MemoryGame.Timer($status.find('time')[0]);
        counter = new MemoryGame.Counter($status.find('.h5p-card-turns'));
        popup = new MemoryGame.Popup($container, parameters.l10n);

        $container.click(function () {
          popup.close();
        });
      }
      else {
        $('<div/>')
          .text('No card was added to the memory game!')
          .appendTo($list);

        $list.appendTo($container);
      }

      //
      this.trigger('resize');
      setTimeout(function () {
        that.trigger('resize');
      }, 0);
    };

    /**
     * Will try to scale the game so that it fits within its container.
     * Puts the cards into a grid layout to make it as square as possible –
     * which improves the playability on multiple devices.
     *
     * Should be refactored once eventually all specs are known and stable.
     *
     * @private
     */
    var scaleGameSize = function () {
      // Check how much space we have available
      var $list = this.$container.children('ul');
      $list.css('max-width', '');

      const maxWidth = parseFloat(window.getComputedStyle($list[0]).width);

      // Get the card holders
      var $elements = $list.children();
      if ($elements.length < 4) {
        return; // No need to proceed
      }

      // Check how much space we have available
      const displayLimits = this.computeDisplayLimitsKLL();

      const enforceGrid = parameters.behaviour && (parameters.behaviour.useGrid || parameters.behaviour.ratio.rows || parameters.behaviour.ratio.columns) && cardsToUse.length;

      var newNumCols;
      if (enforceGrid) {
        // Determine the optimal number of columns
        newNumCols = this.forceCols || Math.ceil(Math.sqrt($elements.length));

        // Keep layout if enforced even though cards may become too small
        if (!parameters.behaviour.keepLayout) {
          // Do not exceed the max number of columns
          var maxCols = Math.floor(maxWidth / CARD_MIN_SIZE);
          if (newNumCols > maxCols) {
            newNumCols = maxCols;
          }
        }
      }
      else {
        newNumCols = Math.floor(displayLimits.width / CARD_MIN_SIZE);
      }

      if (numCols !== newNumCols) {
        // We need to change layout
        numCols = newNumCols;

        // Calculate new column size in percentage and round it down (we don't
        // want things sticking out…)
        var colSize = Math.floor((100 / numCols) * 10000) / 10000;
        $elements.css('width', colSize + '%').each(function (i, e) {
          $(e).removeClass('h5p-row-break');
          if (i === numCols) {
            $(e).addClass('h5p-row-break');
          }
        });
      }

      const numRows = Math.ceil($elements.length / numCols);

      let maxCardsHeight = Infinity;

      if (displayLimits && displayLimits.height && this.wasInitialized) {
        if (enforceGrid) {
          const cardOuter = $elements[0];
          var cardInner = cardOuter.querySelector('.h5p-memory-card');
          const fontScale = (cardInner.offsetHeight + 0.5 * (cardOuter.offsetHeight - cardInner.offsetHeight)) / cardOuter.offsetHeight;
          const footerHeight = this.$container.find('.h5p-status').outerHeight(true);
          maxCardsHeight = (displayLimits.height - footerHeight) * fontScale; // Account for shadows

          $list.css('max-width', $(cardInner).outerWidth(true) * numCols + 'px');
        }
      }
      this.wasInitialized = true;

      // Calculate how much one percentage of the standard/default size is
      var onePercentage = ((CARD_STD_SIZE * numCols) + STD_FONT_SIZE) / 100;
      var paddingSize = (STD_FONT_SIZE * LIST_PADDING) / onePercentage;
      var cardSize = (100 - paddingSize) / Math.max(numCols, numRows);
      var fontSize = (((Math.min(maxCardsHeight, maxWidth) * (cardSize / 100)) * STD_FONT_SIZE) / CARD_STD_SIZE);

      // We use font size to evenly scale all parts of the cards.
      $list.css('font-size', fontSize + 'px');
      popup.setSize(fontSize);
      // due to rounding errors in browsers the margins may vary a bit…
    };

    self.on('resize', scaleGameSize);
  }

  // Extends the event dispatcher
  MemoryGame.prototype = Object.create(EventDispatcher.prototype);
  MemoryGame.prototype.constructor = MemoryGame;

  /**
   * Compute display limits.
   * @return {object|null} Height and width in px or null if cannot be determined.
   */
  MemoryGame.prototype.computeDisplayLimits = function () {
    let topWindow = this.getTopWindow();

    // iOS doesn't change screen dimensions on rotation
    let screenSize = (this.isIOS() && window.orientation === 90) ?
      { height: screen.width, width: screen.height } :
      { height: screen.height, width: screen.width };

    topWindow = topWindow || {
      innerHeight: screenSize.height,
      innerWidth: screenSize.width
    };

    // Smallest value of viewport and container wins
    return {
      height: Math.min(topWindow.innerHeight, screenSize.height),
      width: Math.min(topWindow.innerWidth, this.$container.get(0).offsetWidth)
    };
  };

  /**
   * Compute display limits for KidsLoop Live.
   * @return {object|null} Height and width in px or null if cannot be determined.
   */
  MemoryGame.prototype.computeDisplayLimitsKLL = function () {
    const displayLimits = this.computeDisplayLimits();

    // This only works because KLL enforces height on H5P's iframe
    displayLimits.height = Math.min(displayLimits.height, document.body.offsetHeight);
    return displayLimits;
  };

  /**
   * Detect whether user is running iOS.
   * @return {boolean} True, if user is running iOS.
   */
  MemoryGame.prototype.isIOS = function () {
    return (
      ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) ||
      (navigator.userAgent.includes('Mac') && 'ontouchend' in document)
    );
  };

  /**
	 * Get top DOM Window object.
	 * @param {Window} [startWindow=window] Window to start looking from.
	 * @return {Window|null} Top window.
	 */
  MemoryGame.prototype.getTopWindow = function (startWindow) {
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

    return this.getTopWindow(startWindow.parent);
  };

  /**
   * Determine color contrast level compared to white(#fff)
   *
   * @private
   * @param {string} color hex code
   * @return {number} From 1 to Infinity.
   */
  var getContrast = function (color) {
    return 255 / ((parseInt(color.substr(1, 2), 16) * 299 +
                   parseInt(color.substr(3, 2), 16) * 587 +
                   parseInt(color.substr(5, 2), 16) * 144) / 1000);
  };

  return MemoryGame;
})(H5P.EventDispatcher, H5P.jQuery);
