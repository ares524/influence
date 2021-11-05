<template>
  <nav class="nav">
    <template v-if="isAuthenticated">
      <router-link class="nav-item" :to="{ name: 'Dashboard' }">Dashboard</router-link>
      <router-link class="nav-item" :to="{ name: 'TaskCreate' }">Create Task</router-link>
      <button class="nav-item logout-button" @click="logout">Log out</button>
    </template>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import useAuthStore from '@/store/auth'
import useUserAuthentificationController from '@/controllers/useUserAuthentificationController'

export default defineComponent({
  name: 'AppNav',
  setup() {
    const router = useRouter()
    const { isAuthenticated } = useAuthStore()
    const authController = useUserAuthentificationController()

    const logout = () => {
      authController.logout()
      router.push({ name: 'Login' })
    }

    return {
      isAuthenticated,
      logout,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/layout/AppNav';
</style>
