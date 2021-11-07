import api from '@/services/api'
import { TaskInfoToCreate, CreateTaskResponse, GetTaskResponse } from '@/types/task.model'
import useTaskStore from '@/store/task'

const { setTask, getTask } = useTaskStore()

const createApi = async (task: TaskInfoToCreate) => {
  return await api.post<CreateTaskResponse>('tasks', task).then((response) => {
    return response
  })
}

const getTaskApi = async () => {
  return await api.get<GetTaskResponse>(`tasks?limit=5`).then((response) => {
    setTask(response.data.tasks)
    return response
  })
}

export default function useTaskManageController() {
  return {
    createApi,
    getTaskApi,
  }
}
