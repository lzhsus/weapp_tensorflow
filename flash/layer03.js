
import createjs from "../vendor/createjs/createjs.js";
var _self;
var libs=module.exports;
var scrollerObj;
function construct(display){
    _self=display;
    console.log('layer03',_self)
    _self.playGameStartBtn.addEventListener("click",playGameStartBtn);
    
    _self.shadePop02.addEventListener("click",playVideoEvent)
    _self.addEventListener("added",addStageHandler);
    createjs.globalDispatcher.addEventListener('initDataLayer03',initData)
}	
function addStageHandler(e){
    _self.addEventListener("tick",init);
}
function init(){
    _self.removeEventListener("tick",init);
    var event = new createjs.Event('giftInit');
    createjs.globalDispatcher.dispatchEvent(event)
}
function initData(){
    _self.giftItemBox['giftItem0'+stayIndex].gotoAndStop(2);
    giftIndex = 1
    _self.shadePop02.visible = false
}
let giftIndex = 1;//初始旋转位置
let ringNum = 1;//旋转圈数
let ringMaxNum = 10;
let stayIndex = 2;//停留位置
let previousStayIndex = 1;

let gameStart = false;//是否进行中
// 生成与上次不同的随机数
function randomIndex(){
    stayIndex = ~~(Math.random()*5)+1;//随机停留的位置
    if(stayIndex==previousStayIndex){
        randomIndex()
    }else{
        previousStayIndex = stayIndex;
    }
}
// 立即开始
async function playGameStartBtn(e){
    if(gameStart) return;
    gameStart = true;
    _self.giftItemBox['giftItem0'+stayIndex].gotoAndStop(2);
    // randomIndex()   
    tickMoveStart()
}
function tickMoveStart(){
    _self.giftItemBox['giftItem0'+giftIndex].gotoAndPlay(1);
    setTimeout(()=>{
        if(ringNum>ringMaxNum&&stayIndex==giftIndex){
            ringNum = 1,giftIndex = 1;
            gameStart = false;
            giftPopShow()
            return
        }else if(ringNum>ringMaxNum){
            tickMoveEnd()
        }else{
            ringNum++
            tickMoveEnd()
        }
    },(ringNum<15?80:100)+ringNum*16)
}
function tickMoveEnd(){
    _self.giftItemBox['giftItem0'+giftIndex].gotoAndStop(2);
    giftIndex++;
    if(giftIndex>=6) giftIndex=1;
    tickMoveStart()
}
// 显示弹窗
function giftPopShow(){
    _self.shadePop02.visible = true
    _self.shadePop02.gotoAndPlay(1)

}
function playVideoEvent(){
    var event = new createjs.Event('playVideoEvent');
    createjs.globalDispatcher.dispatchEvent(event)
}
module.exports.construct=construct;
