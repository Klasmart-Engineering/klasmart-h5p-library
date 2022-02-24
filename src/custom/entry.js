H5P = H5P || {};

import './xapi-uploader';
import XAPIExperienced from './triggerXAPIExperienced';
import KLStateStorer from './klSessionStorage';
import KLScreenshot from './klScreenshot';

// TODO: Remove when H5P-342 is accepted
// Can be used for testing locally.
// document.cookie = 'roomUserId=123:456';

// Trigger xAPI experienced once H5P content is initialized
new XAPIExperienced();

// Store state on client every 10 seconds and on special events
H5P.KLStateStorer = new KLStateStorer({ storageInterval: 10 * 1000 });

// Allow content types to use screenshot function
H5P.KLScreenshot = new KLScreenshot();
