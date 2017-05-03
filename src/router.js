import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/routes/layout/Layout'

// dashboard
const dashboard = resolve => require(['./routes/dashboard/index'], resolve);

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      redirect: '/dashboard',
      component: Layout,
      children: [{ path: 'dashboard', component: dashboard }]
    }
  ]
})
