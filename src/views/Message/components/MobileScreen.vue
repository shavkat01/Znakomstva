<script setup>
import {ref} from 'vue'
import { Swiper, SwiperSlide } from "swiper/vue";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
// import Chat from '@/components/Chat.vue'
import {windowUiStore} from '@/stores/window-ui'

const windowUiStorage = windowUiStore()

const chat_open = ref(false)

function openChat(){
    chat_open.value = true
    windowUiStorage.chat_open = true
}

</script>

<template>
<!-- <Chat @close="chat_open=false" v-if="chat_open"/> -->

    <div>
        <div class="relative candidate-main-mob-image">
            <img class="w-full rounded-b-[50px]" src="@/assets/images/condidate-main-mob.svg" alt="">
            <div class="absolute w-full bottom-4">
                <div class="px-4 py-6">
                    <h3 class="text-bold flex card-name">Виктор 30 <p></p></h3>
                    <div class="flex gap-2 text-[12px]">
                        <img src="@/assets/icons/Russia.png" class="w-[16px]" alt="icon">
                        <p>Россия</p>
                    </div>
                </div>
                <div class="w-full flex justify-center gap-3 text-[14px] gap-2 py-3" >
                    <button class="w-16 h-16 rounded-full flex items-center justify-center" style="background-image: linear-gradient(to right, #0575E6, #021B79);">
                        <img src="@/assets/icons/close.svg" alt="icon">
                    </button>
                    <button class="w-16 h-16 rounded-full flex items-center justify-center" style="background-image: linear-gradient(to right, #EC008C, #FC6767);">
                        <img src="@/assets/icons/favourite.svg" alt="icon">
                    </button>
                </div>
            </div>
        </div>
        <div class="mt-5 p-3">
            <div class="text-[#FFFDFD]">
                <h3 class="text-[18px] mb-1 font-semibold">О себе</h3>
                <p >Задача организации, в особенности же сложившаяся структура организации представляет собой интересный эксперимент проверки модели развития.</p>
                    <p class="mt-2"> Задача организации, в особенности же постоянный количественный рост и сфера нашей активности играет важную роль в формировании позиций, занимаемых участниками в отношении поставленных задач.</p>
            </div>
            <button @click="openChat" class="custom-btn mt-3 w-full text-[14px] mt-1 gap-2 px-3 py-5" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);">
                <p>Поприветствовать</p>
                <img src="@/assets/icons/Hand.svg" alt="icon">
            </button>
        </div>
        <div style="overflow-x: hidden" class="ml-3 mt-3">
            <Swiper 
                class="w-full flex"
                :slides-per-view="3" 
                :space-between="2" 
                :modules="[Navigation]" 
            >
                <!-- :navigation="true" -->
                <SwiperSlide class="w-[120px]">
                    <img src="@/assets/images/candidate1.svg" class="w-[120px]" alt="icon">
                </SwiperSlide>
                <SwiperSlide class="w-[120px]">
                    <img src="@/assets/images/candidate2.svg" class="w-[120px]" alt="icon">
                </SwiperSlide>
                
                <SwiperSlide class="w-[120px]">
                    <img src="@/assets/images/candidate3.svg" class="w-[120px]" alt="icon">
                </SwiperSlide>
                
                <SwiperSlide class="w-[120px]">
                    <img src="@/assets/images/candidate4.svg" class="w-[120px]" alt="icon">
                </SwiperSlide>    
            </Swiper>
        </div>
        <div class="w-full mt-5 p-3">
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
        </div>
        <span class="text-[#8B5D9A] text-[14px] ml-3 mt-3">На сайте с 21.08.2021</span>
    </div>
</template>