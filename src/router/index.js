import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '',
    component: Layout,
    redirect: 'home',
    children: [{
      path: 'home',
      name: 'Home',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'homepage_fill' }
    }]
  },

  {
    path: '/aduit',
    component: Layout,
    redirect: '/aduit/seller',
    name: 'Aduit',
    meta: { title: '审核', icon: 'task_fill' },
    children: [
      {
        path: 'seller',
        name: 'Seller',
        component: () => import('@/views/table/index'),
        meta: { title: '商家审核', icon: '' }
      },
      {
        path: 'rider',
        name: 'Rider',
        component: () => import('@/views/aduit/rider'),
        meta: { title: '骑手审核', icon: '' }
      }
    ]
  },

  {
    path: '/manage',
    component: Layout,
    redirect: '/manage/region',
    name: 'Manage',
    meta: { title: '管理', icon: 'coordinates_fill' },
    children: [
      {
        path: 'region',
        name: 'Region',
        component: () => import('@/views/table/index'),
        meta: { title: '地域管理', icon: '' }
      },
      {
        path: 'city',
        name: 'City',
        component: () => import('@/views/table/index'),
        meta: { title: '城市管理', icon: '' }
      },
      {
        path: 'area',
        name: 'Area',
        component: () => import('@/views/tree/index'),
        meta: { title: '片区管理', icon: '' }
      },
      {
        path: 'destination',
        name: 'Destination',
        component: () => import('@/views/tree/index'),
        meta: { title: '目的地管理', icon: '' }
      }
    ]
  },

  {
    path: '/statistics',
    component: Layout,
    redirect: '/statistics/pv',
    name: 'Statistics',
    meta: { title: '统计', icon: 'chart' },
    children: [
      {
        path: 'pv',
        name: 'PV',
        component: () => import('@/views/table/index'),
        meta: { title: '访问量', icon: '' }
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/table/index'),
        meta: { title: '注册量', icon: '' }
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('@/views/tree/index'),
        meta: { title: '订单量', icon: '' }
      },
      {
        path: 'delivery',
        name: 'Delivery',
        component: () => import('@/views/tree/index'),
        meta: { title: '配送量', icon: '' }
      }
    ]
  },

  {
    path: '/setup',
    component: Layout,
    redirect: '/setup/price',
    name: 'Setup',
    meta: { title: '设置', icon: 'setup_fill' },
    children: [
      {
        path: 'price',
        name: 'Price',
        component: () => import('@/views/table/index'),
        meta: { title: '费用设置', icon: '' }
      },
      {
        path: 'system',
        name: 'System',
        component: () => import('@/views/table/index'),
        meta: { title: '系统设置', icon: '' }
      }
    ]
  },

  {
    path: '/market',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '营销', icon: 'form' }
      }
    ]
  },

  {
    path: '/user',
    component: Layout,
    redirect: '/user/admin',
    name: 'User',
    meta: { title: '用户', icon: 'peoples' },
    children: [
      {
        path: 'admin',
        name: 'Admin',
        component: () => import('@/views/table/index'),
        meta: { title: '普通管理员', icon: '' }
      },
      {
        path: 'superAdmin',
        name: 'SuperAdmin',
        component: () => import('@/views/table/index'),
        meta: { title: '超级管理员', icon: '' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})

