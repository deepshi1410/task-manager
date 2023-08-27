import { createRouter, createWebHistory } from "vue-router";
// importing all the views components and registering them with the routes
import TasksList from './views/Tasks/TasksList.vue'
import TaskForm from './views/Tasks/TaskForm.vue'
const router = createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/',
    redirect: '/tasks'
  },
  {
    path: '/tasks',
    component: TasksList
  },
  {
    path: '/task-form',
    component: TaskForm
  }]
})
export default router