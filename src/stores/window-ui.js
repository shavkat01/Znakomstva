import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const windowUiStore = defineStore('windowUi', {
  // const window_size = ref(0)
  // const doubleCount = computed(() => count.value * 2)
  // function increment() {
  //   count.value++
  // }

  // window.addEventListener('resize', window_size.value)
  // console.log(window_size);

  // function windowSize(){
  //   window.addEventListener('resize', window_size.value)
  // }
  
  // return { count, doubleCount, increment, windowSize }
  state: () => ({
    window_size: 10,
    login: false,
    chat_open: false
  })
})
