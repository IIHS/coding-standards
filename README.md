# Pug Coding Standards

A shareable configuration package for [ESLint](http://eslint.org/)

## Installation

```shell
$ npm install --save-dev IIHS/coding-standards#javascript
```

## Usage

Simply configure your ESLint [configuration file](http://eslint.org/docs/user-guide/configuring) to extend the IIHS ESLint coding standard.

```json
{
    "extends": "iihs",
    "setting to override": null
}
```

If you do not want the default IIHS ESLint configuration, you can pick a particular configuration file.

```json
{
    "extends": "iihs/es6",
    "setting to override": null
}
```
