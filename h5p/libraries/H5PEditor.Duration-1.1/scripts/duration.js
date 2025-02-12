var H5PEditor = H5PEditor || {};

/**
 * Duration widget module
 *
 * @param {jQuery} $
 */
H5PEditor.widgets.duration = H5PEditor.Duration = (function ($) {

  /**
   * Creates a time picker.
   *
   * @param {mixed} parent
   * @param {object} field
   * @param {mixed} params
   * @param {function} setValue
   * @returns {C}
   */
  function C(parent, field, params, setValue) {
    this.parent = parent;
    this.field = field;
    this.params = params;
    this.setValue = setValue;
  }

  /**
   * Append the field to the wrapper.
   *
   * @param {jQuery} $wrapper
   * @returns {undefined}
   */
  C.prototype.appendTo = function ($wrapper) {
    var that = this;

    this.$item = $(this.createHtml()).appendTo($wrapper);
    this.$inputs = this.$item.find('input');
    this.$errors = this.$item.children('.h5p-errors');

    this.$inputs.change(function () {
      // Validate
      var value = that.validate();

      if (value) {
        // Set param
        that.params = value;
        that.setValue(that.field, value);
      }
    }).click(function () {
      return false;
    });
  };

  /**
   * Creates HTML for the widget.
   */
  C.prototype.createHtml = function () {
    // Display float fraction value as FPS
    if (this.params.fps) {
      this.params.from = C.convertFloatToFPS(this.params.from, this.params.fps);
      this.params.to = C.convertFloatToFPS(this.params.to, this.params.fps);
    }

    const id = H5PEditor.getNextFieldId(this.field);
    const descriptionId = (this.field.description !== undefined ? H5PEditor.getDescriptionId(id) : undefined)
    var input = H5PEditor.createText(this.params !== undefined ? C.humanizeTime(this.params.from) : undefined, 15, 'From', id, descriptionId) + ' - ' + H5PEditor.createText(this.params !== undefined ? C.humanizeTime(this.params.to) : undefined, 15, 'To', undefined, descriptionId);

    // Add hint to number format
    if (this.params.fps) {
      input += ' (' + this.params.fps + ' ' + C.t('fps') + ')';
    }

    return H5PEditor.createFieldMarkup(this.field, input, id);
  };

  /**
   * Validate the current values.
   */
  C.prototype.validate = function () {
    var that = this;
    var duration = {};

    if (that.$errors.children().length) {
      // Field hasn't been fixed since last validate
      return false;
    }

    this.$inputs.each(function (i) {
      var $input = $(this);
      var value = H5P.trim($input.val());
      var field = that.field.fields[i];

      // Check that the input isn't blank
      if ((that.field.optional === undefined || !that.field.optional) && !value.length) {
        that.$errors.append(H5PEditor.createError(H5PEditor.t('core', 'requiredProperty', {':property': field.name})));
        return false;
      }

      // Split time format and check that we have between one and two colons.
      var values = value.split(':', 4);
      if (values.length !== 2 && values.length !== 3) {
        that.$errors.append(H5PEditor.createError(C.t('invalidTime', {':property': field.name})));
        return false;
      }

      // Validate seconds and add to value
      var allowedChars = new RegExp('^[0-9]+$');
      var j = values.length - 1;

      value = parseFloat(values[j]);
      if (!values[j].match(/^[0-9]{2}$|\.[0-9]{1,3}$/) || value >= 60 || value < 0) {
        that.$errors.append(H5PEditor.createError(C.t('invalidTime', {':property': field.name})));
        return false;
      }

      // Seconds fraction (interpreted as fps) must be smaller than video's fps
      if (that.params.fps && value !== Math.floor(values[j])) {
        const fpsValue = parseInt(value.toString().split('.')[1]);

        if (fpsValue >= that.params.fps) {
          that.$errors.append(H5PEditor.createError(C.t('invalidTime', {':property': field.name})));
          return false;
        }
      }

      // Keep fps and convert fps fractions to float seconds
      if (that.params.fps) {
        duration.fps = that.params.fps;
        value = C.convertFPSToFloat(values[j], that.params.fps);
      }

      // Validate minutes
      j = j - 1;
      var minutes = parseInt(values[j]);
      if (!values[j].match(allowedChars) || (values[j - 1] !== undefined && values[j].length !== 2) || (values[j - 1] === undefined && values[j].length !== (minutes + '').length) || minutes > 59) {
        that.$errors.append(H5PEditor.createError(C.t('invalidTime', {':property': field.name})));
        return false;
      }
      // Convert to seconds and add to value
      value += minutes * 60;

      // Validate hours
      j = j - 1;
      if (values[j] !== undefined) {
        var hours = parseInt(values[j]);
        if (!values[j].match(allowedChars) || values[j].length !== (hours + '').length || hours < 1) {
          that.$errors.append(H5PEditor.createError(C.t('invalidTime', {':property': field.name})));
          return false;
        }
        // Convert to seconds and add to value
        value += hours * 3600;
      }

      // Check that field doesn't exceed its min and max values.
      if (field.max !== undefined && value > field.max) {
        that.$errors.append(H5PEditor.createError(H5PEditor.t('core', 'exceedsMax', {':property': field.name, ':max': C.humanizeTime(field.max)})));
        return false;
      }
      else if (field.min !== undefined && value < field.min) {
        that.$errors.append(H5PEditor.createError(C.t('exceedsMin', {':property': field.name, ':min': C.humanizeTime(field.min)})));
        return false;
      }

      duration[field.name] = value;
      that.params[field.name] = value;
    });

    // Check that "To" time always is after "From" time.
    if (duration.from > duration.to) {
      this.$errors.append(H5PEditor.createError(C.t('fromBiggerThanTo')));
    }

    return H5PEditor.checkErrors(this.$errors, this.$inputs, duration);
  };

  /**
   * Remove this item.
   */
  C.prototype.remove = function () {
    this.$item.remove();
  };

  /**
   * Local translate function.
   *
   * @param {Atring} key
   * @param {Object} params
   * @returns {@exp;H5PEditor@call;t}
   */
  C.t = function (key, params) {
    return H5PEditor.t('H5PEditor.Duration', key, params);
  };

  /**
   * Convert seconds fraction to FPS for display.
   * @param {number} seconds Seconds.
   * @param {number} fpsVideo FPS used for the video.
   * @return {number} Seconds with pseudo fps.
   */
  C.convertFloatToFPS = function (seconds, fpsVideo) {
    let secondsString = seconds.toString();
    if (secondsString.indexOf('.') === -1) {
      return seconds;
    }

    const secondsFloor = parseInt(secondsString.split('.')[0]);

    const secondsFractionString = secondsString.split('.')[1];
    const secondsFraction = parseInt(secondsFractionString);

    const secondsFractionDivisor = Math.pow(10, secondsFractionString.length);
    const fps = parseFloat('0.' + Math.round(secondsFraction / secondsFractionDivisor * fpsVideo).toString());

    return secondsFloor + fps;
  }

  /**
   * Convert FPS fraction to float seconds for video seek.
   * @param {string} secondsString Seconds with fps to convert.
   * @param {number} fpsVideo FPS used for the video.
   * @return {number} Seconds with float fraction.
   */
  C.convertFPSToFloat = function (secondsString, fpsVideo) {
    if (secondsString.indexOf('.') === -1) {
      secondsString = secondsString + '.0';
    }

    const seconds = parseInt(secondsString.split('.')[0]);
    const fpsTarget = parseInt(secondsString.split('.')[1]);

    return seconds + fpsTarget / fpsVideo;
  }

  /**
   * Formats time in H:MM:SS.
   *
   * @param {float} seconds
   * @returns {string}
   */
  C.humanizeTime = function (seconds) {
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);

    minutes = minutes % 60;
    seconds = Math.floor((seconds % 60) * 1000) / 1000;

    var time = '';

    if (hours !== 0) {
      time += hours + ':';

      if (minutes < 10) {
        time += '0';
      }
    }

    time += minutes + ':';

    if (seconds < 10) {
      time += '0';
    }

    time += seconds;

    return time;
  };

  return C;
})(H5P.jQuery);
