var yaml = require('yamljs');
var path = require('path');

module.exports = function(configurationFile) {
    return yaml.load(path.format({
        dir: path.join(__dirname, 'config'),
        name: configurationFile || 'default',
        ext: '.yml'
    }));
}
