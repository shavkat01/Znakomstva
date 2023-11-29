<script setup> 
import { useRoute, useRouter } from 'vue-router'
import {ref} from 'vue'
import Dropdown from "../../../components/Dropdown.vue"
import {windowUiStore} from '@/stores/window-ui'

const windowUiStorage = windowUiStore()
const route = useRoute()
const router = useRouter()

</script>
<template>
  <header
    class="header fixed top-0 left-0 w-full z-10 "
    :style="windowUiStorage.login ? 'background: #2D1436' : ''"
  >
    <!-- :class="[{ 'bg-white': !isMain }]" -->
    <div class="bg-[#1B0522] text-[16px] py-[10px] items-center flex justify-center gap-3">
        <p>Знакомства по всему миру</p>
        <Dropdown />
    </div>
    <div v-if="windowUiStorage.login" class="container flex justify-between items-center py-5 flex-wrap">
        <div class="w-full flex justify-between items-center">
            <div class="flex gap-3 items-center">
                <img src="@/assets/love-birds1.svg" class="max-w-[60px]" alt="">
                <h3>Znakomstva.com</h3>
            </div>
            <!-- v-if="route.path == '/'" -->
           <ul class="flex gap-10">
            <li class="cursor-pointer" @click="router.push({path: '/anketa'})" :class="route.path.includes('/anketa') ? 'menu-active' : ''">Анкеты <span class="-bottom-9"/> </li>
            <li class="cursor-pointer" @click="router.push({path: '/message'})" :class="route.path == '/message' ? 'menu-active' : ''">Сообщения <span class="-bottom-9"/></li>
            <li class="cursor-pointer" @click="router.push({path: '/signature'})" :class="route.path == '/signature' ? 'menu-active' : ''">Подписка <span class="-bottom-9"/></li>
           </ul>

           <div class="flex gap-16">
                <Dropdown :items="['Америка', 'Россия', 'Узбекистан']"/>

                <div class="flex gap-5">
                    <img class="cursor-pointer" src="@/assets/icons/search.svg" alt="icon">
                    <div @click="windowUiStorage.chat_open = true" class="w-full flex items-center relative cursor-pointer">
                        <span class="absolute text-[10px] px-[3px] rounded-[5px] -right-4 top-1 font-bold" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);">123</span>
                        <img src="@/assets/icons/Group.svg" alt="icon">
                    </div>
                </div>
                <div @click="router.push({path: '/profile'})" class="cursor-pointer flex items-center gap-3">
                    <img src="@/assets/images/profile.svg" alt="icon">
                    <p>Иван Иванов</p>
                </div>
           </div>
        </div>
    </div>

    <!-- before login -->

    <div v-else class="container flex justify-between items-center py-5 flex-wrap">
        <div class="flex gap-3 items-center">
            <img src="@/assets/love-birds1.svg" class="max-w-[60px]" alt="">
            <h3>Znakomstva.com
            </h3>
        </div>
        <div v-if="route.path == '/sign-up'" class="flex gap-3 items-center">
            <h4>Уже есть аккаунт?</h4>
            <button @click="router.push({ path: '/'})" class="custom-btn">Войти</button>
        </div>
        <div v-else class="flex gap-3 items-center">
            <h4>Впервые здесь?</h4>
            <button @click="router.push({ path: '/sign-up'})" class="custom-btn">Регистрация</button>
        </div>
    </div>
  </header>
</template>