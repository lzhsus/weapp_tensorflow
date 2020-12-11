
import { Classifier} from './models';
Page({
    classifier: null,
    ctx: null,
    data: {
        predicting: false
    },
    onLoad: function (options) {

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
                    this.classifier.drawSinglePose(this.ctx, pose);
                    this.setData({
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
    }
})