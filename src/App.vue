<template>
  <AppNav />

  <router-view />
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { useRouter } from 'vue-router'
import useAuthStore from '@/store/auth'
import useResetStore from './store/reset'
import AppNav from './components/layout/AppNav.vue'

export default defineComponent({
  name: 'App',
  components: { AppNav },
  setup() {
    const router = useRouter()
    const { isAuthenticated } = useAuthStore()
    const { reset } = useResetStore()

    if (!isAuthenticated.value && router.currentRoute.value.meta?.requiresAuth) {
      router.push('/login')
    }

    watch(isAuthenticated, (c) => {
      if (!c) {
        if (router.currentRoute.value.meta?.requiresAuth) {
          router.push('/login')
        }
        reset()
      }
    })

    return {
      isAuthenticated,
    }
  },
})
</script>

<style lang="scss">
@import '@/assets/styles/reset';
@import '@/assets/styles/main';
</style>
