<template>
  <div class="w-[300px] bg-gray-800 text-white/70">
    <Header />
    <ColorPicker />
  </div>
</template>

<script setup>
  import { provide } from 'vue'
  import { useColorPicker } from './useColorPicker'
  import Header from './fragments/Header.vue'
  import ColorPicker from './fragments/colorPicker/Index.vue'

  provide('useColorPicker', useColorPicker())
</script>