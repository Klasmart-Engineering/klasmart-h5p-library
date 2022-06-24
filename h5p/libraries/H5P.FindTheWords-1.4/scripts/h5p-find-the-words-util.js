(function (FindTheWords) {

  FindTheWords.Util = {};

  /**
   * @constant {RegExp} Regular expression for matching ANSI escape codes.
   * @see {@link https://github.com/chalk/ansi-regex}
   */
  FindTheWords.Util.ANSI_REGEXP = new RegExp(
    [
      '[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)',
      '(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))'
    ].join('|'),
    'g'
  );

  FindTheWords.Util.charRegex = function () {
    // Unicode character classes
    const astralRange = '\\ud800-\\udfff';
    const comboMarksRange = '\\u0300-\\u036f';
    const comboHalfMarksRange = '\\ufe20-\\ufe2f';
    const comboSymbolsRange = '\\u20d0-\\u20ff';
    const comboMarksExtendedRange = '\\u1ab0-\\u1aff';
    const comboMarksSupplementRange = '\\u1dc0-\\u1dff';
    const comboRange = comboMarksRange + comboHalfMarksRange + comboSymbolsRange + comboMarksExtendedRange + comboMarksSupplementRange;
    const varRange = '\\ufe0e\\ufe0f';

    // Telugu characters
    const teluguVowels = '\\u0c05-\\u0c0c\\u0c0e-\\u0c10\\u0c12-\\u0c14\\u0c60-\\u0c61';
    const teluguVowelsDiacritic = '\\u0c3e-\\u0c44\\u0c46-\\u0c48\\u0c4a-\\u0c4c\\u0c62-\\u0c63';
    const teluguConsonants = '\\u0c15-\\u0c28\\u0c2a-\\u0c39';
    const teluguConsonantsRare = '\\u0c58-\\u0c5a';
    const teluguModifiers = '\\u0c01-\\u0c03\\u0c4d\\u0c55\\u0c56';
    const teluguNumerals = '\\u0c66-\\u0c6f\\u0c78-\\u0c7e';
    const teluguSingle = `[${teluguVowels}(?:${teluguConsonants}(?!\\u0c4d))${teluguNumerals}${teluguConsonantsRare}]`;
    const teluguDouble = `[${teluguConsonants}${teluguConsonantsRare}][${teluguVowelsDiacritic}]|[${teluguConsonants}${teluguConsonantsRare}][${teluguModifiers}`;
    const teluguTriple = `[${teluguConsonants}]\\u0c4d[${teluguConsonants}]`;
    const telugu = `(?:${teluguTriple}|${teluguDouble}|${teluguSingle})`;

    // Thai characters
    const thaiConsonants = '\\u0e01\\u0e02\\u0e04\\u0e06-\\u0e2e';
    const thaiConsonantsOldThai = '\\u0e03\\u0305';
    const thaiVowelsInLine = '\\u0e30\\u0e32\\u0e33\\u0e40-\\u0e44\\u0e47';
    const thaiToneMarks = '\\u0e48-\\u0e4b';
    const thaiVowelsCombined = '\\u0e31\\u0e34-\\u0e3a';
    const thaiNumerals = '\\u0e50-\\u0e59';
    const thaiMiscSymbols = '\\u0e2f\\u0e3f\\u0e45\\u0e46\\u0e4c-\\u0e4f\\u0e5a\\u0e5b';
    const thaiSingle = `[${thaiConsonants}${thaiConsonantsOldThai}${thaiVowelsInLine}${thaiNumerals}${thaiMiscSymbols}]`;
    const thaiDouble = `[${thaiConsonants}][${thaiVowelsCombined}]|[${thaiVowelsInLine}][${thaiToneMarks}]|[${thaiConsonants}][${thaiToneMarks}]`;
    const thaiTriple = `[${thaiConsonants}][${thaiVowelsCombined}][${thaiToneMarks}]|[${thaiConsonants}][${thaiToneMarks}][${thaiVowelsCombined}]`;
    const thai = `(?:${thaiTriple}|${thaiDouble}|${thaiSingle})`;

    // Unicode capture groups
    const astral = `[${astralRange}]`;
    const combo = `[${comboRange}]`;
    const fitz = '\\ud83c[\\udffb-\\udfff]';
    const modifier = `(?:${combo}|${fitz})`;
    const nonAstral = `[^${astralRange}]`;
    const regional = '(?:\\ud83c[\\udde6-\\uddff]){2}';
    const surrogatePair = '[\\ud800-\\udbff][\\udc00-\\udfff]';
    const zeroWidthJoiner = '\\u200d';
    const blackFlag = '(?:\\ud83c\\udff4\\udb40\\udc67\\udb40\\udc62\\udb40(?:\\udc65|\\udc73|\\udc77)\\udb40(?:\\udc6e|\\udc63|\\udc6c)\\udb40(?:\\udc67|\\udc74|\\udc73)\\udb40\\udc7f)';

    // Unicode regexes
    const optModifier = `${modifier}?`;
    const optVar = `[${varRange}]?`;
    const optJoin = `(?:${zeroWidthJoiner}(?:${[nonAstral, regional, surrogatePair].join('|')})${optVar + optModifier})*`;
    const seq = optVar + optModifier + optJoin;
    const nonAstralCombo = `${nonAstral}${combo}?`;
    const symbol = `(?:${[blackFlag, nonAstralCombo, combo, regional, surrogatePair, astral].join('|')})`;

    // Match string symbols (https://mathiasbynens.be/notes/javascript-unicode)
    return new RegExp(`${fitz}(?=${fitz})|${telugu}|${thai}|${symbol + seq}`, 'g');
  };

  /**
   * Get number of unicode graphemes.
   * @param {string} text Text to count graphemes in.
   * @return {number} Number of unicode graphemes.
   */
  FindTheWords.Util.unicodeLength = function (text) {
    if (typeof text !== 'string' || text === '') {
      return 0;
    }

    return text
      .replace(FindTheWords.Util.ANSI_REGEXP, '')
      .match(FindTheWords.Util.charRegex()).length;
  };

  /**
   * Get unicode grapheme at specified position.
   * @param {string} text Text to get grapheme from.
   * @param {number} index Position.
   * @return {string} Grapheme at specified position.
   */
  FindTheWords.Util.unicodeCharAt = function (text, index) {
    if (typeof text !== 'string') {
      return '';
    }

    text = text
      .replace(FindTheWords.Util.ANSI_REGEXP, '')
      .match(FindTheWords.Util.charRegex());

    if (text.length < index + 1) {
      return '';
    }

    return text[index];
  };

} (H5P.FindTheWords) )
