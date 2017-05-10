import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/routes/login/Index'

import Layout from '@/routes/layout/Layout'

// dashboard首页
const dashboard = resolve => require(['./routes/dashboard/index'], resolve)

//系统管理
const UserList = resolve => require(['./routes/sys/user'],resolve)

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/login', name: '登录', component: Login },
    {
      path: '/',
      name: '首页',
      redirect: '/dashboard',
      component: Layout,
      hidden: true,
      children: [{ path: 'dashboard', component: dashboard }]
    },{
      path: '/sys',
      name: '系统管理',
      redirect: '/sys/user',
      component: Layout,
      children: [
      	{ path: 'user', name: '用户管理', component: UserList},
      	{ path: 'roles', name: '角色管理' },
      	{ path: 'permissioins', name: '权限管理' },
      	{ path: 'resources', name: '资源管理' },
      	{ path: 'permissioins', name: '权限管理' }]
    }
  ]
})
