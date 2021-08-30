// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import Vuetify from 'vuetify'
import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.min.css'
import store from '@/store/store'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Panel from '@/components/globals/Panel'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(VueYouTubeEmbed)

Vue.component('panel', Panel)

sync(store, router)

=======

Vue.config.productionTip = false

>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
<<<<<<< HEAD
  store,
  template: '<App/>',
  components: { App }
=======
  components: { App },
  template: '<App/>'
>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)
})
