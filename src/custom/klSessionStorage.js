/*
 * Used to store the previous state of H5P contents of KidsLoopLive (KLL)
 * sessions in the user's local storage.
 * Expects KLL to set a cookie with the name `roomUserId` that holds
 * the session room number (e.g. 123) and the user id (e.g. 456) separated by a
 * colon, so: 123:456
 *
 * If there's a previous state from H5P's regular previous state storing, that
 * one takes precedence.
 *
 * Limitation: Assumes that there's only one H5P instance on the page!
 */
export default class KLStateStorer {
  /**
   * @constructor
   * @param {object} [params={}] Parameters.
   * @param {string} [params.storagePrefix='kll-h5p-state'] Storage prefix.
   * @param {string} [params.storageInterval=10000] Storing interval.
   */
  constructor(params = {}) {
    this.params = params;
    this.params.storagePrefix = this.params.storagePrefix ||
      KLStateStorer.STORAGE_PREFIX;
    this.params.storageInterval = this.params.storageInterval ||
      KLStateStorer.STORING_INTERVAL_MS;

    if (!H5P || !H5P.externalDispatcher) {
      return;
    }

    // Set by KLL to allow identifying session room and user
    const roomUserIdCookie = document.cookie
        .split(';')
        .find((cookie) => {
            return cookie
              .split('=')[0]
              .trimStart() === KLStateStorer.COOKIE_NAME;
        });

    this.roomUserId = roomUserIdCookie
        ? roomUserIdCookie.split('=')[1]
        : '';

    if (this.roomUserId === '') {
      this.clearPreviousStates(KLStateStorer.CLEAR_TIME_UP);
      return; // No live session
    }

    // Binding for listener removal
    this.storePreviousState = this.storePreviousState.bind(this);
    this.stopStateStoring = this.stopStateStoring.bind(this);

    /*
     * Once page interactive, modify previous state in H5PIntegration object.
     * H5P core will get if from there
     */
    document.addEventListener('readystatechange', (event) => {
      if (document.readyState === 'interactive') {
        this.contentId = this.getContentId();
        if (typeof this.contentId !== 'string') {
          return; // No content id found
        }

        if (window?.H5PIntegration?.contents[`cid-${this.contentId}`]?.contentUserData?.length) {
          return; // There's a previous state from H5P's regular state storing
        }

        const contentUserData = [];
        contentUserData.push({ state: this.getPreviousState() });
        window.H5PIntegration.contents[`cid-${this.contentId}`].contentUserData = contentUserData;

        // H5P core requires this to be set in order to accept previous states
        if (!window.H5PIntegration.saveFreq) {
          window.H5PIntegration.saveFreq = 10000000;
        }
      }
    });

    // Start storing the state once H5P content is initialized
    H5P.externalDispatcher.once('initialized', () => {
      if (typeof this.contentId !== 'string') {
        return; // No content id found
      }

      // Don't litter other people's data!
      this.clearPreviousStates(KLStateStorer.CLEAR_OTHER_ROOMS);

      if (
        Array.isArray(H5P.instances) && H5P.instances.length &&
        typeof H5P.instances[0].getCurrentState === 'function'
      ) {
        this.instance = H5P.instances[0];
        this.startStateStoring();
      }
    });
  }

  /**
   * Start storing state.
   * @param {object} params Parameters.
   * @param {number} [params.intervalMs=KLStateStorer.STORING_INTERVAL_MS] Time interval in ms.
   */
  startStateStoring(params = {}) {
    if (!this.instance || typeof this.instance.getCurrentState !== 'function') {
      return;
    }

    // Store in regular intervals
    this.storingTimer = setInterval(
      this.storePreviousState,
      params.intervalMs || KLStateStorer.STORING_INTERVAL_MS
    );
    H5P.externalDispatcher.on('xAPI', this.storePreviousState);
    H5P.externalDispatcher.on('kllStoreSessionState', this.storePreviousState);

    // Store on certain events
    window.addEventListener('beforeunload', this.stopStoring, { capture: true });
    window.addEventListener('unload', this.stopStoring, { capture: true });
    window.addEventListener('pagehide', this.storePreviousState);
    window.addEventListener('visibilitychange', this.storePreviousState);
  }

  /**
   * Stop storing state.
   */
  stopStateStoring() {
    clearTimeout(this.storingTimer);
    H5P.externalDispatcher.off('xAPI', this.storePreviousState);
    H5P.externalDispatcher.off('kllStoreSessionState', this.storePreviousState);

    window.removeEventListener('pagehide', this.storePreviousState);
    window.removeEventListener('visibilitychange', this.storePreviousState);
    window.removeEventListener('beforeunload', this.stopStoring);
    window.removeEventListener('unload', this.stopStoring);

    this.storePreviousState();
  }

  /**
   * Get H5P content id.
   * Assuming there's only one H5P instance on page!
   * @return {string} H5P content id.
   */
  getContentId() {
    const contents = Object.keys(H5PIntegration?.contents || {});
    if (!contents.length) {
      return null; // No contents listed
    }

    // contents[0] is where assuming just one H5P instance on page
    const idSegments = contents[0].split('-');
    if (idSegments.length !== 2) {
      return null; // No id
    }

    /*
     * Please note: Regular H5P integrations use numbers for the contentId,
     * while the KidsLoop integration uses strings. May cause trouble at some
     * point in the future.
     */
    if (idSegments[1].trim() === '') {
      return null; // No id
    }

    return idSegments[1];
  }

  /**
   * Store a previous state.
   */
  storePreviousState() {
    if (
      !this.params.storagePrefix ||
      !this.instance ||
      typeof this.instance.getCurrentState !== 'function' ||
      typeof this.contentId !== 'string'
    ) {
      return;
    }

    let state;
    try {
      state = JSON.stringify(this.instance.getCurrentState());
    }
    catch (error) {
      return;
    }

    this.setStorage(
      `${this.params.storagePrefix}${KLStateStorer.DELIMITER}${this.roomUserId}${KLStateStorer.DELIMITER}${this.contentId}`,
      state,
      { timeToLive: KLStateStorer.TIME_TO_LIVE_MS }
    );
  }

  /**
   * Get a previous state.
   * @param {boolean} [encoded = true] If true, encoded string, else object.
   * @return {object|undefined} Previous state.
   */
  getPreviousState(encoded = true) {
    const encodedText = this.getStorageValue(`${this.params.storagePrefix}${KLStateStorer.DELIMITER}${this.roomUserId}${KLStateStorer.DELIMITER}${this.contentId}`);
    if (!encodedText) {
      return;
    }

    if (encoded) {
      return encodedText;
    }
    else {
      try {
        return JSON.parse(encodedText);
      }
      catch (error) {
        return;
      }
    }
  }

  /**
   * Clear previous states.
   * @param {number} [scope=KLStateStorer.CLEAR_OTHER_ROOMS] Scope of states to delete.
   */
  clearPreviousStates(scope) {
    scope = (typeof scope !== 'number') ?
      KLStateStorer.CLEAR_OTHER_ROOMS :
      scope;

    if (!this.params.storagePrefix) {
      return;
    }

    try {
      for ( var i = 0, len = window.localStorage.length; i < len; ++i ) {
        const key = Object.keys(window.localStorage)[i];
        if (!key.startsWith(this.params.storagePrefix)) {
          continue;
        }
        const keySegments = key
          .substring(this.params.storagePrefix.length + KLStateStorer.DELIMITER.length)
          .split(KLStateStorer.DELIMITER);

        if (key.startsWith(this.params.storagePrefix)) {
          if (scope === KLStateStorer.CLEAR_ALL) {
            this.deleteStorage(key);
          }
          else if (
            scope === KLStateStorer.CLEAR_OTHER_ROOMS &&
            keySegments[0] !== this.roomUserId
          ) {
            this.deleteStorage(key);
          }
          else if (
            scope === KLStateStorer.CLEAR_ROOM &&
            keySegments[0] === this.roomUserId
          ) {
            this.deleteStorage(key);
          }
          else if (
            scope === KLStateStorer.CLEAR_INSTANCE &&
            keySegments[1] === this.contentId
          ) {
            this.deleteStorage(key);
          }
          else if (
            scope === KLStateStorer.CLEAR_TIME_UP
          ) {
            // Will remove the storage entry if time to live exceeded
            this.getStorageValue(key);
          }
        }
      }
    }
    catch (error) {
      return;
    }
  }

  /**
   * Set a storage.
   * @param {string} key storage name (= key).
   * @param {string} value Value to set.
   * @param {object} [options={}] Options.
   * @param {number} [options.timeToLive] Time to live for storage entry.
   */
  setStorage(key, value, options = {}) {
    if (typeof key !== 'string' || typeof value !== 'string') {
      return;
    }

    if (typeof this.contentId !== 'string') {
      return; // No content id found
    }

    const expires = options.timeToLive ?
      (new Date()).getTime() + options.timeToLive :
      undefined;

    let storageValue;
    try {
      storageValue = JSON.stringify({ expires: expires, value: value });
    }
    catch (error) {
      return;
    }

    try {
      window.localStorage.setItem(
        key,
        storageValue
      );
    }
    catch (error) {
      // Intentionally left blank
    }
  }

  /**
   * Get value from localStorage.
   * @param {string} key Key of item to get value of.
   */
  getStorageValue(key) {
    let encoded;
    try {
      encoded = window.localStorage.getItem(key);
    }
    catch (error) {
      return;
    }

    let decoded;
    try {
      decoded = JSON.parse(encoded);
    }
    catch (error) {
      return;
    }

    if (!decoded?.value) {
      return;
    }

    if (decoded.expires && (new Date()).getTime() > decoded.expires) {
      this.deleteStorage(key);
      return;
    }

    return decoded.value;
  }

  /**
   * Delete an item in localStorage.
   * @param {string} name Name of item to delete.
   */
  deleteStorage(name) {
    try {
      window.localStorage.removeItem(name);
    }
    catch (error) {
      // Intentionally left blank
    }
  }
}

/** @constant {number} Time to live for local storage entries */
KLStateStorer.TIME_TO_LIVE_MS = 24 * 60 * 60 * 1000; // 1 day

/** @constant {number} Default interval time for storing state */
KLStateStorer.STORING_INTERVAL_MS = 10 * 1000; // 10s

/** @constant {string} Default prefix for local storage entries */
KLStateStorer.STORAGE_PREFIX = 'kll-h5p-state';

/** @constant {string} Default cookie name for room/userId combo */
KLStateStorer.COOKIE_NAME = 'roomUserId';

/** @constant {number} Clear all other states */
KLStateStorer.CLEAR_ALL = 0;

/** @constant {number} Clear states from other rooms/users */
KLStateStorer.CLEAR_OTHER_ROOMS = 1;

/** @constant {number} Clear states from same room/user */
KLStateStorer.CLEAR_ROOM = 2;

/** @constant {number} Clear states for this content */
KLStateStorer.CLEAR_INSTANCE = 3;

/** @constant {number} Clear states that should not live */
KLStateStorer.CLEAR_TIME_UP = 4;

/** @constant {string} Delimiter for storage key segments */
KLStateStorer.DELIMITER = '---';
