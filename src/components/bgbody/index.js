const LoadingComponent = require('./bgbody.vue')
const loading = {
  install: function(Vue) {
    Vue.component('bgbody', LoadingComponent)
  }
}
module.exports = loading

