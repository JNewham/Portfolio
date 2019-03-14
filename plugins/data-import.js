import contentJSON from '~/user.json'
import Vue from 'vue'

const observe = Vue.prototype.constructor.util.defineReactive

Vue.use({
  install (Vue) {
    Vue.prototype.$contentJSON = contentJSON
    observe(Vue.prototype.$contentJSON)
  },
})
