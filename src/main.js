import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems, options);
});

new Vue({
  render: h => h(App),
}).$mount('#app')

