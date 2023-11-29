<script setup>
import { ref } from 'vue'
import MobileNavbar from "./components/mobile-navbar.vue";
import DesktopNavbar from "./components/desktop-navbar.vue";
import {windowUiStore} from '../../stores/window-ui'
const windowUiStorage = windowUiStore()

const md = ref(768)

</script>
<template>
    <DesktopNavbar v-if="windowUiStorage.window_size > md" />
    <MobileNavbar v-else />
</template>