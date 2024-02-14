<template>
  <div class="w-[300px] bg-gray-800 text-white/70">
    <ColorPicker />
  </div>
</template>

<script setup>
  import { provide } from 'vue'
  import { useColorPicker } from './useColorPicker'
  import ColorPicker from './fragments/colorPicker/Index.vue'

  provide('useColorPicker', useColorPicker())
</script>