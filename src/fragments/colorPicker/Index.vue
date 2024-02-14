<template>
    <div class="p-4">
        <button
            @click="openColorPicker"
            title="Open Color Picker"
            class="font-bold rounded text-white p-2 flex items-center justify-center gap-2 mb-2 w-full bg-gradient-to-r from-red-500 from-10% via-orange-500 via-30% to-red-500 to-90%"
        >
            <svg class="w-[24px] h-[24px] block" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M224,67.3a35.79,35.79,0,0,0-11.26-25.66c-14-13.28-36.72-12.78-50.62,1.13L142.8,62.2a24,24,0,0,0-33.14.77l-9,9a16,16,0,0,0,0,22.64l2,2.06-51,51a39.75,39.75,0,0,0-10.53,38l-8,18.41A13.68,13.68,0,0,0,36,219.3a15.92,15.92,0,0,0,17.71,3.35L71.23,215a39.89,39.89,0,0,0,37.06-10.75l51-51,2.06,2.06a16,16,0,0,0,22.62,0l9-9a24,24,0,0,0,.74-33.18l19.75-19.87A35.75,35.75,0,0,0,224,67.3ZM97,193a24,24,0,0,1-24,6,8,8,0,0,0-5.55.31l-18.1,7.91L57,189.41a8,8,0,0,0,.25-5.75A23.88,23.88,0,0,1,63,159l51-51,33.94,34ZM202.13,82l-25.37,25.52a8,8,0,0,0,0,11.3l4.89,4.89a8,8,0,0,1,0,11.32l-9,9L112,83.26l9-9a8,8,0,0,1,11.31,0l4.89,4.89a8,8,0,0,0,11.33,0l24.94-25.09c7.81-7.82,20.5-8.18,28.29-.81a20,20,0,0,1,.39,28.7Z"></path></svg>
            Open color picker
        </button>

        <div v-if="colors.length" class="flex justify-between items-center mb-3 border-b border-gray-300/40 pb-2 text-sm">
            Colors
            <button
                class="text-red-500"
                @click="clearColors(activeLayout)"
            >
                Clear all
            </button>
        </div>

        <div v-if="colors.length" class="grid grid-cols-3 text-opacity-70 gap-2 max-h-[230px] overflow-y-auto scrollbar">
            <ColorBox
                v-for="(color, index) in colors"
                :key="index"
                :color="color"
                :index="index"
            />
        </div>
        <div v-else class="text-sm p-4 text-gray-400 border border-white/20 mt-4 bg-white/10 rounded">
            No colors available in your library.
        </div>
    </div>
</template>

<script setup>
    import { inject } from 'vue'
    import Icon from '@/components/Icon.vue'
    import ColorBox from './ColorBox.vue'

    const {
        openColorPicker,
        colors,
        clearColors
    } = inject('useColorPicker')
</script>