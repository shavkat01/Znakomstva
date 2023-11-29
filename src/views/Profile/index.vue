<script setup>
    import { useRouter, useRoute, RouterView } from 'vue-router'

    import {windowUiStore} from '@/stores/window-ui'

    import InputSelect from '@/components/InputSelect.vue'

    const windowUiStorage = windowUiStore()
    const router = useRouter()
    const route = useRoute()

    function selectTab(path){
        router.push({path: path})
    }

</script>

<template>
<!-- v-if="windowUiStorage.window_size > 768" -->
    <div :class="windowUiStorage.window_size > 768 ? 'container-for-menu' : ''" class="p-3 md:max-w-[1200px] md:mt-[165px] mt-20">
        <div class="w-full md:flex">
            <div v-if="windowUiStorage.window_size > 768" class="w-[20%]">
                <div class="px-5 py-3 rounded-[30px] bg-[#1C0A22]">
                    <div @click="selectTab('/profile')" class="relative cursor-pointer my-4 flex items-center gap-3">
                        <img src="@/assets/icons/user.svg" alt="">
                        <h3>Профиль</h3>
                        <span v-if="route.path == '/profile'" class="absolute -left-5 h-6 w-[3px]" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);"></span>
                    </div>
                    <div @click="selectTab('/favourite')" class="relative cursor-pointer my-4 flex items-center gap-3">
                        <img class="text-red" src="@/assets/icons/bookmark.svg" alt="">
                        <h3>Избранное</h3>
                        <span v-if="route.path == '/favourite'" class="absolute -left-5 h-6 w-[3px]" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);"></span>
                    </div>
                    <div @click="selectTab('/profile-account')" class="relative cursor-pointer my-4 flex items-center gap-3">
                        <img src="@/assets/icons/personal_reason.svg" alt="">
                        <h3>Личный счет</h3>
                        <span v-if="route.path == '/profile-account'" class="absolute -left-5 h-6 w-[3px]" style="background-image: linear-gradient(to right, #EE0979, #FF6A00);"></span>
                    </div>
                    <div @click="router.push({path: '/'})" class="relative cursor-pointer my-4 mt-8 flex items-center gap-3">
                        <img src="@/assets/icons/layer1.svg" alt="">
                        <h3>Личный счет</h3>
                    </div>
                </div>
            </div>

            <InputSelect v-else @selectItem="(item)=>router.push({path: item.path})" :items="[{name: 'Профиль', currentPath: route.path, path: '/profile'}, {name: 'Избранное ', currentPath: route.path, path: '/favourite'}, {name: 'Личный счет', currentPath: route.path, path: '/profile-account'}]"/>

            <div class="md:w-[80%] md:ml-5">
                <RouterView />
            </div>
        </div>
    </div>
</template>