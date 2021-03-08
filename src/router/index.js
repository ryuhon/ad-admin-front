import Vue from "vue";
import VueRouter from "vue-router";
import VueSessionStorage from 'vue-sessionstorage';
Vue.use(VueSessionStorage);
Vue.use(VueRouter);
const session = Vue.prototype.$session;


const checkAuth = () => (from, to, next) => {
  console.log(from.name);
  // eslint-disable-next-line no-constant-condition
  if (session.get("token") != "" && session.get("token") != null ) {


    return next();
  } else {
    next('/login');
  }
}
const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import('@/views/Login')
  },
  {
    path: "/",
    name: "Main",
    component: () => import('@/views/Main'),
    beforeEnter: checkAuth(),
    children: [
      {
        path: 'ad',
        name: 'Ad',
        component: () => import('@/views/Ad'),
      },
      {
        path: 'ad-setting',
        name: 'AdSetting',
        component: () => import('@/views/AdSetting'),
        props: true
      },
      {
        path: 'report',
        name: 'Report',
        component: () => import('@/views/Report'),
      }
    ]
  }
];

const router = new VueRouter({
  mode: "hash",
  linkActiveClass: 'open active',
  base: process.env.BASE_URL,
  routes
});

export default router;
