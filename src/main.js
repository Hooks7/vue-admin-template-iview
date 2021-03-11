import Vue from 'vue'
import axios from 'axios'
import './components/iView'
import App from './App'
import store from './store'
import router from './router'

import './permission'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
})