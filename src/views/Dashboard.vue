<template>
  <main class="dashboard">
    <h1 class="page-title">Dashboard view</h1>

    <h3 v-if="getMyProfile" class="margin-bottom-15">
      Marketer: {{ getMyProfile.marketer.firstName + ' ' + getMyProfile.marketer.lastName }}
    </h3>
    <h3 v-if="getMyProfile" class="margin-bottom-15">
      Influencer: {{ getMyProfile.influencer.firstName + ' ' + getMyProfile.influencer.lastName }}
    </h3>
    <table id="customers">
      <thead>
        <tr>
          <th>title</th>
          <th>description</th>
          <th>budget</th>
          <th>proposalCount</th>
          <th>platforms</th>
          <th>addedTime</th>
        </tr>
        <tr v-for="(task, index) in getTask" :key="index">
          <td>{{ task.title }}</td>
          <td>{{ task.description }}</td>
          <td>{{ task.budget.value + task.budget.currency }}</td>
          <td>{{ task.proposalCount }}</td>
          <td>{{ task.platforms.join(',') }}</td>
          <td>{{ task.addedTime }}</td>
        </tr>
      </thead>
    </table>
  </main>
</template>

<script lang="ts">
import useUserStore from '@/store/user'
import useTaskStore from '@/store/task'
import { onMounted, defineComponent } from 'vue'
import useUserAuthentificationController from '@/controllers/useUserAuthentificationController'
import useTaskManageController from '@/controllers/useTaskManageController'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    const { getMyProfile } = useUserStore()
    const { getTask } = useTaskStore()
    const authController = useUserAuthentificationController()
    const taskController = useTaskManageController()
    onMounted(() => {
      authController.checkLogin()
      taskController.getTaskApi()
    })
    return {
      getMyProfile,
      getTask,
    }
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/views/Dashboard';
</style>
