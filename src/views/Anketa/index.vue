<script setup>
import MobileScreen from './components/MobileScreen.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

import {windowUiStore} from '@/stores/window-ui'

const windowUiStorage = windowUiStore()
</script>



<template>
<!-- md:w-[1200px] -->
    <div v-if="windowUiStorage.window_size > 768" class="container-for-menu md:mt-[165px]">
        <div class="w-full">
            <h1 class="md:text-[28px] text-[22px] mb-3 font-semibold">Топ для знакомств</h1>
            <div class="flex justify-between w-full">
                <div @click.self="router.push({path: '/message', params: {id: i}})" class="card" v-for="i in 5" :key="i">
                    <img src="@/assets/images/Cardphoto2.svg" alt="icon">
                    <div class="absolute w-full -bottom-[1px]">
                        <div class="px-4 py-6">
                            <h3 class="text-bold flex card-name">Виктор 30 <p/></h3>
                            <div class="flex gap-2 text-[12px]">
                                <img src="@/assets/icons/Russia.png" class="w-[16px]" alt="icon">
                                <p>Россия</p>
                            </div>
                        </div>
                        <button @click="windowUiStorage.chat_open = true" class="custom-btn w-full text-[14px] gap-2 py-3" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);">
                            <p>Поприветствовать</p>
                            <img src="@/assets/icons/Hand.svg" alt="icon">
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full mt-5">
            <h1 class="md:text-[28px] mb-3 text-[22px] font-semibold">Ищу парня</h1>
            <div class="flex justify-between w-full">
                <div @click.self="router.push({path: '/message', params: {id: i}})" v-for="i in 5" :key="i" class="card">
                    <img src="@/assets/images/Cardphoto3.svg" alt="icon">
                    <div class="absolute w-full -bottom-[1px]">
                        <div class="px-4 py-6">
                            <h3 class="text-bold">Виктор 30 <p/></h3>
                            <div class="flex gap-2 text-[12px]">
                                <img src="@/assets/icons/Russia.png" class="w-[16px]" alt="icon">
                                <p>Россия</p>
                            </div>
                        </div>
                        <button @click="windowUiStorage.chat_open = true" class="custom-btn w-full text-[14px] gap-2 py-3" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);">
                            <p>Поприветствовать</p>
                            <img src="@/assets/icons/Hand.svg" alt="icon">
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full mt-5">
            <h1 class="md:text-[28px] mb-3 text-[22px] font-semibold">Мужчины</h1>
            <div class="flex justify-between w-full">
                <div @click.self="router.push({path: '/message', params: {id: i}})" v-for="i in 5" :key="i" class="card">
                    <img src="@/assets/images/Cardphoto5.svg" alt="icon">
                    <div class="absolute w-full -bottom-[1px]">
                        <div class="px-4 py-6">
                            <h3 class="text-bold flex card-name">Виктор 30 <p></p></h3>
                            <div class="flex gap-2 text-[12px]">
                                <img src="@/assets/icons/Russia.png" class="w-[16px]" alt="icon">
                                <p>Россия</p>
                            </div>
                        </div>
                        <button @click="windowUiStorage.chat_open = true" class="custom-btn w-full text-[14px] gap-2 py-3" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);">
                            <p>Поприветствовать</p>
                            <img src="@/assets/icons/Hand.svg" alt="icon">
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- for mobile screen -->

    <MobileScreen v-else/>
   
</template>
<style scoped>

</style>