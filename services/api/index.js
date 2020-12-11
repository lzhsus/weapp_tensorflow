import apiRequest from "./apiRequest";
import appConfig from '../../common/appConfig';
import { globalApi } from "./global";

let Api = globalApi;

//测试
Api.test = function(data, opt={}){
    return apiRequest('miniapp/api/test', data, { ...{method:'POST',isShowLoading:true, isShowError:true} ,...opt });
}

export default Api;
