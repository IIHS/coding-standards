// See http://palantir.github.io/tslint/usage/tslint-json/ for configuration

module.exports = {
  "extends": "tslint:recommended",
  "rules": {
    "interface-name": false,
    "max-line-length": [true, 140],
    "member-ordering": [true,
      "public-before-private",
      "static-before-instance",
      "variables-before-functions"
    ]
  }
};
