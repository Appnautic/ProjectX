'use strict';

module.exports = function otherTask(gulp, plugins, config) {
    const { dest, src } = config;

    gulp.task('other-build', () =>
        gulp.src(src.base+'/*{xml,txt,webmanifest}')
            .pipe(gulp.dest(dest.base))
    )
};
