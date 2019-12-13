import Vue from 'vue'
import router from './router'
import store from './store'
import singleSpaVue from 'single-spa-vue'
import App from './App.vue'

Vue.config.productionTip = false

// 动态路径用于异步加载模块
__webpack_public_path__ = '/app2/'

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    router,
    store,
    el: '#root',
    render: h => h(App)
  }
})

export const bootstrap = [vueLifecycles.bootstrap]
export const mount = [vueLifecycles.mount]
export const unmount = [vueLifecycles.unmount]
