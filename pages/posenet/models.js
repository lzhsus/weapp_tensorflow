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
                    outputStride: 16,
                    inputResolution: 225,
                    maxDetections:1,//要检测的最大姿势数。默认为5。
                    multiplier: 0.75,//
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
        let result = false;
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