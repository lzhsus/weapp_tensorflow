
import createjs from "../vendor/createjs/createjs.js";
var _self;
var libs=module.exports;
var scrollerObj;
function construct(display){
    _self=display;
    _self.playGameTry.addEventListener("click",playGameTry)
}	

function playGameTry(){
    var event = new createjs.Event('gotoPage');
    event.page = 'layer03';
    createjs.globalDispatcher.dispatchEvent(event)
}
module.exports.construct=construct;
