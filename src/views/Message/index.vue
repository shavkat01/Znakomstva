<script setup>
import {ref} from 'vue'

import {windowUiStore} from '@/stores/window-ui'

const windowUiStorage = windowUiStore()

const chat_open = ref(false)
const selectCard = ref()

</script>
<template>
    <div :class="windowUiStorage.window_size>768 ? 'container-for-menu':''" class="p-3 md:max-w-[1200px] md:mt-[165px] mt-20">
        <h1 class="text-[28px] font-semibold">Тарифы</h1>
        <div :class="windowUiStorage.window_size>768 ? 'card-container':''" class="w-full flex flex-col">
            <div @click="selectCard = 1" :class="selectCard==1? 'selectCard': ''" class="bg-[#1C0A22] mt-5 rounded-[50px] text-center py-10">
                <img style="display: inline" src="@/assets/icons/sun.svg" alt="icon">
                <p class="mt-3">1 день</p>
                <h3 class="mt-3">500 руб.</h3>
                <button class="custom-btn-message text-[14px] mt-3 gap-2 py-3" style="display: inline;">
                    Провести оплату
                </button>
            </div>
            <div @click="selectCard = 2" :class="selectCard==2? 'selectCard': ''" class=" bg-[#1C0A22] mt-5 rounded-[50px] text-center py-10">
                <img style="display: inline" src="@/assets/icons/calendar.svg" alt="icon">
                <p class="mt-3">Месяц</p>
                <h3 class="mt-3">500 руб.</h3>
                <button class="custom-btn-message text-[14px] mt-3 gap-2 py-3" style="display: inline;">
                    Провести оплату
                </button>
            </div>
            <div @click="selectCard = 3" :class="selectCard==3? 'selectCard': ''" class=" bg-[#1C0A22] mt-5 rounded-[50px] text-center py-10">
                <img style="display: inline" src="@/assets/icons/fire.svg" alt="icon">
                <p class="mt-3">1 день</p>
                <h3 class="mt-3">500 руб.</h3>
                <button class="custom-btn-message text-[14px] mt-3 gap-2 py-3" style="display: inline;">
                    Провести оплату
                </button>
            </div>
        </div>
    </div>




    <img style="z-index: -100" 
        src="@/assets/images/Ellipse-message.svg" alt=""
        class="fixed right-0 bottom-0 sm:w-[200px] md:w-[400px] xl:w-[600px] xxl:w-[1050px]" 
    >
    <!-- <img v-else style="z-index: -100" 
        src="@/assets/images/Ellipse-mob.svg" alt=""
        class="fixed left-1/2 -translate-x-1/2 top-0 w-[800px]" 
    > -->
</template>

<style scoped>
    .card-container{
        display: grid;
        column-gap: 20px;
        grid-template-columns: auto auto auto;  
    }
    .selectCard{
        background: linear-gradient(#1C0A22, #1C0A22) padding-box,
                linear-gradient(to right, #EE0979, #FF6A00) border-box;
        border: 1px solid transparent;
    }

    .selectCard .custom-btn-message{
        color: #FFF;
        background-image: linear-gradient(to right, #EE0979, #FF6A00);
    }
</style>