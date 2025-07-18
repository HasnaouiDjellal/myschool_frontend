import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from './views/Dashboard.vue'
import Forms from './views/Forms.vue'
import Tables from './views/GroupsHub/Tables.vue'
import GroupeDetailsRVO from './views/GroupsHub/GroupeDetailsRVO.vue'
import GroupeDetailsTutoring from './views/GroupsHub/GroupeDetailsTutoring.vue'
import GroupeDetailsEvents from './views/GroupsHub/GroupeDetailsEvents.vue'
import UIElements from './views/UIElements.vue'
import Login from './views/Login.vue'
import Modal from './views/Modal.vue'
import Card from './views/Card.vue'
import Blank from './views/Blank.vue'
import RegistrationHub from './views/RegistrationHub/RegistrationHub.vue'
import test from './views/PrintingHub/test.vue'


const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta: { layout: 'empty' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/forms',
    name: 'Forms',
    component: Forms,
  },
  {
    path: '/cards',
    name: 'Cards',
    component: Card,
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables,
  },
  {
    path: '/ui-elements',
    name: 'UIElements',
    component: UIElements,
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal,
  },
  {
    path: '/blank',
    name: 'Blank',
    component: Blank,
  },
  {
    path: '/registrationhub',
    name: 'Registration Hub',
    component: RegistrationHub,
  },
  {
    path: '/test',
    name: 'test',
    component: test,
  },
  {
    path: '/GroupeDetailsRVO',
    name: 'GroupeDetailsRVO',
    component: GroupeDetailsRVO,
  },
  {
    path: '/GroupeDetailsTutoring',
    name: 'GroupeDetailsTutoring',
    component: GroupeDetailsTutoring,
  },
  {
    path: '/GroupeDetailsEvents',
    name: 'GroupeDetailsEvents',
    component: GroupeDetailsEvents,
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
