<script setup> 
import {useRouter} from 'vue-router'

const router = useRouter()
</script>

<template>
    <div class="relative md:mt-[165px] h-full flex items-center">
        <img class="fixed left-1/2 -translate-x-1/2" src="@/assets/images/Vector-1.svg" alt="">
        <img class="fixed left-1/2 -translate-x-1/2" src="@/assets/images/Vector-2.svg" alt="">
        <img class="fixed left-1/2 -translate-x-1/2" src="@/assets/images/Vector-3.svg" alt="">
        <img class="fixed left-1/2 -translate-x-1/2" src="@/assets/images/Vector-4.svg" alt="">
        <img class="md:w-[661.86px] w-[496px] fixed left-1/2 -translate-x-1/2" src="@/assets/images/Vector-5.svg" alt="">
        <img class="fixed left-1/2 -translate-x-1/2" src="@/assets/images/Vector.svg" alt="">
        <div class="text-center md:w-[570px] w-[300px] md:mt-10 mt-4 fixed left-1/2 -translate-x-1/2">
            <img class="md:w-[589px] w-[295px]" src="@/assets/images/404.svg" alt="">
            <p class="md:mt-10 mt-4 text-[14px]">Вы заблудились. Но не беспокойтесь: вот правильный путь</p>
            <button @click="router.go(-1)" class="border inline-flex gap-2 py-3 px-6 md:mt-10 mt-4 rounded-[30px]">
                <img src="@/assets/icons/chevron-left.svg" alt="">
                <span class="text-[14px]">Вернуться назад</span>
            </button>
        </div>
    
    </div>
</template>