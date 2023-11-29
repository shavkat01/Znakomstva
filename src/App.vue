<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "@/layouts/navbar/index.vue"
import Footer from "@/layouts/footer/index.vue"
import {windowUiStore} from './stores/window-ui'



const windowUiStorage = windowUiStore()

windowUiStorage.login = localStorage.getItem('login')

windowUiStorage.window_size = window.innerWidth

window.addEventListener('resize', ()=>{
  windowUiStorage.window_size = window.innerWidth
})

</script>

<template>
  <Navbar />
  
  <div class="h-[100vh] flex flex-col justify-between">
    <RouterView />

    <Footer />
  </div>
</template>

<style scoped>

</style>
