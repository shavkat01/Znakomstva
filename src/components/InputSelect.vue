<script setup>
import {ref, defineProps, defineEmits} from 'vue'
import { useRouter, useRoute, RouterView } from 'vue-router'
const route = useRoute()


const emit = defineEmits('selectItem')
const props = defineProps({
    items: {
        type: Array,
        default: [{name: 'Empty'}]
    },  
    topPos: {
        type: Boolean,
        default: false
    },
    customSelect:{
      type: Boolean,
      default: false
    }
    
})

const is_open = ref(false)
const selected = ref(props.items[0].name)

if(props.items[0]?.currentPath){
  props.items.map(item=>{
    if(item.currentPath == item.path){
      selected.value = item.name
    }
  })
}

function selectFun(item){
  selected.value = item.name
  emit('selectItem', item)
}

</script>

<template>
  <div
    :style="customSelect ? 'background-color: #42204E;' : 'background: linear-gradient(#230E2B, #230E2B) padding-box, linear-gradient(to right, #EE0979, #FF6A00) border-box; border: 1px solid transparent;'"
    class="dropdown inline-flex items-center cursor-pointer relative"
    @click="is_open = !is_open"
  >
    <div class="flex justify-between w-full">
      <span :class="selected == 'Empty' ? 'text-[#8B5D9A]' : ''" class="mr-2">{{ selected }}</span>
      <img src="@/assets/icons/chevron-down.svg" alt="icon" :class="{ active: is_open }" />
    </div>
    <transition name="dropdown-menu">
      <ul class="absolute w-full left-0 text-center" :class="props.topPos ? 'bottom-full': 'top-full'" v-show="is_open">
        <li
          class="border-t border-brand"
          v-for="item in props.items"
          :key="item"
          @click="selectFun(item)"
        >
          {{ item.name }}
        </li>
      </ul>
    </transition>
  </div>
</template>
<style lang='scss' scoped>
.dropdown {
    width: 100%;
    height: 50px;
    padding: 0 30px;
    border-radius: 50px;
    font-size: 16px !important;

  img{
    transition: 0.5s;
    &.active{
      transform: rotate(180deg);
    }
  }
  ul{
    z-index: 100;
    padding: 10px;
    border-radius: 10px;
    background-color: #230E2B;
    max-height: 200px !important;
    overflow: auto;
    background: linear-gradient(#230E2B, #230E2B) padding-box,
              linear-gradient(to right, #EE0979, #FF6A00) border-box;
    border: 1px solid transparent;

    &::-webkit-scrollbar{
      width:4px;
    }
    &::-webkit-scrollbar-thumb{
      background: #4b3b52;
    }
    &::-webkit-scrollbar-track{
      background: none;
    }

    li{
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      &:hover{
        background: #111124;
      }
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