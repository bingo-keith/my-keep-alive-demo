import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/components/Home'),
      meta: {
        keepAlive: false
      },
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/components/Index'),
      meta: {
        keepAlive: true
      },
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('@/components/Detail'),
      meta: {
        keepAlive: false
      }
    }
  ]
})

router.afterEach((to, from) => {
  if (to.name === 'index' && from.name === 'detail' && to.meta.keepAlive) {
    // 缓存
  } else {
    setTimeout(() => {
      document.documentElement.scrollTop = 0
    }, 10)
  }
  // 只有to.name等于index 并且from.name等于detail并且keepAlive为false
  // if(to.name === 'index' && from.name !== 'detail' && !to.meta.keepAlive) {
  //   setTimeout(() => {
  //     document.documentElement.scrollTop = 0
  //   }, 20)
  // }
})

export default router
