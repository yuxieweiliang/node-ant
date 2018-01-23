/*!
 * ignore
 */

var driver;

if (typeof window === 'undefined') {
  driver = require('./node-mongodb-native/index');
  if (global.MONGOOSE_DRIVER_PATH) {
    driver = require(global.MONGOOSE_DRIVER_PATH);
  }
} else {
  driver = require('./browser/index');
}

/*!
 * ignore
 */

module.exports = driver;
