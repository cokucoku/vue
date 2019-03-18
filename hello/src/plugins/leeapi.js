import axios from 'axios'
var getapi = {};
getapi.install = function(Vue, opt) {
    Vue.prototype.leeapi = function(apiurl, methods, postdata) {
        return axios({
            method: methods,
            //baseURL: 'http://localhost:81/api/', //根目录
            url: apiurl,
            params: postdata
        })
    }
}
export default getapi;