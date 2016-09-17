cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-hot-code-push-plugin.chcp",
        "file": "plugins/cordova-hot-code-push-plugin/www/chcp.js",
        "pluginId": "cordova-hot-code-push-plugin",
        "clobbers": [
            "chcp"
        ]
    },
    {
        "id": "cordova-hot-code-push-local-dev-addon.chcpLocalDev",
        "file": "plugins/cordova-hot-code-push-local-dev-addon/www/chcpLocalDev.js",
        "pluginId": "cordova-hot-code-push-local-dev-addon",
        "clobbers": [
            "chcpLocalDev"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.2",
    "cordova-hot-code-push-plugin": "1.4.0",
    "cordova-hot-code-push-local-dev-addon": "0.2.2"
};
// BOTTOM OF METADATA
});