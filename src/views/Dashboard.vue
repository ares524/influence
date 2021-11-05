<template>
  <main class="dashboard">
    <h1 class="page-title">Dashboard view</h1>

    <p>{{ getMyProfile }}</p>
  </main>
</template>

<script lang="ts">
import useUserStore from '@/store/user'
import { reactive, onMounted, ref, defineComponent } from 'vue'
import useUserAuthentificationController from '@/controllers/useUserAuthentificationController'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    const { getMyProfile } = useUserStore()
    const authController = useUserAuthentificationController()
    onMounted(() => {
      authController.checkLogin()
    })
    return {
      getMyProfile,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/Dashboard';
</style>
