import { ref, watch, onMounted } from "vue"

export const useColorPicker = () => {
    const colors = ref([]) 
    const isCopied = ref(false) 
    const openColorPicker = async () => {
        const eyeDropper = new EyeDropper()
        const { sRGBHex } = await eyeDropper.open()
        colors.value.push(sRGBHex)
    }
    const changeColor = (e, index) => {
        colors.value[index] = e.target.value
    }
    const copyColorToClipBoard = (color) => {
        navigator.clipboard.writeText(color)
        isCopied.value = true
        setTimeout(() => {
            isCopied.value = false
        }, 1000)
    }
    const deleteSingleColor = (index) => {
        if(!confirm('Are you sure you want to delete this color?')) return
        colors.value.splice(index, 1)
    }
    const clearColors = () => {
        if(!confirm('Are you sure you want to delete all colors?')) return
        colors.value = []
        _clearLocalStorage()
    }

    const _storeInLocalStorage = () => {
        localStorage.setItem('colors', JSON.stringify(colors.value))
    }
    const _getFromLocalStorage = () => {
        const localColors = localStorage.getItem('colors')
        if(localColors) {
            colors.value = JSON.parse(localColors)
        }
    }
    const _clearLocalStorage = () => {
        localStorage.removeItem('colors')
    }

    watch(colors, () => {
        _storeInLocalStorage()
    }, { deep: true })

    onMounted(() => {
        _getFromLocalStorage()
    })

    return {
        colors,
        isCopied,
        openColorPicker,
        changeColor,
        copyColorToClipBoard,
        deleteSingleColor,
        clearColors
    }
}