
import { Classifier} from './models';

import * as flash from '../../flash/config';
import createjs from "../../vendor/createjs/createjs";

Page({
    classifier: null,
    ctx: null,
    data: {
        predicting: false,
        devicePosition:"front",
        list:[]
    },
    onLoad: function (options) {
        this.loadCanvas()
    },
    handleSwitchCamera() {
      let devicePosition = this.data.devicePosition === 'front' ? 'back' : 'front';
      this.setData({ devicePosition });
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {
        const context = wx.createCameraContext(this);
        this.ctx = wx.createCanvasContext('pose', this);
        this.initClassifier();
        let count = 0;
        const listener = context.onCameraFrame(frame => {
            count++;
            if (count === 2) { // 控制帧数
                if (this.classifier && this.classifier.isReady()) {
                    this.executeClassify(frame);
                }
                count = 0;
            }
        });
        listener.start();
    },

    initClassifier() {
        wx.showLoading({
            title: '模型正在加载...'
        });
        const res = wx.getSystemInfoSync();
        this.classifier = new Classifier({
            width: res.screenWidth,
            height: res.screenHeight
        });
        this.classifier.load().then(() => {
            wx.hideLoading();
        }).catch(err => {
            console.log('模型加载报错：', err);
            wx.showModal({
                content:"网络连接异常",
                showCancel:false
            })
        })
    },

    executeClassify(frame) {
        if (this.classifier && this.classifier.isReady() && !this.data.predicting) {
            this.setData({
                predicting: true
            }, () => {
                this.classifier.detectSinglePose(frame).then((pose) => {
                    const nosePosition = pose.keypoints[0].position;
                    
                    var event = new createjs.Event('tfjsMovd');
                    event.address={
                        x:nosePosition.x,
                        y:nosePosition.y
                    }
                    createjs.globalDispatcher.dispatchEvent(event);

                    this.classifier.drawSinglePose(this.ctx, pose);
                    this.setData({
                        list:arr,
                        predicting: false,
                        nosePosition: Math.round(nosePosition.x) + ', ' + Math.round(nosePosition.y)
                    })
                }).catch((err) => {
                    console.log(err, err.stack);
                });
            });
        }
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

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
        if(flash){
            flash.destory();
        }
    },
    
    canvasEvent: function (e) {
        flash.handleEvent(e);
        return false;
    },
    loadCanvas(){
        return new Promise((resolve,reject)=>{
            var info = wx.getSystemInfoSync();
            var dpr = info.pixelRatio;
            var w = info.windowWidth;
            var h = info.windowHeight;
            this.setData({
                canvasW:w,
                canvasH:h
            })
            // this.canvasW = w;
            // this.canvasH = h;

            flash.canvasInit(w,h,this).then(()=>{
                flash.loadInit('',res=>{

                    resolve()
                })
            })
            createjs.globalDispatcher.removeAllEventListeners('playGameBtn');
            createjs.globalDispatcher.addEventListener('playGameBtn',res=>{
                var event = new createjs.Event('gotoPage');
                event.page = 'layer04';
                createjs.globalDispatcher.dispatchEvent(event);
            });
        })
    },
})