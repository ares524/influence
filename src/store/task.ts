import { computed, Ref, ref } from 'vue'
import { CreateTaskResponse } from '@/types/task.model'

const myTask: Ref<Array<CreateTaskResponse> | []> = ref([])

export default function useTaskStore() {
  const getTask = computed(() => myTask.value)
  const setTask = (data: Array<CreateTaskResponse> | []) => {
    myTask.value = data
  }

  const reset = () => {
    setTask([])
  }

  return {
    getTask,
    setTask,
    reset,
  }
}
