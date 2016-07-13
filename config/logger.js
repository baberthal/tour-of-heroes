'use strict';

const eazyLogger = require('eazy-logger');

const LOGGER_DEFAULTS = {
  level: 'info',
  useLevelPrefixes: false,
};

function applyExtensions(instance) {
  const tmp = '{red:An error occured} ({magenta:%d}): {yellow:%s}\n\n{cyan:%s}';

  instance.prettyError = function(err) {
    return this.error(tmp, err.code, err.message, err.stack);
  };

  return instance;
}

const Logger = function(prefix = 'LOG', options = {}) {
  let config = Object.assign({}, LOGGER_DEFAULTS, options, {
    prefix: `\n{blue:[}{magenta:${prefix}}{blue:]}`,
  });
  let instance = eazyLogger.Logger(config);
  applyExtensions(instance);
  return instance;
};

module.exports = Logger;
module.exports.create = function(prefix = 'LOG', config = {}) {
  return Logger(prefix, config);
};
