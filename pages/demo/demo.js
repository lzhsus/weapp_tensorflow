// pages/demo/demo.js
var tf = require('@tensorflow/tfjs-core')
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const model = tf.sequential();
    },

    async onReady() {
        // const context = wx.createCameraContext(this);
        // this.ctx = wx.createCanvasContext('pose', this);
        // // this.initClassifier();
        // wx.showLoading({
        //     title: '模型正在加载...'
        // });
        // console.log(tfl)
        // this.net = await tfl.loadLayersModel('http://127.0.0.1:3000/model.json');
        // console.log('net',net)
        // // 查看模型结构
        // this.net.summary()
        // wx.hideLoading();

        // let count = 0;
        // const listener = context.onCameraFrame(frame => {
        //     count++;
        //     if (count === 2) { // 控制帧数
        //         if (this.net) {
        //             this.executeClassify(frame);
        //         }
        //         count = 0;
        //     }
        // });
        // listener.start();
    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },
    async initClassifier() {
        wx.showLoading({
            title: '模型正在加载...'
        });
        const net = await tfl.loadLayersModel('http://127.0.0.1:3000/model.json');
        // 查看模型结构
        net.summary()
        wx.hideLoading();

        // const res = wx.getSystemInfoSync();
        // this.classifier = new Classifier({
        //     width: res.screenWidth,
        //     height: res.screenHeight
        // });
        // this.classifier.load().then(() => {
        //     wx.hideLoading();
        // }).catch(err => {
        //     console.log('模型加载报错：', err);
        //     wx.showModal({
        //         content:"网络连接异常",
        //         showCancel:false
        //     })
        // })
    },
    onCameraError(err) {
        console.log('onCameraError>>', err);
    },
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        if (this.classifier && this.classifier.isReady()) {
            this.classifier.dispose();
        }
    }
})