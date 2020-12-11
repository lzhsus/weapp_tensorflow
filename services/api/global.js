import appConfig from '../../common/appConfig';
import request from "./request";
import apiRequest from "./apiRequest";

let globalApi = {}; 
globalApi.login = function(data){
    let header = {
        'appid': appConfig.appid,
    }
    return request('miniapp/api/login', data, 'POST', header)
}

//扫描日志
globalApi.scan = function(data, opt={}){
    return apiRequest('miniapp/api/qr/scan', data, { ...{method:'POST',isShowLoading:true, isShowError:true} ,...opt });
}

//获取手机
globalApi.loginPhonenumber = function(data, opt={}){
    return apiRequest('miniapp/api/login/phone-number', data, { ...{method:'POST',isShowLoading:true, isShowError:true} ,...opt });
}

//获取用户信息
globalApi.userInfo = function(data, opt={}){
    return apiRequest('miniapp/api/login/user-info', data, { ...{method:'POST',isShowLoading:true, isShowError:true} ,...opt });
}

//上传文件
globalApi.ossSign = function(data, opt={}){
    return apiRequest('oss/api/file/info', data, { ...{method:'GET',isShowLoading:true, isShowError:true} ,...opt });
}

//订阅消息

globalApi.recordSubscribeUser = function(data, opt={}){
    return apiRequest(appConfig[appConfig.envVersion].serverPathQH+'minitestlongtime/api/index/record-subscribe-user', data, { ...{method:'POST',isShowLoading:false, isShowError:false} ,...opt });
}

export { globalApi }