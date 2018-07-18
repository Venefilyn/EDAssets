import Vue from 'vue'
import Router from 'vue-router'
import MainLayout from '@/components/MainLayout'
import Home from '@/components/Home'
import AssetDisplay from '@/components/AssetDisplay'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      children: [
        {
          path: '',
          component: Home
        },
        {
          path: '**',
          component: AssetDisplay
        }
      ]
    }
  ]
})
