<script setup>
    import {ref} from 'vue'
    import MesaageInput from '@/components/CustomInput.vue'
    import InputSelect from '@/components/InputSelect.vue'
    import {windowUiStore} from '../../stores/window-ui'
    const windowUiStorage = windowUiStore()
    
    windowUiStorage.login = false
    
    const open_dialog = ref(false)
    const gender = ref('man')

</script>

<template>
    <div class="container md:h-[100vh] flex items-center justify-center">
        <div class="flex flex-col items-center text-[#EEEEEE]">
            <h1 class="text-center text-[36px] font-semibold">Создай новый аккаунт</h1>
            <h3 class="text-center text-[#6E447B] text-[16px] px-3 font-normal">Присоединяйся к сообществу из 518 млн человек!</h3>
            <div class="w-[350px] flex md:gap-2 gap-1 items-center flex-col mt-3">
                <MesaageInput placeholder="Ваше имя">
                    <img src="@/assets/icons/user.svg" class="max-w-[20px]" alt="icon">
                </MesaageInput>
                <div class="mt-2">
                    <h3 class="text-left mb-2 text-[#6E447B] text-[16px] font-normal">Дата рождения</h3>
                    <MesaageInput class="w-[100px]" placeholder="День"/>
                    <div class="mx-1 inline-flex w-[142px]">
                        <InputSelect 
                        :items="[
                        {name: 'Январь'},
                        {name: 'Февраль'},
                        {name: 'Март'},
                        {name: 'Апрель'},
                        {name: 'Май'},
                        {name: 'Июнь'},
                        {name: 'Июль'},
                        {name: 'Август'},
                        {name: 'Сентябрь'},
                        {name: 'Октябрь'},
                        {name: 'Ноябрь'},
                        {name: 'Декабрь'},
                        ]" 
                        :customSelect="true" placeholder="Месяц"/>
                    </div>
                    <MesaageInput class="w-[100px]" placeholder="Год"/>
                </div>
                <div class="mt-2 w-full flex justify-between">
                    <button @click="gender = 'man'" :style="gender == 'man' ? 'background-image: linear-gradient(to right, #EE0979, #FF6A00);' : ''" 
                        class="custom-btn flex justify-center w-[49%] py-[10px]">
                        <img src="@/assets/images/man.svg" class="text-center max-w-[36px]" alt="icon">
                    </button>
                    <button @click="gender =  'woman'" :style="gender == 'woman' ? 'background-image: linear-gradient(to right, #EE0979, #FF6A00);' : ''" 
                        class="custom-btn flex justify-center w-[49%] py-[10px]">
                        <img src="@/assets/images/woman.svg" class="max-w-[36px]" alt="icon">
                    </button>
                </div>
                <MesaageInput class="mt-2" placeholder="Введите электронную почту">
                    <img src="@/assets/icons/message.svg" class="max-w-[20px]" alt="icon">
                </MesaageInput>
                <MesaageInput class="mt-2" type="password" :eyeIcon="true" placeholder="Введите пароль">
                    <img src="@/assets/icons/password.svg" class="max-w-[20px]" alt="icon">
                </MesaageInput>
                <div>
                    <button style="background-image: linear-gradient(to right, #EE0979, #FF6A00);" 
                    class="custom-btn w-[350px] py-[15px] mt-2">Создать аккаунт</button>
                </div>
            </div>
        </div>
    </div>





    <!-- left vector -->
    <img style="z-index: -10" 
        v-if="windowUiStorage.window_size>768"
        src="@/assets/images/Vector2-left.svg" alt=""
        class="fixed bottom-0 left-0 sm:w-[150px] md:w-[200px] xl:w-[240px] xxl:w-[370px] xxxl:w-[370px]" 
    >
    <img v-else style="z-index: -10" 
        src="@/assets/images/Vector2-left-mob.svg" alt=""
        class="fixed top-20 left-0" 
    >


    <!-- center vector -->


    <img v-if="windowUiStorage.window_size>768" style="z-index: -100" 
        src="@/assets/images/Ellipse2-top.svg" alt=""
        class="fixed left-1/3 -translate-x-1/2 top-0 sm:w-[200px] md:w-[400px] xl:w-[600px] xxl:w-[1050px]" 
    >
    <img v-else style="z-index: -100" 
        src="@/assets/images/Ellipse-mob.svg" alt=""
        class="fixed left-1/2 -translate-x-1/2 top-0 w-[800px]" 
    >



    <!-- right vector -->

    <img style="z-index: -10" v-if="windowUiStorage.window_size>768" src="@/assets/images/Vector2-right.svg" alt=""
        class="fixed bottom-0 right-0 sm:w-[200px] md:w-[230px] xl:w-[250px] xxl:w-[400px]"
     >
    <img style="z-index: -10" v-else src="@/assets/images/Vector2-right-mob.svg" alt="ded"
        class="fixed bottom-20 right-0"
     >

</template>