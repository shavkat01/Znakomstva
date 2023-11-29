<script setup>
import {ref, defineProps} from 'vue'

const props = defineProps({
    items: {
        type: Array,
        default: ['Russia', 'America', 'Uzbek']
    },  
    topPos: {
        type: Boolean,
        default: false
    },
    
})

const is_open = ref(false)
const selected = ref(props.items[0])

</script>

<template>
  <div
    class="dropdown inline-flex items-center cursor-pointer relative"
    @click="is_open = !is_open"
  >
    <img v-if="selected == 'America'" src="@/assets/icons/America.png" class="mr-2 max-w-[18px]" alt="flag">
    <img v-else-if="selected == 'Uzbek'" src="@/assets/icons/Uzbek.png" class="mr-2 max-w-[18px]" alt="flag">
    <img v-else-if="selected == 'Russia'" src="@/assets/icons/Russia.png" class="mr-2 max-w-[18px]" alt="flag">
    <span class="mr-2">{{ selected }}</span>
    <img src="@/assets/icons/chevron-down.svg" alt="icon" :class="{ active: is_open }" />
    <transition name="dropdown-menu">
      <ul class="absolute w-full text-center" :class="props.topPos ? 'bottom-full': 'top-full'" v-show="is_open">
        <li
          class="border-t border-brand"
          v-for="item in items"
          :key="item"
          @click="selected = item"
        >
          {{ item }}
        </li>
      </ul>
    </transition>
  </div>
</template>
<style lang='scss' scoped>
.dropdown {
  img{
    transition: 0.5s;
    &.active{
      transform: rotate(180deg);
    }
  }
  
  .dropdown-menu-enter-active,
  .dropdown-menu-leave-active {
    transition: 0.5s ease;
  }

  .dropdown-menu-enter-from,
  .dropdown-menu-leave-to {
    transform: translateY(5px);
    opacity: 0;
  }
}
</style>