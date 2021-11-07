<template>
  <main class="task-create">
    <h1 class="page-title">Task Create view</h1>
    <form class="login-form" @submit.prevent="create">
      <label class="label">
        Title:
        <input v-model="task.title" class="text-input" type="text" />
        <p v-if="errors.title.status" class="error">{{ errors.title.msg }}</p>
      </label>

      <label class="label">
        Description:
        <textarea v-model="task.description" class="textarea-input" rows="4" />
        <p v-if="errors.description.status" class="error">{{ errors.description.msg }}</p>
      </label>

      <label class="label">
        Budget:
        <div class="budget-section">
          <input v-model="task.budget.value" class="budget-input" type="number" />
          <select v-model="task.budget.currency">
            <option v-for="(currency, index) in Object.values(Currency)" :key="index">
              {{ currency }}
            </option>
          </select>
        </div>
        <p v-if="errors.budget.status" class="error">{{ errors.budget.msg }}</p>
      </label>

      <label class="label">
        Platforms:
        <div v-for="(platform, index) in Object.values(Platform)" :key="index" class="platform-section">
          <label class="checkbox-label">
            <input :id="platform" v-model="task.platforms" class="checkbox" type="checkbox" :value="platform" />
            {{ platform }}
          </label>
        </div>
        <p class="error"></p>
      </label>

      <button class="button">Create Task</button>
    </form>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import useCreateTask from '@/components/task/create'
import { Currency } from '@/types/money.model'
import { Platform } from '@/types/platform.model'

export default defineComponent({
  name: 'TaskCreate',
  setup() {
    const { task, errors, create } = useCreateTask()

    return {
      Currency,
      Platform,
      task,
      errors,
      create,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/TaskCreate';
</style>
