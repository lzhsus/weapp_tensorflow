import Api from '../services/api/index';
import appConfig from './appConfig';
import { uploadFile } from './services/uploadFile';
let rightWrongAudio =[]; //对错音乐
// 加载字体
export const loadFontFace = function(family,source){
    return new Promise((resolve,reject)=>{  
        if(!family||!source) reject(false);
        wx.loadFontFace({
            family: family,
            source: source,
            success(res) {
                console.warn(family+"字体加载成功")
                resolve(true)
            },
            fail: function(res) {
                console.warn(family+"字体加载失败")
                console.log(JSON.stringify(res))
                reject(false)
            },
            complete: function(res) { }
        });
    })
}
// 深度拷贝
export const depthCopy = function (data){
    return JSON.parse(JSON.stringify(data));
}

// 开启返回提示
export const enableAlertBeforeUnload = function (message){
    if( wx.enableAlertBeforeUnload ){
        wx.enableAlertBeforeUnload({
            message: message||'是否退出当前页面？',
        });
    }
}

// 关闭返回提示
export const disableAlertBeforeUnload = function (){
    if( wx.disableAlertBeforeUnload ){
        wx.disableAlertBeforeUnload();
    }
}

// 资源路径拼接
export const getUrlPath = function (url){
    if( !url ) return '';
    return url.indexOf('http')!=-1 ? url : (appConfig.ossPath+(url.indexOf('?')!=-1?url+'&':url+'?')+'v=202009081212');
}

// 订阅模板消息
export const subscribeMessage = function(tmplIds=[]){
    return new Promise(function (resolve) {
        wx.requestSubscribeMessage({
            tmplIds: tmplIds,
            complete:(res)=>{
                console.log('requestSubscribeMessage',res)
                res.tmplIds = tmplIds;
                resolve(res);
            }
        });
    });
}
// 播放背景音乐
let innerAudioContext=null
export const answerPlayAudioMusic = function (link,loop){
    innerAudioContext = wx.createInnerAudioContext();    
    innerAudioContext.autoplay = true;
    innerAudioContext.loop = loop||false;
    innerAudioContext.src = link;
    innerAudioContext.play();

    return new Promise((resolve)=> {        
        innerAudioContext.onPlay(()=> {
            console.log('开始播放');
            innerAudioContext.offPlay();
            resolve({});
        });
        innerAudioContext.onError((res)=> {
            console.log('播放失败',res);
            innerAudioContext.offError();
            resolve({});
        });
    });    
}
export const answerPlayAudioMusicDestroy = function (){
    if(innerAudioContext!=null){
        innerAudioContext.destroy();
    }
}
// 答题播放音乐（正确、错误）
export const answerPlayAudio = function (isCorrect){
    let audioData = rightWrongAudio[~~isCorrect];
    wx.showLoading({
        title: '加载中',
    });
    if( !audioData ){        
        let innerAudioContext = wx.createInnerAudioContext();    
        innerAudioContext.autoplay = true;
        innerAudioContext.src = getUrlPath((isCorrect?'190822fg0464/video/success.mp3':'190822fg0464/video/error.mp3'));
        rightWrongAudio[~~isCorrect] = audioData = innerAudioContext;
    }
    console.log(isCorrect?'回答正确音效':'回答错误音效');
    audioData.play();
    return new Promise((resolve)=> {        
        audioData.onPlay(()=> {
            console.log('开始播放');
            audioData.offPlay();
        });
        audioData.onError((res)=> {
            console.log('播放失败',res);
            wx.hideLoading();
            audioData.offError();
            resolve({});
        });
        audioData.onEnded((res)=> {
            console.log('播放结束');
            wx.hideLoading();
            audioData.offEnded();
            resolve({});
        });
    });    
}


// 页面跳转
export const openWeappLink = function (link, pages) {
    if( !link ) return;
    if( link.indexOf("https:")!=-1 ){
        if( pages ){
            wx.navigateTo({
                url: pages+'?link='+encodeURIComponent(link),
            });
            return;
        }
        wx.navigateTo({
            url: '/pages/webview?link='+encodeURIComponent(link),
        });
    }else{
        if( link.indexOf("appid:")!=-1 ){
            let path = link.split("##");
            let _appid = path[0].replace(/appid:/i, "");
            let _path = path[1]||'';
            if( _appid ){
                wx.navigateToMiniProgram({
                    appId: _appid,
                    path: _path,
                });
            }
        }else{
            let tabPathLink = link.split('?')[0];
            if( appConfig.tabPath.indexOf(tabPathLink)!=-1 ){
                wx.switchTab({
                    url: link,
                });
            }else{
                wx.navigateTo({
                    url: link
                });
            }
        }            
    }    
}

// 价格转换（分转元）
export const formatMoney = function (value){
    value = Number(value);
    if( isNaN(value) ) {
        return '--';
    }
    value = Number((value/100).toFixed(2));
    if( Math.abs(value)<1000 ) {
        return value;
    }
    return String(value).replace(/./g, (c, i, a) => i && c !== '.' && !((a.length - i) % 3) ? ',' + c : c);
}

// 特殊字符串检查
export const characterJudge = function (data) {
    let t = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/;
    return t.test(data);
}

// 随机素组
export const randomArr = function (data, correct_answer) {
    return data.sort(()=>{
        return Math.random()-0.5;
    });
}

// 获取当前小程序链接和参数
export const getCurrentPage = function (param=true){
    let _getCurrentPages = getCurrentPages()||[];
    let _Pages = _getCurrentPages[_getCurrentPages.length-1]||{};
    let _route = _Pages.route;
    let _parameter = urlEncode(_Pages.options).slice(1);
    let pagesUrl = param ? (_route+(_parameter?'?'+_parameter:_parameter)) : _route;
    return pagesUrl;
}

// obj转url参数
export const urlEncode = function(param, key, encode) {
    if (param==null) return '';
    var paramStr = '';
    var t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '='  + ((encode==null||encode) ? encodeURIComponent(param) : param); 
    } else {
        for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i)
            paramStr += urlEncode(param[i], k, encode)
        }
    }
    return paramStr;  
}

// 上传文件
export const chooseMediaUpload=function(opt={}){
    return new Promise(function (resolve) {
        wx.chooseMedia({
            count: opt.count||9,
            mediaType: opt.mediaType||['image', 'video'],
            sourceType: opt.sourceType||['album', 'camera'],
            maxDuration: opt.maxDuration||30,
            camera: 'back',
            success: async (res)=> {
                console.log(res);
                let tempFiles = res.tempFiles;                
                wx.showLoading({
                    title:'正在上传',
                    mask: true,
                });

                // 视频长度超过
                if( opt.maxDuration&&res.type=="video"&&tempFiles[0].duration>opt.maxDuration ){
                    wx.showToast({
                        title: '视频长度不能大于'+opt.maxDuration+'s',
                        icon: 'none',
                    });
                    return;
                }

                let uploadArr = [];
                tempFiles.forEach(item=>{                    
                    uploadArr.push(item.tempFilePath);
                    if( opt.isUploadPoster&&res.type=='video' ){
                        // 视频封面（视频不能多个一起上传）               
                        uploadArr.push(item.thumbTempFilePath); 
                    }                    
                });

                let uplaodRes = await uploadFile(uploadArr); 
                if( !uplaodRes ){
                    wx.showToast({
                        title: '上传失败',
                        icon: 'none',
                    });
                    wx.hideLoading();
                    return;
                }
                wx.hideLoading();
                resolve({
                    type: res.type||'image',
                    result: uplaodRes,
                });
            },
            fail:()=> {
                wx.hideLoading();
            },
        });
    });
}

/**
 * 时间戳转年月日
 * @param strDate
 * @returns {string}
 */

export const formatDateTime = function (strDate) {
    if (this.isEmpty(strDate)) return ''; //如果传过来为空那么就是空字符串
    strDate = strDate + '';
    if (strDate.length === 10) strDate = strDate + '000';
    let date = new Date(Number(strDate));
    return date.getFullYear() + "-" + (formatDateTimeToDouble(date.getMonth() + 1)) + "-" + formatDateTimeToDouble(date.getDate()) +
      " " + formatDateTimeToDouble(date.getHours()) + ":" + formatDateTimeToDouble(date.getMinutes()) + ":" +
      formatDateTimeToDouble(date.getSeconds());
};
  
function formatDateTimeToDouble(s) {
    return s < 10 ? '0' + s : s;
}

/**
 * 判断是不是空的字符串
 * @param obj
 * @returns {boolean}
 */

export const isEmpty = function (obj) {
    return this.isNull(obj) || obj === '';
};

/**
 * 判断是不是空的或者undefined
 * @param obj
 * @returns {boolean}
 */

export const isNull = function (obj) {
    return obj === null || typeof obj === 'undefined' || obj === undefined;
};
/**
 * 监听事件删除重复的
 * @param {*} eventHub 
 */
export const eventHubDelRepeat = function(eventHub,types){
    if(eventHub._events&&types&&types.length){
        var _events = eventHub._events;
        for(let i=0;i<types.length;i++){
            if(_events[types[i]]){
                eventHub.$off(types[i])
            }
        }
    }else if(eventHub._events){
        var _events = eventHub._events;
        for (const key in _events) {
            if (_events.hasOwnProperty(key)) {
                const item = _events[key];
                if(!isArray(item)) break;
                if(item.length&&item.length>1){
                    eventHub._events[key]=[eventHub._events[key][item.length-1]]
                }
            }
        }
    }
}
/**
 * 判断是不是数组
 * @param {*} o 数组
 */
export const isArray = function(o){
    return Object.prototype.toString.call(o)== '[object Array]';
}


/**
 * 
 * @method 方法名 微信事件分享
 * @param {String} name 事件方法名称
 * @param@param {Object} data 记录的数据
 */
function wxReportEventFunc(name,data){
    switch (name) {
        case 'click_event':
            wx.reportAnalytics(name,{
                is_member:data.eventIsMember,
                version:data.eventVersion,
                event_name:data.eventName,
                scene:data.eventScene,
            });
            break;
        case 'tiyan_user':
            wx.reportAnalytics(name,{
                tiyan_user_scene: data.eventTiyanUserScene,
            });
            break;
        case 'pages_share':
            wx.reportAnalytics(name, {
                share_pages: data.eventSharePages,
                share_type: data.eventShareType
            });
            break;
        case 'scan':
            wx.reportAnalytics(name, {
                scan_scene: data.eventScene
            });
            break;
        default:
            break;
    }
}