H5P = H5P || {};

import './xapiUploader';
import XAPIExperienced from './triggerXAPIExperienced';
import KLStateStorer from './klSessionStorage';
import KLScreenshot from './klScreenshot';
import KLFileExporter from './klFileExporter';
import KLDisplay from './klDisplay';

// Trigger xAPI experienced once H5P content is initialized
new XAPIExperienced();

// Allow content types to export files
H5P.KLFileExporter = new KLFileExporter();

// Store state on client every 10 seconds and on special events
H5P.KLStateStorer = new KLStateStorer({ storageInterval: 10 * 1000 });

// Allow content types to use screenshot function
H5P.KLScreenshot = new KLScreenshot();

// Add display specific helper functions
H5P.KLDisplay = KLDisplay;
