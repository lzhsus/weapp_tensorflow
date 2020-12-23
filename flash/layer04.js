
import createjs from "../vendor/createjs/createjs.js";
var _self;
var libs=module.exports;
var scrollerObj;
function construct(display){
    _self=display;
    console.log('balloonBox',_self)
    _self.playLayer04Btn.addEventListener("click",playLayer04Btn)

    _self.goodsDetailBtn.addEventListener("click",goodsDetailBtn)
}	
function goodsDetailBtn(){
    var event = new createjs.Event('goodsDetailBtn');
    createjs.globalDispatcher.dispatchEvent(event);
}
function playLayer04Btn(){
    console.log('5555')
    _self.gotoAndPlay(35)
    _self.addEventListener("tick",explodeBallon);
}
function explodeBallon(){
	if(_self.currentFrame==_self.totalFrames-1){
        var event = new createjs.Event('gotoPage');
        event.page = 'layer03';
        createjs.globalDispatcher.dispatchEvent(event);

		_self.removeEventListener("tick",explodeBallon);
	}
}
module.exports.construct=construct;
