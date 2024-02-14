<template>
    <button
        class="group flex gap-1 items-center relative"
        style="font-size: 12px"
    >
        <span
            class="absolute -ml-1 inset-0 bg-green-600 text-white rounded z-10 duration-200 pointer-events-none"
            :class="isCopied ? 'opacity-100 animate-ping' : 'opacity-0'"
        >
            Copied
        </span>
        <label 
            title="Click to modify the color"
            class="w-3 h-3 flex-shrink-0 cursor-pointer block border border-opacity-50"
            :style="{ backgroundColor: color, borderRadius: '2px' }"
        >
            <input 
                type="color"
                :value="color" 
                @input="changeColor($event, index)" 
                class="pointer-events-none hidden"
            />
        </label>
        <span 
            title="Click to copy"
            @click="() => {
                copyColorToClipBoard(color, handleCopyStatus)
                handleCopyStatus()
            }"
        >
            {{ color }}
        </span>
        <button
            title="Click to delete"
            class="hidden group-hover:block absolute colorBoxClose right-0 w-4 h-4 bg-red-500 text-white rounded-full"
            style="padding-left: 2px; padding-top: 0px;"
            @click="deleteSingleColor(index)"
        >
            <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
        </button>
    </button>
</template>

<script setup>
    import { inject, ref } from 'vue'

    const props = defineProps({
        color: String,
        index: Number
    })

    const isCopied = ref(false)
    const handleCopyStatus = () => {
        isCopied.value = true
        setTimeout(() => {
            isCopied.value = false
        }, 300)
    }

    const { changeColor, deleteSingleColor, copyColorToClipBoard } = inject('useColorPicker')
</script>