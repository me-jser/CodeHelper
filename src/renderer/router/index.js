import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/home',
      name: 'home-page',
      component: require('@/components/Home').default
    }, 
    {
      path: '/env',
      name: 'env-checker',
      component: require('@/components/EnvChecker').default
    }, 
    {
      path: '/git-commiter',
      name: 'git-commiter',
      component: require('@/components/GitCommiter').default
    },
    {
      path: '/dir',
      name: 'dir',
      component: require('@/packages/ShowFolder').default
    },
    {
      path: '*',
      redirect: '/home'
    }
  ]
})