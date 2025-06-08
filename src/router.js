import { createRouter, createWebHistory } from 'vue-router';
import EventAlertPage from './views/EventAlertPage.vue';
import MissionSchedulePage from './views/MissionSchedulePage.vue';
import ChatPage from './views/ChatPage.vue';

const routes = [
  { path: '/', redirect: '/event-alert' },
  { path: '/event-alert', component: EventAlertPage },
  { path: '/mission-schedule', component: MissionSchedulePage },
  { path: '/chat', component: ChatPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
