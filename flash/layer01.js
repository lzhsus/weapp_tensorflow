
import createjs from "../vendor/createjs/createjs.js";
var _self;
var libs=module.exports;
var scrollerObj;
function construct(display){
    _self=display;
    console.log('balloonBox',_self)
    // _self.balloonBox.addEventListener("click",playGameBtn);
    // _self.headBox.addEventListener("click",playGameBtn);
    _self.playGameNewBtn.addEventListener("click",playGameBtn)
    _self.addEventListener("added",addStageHandler);
    console.log('self.playGameNewBtn',_self.playGameNewBtn)

    
    createjs.globalDispatcher.addEventListener('tfjsMovd',res=>{
        _self.playGameNewBtn.x =res.address.x
        _self.playGameNewBtn.y =res.address.y
        // console.log(res)
    });
}	
function addStageHandler(e){
    _self.addEventListener("tick",init);
}
function init(){
    _self.removeEventListener("tick",init);
}
function playGameBtn(){
    var event = new createjs.Event('playGameBtn');
    createjs.globalDispatcher.dispatchEvent(event);
    console.log('666')
    // _self.balloonBox.balloon.gotoAndPlay(1)
    // _self.balloonBox.balloon.explodeBallon.addEventListener("tick",explodeBallon);
}
function explodeBallon(){
	if(_self.balloonBox.balloon.explodeBallon.currentFrame==_self.balloonBox.balloon.explodeBallon.totalFrames-1){
        var event = new createjs.Event('gotoPage');
        event.page = 'layer02';
        createjs.globalDispatcher.dispatchEvent(event);

		_self.balloonBox.balloon.explodeBallon.removeEventListener("tick",explodeBallon);
	}
}
module.exports.construct=construct;
