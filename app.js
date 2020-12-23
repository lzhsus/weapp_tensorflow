var fetchWechat = require('fetch-wechat');
var tf = require('@tensorflow/tfjs-core')
var webgl = require('@tensorflow/tfjs-backend-webgl/index')
var plugin = requirePlugin('tfjsPlugin');
App({
    onLaunch: function () {
        tf.ENV.flagRegistry.WEBGL_VERSION.evaluationFn = () => {
            return 1
        };
        plugin.configPlugin({
            // polyfill fetch function
            fetchFunc: fetchWechat.fetchFunc(),
            // inject tfjs runtime
            tf,
            // inject webgl backend
            webgl,
            // inject cpu backend
            // provide webgl canvas
            canvas: wx.createOffscreenCanvas()
        });
    }
})