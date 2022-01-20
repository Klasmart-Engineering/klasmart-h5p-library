/**
 * Class is an adaptor that matches the interface for H5P
 * logger while executing commands to KL logger instances
 */

const { withLogger } = require('kidsloop-nodejs-logger');

class Logger {
    _instance;

    constructor(label) {
        this._instance = withLogger(label);
    }
    silly(message) {
        this._instance.silly(message);
    }
    debug(message) {
        this._instance.debug(message);
    }
    verbose(message) {
        this._instance.verbose(message);
    }
    info(message) {
        this._instance.info(message);
    }
    warn(message) {
        this._instance.warn(message);
    }
    error(message) {
        this._instance.error(message);
    }
}

exports.__esModule = true;
exports['default'] = Logger;