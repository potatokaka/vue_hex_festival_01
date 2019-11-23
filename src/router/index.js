import Vue from 'vue';
import Router from 'vue-router';
// 前台
import CustomerOrders from '@/components/pages/CustomerOrders';
import CustomerCheckout from '@/components/pages/CustomerCheckout';
import Programs from '@/components/pages/Lineup';
import Test from '@/components/Test';
import Tickets from '@/components/pages/Home';
// 後台 Dashboard
import Login from '@/components/dashboard/Login';
import Dashboard from '@/components/dashboard/Dashboard';
import ProductsPlan from '@/components/dashboard/ProductsPlan';
import Orders from '@/components/dashboard/Orders';
import Coupons from '@/components/dashboard/Coupons';
import LineupDash from '@/components/dashboard/LineupDash';

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active', // 標示 current 當頁
  // mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Tickets,
    },
    {
      path: '/lineup',
      name: 'Lineup',
      component: Programs,
    },
    {
      path: '/checkout',
      name: 'CustomerOrders',
      component: CustomerOrders,
    },
    {
      path: '/checkout/:orderId',
      name: 'CustomerCheckout',
      component: CustomerCheckout,
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '*', // 避免用戶進入不存在的頁面
      redirect: '/',
    },
    // 後台----------------------------------
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'products', //前面不需要 "/"
          name: 'ProductsPlan',
          component: ProductsPlan,
          meta: { requiresAuth: true }, //進入 Product 之前，需要驗證
        },
        {
          path: 'orders',
          name: 'Orders',
          component: Orders,
          meta: { requiresAuth: true },
        },
        {
          path: 'coupons',
          name: 'Coupons',
          component: Coupons,
          meta: { requiresAuth: true },
        },
        {
          path: 'lineupList',
          name: 'Lineup List',
          component: LineupDash,
          meta: { requiresAuth: true },
        },
      ]
    },
  ]
})
