var yaml = require('yamljs');

module.exports = function(configurationFile) {
    configurationFile = configurationFile || 'default';
    return yaml.load('config/' + configurationFile + '.yml');
}
