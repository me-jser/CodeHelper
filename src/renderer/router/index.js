import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    }, {
      path: '/',
      name: 'env-checker',
      component: require('@/components/EnvChecker').default
    },
    {
      path: '*',
      redirect: '/env'
    }
  ]
})
