import useAuthStore from './auth'
import useUserStore from './user'

export default function useResetStore() {
  const auth = useAuthStore()
  const user = useUserStore()

  const reset = () => {
    auth.reset()
    user.reset()
  }

  return { reset }
}
