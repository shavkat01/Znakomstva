<script setup>
import Dropdown from "../.././components/Dropdown.vue"
import {windowUiStore} from '../../stores/window-ui'
const windowUiStorage = windowUiStore()
</script>

<template>
    <footer
        :class="windowUiStorage.window_size < 450 ? 'my-4':''"
    >
        <!-- class="footer md:absolute bottom-0 left-0 w-full z-10" -->
        <div class="container md:text-[14px] text-[11px] flex md:justify-between justify-center items-center md:flex-row flex-col py-5">
            <ul class="flex md:gap-4 gap-2">
                <li>О нас</li>
                <li>Поддержка</li>
                <li>Советы</li>
                <li>Контакты</li>
                <li>Правила оплаты</li>
            </ul>
            <p>Политика обработки персональных данных</p>
            <Dropdown :topPos="true" :items="['RU', 'Uz', 'US']"/>
            <p>© Company 2021</p>
        </div>
    </footer>
</template>