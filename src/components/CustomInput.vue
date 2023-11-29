<script setup>
import {defineProps} from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: ''
  },
  eyeIcon:{
    type: Boolean,
    default: false
  }

})

</script>
<template>
  <div class="custom-input">
      <slot></slot>
      <input :placeholder="props.placeholder" type="text">
      <img v-if="eyeIcon" src="@/assets/icons/eye.svg" alt="">
  </div>
</template>

