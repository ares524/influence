import { computed, Ref, ref } from 'vue'
import { UserPublicInfo } from '@/types/user.model'

const myProfile: Ref<UserPublicInfo | null> = ref(null)

export default function useUserStore() {
  const getMyProfile = computed(() => myProfile.value)
  const setMyProfile = (data: UserPublicInfo | null) => {
    myProfile.value = data
  }

  const reset = () => {
    setMyProfile(null)
  }

  return {
    getMyProfile,
    setMyProfile,
    reset,
  }
}
