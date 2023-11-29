<script setup>
import {defineEmits} from 'vue'
import MesaageInput from '@/components/CustomInput.vue'


const emit = defineEmits('close')

</script>

<template>
    <div @click.self="emit('close')" style="z-index: 100" class="fixed top-0 w-full h-[100vh] bg-[#1D0B23D9] flex items-center justify-center">
        <div style="z-index: 110" class="bg-[#1C0A22]  flex flex-col items-center gap-2 md:p-12 px-6 py-8 rounded-[50px]">
            <h1 class="md:text-[32px]  text-[28px]">Я не помню пароль</h1>
            <p class="text-[#6E447B] md:w-[450px] w-[280px] text-center md:text-[16px] text-[12px] mb-4">Введи свой email и мы вышлем тебе инструкции по изменению пароля</p>
            <MesaageInput class="md:w-[350px] w-[280px]" placeholder="Введите электронную почту">
                <img src="@/assets/icons/message.svg" class="max-w-[20px]" alt="icon">
            </MesaageInput>
            <div>
                <button style="background-image: linear-gradient(to right, #EE0979, #FF6A00);" 
                class="custom-btn md:w-[350px] w-[280px] py-[15px]">Запросить новый пароль</button>
            </div>
        </div>
    </div>
</template>