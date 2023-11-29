<script setup> 
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'
import {windowUiStore} from '@/stores/window-ui'

const windowUiStorage = windowUiStore()

const bar_open = ref(false)
const route = useRoute()
const router = useRouter()


function pushRouteFun(path){
    router.push({path: path})
    bar_open.value = false
}
</script>
<template>
    <header :style="windowUiStorage.chat_open ? 'background: #2D1436': ''" style="z-index: 110;" v-if="windowUiStorage.login" class="header fixed flex justify-between w-full items-center p-3">
        <img src="@/assets/love-birds1.svg" class="w-[40px] cursor-pointer" alt="">
        <img src="@/assets/icons/search.svg" class="w-[30px] cursor-pointer" alt="icon">
        <img @click="windowUiStorage.chat_open = true" src="@/assets/icons/Group.svg" class="w-[30px] cursor-pointer" alt="icon">
        <img src="@/assets/images/profile.svg" class="w-[40px] cursor-pointer" alt="icon">
        <img @click="bar_open = true" src="@/assets/icons/menu.svg" class="w-[50px] cursor-pointer" alt="icon">

    </header>
    
    
    
    <!-- before login -->
  <header
    v-else
    class="header py-5"
  >
    <div class="flex gap-3 justify-center items-center">
        <img src="@/assets/love-birds1.svg" class="max-w-[60px]" alt="">
        <h3 class="text-[22px]">Znakomstva.com</h3>
    </div>
    <div class="text-center mt-2">
       <div v-if="route.path == '/sign-up'">
            <h4>Уже есть аккаунт?</h4>
            <button @click="router.push({ path: '/'})" class="custom-btn mt-2">Войти</button>
        </div>
        <div v-else>
            <h4>Впервые здесь?</h4>
            <button @click="router.push({ path: '/sign-up'})" class="custom-btn mt-2">Регистрация</button>
        </div>
    </div>
  </header>



    <!-- MobileNavbarMenu -->

    <div v-if="bar_open" style="z-index: 200" class="fixed top-0 p-3 w-[100vw] h-[100vh] bg-[#230E2B]">
        <div class="mt-3">
            <div @click="bar_open = false" class="cursor-pointer flex justify-end" >
                <img  src="@/assets/icons/close.svg" class="w-[40px]" alt="icon">
            </div>
            <ul class="text-center text-[28px]">
                <li class="cursor-pointer mt-6" @click="pushRouteFun('/anketa')" :class="route.path.includes('/anketa') ? 'menu-active' : ''">Анкеты <span class="span-mob -bottom-3"/> </li>
                <li class="cursor-pointer mt-6" @click="pushRouteFun('/message')" :class="route.path == '/message' ? 'menu-active' : ''">Сообщения <span class="span-mob -bottom-3"/></li>
                <li class="cursor-pointer mt-6" @click="router.push({path: '/signature'})" :class="route.path == '/signature' ? 'menu-active' : ''">Подписка <span class="span-mob -bottom-3"/></li>
           </ul>
        </div>
    </div>


</template>