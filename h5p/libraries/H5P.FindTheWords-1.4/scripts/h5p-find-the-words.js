H5P.FindTheWords = (function ($, UI) {
  const ELEMENT_MIN_SIZE = 32; // PX
  const ELEMENT_MAX_SIZE = 64; // PX
  const MARGIN = 8; //PX
  const VOCABULARY_INLINE_WIDTH = 250;// PX
  const CHAR_SPACING_FACTOR = 0.66;

  /**
   * FindTheWords.
   * @class H5P.FindTheWords
   * @extends H5P.EventDispatcher
   * @param {Object} options
   * @param {number} id
   * @param {Object} extras
   */
  function FindTheWords(options, id, extras) {

    /** @alias H5P.FindTheWords# */
    this.id = id;
    this.extras = extras;
    this.numFound = 0;
    this.isAttempted = false;
    this.isGameStarted = false;
    this.wordsFound = [];

    // Only take the unique words
    const vocabulary = options.wordList
      .split(',')
      .map(function (word) {
        return word.trim().replace(/ +/g, '');
      })
      .filter(function (word, pos, self) {
        return self.indexOf(word) === pos && word.length > 0;
      });

    this.options = $.extend(true, {
      vocabulary: vocabulary,
      height: 5,
      width: 5,
      fillBlanks: true,
      maxAttempts: 5,
      l10n: {
        wordListHeader: 'Find the words'
      }
    }, options);

    H5P.EventDispatcher.call(this);

    this.previousState = (extras && extras.previousState) ?
      extras.previousState :
      {};

    this.setViewState(this.previousState && this.previousState.viewState || 'task');

    this.gridParams = {
      height: this.options.height,
      width: this.options.width,
      orientations: filterOrientations(options.behaviour.orientations),
      fillBlanks: this.options.fillBlanks,
      maxAttempts: this.options.maxAttempts,
      preferOverlap: options.behaviour.preferOverlap,
      vocabulary: this.options.vocabulary,
      gridActive: true,
      fillPool: this.options.behaviour.fillPool,
      charSpacingFactor: CHAR_SPACING_FACTOR
    };

    if (this.previousState.grid) {
      this.gridParams.previousGrid = this.previousState.grid;
    }

    this.grid = new FindTheWords.WordGrid(this.gridParams);

    this.vocabulary = new FindTheWords.Vocabulary(
      this.options.vocabulary,
      this.options.behaviour.showVocabulary,
      this.options.l10n.wordListHeader,
      (this.previousState.wordsFound || []).map(function (word) {
        return word.word;
      })
    );
    this.registerDOMElements();

    // responsive functionality
    this.on('resize', function () {
      const currentSize = this.elementSize;
      const currentVocMod = this.isVocModeBlock;
      this.calculateElementSize();
      this.setVocabularyMode();

      if (this.elementSize !== currentSize) {
        this.$puzzleContainer.empty();
        this.grid.appendTo(this.$puzzleContainer, this.elementSize );
        this.grid.drawGrid();

        // If there are already marked elements on the grid mark them
        if (!this.grid.options.gridActive) {
          this.grid.enableGrid();
          this.grid.mark(this.vocabulary.getFound());
          this.grid.disableGrid();
          this.grid.mark(this.vocabulary.getSolved());
        }
        else {
          this.grid.mark(this.vocabulary.getFound());
        }

        this.registerGridEvents();
      }

      // vocabulary adjustments on resize
      if (this.options.behaviour.showVocabulary) {
        if (currentVocMod !== this.isVocModeBlock ) {
          this.vocabulary.setMode(this.isVocModeBlock);
          this.$gameContainer.toggleClass('column-view', this.isVocModeBlock);
        }
      }
    });

    this.loopResize(4);
  }

  FindTheWords.prototype = Object.create(H5P.EventDispatcher.prototype);
  FindTheWords.prototype.constructor = FindTheWords;

  // private and all prototype function goes there

  /**
   * filterOrientations - Mapping of directions from semantics to those used by algorithm.
   * @param {Object} directions
   * @return {Object[]}
   */
  const filterOrientations = function (directions) {
    return Object.keys(directions).filter(function (key) {
      return directions[key];
    });
  };

  /**
   * Resize H5P content repeatedly.
   * @param {number} [repeat=0] Number of times to repeat interval.
   * @param {number} [timeout=250] Timeout between resizes.
   */
  FindTheWords.prototype.loopResize = function (repeat = 0, timeout = 250) {
    const that = this;

    if (typeof repeat !== 'number' || repeat <= 0) {
      return;
    }

    if (typeof timeout !== 'number' || timeout < 100) {
      timeout = 100;
    }

    clearTimeout(this.loopResizeTimeout);
    this.loopResizeTimeout = setTimeout(function () {
      that.trigger('resize');
      that.loopResize(repeat - 1, timeout);
    }, timeout);
  };

  /**
   * registerDOMElements.
   */
  FindTheWords.prototype.registerDOMElements = function () {
    const that = this;

    this.$playArea = $('<div />', {
      class: 'h5p-play-area'
    });

    this.$taskDescription = $('<div />', {
      class: 'h5p-task-description',
      html: this.options.taskDescription,
      tabIndex: 0,
    });

    // timer part
    this.$timer = $('<div/>', {
      class: 'time-status',
      tabindex: 0,
      html: '<span role="term" ><em class="fa fa-clock-o" ></em>' +
        this.options.l10n.timeSpent + '</span >:' +
        '<span role="definition"  class="h5p-time-spent" >0:00</span>'
    });

    this.timer = new FindTheWords.Timer(
      this.$timer.find('.h5p-time-spent'),
      this.previousState.time,
      {
        store: function () {
          that.trigger('kllStoreSessionState', undefined, { bubbles: true, external: true });
        }
      }
    );

    // counter part
    const counterText = that.options.l10n.found
      .replace('@found', '<span class="h5p-counter">0</span>')
      .replace('@totalWords', '<span><strong>' + this.vocabulary.words.length + '</strong></span>');

    this.$counter = $('<div/>', {
      class: 'counter-status',
      tabindex: 0,
      html: '<div role="term"><span role="definition">' + counterText + '</span></div>'
    });
    this.counter = new FindTheWords.Counter(this.$counter.find('.h5p-counter'));

    // feedback plus progressBar
    this.$feedback = $('<div/>', {
      class: 'feedback-element',
      tabindex: '0'
    });
    this.$progressBar = UI.createScoreBar(this.vocabulary.words.length, 'scoreBarLabel');

    // buttons section
    that.$submitButton = that.createButton('submit', 'check', that.options.l10n.check, that.gameSubmitted);
    if (this.options.behaviour.enableShowSolution) {
      this.$showSolutionButton = this.createButton('solution', 'eye', this.options.l10n.showSolution, that.showSolutions);
    }
    if (this.options.behaviour.enableRetry) {
      this.$retryButton = this.createButton('retry', 'undo', this.options.l10n.tryAgain, that.resetTask);
    }

    // container elements
    this.$gameContainer = $('<div class="game-container"/>');
    this.$puzzleContainer = $('<div class="puzzle-container puzzle-inline" tabIndex="0" role="grid" />');
    this.$vocabularyContainer = $('<div class="vocabulary-container" tabIndex="0" />');
    this.$footerContainer = $('<div class="footer-container" />');
    this.$statusContainer = $('<div />', {
      class: 'game-status',
      'aria-label': 'game-status',
      role: 'group',
      tabindex: '0'
    });
    this.$feedbackContainer = $('<div class="feedback-container"/>');
    this.$buttonContainer = $('<div class="button-container" />');
  };

  /**
   * createButton - creating all buttons used in this game.
   * @param {string} name Buttonname.
   * @param {string} icon Fa icon name.
   * @param {string} param Button text parameter.
   * @param {function} callback Callback function.
   * @return {H5P.JoubelUI.Button} Joubel ui button object.
   */
  FindTheWords.prototype.createButton = function (name, icon, param, callback) {
    const cfunction = callback.bind(this);
    return UI.createButton({
      title: name,
      click: cfunction,
      html: '<span><i class="fa fa-' + icon + '" aria-hidden="true"></i></span>' + param
    });
  };

  /**
   * calculateElementSize - calculate the grid element size according to the container width.
   */
  FindTheWords.prototype.calculateElementSize = function () {
    const containerWidth = this.$container.width();
    const gridCol = this.grid.wordGrid[0].length;
    const gridMaxWidth = gridCol * ELEMENT_MAX_SIZE + 2 * MARGIN;
    const gridElementStdSize = (containerWidth - 2 * MARGIN) / gridCol;

    if (gridMaxWidth < containerWidth) {
      this.elementSize = ELEMENT_MAX_SIZE;
    }
    else if (gridElementStdSize > ELEMENT_MIN_SIZE) {
      this.elementSize = gridElementStdSize;
    }
    else {
      this.elementSize = ELEMENT_MIN_SIZE;
    }
  };

  /**
   * setVocabularyMode - set vocabulary mode (either inline or block).
   */
  FindTheWords.prototype.setVocabularyMode = function () {
    this.isVocModeBlock = this.$container.width() - this.$puzzleContainer.width() <= VOCABULARY_INLINE_WIDTH;
  };

  /**
   * gameSubmitted - callback function for check button.
   * @param {object} [params] Parameters.
   * @param {boolean} [params.skipXAPI] If true, don't emit xAPI.
   */
  FindTheWords.prototype.gameSubmitted = function (params) {
    const that = this;

    this.setViewState('results');

    params = params || {};

    const totalScore = this.vocabulary.words.length;
    const scoreText = this.options.l10n.score
      .replace('@score', this.numFound)
      .replace('@total', totalScore);

    this.timer.stop();
    this.$progressBar.setScore(this.numFound);
    this.$feedback.html(scoreText);
    this.$submitButton = this.$submitButton.detach();
    this.grid.disableGrid();

    if (totalScore !== this.numFound) {
      if (this.options.behaviour.enableShowSolution) {
        this.$showSolutionButton.appendTo(this.$buttonContainer);
      }
    }

    if (this.options.behaviour.enableRetry) {
      this.$retryButton.appendTo(this.$buttonContainer);
    }

    this.$feedbackContainer.addClass('feedback-show'); //show feedbackMessage
    this.$feedback.focus();

    // Emit screenshot
    setTimeout(function () {
      if (H5P && H5P.KLScreenshot) {
        H5P.KLScreenshot.takeScreenshot(
          that,
          that.$container.get(0)
        );
      }
    }, 1000); // Allow results to display

    if (!params.skipXAPI) {
      const xAPIEvent = this.createXAPIEventTemplate('answered');
      this.addQuestionToXAPI(xAPIEvent);
      this.addResponseToXAPI(xAPIEvent);
      this.trigger(xAPIEvent);
    }

    this.trigger('resize');
  };

  /**
   * showSolutions - call back function for show solution button.
   */
  FindTheWords.prototype.showSolutions = function () {
    this.setViewState('solutions');

    this.grid.disableGrid();
    this.grid.mark(this.vocabulary.getNotFound());
    this.vocabulary.solveWords();
    this.$showSolutionButton.detach();
    this.$vocabularyContainer.focus();
    this.trigger('resize');
  };

  /**
   * resetTask - resetting the game.
   */
  FindTheWords.prototype.resetTask = function () {
    this.setViewState('task');

    this.isGameStarted = false;
    this.numFound = 0;
    this.timer.reset();
    this.counter.reset();
    this.$progressBar.reset();
    this.$puzzleContainer.empty();
    this.vocabulary.reset();
    this.wordsFound = [];

    if (this.$showSolutionButton) {
      this.$showSolutionButton.detach();
    }

    this.$retryButton.detach();
    this.$feedbackContainer.removeClass('feedback-show');

    this.grid = new FindTheWords.WordGrid(this.gridParams);
    this.grid.appendTo(this.$puzzleContainer, this.elementSize);
    this.grid.drawGrid();
    this.grid.enableGrid();
    this.registerGridEvents();

    this.$submitButton.appendTo(this.$buttonContainer);
    this.$puzzleContainer.focus();

    this.trigger('kllStoreSessionState', undefined, { bubbles: true, external: true });

    this.trigger('resize');
  };

  /**
   * Check whether user is able to play the game.
   * @return {boolean}
   */
  FindTheWords.prototype.getAnswerGiven = function () {
    return this.isAttempted;
  };

  /**
   *  getScore - Return the score obtained.
   * @return {number}
   */
  FindTheWords.prototype.getScore = function () {
    return this.numFound;
  };

  /**
   * Turn the maximum possible score that can be obtained.
   * @return {number}
   */
  FindTheWords.prototype.getMaxScore = function () {
    return this.vocabulary.words.length;
  };

  /**
   * getXAPIData - Get xAPI data.
   * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
   * @return {Object} xApi data statement
   */
  FindTheWords.prototype.getXAPIData = function () {
    const xAPIEvent = this.createXAPIEventTemplate('answered');
    this.addQuestionToXAPI(xAPIEvent);
    this.addResponseToXAPI(xAPIEvent);
    return {
      statement: xAPIEvent.data.statement
    };
  };

  /**
   * addQuestionToXAPI - Add the question to the definition part of an xAPIEvent.
   * @param {H5P.XAPIEvent} xAPIEvent
   */
  FindTheWords.prototype.addQuestionToXAPI = function (xAPIEvent) {
    const definition = xAPIEvent.getVerifiedStatementValue(
      ['object', 'definition']
    );
    definition.description = {
      'en-US': this.options.taskDescription
    };
    definition.type =
      'http://adlnet.gov/expapi/activities/cmi.interaction';
    definition.interactionType = 'choice';
    definition.correctResponsesPattern = [];
    definition.correctResponsesPattern[0] = this.vocabulary.words.join([',']);
  };

  /**
   * Add the response part to an xAPI event.
   * @param {H5P.XAPIEvent} xAPIEvent
   */
  FindTheWords.prototype.addResponseToXAPI = function (xAPIEvent) {
    const maxScore = this.getMaxScore();
    const score = this.getScore();
    const success = (score === maxScore);
    const response = this.vocabulary.getFound().join('[,]');

    xAPIEvent.setScoredResult(score, maxScore, this, true, success);
    xAPIEvent.data.statement.result.response = response;
  };

  /**
   * registerGridEvents.
   */
  FindTheWords.prototype.registerGridEvents = function () {
    const that = this;

    this.grid.on('drawStart', function () {
      if (!that.isGameStarted) {
        that.timer.play();
        that.triggerXAPI('interacted');
        that.isGameStarted = true;
      }
    });

    this.grid.on('drawEnd', function (event) {
      that.isAttempted = true;
      if (that.vocabulary.checkWord(event.data['markedWord'])) {

        const wordObject = event.data['wordObject'];
        wordObject.word = event.data['markedWord'];

        that.handleMarkWord(wordObject);
        this.trigger('kllStoreSessionState', undefined, { bubbles: true, external: true });

        if (that.numFound === that.vocabulary.words.length) {
          that.gameSubmitted();
        }
      }
    });
  };

  /**
   * Handle mark word.
   * @param {object} wordObject Word params.
   */
  FindTheWords.prototype.handleMarkWord = function (wordObject) {
    this.numFound++;
    this.counter.increment();
    this.grid.markWord(wordObject);
    this.wordsFound.push(wordObject);
  };

  /**
   * Get current state.
   * @return {object} Current state.
   */
  FindTheWords.prototype.getCurrentState = function () {
    return {
      grid: this.grid.getWordGrid(),
      wordsFound: this.wordsFound,
      time: this.timer.getTime(),
      viewState: this.viewState
    };
  };

  /**
   * Set view state.
   * @param {string} state View state.
   */
  FindTheWords.prototype.setViewState = function (state) {
    if (FindTheWords.VIEW_STATES.indexOf(state) === -1) {
      return;
    }

    // Kidsloop Live session storage will listen
    this.trigger('kllStoreSessionState', undefined, { bubbles: true, external: true });

    this.viewState = state;
  };

  /**
   * attach - main attach function.
   * @param {H5P.jQuery} $container Description.
   */
  FindTheWords.prototype.attach = function ($container) {
    const that = this;

    this.$container = $container.addClass('h5p-find-the-words');
    this.triggerXAPI('attempted');

    if (this.grid) {
      this.calculateElementSize();
      this.grid.appendTo(this.$puzzleContainer, this.elementSize );
      this.$puzzleContainer.appendTo(this.$gameContainer);
      if (this.options.behaviour.showVocabulary) {
        this.vocabulary.appendTo(this.$vocabularyContainer, this.isVocModeBlock);
        this.$vocabularyContainer.appendTo(this.$gameContainer);
      }
    }

    this.$timer.appendTo(this.$statusContainer);
    this.$counter.appendTo(this.$statusContainer);

    this.$feedback.appendTo(this.$feedbackContainer);
    this.$progressBar.appendTo(this.$feedbackContainer);

    this.$submitButton.appendTo(this.$buttonContainer);

    //append status and feedback and button containers to footer
    this.$statusContainer.appendTo(this.$footerContainer);
    this.$feedbackContainer.appendTo(this.$footerContainer);
    this.$buttonContainer.appendTo(this.$footerContainer);

    //append description , cards and footer to main container.
    this.$taskDescription.appendTo(this.$playArea);
    this.$gameContainer.appendTo(this.$playArea);
    this.$footerContainer.appendTo(this.$playArea);
    this.$playArea.appendTo(this.$container);

    this.grid.drawGrid();
    this.registerGridEvents();

    that.trigger('resize');

    if (this.previousState.wordsFound) {
      this.previousState.wordsFound.forEach(function (word) {
        that.handleMarkWord(word);
      });

      if (this.previousState.viewState === 'results') {
        this.gameSubmitted({ skipXAPI: true });
      }
      else if (this.previousState.viewState === 'solutions') {
        this.gameSubmitted({ skipXAPI: true });
        this.showSolutions();
      }
    }
  };

  /** @constant {string[]} view state names*/
  FindTheWords.VIEW_STATES = ['task', 'results', 'solutions'];

  return FindTheWords;

}) (H5P.jQuery, H5P.JoubelUI);
