import Vue from 'vue'
import Router from 'vue-router'
import FastClick from 'fastclick'

import Vum from 'vum'

// demos
import Index from './components/Index'

Vue.use(Router)
Vue.use(Vum)

let App = Vue.extend()

let router = new Router()

router.map({
  '/': {
    name: 'index',
    component: Index
  }
})

router.start(App, '#app')

Vum.router(router)  // config router by vum

FastClick.attach(document.body)
