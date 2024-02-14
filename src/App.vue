<template>
  <div class="w-[300px] text-gray-800 bg-white dark:bg-gray-800 dark:text-white/70">
    <ColorPicker />
  </div>
</template>

<script setup>
  import { provide } from 'vue'
  import { useColorPicker } from './useColorPicker'
  import ColorPicker from './fragments/colorPicker/Index.vue'

  provide('useColorPicker', useColorPicker())
</script>