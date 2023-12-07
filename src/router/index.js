import { createRouter, createWebHashHistory } from "vue-router"

const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About</div>' }

const routes = [
    {
      path: '/',
      component: () => import('../layouts/default/Default.vue'),
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('../components/Home.vue'),
        },
        {
          path: 'about',
          name: 'About',
          component: () => import('../components/About.vue'),
        },
      ],
    },
  ]

export default createRouter({
  history: createWebHashHistory(),
  routes,
})
