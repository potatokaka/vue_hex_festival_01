import Vue from 'vue';
import Router from 'vue-router';

import CustomerOrders from '@/components/pages/CustomerOrders';
import CustomerCheckout from '@/components/pages/CustomerCheckout';
import Programs from '@/components/pages/Lineup';

import Test from '@/components/Test';

import Tickets from '@/components/pages/Home';

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active', //標示 current 當頁
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
      path: '*', //避免用戶進入不存在的頁面
      redirect: '/',
    },
  ]
})
