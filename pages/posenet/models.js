import * as tf from '@tensorflow/tfjs-core/index'
import * as posenet from '@tensorflow-models/posenet/index'
import { getFrameSliceOptions } from '../../utils/util'
import { drawKeypoints, drawSkeleton,getSkeleton,drawHorizontalLine,drawBoundingBox } from './util'
import { POSENET_URL } from '../../env'

export class Classifier {
    // 图像显示尺寸结构体 { width: Number, height: Number }
    displaySize
    // 神经网络模型
    poseNet
    // ready
    ready
    constructor(displaySize) {
        this.displaySize = {
            width: displaySize.width,
            height: displaySize.height
        }
        this.ready = false
    }

    load() {
        return new Promise((resolve, reject) => {
            posenet
                .load({
                    architecture: 'MobileNetV1',
                    outputStride: 16,//必须是32、16、8。数字越高，速度越快，准确度越低，反之亦然。
                    imageScaleFactor:1,//数值范围 0.2 到 1.0，默认 0.50。这个值设置得越小将会缩小图像，增加速度，但是会牺牲准确性。
                    inputResolution: 225,
                    maxDetections:1,//要检测的最大姿势数。默认为5。
                    multiplier: 0.5,//1.01 1.0 0.75 0.5
                    scoreThreshold:0.9,//大于或等于这个值的检测实例。默认为 0.5。
                    nmsRadius:200,//Non-maximum 抑制部位距离。它必须为正。
                    modelUrl: POSENET_URL
                })
                .then(model => {
                    this.poseNet = model
                    this.ready = true
                    resolve()
                })
                .catch(err => {
                    reject(err)
                })
        })
    }

    isReady() {
        return this.ready
    }

    detectSinglePose(frame) {
        return new Promise((resolve, reject) => {
            const video = tf.tidy(() => {
                const temp = tf.tensor(new Uint8Array(frame.data), [frame.height, frame.width, 4])
                const sliceOptions = getFrameSliceOptions(frame.width, frame.height, this.displaySize.width, this.displaySize.height)
                return temp.slice(sliceOptions.start, sliceOptions.size).resizeBilinear([this.displaySize.height, this.displaySize.width])
            })
            // since images are being fed from a webcam
            // 因为图像是由网络摄像头提供的 反转图像
            const flipHorizontal = false
            this.poseNet.estimateSinglePose(video, { flipHorizontal }).then(pose => {
                video.dispose()
                resolve(pose)
            }).catch(err => {
                reject(err)
            })
        })
    }

    drawSinglePose(ctx, pose) {
        if (!ctx && !pose) {
            return false
        }

        const minPoseConfidence = 0.3
        const minPartConfidence = 0.3
        let result;
        if (pose.score >= minPoseConfidence) {
            // 脸部
            // drawKeypoints(pose.keypoints, minPartConfidence, ctx)
            // 身体点
            getSkeleton(pose.keypoints, minPartConfidence, ctx)
            // 身体
            drawSkeleton(pose.keypoints, minPartConfidence, ctx)
            // 边框
            // drawBoundingBox(pose.keypoints,ctx)
            // 绘制角度
            result = drawHorizontalLine(pose.keypoints)
        }

        ctx.draw()
        return result
    }

    dispose() {
        this.poseNet.dispose()
    }
}