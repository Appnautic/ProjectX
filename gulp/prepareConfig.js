'use strict';

const path = require('path');

module.exports = function prepareConfig(config) {
  const { templatesWatch, templatesBuild, base } = config.src;

  templatesWatch[0] = path.join(base, templatesWatch[0]);
  templatesWatch[1] = path.join(base, templatesWatch[1]);
  templatesBuild[0] = path.join(base, templatesBuild[0]);

  return config;
};
