<script setup>
import {ref, defineProps} from 'vue'


const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  eyeIcon:{
    type: Boolean,
    default: false
  },
  type:{
    type: String,
    default: 'text'
  }
})

let inputType = ref()

inputType.value = props.type

function seePassword(){
  if(inputType.value  == 'text'){
    inputType.value  = 'password'
  }else{
    inputType.value  = 'text'
  }
}


</script>
<template>
  <div class="custom-input">
      <slot></slot>
      <input :placeholder="props.placeholder" :type="inputType">
      <img @click="seePassword" class="cursor-pointer" v-if="eyeIcon" src="@/assets/icons/eye.svg" alt="">
  </div>
</template>

