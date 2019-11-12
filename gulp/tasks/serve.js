'use strict';

const path = require('path');

module.exports = function serveTask(
  gulp,
  plugins,
  config,
  helpers,
  generatorConfig // eslint-disable-line no-unused-vars
) {
  const { base, styles, vendorConfig, assets, templatesWatch } = config.src;
  const startTasks = ['styles-watch', 'assets-watch', 'vendor-watch'];

  gulp.task('vendor-rebuild-template', ['vendor-watch'], () => {
    gulp.start('templates-watch');
  });

  gulp.task('serve', startTasks, () => {
    gulp.start('templates-watch');

    const browserSyncConfig = {
      server: './',
      ghostMode: false,
      online: true,
    };

    plugins.browserSync.init(browserSyncConfig);

    gulp.watch(path.join(base, styles), ['styles-watch']);
    gulp.watch(templatesWatch, ['templates-watch']);
    gulp.watch(path.join(base, vendorConfig), ['vendor-rebuild-template']);
    gulp.watch(path.join(base, assets), ['assets-watch']);
  });
};
