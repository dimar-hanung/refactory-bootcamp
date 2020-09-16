import Vue from 'vue'
import Vuetify from 'vuetify'
import '@fortawesome/fontawesome-free/css/all.css' 
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

// const opts = {}
export default new Vuetify({
    icons: {
      iconfont: 'fa',
    },
    theme: { disable: true }
  })