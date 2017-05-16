import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/routes/login/Index'

import Layout from '@/routes/layout/Layout'

// dashboard首页
const dashboard = resolve => require(['./routes/dashboard/index'], resolve)

//系统管理
const User = resolve => require(['./routes/sys/user'],resolve)
const Permission = resolve => require(['./routes/sys/permission'],resolve)
const Role = resolve => require(['./routes/sys/role'],resolve)
const Resource = resolve => require(['./routes/sys/resource'],resolve)

//常用组件
const Tinymce = resolve => require(['./routes/component/tinymce'], resolve)
const Markdown = resolve => require(['./routes/component/markdown'], resolve)
const CountTo = resolve => require(['./routes/component/countTo'], resolve)
const AvatarUpload = resolve => require(['./routes/component/AvatarUpload'], resolve)
const Dropzone = resolve => require(['./routes/component/dropzone'], resolve)
//错误页面
const Err401 = resolve => require(['./routes/errorpage/401'], resolve)
const Err404 = resolve => require(['./routes/errorpage/404'], resolve)
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
      	{ path: 'user', name: '用户管理', component: User},
      	{ path: 'role', name: '角色管理', component: Role },
      	{ path: 'resource', name: '资源管理', component: Resource },
      	{ path: 'permission', name: '权限管理', component: Permission }]
    },{
      path: '/component',
      name: '常用组件',
      redirect: '/component/tinymce',
      component: Layout,
      children: [
        { path: 'tinymce', name: '富文本编辑器', component: Tinymce},
        { path: 'markdown', name: 'Markdown编辑器', component: Markdown},
        { path: 'CountTo', name: 'countTo', component: CountTo},
        { path: 'avatarupload', name: '头像上传', component: AvatarUpload},
        { path: 'dropzone', name: '附件上传', component: Dropzone}
        
      ]
    },{
      path: '/errorpage',
      name: '常用组件',
      redirect: '/errorpage/401',
      component: Layout,
      children: [
        { path: '401', name: '401', component: Err401},
        { path: '404', name: '404', component: Err404},
      ]
    }
  ]
})
