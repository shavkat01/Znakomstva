<script setup>
import {defineEmits, ref, reactive} from 'vue'
import MesaageInput from '@/components/CustomInput.vue'
import {windowUiStore} from '@/stores/window-ui'

const windowUiStorage = windowUiStore()

const emit = defineEmits('close')

const selected = ref()

const mobile_room_open = ref(false)



const condidates = reactive([
    {
        id: 1,
        name: 'Марина',
        message: 'Привет! Как дела?',
        is_online: false,
        is_new: 1,
        image: '@/assets/images/chat-image1.svg',
        chat:[
            {
                room_id: 1,
                sent_message: 'Привет Текст сообщения будет тут'
            },
            {
                room_id: 22,
                sent_message: 'Привет Текст сообщения будет тут'
            },
            {
                room_id: 1,
                sent_message: 'Еще одно сообщение в одну строку'
            },
            {
                room_id: 22,
                sent_message: 'Ответ на сообщение в несколько строк Тут вторая строка Тут будет третья '
            },
        ]
    },
    {
        id: 2,
        name: 'Алёна',
        message: 'Чем занимаешься?',
        is_online: true,
        is_new: null,
        image: '@/assets/images/chat-image1.svg',
        chat:[
            {
                room_id: 2,
                sent_message: 'Чем занимаешься?'
            },
        ]
    },
    {
        id: 3,
        name: 'Вика',
        message: 'Хорошо. До встречи 👋',
        is_online: false,
        is_new: null,
        image: '@/assets/images/chat-image1.svg',
        chat:[
            {
                room_id: 3,
                sent_message: 'Хорошо. До встречи 👋'
            },
        ]
    },
    {
        id: 4,
        name: 'Анастасия',
        message: 'Привет! Как дела?',
        is_online: false,
        is_new: null,
        image: '@/assets/images/chat-image1.svg',
        chat:[
            {
                room_id: 4,
                sent_message: 'Привет! Как дела?'
            },
        ]
    },
])

let selected_condidate_chat = ref()

selected_condidate_chat.value = condidates[0]

function closeChat(){
    // emit('close')
    windowUiStorage.chat_open = false
}
function selectMenuFun(item){
    selected_condidate_chat.value = {}

    selected_condidate_chat.value = item
    mobile_room_open.value = true
}

</script>

<template>
    <div v-if="windowUiStorage.window_size > 768" @click.self="closeChat" style="z-index: 100" class="fixed top-0 w-[100vw] h-[100vh] bg-[#1D0B23D9] flex items-center justify-center">
        <div class="w-[1050px] h-[550px] flex rounded-[50px] bg-[#1C0A22]">
            <div class="w-[40%] p-8">
                <div @click="selectMenuFun(item)" :class="selected_condidate_chat.id == item.id ? 'selected' : ''" v-for="item in condidates" :key="item.id" class="px-10 my-2 py-3 relative flex items-center gap-6 rounded-[500px] menu-background">
                    <img src="@/assets/images/chat-image1.svg" class="max-w-[70]" alt="image">
                    <div>
                        <h3 style="display: inline" class="text-[14px] font-bold relative">{{item.name}} <p v-if="item?.is_online" class="absolute top-0 -right-3 w-2 h-2 rounded-full bg-[#33E159]"></p></h3>
                        <p class="text-[#6E447B] text-[16px]"> {{item.message}} </p>
                    </div>
                    <p class="absolute bottom-4 right-7 px-2 rounded-full is_news"> {{item?.is_new}} </p >
                </div>
            </div>
            <div class="w-[60%] bg-[#2A1332] rounded-[50px] p-8">
                <div class="p-3 w-full h-full">
                    <h3 style="display: inline" class="text-[14px] font-bold relative">{{selected_condidate_chat.name}} <p v-if="selected_condidate_chat.is_online" class="absolute top-0 -right-3 w-2 h-2 rounded-full bg-[#33E159]"></p></h3>
                    <div class="h-4/5 overflow-auto">
                        <div v-for="elem in selected_condidate_chat.chat" :key="elem" :class="elem.room_id == 22 ? 'flex-row-reverse' : ''" class="flex mt-5 gap-2">
                            <div>
                                <img v-if="elem.room_id == 22" src="@/assets/images/profile.svg" class="w-[40px]" alt="">
                                <img v-else src="@/assets/images/chat-image1.svg" class="w-[40px]" alt="">
                            </div>
                            <div :class="elem.room_id == 22 ? 'rounded-tl-[50px]' : 'rounded-tr-[50px]'" 
                            class="py-3 px-9 w-[350px] rounded-b-[50px]" 
                            :style="elem.room_id == 22 ? 'background-image: linear-gradient(to right, #EC008C, #FC6767);' : 'background-image: linear-gradient(to right, #0575E6, #021B79);'">
                            {{elem.sent_message}}
                            </div>
                            <!-- style="background-image: linear-gradient(to right, #EC008C, #FC6767);" -->
                        </div>
                    </div>
                    <div class="custom-input mt-3 w-full">
                        <input placeholder="Написать сообщение..." type="text">
                        <img class="cursor-pointer" src="@/assets/icons/send1.svg" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div v-else style="z-index: 100" class="fixed top-0 p-3 w-[100vw] h-[100vh] bg-[#230E2B]">
        <div class="mt-20" v-if="!mobile_room_open">
            <div class="cursor-pointer flex gap-2" @click="closeChat">
                <img src="@/assets/icons/chevron-left.svg" alt="icon">
                <h3 class="font-bold text-[22px]">Сообщения</h3>
            </div>
            <div @click="selectMenuFun(item)" v-for="item in condidates" :key="item.id" class="my-2 py-3 relative flex items-center gap-6 rounded-[500px]">
                <img src="@/assets/images/chat-image1.svg" class="max-w-[70]" alt="image">
                <div>
                    <h3 style="display: inline" class="text-[14px] font-bold relative">{{item.name}} <p v-if="item?.is_online" class="absolute top-0 -right-3 w-2 h-2 rounded-full bg-[#33E159]"></p></h3>
                    <p class="text-[#6E447B] text-[16px]"> {{item.message}} </p>
                </div>
                <p class="absolute bottom-4 right-0 px-2 rounded-full" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);"> {{item?.is_new}} </p >
            </div>
        </div>

        <div class="mt-20" v-else>
            <div @click="mobile_room_open = false" class="cursor-pointer flex gap-2">
                <img src="@/assets/icons/chevron-left.svg" alt="icon">
                <h3 style="display: inline" class="text-[22px] font-bold relative">{{selected_condidate_chat.name}} <p v-if="selected_condidate_chat.is_online" class="absolute top-0 -right-3 w-2 h-2 rounded-full bg-[#33E159]"></p></h3>
            </div>
            <div>
                <div style="height: calc(100vh - 210px)" class="overflow-y-auto">
                    <div v-for="elem in selected_condidate_chat.chat" :key="elem" :class="elem.room_id == 22 ? 'flex-row-reverse' : ''" class="flex mt-5 gap-2">
                        <div>
                            <img v-if="elem.room_id == 22" src="@/assets/images/profile.svg" class="w-[40px]" alt="">
                            <img v-else src="@/assets/images/chat-image1.svg" class="w-[40px]" alt="">
                        </div>
                        <div :class="elem.room_id == 22 ? 'rounded-tl-[50px]' : 'rounded-tr-[50px]'" 
                        class="py-3 px-9 w-[350px] rounded-b-[50px]" 
                        :style="elem.room_id == 22 ? 'background-image: linear-gradient(to right, #EC008C, #FC6767);' : 'background-image: linear-gradient(to right, #0575E6, #021B79);'">
                        {{elem.sent_message}}
                        </div>
                        <!-- style="background-image: linear-gradient(to right, #EC008C, #FC6767);" -->
                    </div>
                </div>
                <div class="custom-input mt-3 w-full">
                    <input placeholder="Написать сообщение..." type="text">
                    <img class="cursor-pointer" src="@/assets/icons/send1.svg" alt="">
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.menu-background:hover{
    background-image: linear-gradient(#250F2D, #3A1845);
    cursor: pointer;
}

.menu-background.selected{
    background-image: linear-gradient(#250F2D, #3A1845);
}

.menu-background .is_news{
    background-image: linear-gradient(to right, #EE0979, #FF6A00);
}
</style>

