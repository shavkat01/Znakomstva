<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import {ref} from 'vue'
import MobileScreen from './components/MobileScreen.vue'
// import Chat from '@/components/Chat.vue'

import {windowUiStore} from '@/stores/window-ui'

const windowUiStorage = windowUiStore()

const chat_open = ref(false)

</script>

<template>

<!-- <Chat @close="chat_open=false" v-if="chat_open"/> -->

    <div  v-if="windowUiStorage.window_size > 768" class="container-for-menu md:max-w-[1200px] md:mt-[165px]">
        <Swiper 
            class="w-full"
            :slides-per-view="1" 
            :space-between="2" 
            :navigation="true"
            :modules="[Navigation]" 
        >
            <SwiperSlide v-for="i in 5" :key="i" class="px-24 w-full">
                <div class="w-full flex justify-between">
                    <div class="w-[40%] flex flex-col justify-between">
                        <div class="relative">
                            <img src="@/assets/images/candidate-main.svg" class="w-full" alt="icon">
                            <div style="background-image: linear-gradient(to right, #EE0979, #FF6A00); box-shadow: 0px 5px 30px #EE0979, 0px 5px 30px #FF6A00;" class="w-16 h-16 rounded-full absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center">
                                <img src="@/assets/icons/favourite.svg" class="w-[20px]" alt="icon">
                            </div>
                        </div>
                        <div class="flex justify-between mt-3">
                            <img src="@/assets/images/candidate1.svg" class="w-[80px]" alt="icon">
                            <img src="@/assets/images/candidate2.svg" class="w-[80px]" alt="icon">
                            <img src="@/assets/images/candidate3.svg" class="w-[80px]" alt="icon">
                            <img src="@/assets/images/candidate4.svg" class="w-[80px]" alt="icon">
                            
                        </div>
                    </div>
                     <div class="w-[56%] flex flex-col justify-between">
                        <h1 class="text-[32px] text-bold flex card-name">Виктор 30 <p style="box-shadow: 4px 4px 20px #33E159; margin-top: 6px"/></h1>
                        <button @click="windowUiStorage.chat_open = true" class="custom-btn text-[14px] mt-1 gap-2 py-3" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);">
                            <p>Поприветствовать</p>
                            <img src="@/assets/icons/Hand.svg" alt="icon">
                        </button>
                        <div class="w-full">
                            <div class="statistics mt-5">
                                <h3 class="text-[18px] font-semibold">Ставка</h3>
                                <span class="dashed-line"></span>
                                <h3 class="text-[18px] font-semibold">15 654 руб</h3>
                            </div>
                            <div class="statistics mt-5">
                                <h3>Рост</h3>
                                <span class="dashed-line"></span>
                                <h3>186 см</h3>
                            </div>
                            <div class="statistics mt-5">
                                <h3>Вес</h3>
                                <span class="dashed-line"></span>
                                <h3>80 кг</h3>
                            </div>
                            <div class="statistics mt-5">
                                <h3>Цвет глаз</h3>
                                <span class="dashed-line"></span>
                                <h3>Голубые</h3>
                            </div>
                            <div class="statistics mt-5">
                                <h3>Цвет волос</h3>
                                <span class="dashed-line"></span>
                                <h3>Светлые</h3>
                            </div>
                            <div class="statistics mt-5">
                                <h3>Цель знакомства</h3>
                                <span class="dashed-line"></span>
                                <h3>Пока не знаю</h3>
                            </div>
                            <div class="mt-5 text-[#FFFDFD]">
                                <h3 class="text-[18px] mb-1 font-semibold">О себе</h3>
                                <p>Задача организации, в особенности же сложившаяся структура организации представляет собой интересный эксперимент проверки модели развития.</p>
                                 <p class="mt-2"> Задача организации, в особенности же постоянный количественный рост и сфера нашей активности играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач.</p>
                                <span class="text-[#8B5D9A] text-[14px]">На сайте с 21.08.2021</span>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>




    <MobileScreen v-else />

</template>