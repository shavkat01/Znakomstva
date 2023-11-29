<script setup>
    import {ref} from 'vue'
    import { useRouter } from 'vue-router'
    import MesaageInput from '@/components/CustomInput.vue'
    import ForgetDialog from './components/ForgetDialog.vue'
    import {windowUiStore} from '../../stores/window-ui'
    
    const windowUiStorage = windowUiStore()

    const router = useRouter()
    
    windowUiStorage.login = false

    const open_dialog = ref(false)

    function login(){
        router.push({path: '/anketa'})
        windowUiStorage.login = true
        localStorage.setItem('login', true)
    }

</script>

<template>
<ForgetDialog @close="open_dialog=false" v-if="open_dialog"/>
    <div class="container md:h-[100vh] flex items-center justify-center">
        <div class="flex flex-col items-center text-[#EEEEEE]">
            <h1 class="text-center md:text-[60px] text-[36px] font-semibold">Знакомства без преград</h1>
            <h3 class="text-center md:w-[65%] px-3 font-normal">Для современного мира сплочённость команды профессионалов однозначно фиксирует необходимость системы обучения кадров, соответствующей насущным потребностям.</h3>
            <div class="flex md:gap-2 gap-1 items-center flex-col md:mt-8 mt-3">
                <MesaageInput placeholder="Введите электронную почту">
                    <img src="@/assets/icons/message.svg" class="max-w-[20px]" alt="icon">
                </MesaageInput>
                <MesaageInput :eyeIcon="true" placeholder="Введите пароль">
                    <img src="@/assets/icons/password.svg" class="max-w-[20px]" alt="icon">
                </MesaageInput>
                <div>
                    <button @click="login" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);" 
                    class="custom-btn w-[350px] py-[20px]">Войти</button>
                </div>
            </div>
            <p @click="open_dialog=true" class="md:mt-3 mt-2 cursor-pointer md:text-[14px] text-[12px] text-[#925FA4]">Я не помню пароль</p>
        </div>
    </div>





    <!-- left vector -->
    <img style="z-index: -10" 
        v-if="windowUiStorage.window_size>768"
        src="@/assets/images/Vector-left.svg" alt=""
        class="fixed bottom-0 left-0 sm:w-[150px] md:w-[200px] xl:w-[270px] xxl:w-[370px] xxxl:w-[420px]" 
    >
    <img v-else style="z-index: -10" 
        src="@/assets/images/Vector-left-mob.svg" alt=""
        class="fixed top-20 left-0" 
    >


    <!-- center vector -->


    <img v-if="windowUiStorage.window_size>768" style="z-index: -100" 
        src="@/assets/images/Ellipse.svg" alt=""
        class="fixed left-1/2 -translate-x-1/2 bottom-0 sm:w-[200px] md:w-[400px] xl:w-[600px] xxl:w-[1050px]" 
    >
    <img v-else style="z-index: -100" 
        src="@/assets/images/Ellipse-mob.svg" alt=""
        class="fixed left-1/2 -translate-x-1/2 top-0 w-[800px]" 
    >



    <!-- right vector -->

    <img style="z-index: -10" v-if="windowUiStorage.window_size>768" src="@/assets/images/Vector-right.svg" alt=""
        class="fixed bottom-0 right-0 sm:w-[200px] md:w-[230px] xl:w-[300px] xxl:w-[450px]"
     >
    <img style="z-index: -10" v-else src="@/assets/images/Vector-right-mob.svg" alt="ded"
        class="fixed bottom-20 right-0"
     >

</template>