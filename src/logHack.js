/**
 * Attempt at a full replacement of the H5P logger with the KL logger.
 * Works by loading the KL Logger adaptor, then adding a record to
 * the require cache using a key for the H5P logger that returns the 
 * KL logger adaptor module.
 * 
 * Consequently, as far as consumers are concerned it will appear they are
 * consuming the H5P logger, but in actuality are consuming the KL logger.
 * 
 * This functionality is sensitive to the module type used for the project and
 * may break in unexpected ways when changes to the TS module configuration is
 * changed.
 * 
 * Note: It's important that this code is executed immediately upon process starting
 * to avoid H5P modules loading the actual logger prior to this code replacing the 
 * cache. 
 */

const KLLogger = require('./log-adaptor');
const path = require('path');

KLLogger;

const klLoggerPath = path.resolve('./src/log-adaptor.js');
const h5pLoggerPath = path.resolve('./node_modules/@lumieducation/h5p-server/build/src/helpers/Logger.js');

require.cache[h5pLoggerPath] = require.cache[klLoggerPath];

exports['default'] = 'hacked';