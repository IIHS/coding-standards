# JavaScript Coding Standards

A shareable configuration package for [TSLint](https://github.com/palantir/tslint)

## Installation

```shell
$ npm install --save-dev IIHS/coding-standards#typescript
```

## Usage

By default, the IIHS TSLint coding standard follows the 
[TSLint "recommended" standard](https://github.com/palantir/tslint/tree/master/src/configs).

To extend the IIHS TSLint standard, simply configure your TSLint [configuration file](https://github.com/palantir/tslint#configuration) to
extend it:

```json
{
    "extends": "iihs",
    "rules": {
        "no-errors": true,
        "no-addition": false
    }
}
```
