// See http://eslint.org/docs/user-guide/configuring#using-configuration-files for configuration

module.exports = {
    "extends": "eslint:recommended",
    "rules": {
        "comma-spacing": [
            "error", {
                "before": false,
                "after": true
            }
        ],
        "no-console": "off",
        "no-duplicate-imports": "error",
        "no-var": "error",
        "quotes": [
            "error",
            "single", {
                "avoidEscape": true
            }
        ]
    },
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module"
    }
}
