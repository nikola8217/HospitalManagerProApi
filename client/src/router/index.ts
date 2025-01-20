import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import AppointmentsView from '../views/AppointmentsView.vue';
import PatientsView from '../views/PatientsView.vue';
import DoctorsView from '../views/DoctorsView.vue';
import SpecializationsView from '../views/SpecializationsView.vue';
import SpecializationsFormView from '../views/SpecializationsFormView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/appointments',
    name: 'appointments',
    component: AppointmentsView
  },
  {
    path: '/patients',
    name: 'patients',
    component: PatientsView
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: DoctorsView
  },
  {
    path: '/specializations',
    name: 'specializations',
    component: SpecializationsView
  },
  {
    path: '/specializationsForm/:id?',
    name: 'specializationsForm',
    component: SpecializationsFormView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
