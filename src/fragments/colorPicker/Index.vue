<template>
    <div class="p-4">
        <button
            @click="openColorPicker"
            title="Open Color Picker"
            class="font-bold rounded text-white p-2 flex items-center justify-center gap-2 mb-2 w-full bg-gradient-to-r from-red-500 from-10% via-orange-500 via-30% to-red-500 to-90%"
        >
            <Icon
                name="eyedropper"
                size="24"
            />
            Open color picker
        </button>

        <div v-if="colors.length" class="flex justify-between items-center mb-3 border-b border-white/20 pb-2 text-sm">
            Colors
            <button
                class="text-red-400"
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