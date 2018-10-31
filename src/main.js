import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import api from './js/api'
import inputValidate from './js/inputValidate'
import router from './js/router'

Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.api = api;
Vue.prototype.inputValidate = inputValidate;

Vue.prototype.$http.interceptors.request.use(function (config) {
    config.headers['X-CSRF-TOKEN'] =  sessionStorage.getItem('X-CSRF-TOKEN');
    config.headers['role'] = sessionStorage.getItem('role');
    config.headers['userId'] = sessionStorage.getItem('userId');
    return config;
}, function (error) {
    return Promise.reject(error);
});



axios.interceptors.response.use(function (response) {
    if(response.data.resCode) {
        alert(response.data.resMsg)
    }
    return response;
}, function (error) {
    // 对响应错误做点什么
    let status = error.response.status;
    if(status === 403) {
        router.push('/login');
    }
    return Promise.reject(error);
});

new Vue({
    router: router,
    render: h => h(App)
}).$mount('#app');
