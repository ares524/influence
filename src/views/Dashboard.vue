<template>
  <main class="dashboard">
    <h1 class="page-title">Dashboard view</h1>

    <p>{{ getMyProfile }}</p>
  </main>
</template>

<script lang="ts">
import useUserStore from '@/store/user'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    const { getMyProfile } = useUserStore()

    return {
      getMyProfile,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/Dashboard';
</style>
