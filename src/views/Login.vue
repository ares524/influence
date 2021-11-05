<template>
  <main class="login">
    <h1 class="page-title">Login view</h1>

    <form class="login-form" @submit.prevent="login">
      <label class="label">
        Email:
        <input v-model="user.email" class="text-input" type="email" />
      </label>

      <label class="label">
        Password:
        <input v-model="user.password" class="text-input" type="password" />
      </label>

      <label class="label checkbox-label">
        Remember me:
        <input v-model="user.rememberMe" class="checkbox" type="checkbox" />
      </label>

      <button class="button">Log in</button>
    </form>
  </main>
</template>

<script lang="ts">
import useLogin from '@/components/login/login'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Login',
  setup() {
    const { user, login } = useLogin()

    return {
      user,
      login,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/Login';
</style>
