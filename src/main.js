import Vue from 'vue'
import App from './App.vue'
// import router from './router'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(Vue2TouchEvents, {
  tapTolerance: 40,
});

Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(App),
  data: {
  }
}).$mount('#app')
