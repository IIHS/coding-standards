# Sass Coding Standards

A shareable configuration package for [sass-lint](https://github.com/sasstools/sass-lint)

## Installation

```shell
$ npm install --save-dev IIHS/coding-standards#sass
```

## Usage

Various linting configurations can be accessed with the `sass-config-iihs` module.

```javascript
import gulp from 'gulp';
import sassLint from 'gulp-sass-lint';
import sassConfigIIHS from 'sass-config-iihs';

gulp.task('default', () => {
    gulp.src('sass/**/*.s+(a|c)ss')
        .pipe(sassLint(sassConfigIIHS())) // Use the default configuration
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});
```

If you do not want the default IIHS Sass configuration, you can pick a particular configuration file.

```javascript
import gulp from 'gulp';
import sassLint from 'gulp-sass-lint';
import sassConfigIIHS from 'sass-config-iihs';

gulp.task('default', () => {
    gulp.src('sass/**/*.s+(a|c)ss')
        .pipe(sassLint(sassConfigIIHS('strict')))
        .pipe(sassLint.format())
        .pipe(sassLint.failOnError());
});
```
