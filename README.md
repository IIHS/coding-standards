# TypeScript Coding Standards

A shareable configuration package for [TSLint](https://github.com/palantir/tslint)

## Installation

```shell
$ npm install --save-dev IIHS/coding-standards#typescript
```

## Usage

### In Gulp tasks

To lint TypeScript according to these standards from Gulp, do something like this:

```js
import tsLint from "gulp-tslint";
import tsLintConfigIIHS from "tslint-config-iihs";

export const lintTs = () => {
    return gulp.src(["src/**/*.ts", "typings/**/*.ts"])
        .pipe(tsLint(tsConfigIIHS()))
        .pipe(tsLint.report())
```

If you need to access the `tslint.json` config file directly, for example in your VSCode settings, it's there in the
npm package folder. Here's a sample `settings.json` file for VSCode:
```json
{
    "files.exclude": {
        "**/.git": true,
        "**/.DS_Store": true
    },
    "tslint.configFile": "node_modules/tslint-config-iihs/tslint.json"
}
```

By default, the IIHS TSLint coding standard follows the 
[TSLint "recommended" standard](https://github.com/palantir/tslint/tree/master/src/configs).

To extend the IIHS TSLint standard, simply configure your local TSLint [configuration file](https://github.com/palantir/tslint#configuration) 
using the `extends` property:

```json
{
    "extends": "iihs",
    "rules": {
        "no-errors": true,
        "no-addition": false
    }
}
```
