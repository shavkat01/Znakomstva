<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';

import { useRouter } from 'vue-router'

const router = useRouter()


import {windowUiStore} from '@/stores/window-ui'

const windowUiStorage = windowUiStore()
</script>
<template>
     <div class="py-3 pl-3 w-[100vw] mt-16">
        <div style="overflow-x: hidden">
            <h1 class="pb-3 text-[22px] font-semibold">Топ для знакомств</h1>
            <Swiper 
                style="width: calc(100vw + 70px)"
                :slides-per-view="windowUiStorage.window_size > 600 ? 3 : 2" 
                :space-between="2" 
                :modules="[Navigation]" 
            >
                <SwiperSlide @click="router.push({path: '/message', params: {id: i}})" v-for="i in 5" :key="i" class="relative w-[75vw]">
                    <img src="@/assets/images/Cardphoto2.svg" alt="icon">
                    <div class="absolute w-full -bottom-[2px]">
                        <div class="px-4 py-6">
                            <h3 class="text-bold flex card-name">Виктор 30 <p/></h3>
                            <div class="flex gap-2 text-[12px]">
                                <img src="@/assets/icons/Russia.png" class="w-[16px]" alt="icon">
                                <p>Россия</p>
                            </div>
                        </div>
                        <button class="custom-btn text-[14px] gap-2 py-3" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);">
                            <p>Поприветствовать</p>
                            <img src="@/assets/icons/Hand.svg" alt="icon">
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div style="overflow-x: hidden" class="mt-5">
            <h1 class="pb-3 text-[22px] font-semibold">Ищу парня</h1>
            <Swiper 
                style="width: calc(100vw + 70px)"
                :slides-per-view="windowUiStorage.window_size > 600 ? 3 : 2" 
                :space-between="2" 
                :modules="[Navigation]" 
            >
                <SwiperSlide @click="router.push({path: '/message', params: {id: i}})" v-for="i in 5" :key="i" class="relative w-[75vw]">
                    <img src="@/assets/images/Cardphoto3.svg" alt="icon">
                    <div class="absolute w-full -bottom-[2px]">
                        <div class="px-4 py-6">
                            <h3 class="text-bold flex ">Виктор 30 <p/></h3>
                            <div class="flex gap-2 text-[12px]">
                                <img src="@/assets/icons/Russia.png" class="w-[16px]" alt="icon">
                                <p>Россия</p>
                            </div>
                        </div>
                        <button class="custom-btn text-[14px] gap-2 py-3" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);">
                            <p>Поприветствовать</p>
                            <img src="@/assets/icons/Hand.svg" alt="icon">
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div style="overflow-x: hidden" class="mt-5">
            <h1 class="pb-3 text-[22px] font-semibold">Мужчины</h1>
            <Swiper 
                style="width: calc(100vw + 70px)"
                :slides-per-view="windowUiStorage.window_size > 600 ? 3 : 2" 
                :space-between="2" 
                :modules="[Navigation]" 
            >
                <SwiperSlide @click="router.push({path: '/message', params: {id: i}})" v-for="i in 5" :key="i" class="relative w-[75vw]">
                    <img src="@/assets/images/Cardphoto5.svg" alt="icon">
                    <div class="absolute w-full -bottom-[2px]">
                        <div class="px-4 py-6">
                            <h3 class="text-bold flex card-name">Виктор 30 <p/></h3>
                            <div class="flex gap-2 text-[12px]">
                                <img src="@/assets/icons/Russia.png" class="w-[16px]" alt="icon">
                                <p>Россия</p>
                            </div>
                        </div>
                        <button class="custom-btn text-[14px] gap-2 py-3" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);">
                            <p>Поприветствовать</p>
                            <img src="@/assets/icons/Hand.svg" alt="icon">
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>