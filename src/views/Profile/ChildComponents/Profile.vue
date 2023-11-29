<script setup>
    import {ref} from 'vue'
    import MesaageInput from '@/components/CustomInput.vue'

    import {windowUiStore} from '@/stores/window-ui' 

    import InputSelect from '@/components/InputSelect.vue'

    const windowUiStorage = windowUiStore()
    const open_dialog = ref(false)
    const gender = ref('man')

</script>
<template>



    <div class="w-full md:mt-0 mt-5">
        <h1 class="md:block hidden font-semibold text-[28px]">Профиль</h1>
        <div class="w-full mt-5 md:flex gap-4">
            <div class="md:w-[30%]">
                <img class="md:w-[280px]" src="@/assets/images/candidate-main.svg" alt="ded">
                <div class="flex justify-between mt-3">
                    <img class="p-6 border rounded-[30px] border-[#925FA4]" src="@/assets/icons/camera1.svg" alt="ded">
                    <img class="p-6 border rounded-[30px] border-[#925FA4]" src="@/assets/icons/camera1.svg" alt="ded">
                    <img class="p-6 border rounded-[30px] border-[#925FA4]" src="@/assets/icons/camera1.svg" alt="ded">
                </div>
            </div>
            <div class="md:w-[68%]">
                <h3 class="font-semibold md:mt-0 mt-5 text-[18px]">Основная информация</h3>
                <div class="md:flex justify-between items-center mt-3">
                    <h4 class="md:m-0 md:text-[#FFF] mb-2 ml-5 text-[#6E447B]">Имя</h4>
                    <MesaageInput :class="windowUiStorage.window_size < 768 ? 'w-full' : ''" placeholder="Ваше имя"/>
                </div>
                <div class="md:flex justify-between items-center mt-4">
                    <h4 class="md:m-0 md:text-[#FFF] mb-2 ml-5 text-[#6E447B]">Дата рождения</h4>
                    <div class="md:block flex">
                        <MesaageInput class="w-[100px]" placeholder="День"/>
                        <div :class="windowUiStorage.window_size < 768 ? 'w-full' : ''" class="mx-1 inline-flex w-[142px]">
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
                </div>
                  <div class="md:flex justify-between items-center mt-4">
                    <h4 class="md:m-0 md:text-[#FFF] mb-2 ml-5 text-[#6E447B]">Имя</h4>
                    <div class="w-[346px] flex gap-2" :class="windowUiStorage.window_size < 768 ? 'w-full' : ''">
                        <button @click="gender = 'man'" :style="gender == 'man' ? 'background-image: linear-gradient(to right, #0575E6, #021B79);' : ''" 
                        class="custom-btn flex justify-center w-[49%] py-[10px]">
                        <img src="@/assets/images/man.svg" class="text-center max-w-[36px]" alt="icon">
                        </button>
                        <button @click="gender =  'woman'" :style="gender == 'woman' ? 'background-image: linear-gradient(to right, #0575E6, #021B79);' : ''" 
                            class="custom-btn flex justify-center w-[49%] py-[10px]">
                            <img src="@/assets/images/woman.svg" class="max-w-[36px]" alt="icon">
                        </button>
                    </div>
                </div>
                <h3 class="font-semibold text-[18px] mt-6">Личная информация</h3>
                <div class="md:flex justify-between items-center mt-3">
                    <h4 class="md:m-0 md:text-[#FFF] mb-2 ml-5 text-[#6E447B]">Рост</h4>
                    <div :class="windowUiStorage.window_size < 768 ? 'w-full' : ''" class=" inline-flex w-[342px]">
                        <InputSelect :customSelect="true"/>
                    </div>
                </div>
                <div class="md:flex justify-between items-center mt-3">
                    <h4 class="md:m-0 md:text-[#FFF] mb-2 ml-5 text-[#6E447B]">Вес</h4>
                    <div :class="windowUiStorage.window_size < 768 ? 'w-full' : ''" class=" inline-flex w-[342px]">
                        <InputSelect :customSelect="true"/>
                    </div>
                </div>
                <div class="md:flex justify-between items-center mt-3">
                    <h4 class="md:m-0 md:text-[#FFF] mb-2 ml-5 text-[#6E447B]">Цвет волос</h4>
                    <div :class="windowUiStorage.window_size < 768 ? 'w-full' : ''" class=" inline-flex w-[342px]">
                        <InputSelect :customSelect="true"/>
                    </div>
                </div>
                <div class="md:flex justify-between items-center mt-3">
                    <h4 class="md:m-0 md:text-[#FFF] mb-2 ml-5 text-[#6E447B]">Цвет глаз</h4>
                    <div :class="windowUiStorage.window_size < 768 ? 'w-full' : ''" class=" inline-flex w-[342px]">
                        <InputSelect :customSelect="true"/>
                    </div>
                </div>
                <div class="md:flex justify-between items-center mt-3">
                    <h4 class="md:m-0 md:text-[#FFF] mb-2 ml-5 text-[#6E447B]">Цель знакомства</h4>
                    <div :class="windowUiStorage.window_size < 768 ? 'w-full' : ''" class=" inline-flex w-[342px]">
                        <InputSelect :items="[{name:'Пока не знаю'}]" :customSelect="true"/>
                    </div>
                </div>
                <div class="md:flex justify-between mt-3">
                    <h4 class="md:m-0 md:text-[#FFF] mb-2 ml-5 text-[#6E447B]">О себе</h4>
                    <div :class="windowUiStorage.window_size < 768 ? 'w-full' : ''" class=" inline-flex w-[342px]">
                        <textarea :class="windowUiStorage.window_size < 768 ? 'w-full' : ''" class="bg-[#42204E] rounded-[30px] outline-none p-4 px-5" placeholder="Напишите о себе" cols="30" rows="6"></textarea>
                    </div>
                </div>
                <h3 class="font-semibold text-[18px] mt-5">Аккаунт</h3>
                <div class="md:flex justify-between items-center mt-3">
                    <h4 class="md:m-0 md:text-[#FFF] mb-2 ml-5 text-[#6E447B]">E-mail</h4>
                    <MesaageInput :class="windowUiStorage.window_size < 768 ? 'w-full' : ''" placeholder="Введите e-mail"/>
                </div>
                 <div class="md:flex justify-between items-center mt-3">
                    <h4 class="md:m-0 md:text-[#FFF] mb-2 ml-5 text-[#6E447B]">Пароль</h4>
                    <MesaageInput :class="windowUiStorage.window_size < 768 ? 'w-full' : ''" type="password" :eyeIcon="true" placeholder="Введите пароль"/>
                </div>
                <div class="text-end mt-3">
                    <button :class="windowUiStorage.window_size < 768 ? 'w-full' : ''" class="custom-btn text-[14px] gap-2 py-3" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);">
                        <p>Сохранить</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
textarea {
  resize: none;
}
textarea::placeholder{
    color: #42204E;
}
</style>