import { ref } from 'vue'

const isOpen = ref<boolean>(false)

export const useSidebar = () => {
  return { isOpen }
}
