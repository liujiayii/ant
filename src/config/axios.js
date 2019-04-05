import Vue from 'vue'
import ajax from 'axios'
/*注册Axios*/
const instance = ajax.create({
  baseURL: '/',
  transformRequest: [/*将JSON字符串转换成FormData*/
    function (data) {
      let ret = '';
      for (let it in data) {
        ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&';
      }
      return ret;
    }
  ]
})
/*注册图片上传*/
const _instance = ajax.create({
  baseURL: '/'
})
Vue.prototype.$ajax = instance
Vue.prototype.$_ajax = _instance
