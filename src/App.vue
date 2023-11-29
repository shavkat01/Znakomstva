<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/layouts/navbar/index.vue"
import Footer from "@/layouts/footer/index.vue"
import {windowUiStore} from './stores/window-ui'


import Chat from '@/components/Chat.vue'

const windowUiStorage = windowUiStore()

windowUiStorage.login = localStorage.getItem('login')

windowUiStorage.window_size = window.innerWidth

window.addEventListener('resize', ()=>{
  windowUiStorage.window_size = window.innerWidth
})

</script>

<template>
  <Chat v-if="windowUiStorage.chat_open"/>



  <Navbar />
  
  <div class="h-[100vh] flex flex-col justify-between">
    <RouterView />

    <Footer />
  </div>
</template>

<style scoped>

</style>
