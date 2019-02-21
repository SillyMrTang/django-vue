import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import More from '@/components/more'
import Take from '@/components/take'
import Detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/more',
      component: More
    },
    {
      path: '/take',
      component: Take
    },
    {
      path: '/detail',
      component: Detail
    }
  ]
})
