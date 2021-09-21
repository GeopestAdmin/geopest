import { createWebHistory, createRouter } from 'vue-router';
import Home                               from '../pages/Home.vue';
import Services                           from '../pages/Services.vue';
import Contact                            from '../pages/ContactUs.vue';
import Enemy                              from '../pages/Enemy.vue';
import Equipment                          from '../pages/Equipment.vue';
import Covid                              from '../pages/Covid.vue';
import Testimonials                       from '../pages/Testimonials.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/services',
    name: 'services',
    component: Services
  },
  {
    path: '/contact-us',
    name: 'contact',
    component: Contact
  },
  {
    path: '/know-your-enemy',
    name: 'enemy',
    component: Enemy
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: Equipment
  },
  {
    path: '/covid',
    name: 'covid',
    component: Covid
  },
  {
    path: '/testimonials',
    name: 'testimonials',
    component: Testimonials
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;