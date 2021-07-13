import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'swiper/dist/css/swiper.min.css'
import 'swiper/dist/js/swiper.min'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false


Vue.use(VueAxios, axios)=[';']

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

