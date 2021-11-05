import useAuthStore from '@/store/auth'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {
      requiresUnauth: true,
    },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/task-create',
    name: 'TaskCreate',
    component: () => import('@/views/TaskCreate.vue'),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

const { isAuthenticated } = useAuthStore()

router.beforeEach((to, _, next) => {
  if (to.meta?.requiresAuth && !isAuthenticated.value) {
    next({ name: 'Login' })
    return
  }

  if (to.meta?.requiresUnauth && isAuthenticated.value) {
    next({ name: 'Dashboard' })
    return
  }

  next()
})

export default router
