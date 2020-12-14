import * as posenet from '@tensorflow-models/posenet/index'

const color = 'aqua'

const boundingBoxColor = 'red'
const lineWidth = 2

function toTuple({ y, x }) {
    return [y, x]
}

export function drawPoint(ctx, y, x, r, color) {
    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2 * Math.PI)
    ctx.fillStyle = color
    
    ctx.setFontSize(20)
    ctx.fillText('x:',String(x).split('.')[0],' y:',String(y).split('.')[0], x, y)

    ctx.fill()
}

/**
 * Draws a line on a canvas, i.e. a joint
 * 在画布上画一条线，即连接处
 */
export function drawSegment([ay, ax], [by, bx], color, scale, ctx) {
    ctx.beginPath()
    ctx.moveTo(ax * scale, ay * scale)
    ctx.lineTo(bx * scale, by * scale)
    ctx.lineWidth = lineWidth
    ctx.strokeStyle = color
    ctx.stroke()
}

/**
 * Draws a pose skeleton by looking up all adjacent keypoints/joints
 * 通过查找所有相邻的关键点/关节绘制姿态骨架
 */
// tslint:disable-next-line:no-any
export function drawSkeleton(keypoints, minConfidence, ctx, scale = 1) {
    const adjacentKeyPoints =
        posenet.getAdjacentKeyPoints(keypoints, minConfidence)
    // tslint:disable-next-line:no-any
    // 只获取 手 肘 肩
    // const partNames = posenet.partNames.slice(5,11);

    adjacentKeyPoints.forEach((keypoints) => {
        // if(partNames.indexOf(keypoints[0].part)!=-1&&partNames.indexOf(keypoints[1].part)!=-1){
        //     drawSegment(
        //     toTuple(keypoints[0].position), toTuple(keypoints[1].position), color,
        //     scale, ctx)
        // }
        drawSegment(
            toTuple(keypoints[0].position), toTuple(keypoints[1].position), color,
            scale, ctx)
    })
}
/**
 * Draw pose getSkeleton onto a canvas
 * 在画布上绘制 手臂 肩膀 姿态关键点
 */
// tslint:disable-next-line:no-any
export function getSkeleton(keypoints, minConfidence, ctx, scale = 1){

    for (let i = 0; i < keypoints.length; i++) {
        const keypoint = keypoints[i]

        if (keypoint.score < minConfidence) {
            continue
        }
        const { y, x } = keypoint.position
        if(i>=5&&i<11){
            let c = ''
            if(keypoint.part=='leftShoulder') c='chocolate';
            if(keypoint.part=='rightShoulder') c='chocolate';
    
            if(keypoint.part=='leftElbow') c='blue';
            if(keypoint.part=='rightElbow') c='blue';
    
            if(keypoint.part=='leftWrist') c='gold';
            if(keypoint.part=='rightWrist') c='gold';
            drawPoint(ctx, y * scale, x * scale, 5, c||color)
        }
    }
}

/**
 * Draw pose keypoints onto a canvas
 * 在画布上绘制姿态关键点
 */
// tslint:disable-next-line:no-any
export function drawKeypoints(keypoints, minConfidence, ctx, scale = 1) {
    // 0 鼻子 1 右眼   2 左眼  3 右耳 4 左耳

    // 5  右肩 6  左肩
    // 7  右手肘关节 8  左手肘关节
    // 9  右手腕关节 10 左手腕关节

    // 11   右臀部  12   左臀部  13   右膝 14   左膝盖  15   右   16   左脚
    for (let i = 0; i < keypoints.length; i++) {
        const keypoint = keypoints[i]

        if (keypoint.score < minConfidence) {
            continue
        }

        const { y, x } = keypoint.position
        console.log('keypoint',keypoint)
        // leftShoulder red
        let c = ''
        if(keypoint.part=='leftShoulder') c='chocolate';
        if(keypoint.part=='rightShoulder') c='chocolate';

        if(keypoint.part=='leftElbow') c='blue';
        if(keypoint.part=='rightElbow') c='blue';

        if(keypoint.part=='leftWrist') c='gold';
        if(keypoint.part=='rightWrist') c='gold';
        

        drawPoint(ctx, y * scale, x * scale, 5, c||color)
    }
}

/**
 * Draw the bounding box of a pose. For example, for a whole person standing
 * in an image, the bounding box will begin at the nose and extend to one of
 * ankles
 * 绘制一个姿态的边界框。
 */
// tslint:disable-next-line:no-any
export function drawBoundingBox(keypoints, ctx) {
    const boundingBox = posenet.getBoundingBox(keypoints)

    ctx.rect(
        boundingBox.minX, boundingBox.minY, boundingBox.maxX - boundingBox.minX,
        boundingBox.maxY - boundingBox.minY)

    ctx.strokeStyle = boundingBoxColor
    ctx.stroke()
}

/**
 * 绘制水平线
 * 5  右肩 6  左肩
 * 7  右手肘关节 8  左手肘关节
 * 9  右手腕关节 10 左手腕关节
 */

export function drawHorizontalLine(keypoints){
    let y5 = keypoints[5].position.y;
    let y6 = keypoints[6].position.y;
    let y7 = keypoints[7].position.y;
    let y8 = keypoints[8].position.y;
    let y9 = keypoints[9].position.y;
    let y10 = keypoints[10].position.y;
    let callBackTxt = '无'
    if(!intersecting(y5,y6)){
        // 肩部不平   
        callBackTxt = '肩部不平'
        return callBackTxt
    }else if(!intersecting(y7,y9)||!intersecting(y8,y10)){
        // 右手机 左手臂
        return "手臂不平"
    }else if(!intersecting(y5,y7)){
        // 右肩 连接手臂  左肩 连接手臂
        return "手臂与肩部"
    }else if(keypoints.length<11){
        return "为获取全部点"
    }else{
        return "完成任务"+keypoints.length
    }
}

function intersecting(point1, point2, deviation = 20) {
    let isTrue = false;
    var A = [point1 - deviation,point1 + deviation];
    var B = [point2 - deviation,point2 + deviation];
    if(Math.max.apply(null, A)>Math.max.apply(null, B)){
        if(Math.max.apply(null, B)>Math.min.apply(null, A)){
            isTrue = true;
        }
    }else{
        if(Math.max.apply(null, A)>Math.min.apply(null, B)){
            isTrue = true;
        }
    }
    return isTrue;
}

// 