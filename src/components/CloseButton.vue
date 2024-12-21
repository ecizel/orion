<script setup>

    defineProps('dropbar')
    
</script>

<template>
    <div class="relative w-6 h-6 cursor-pointer flex items-center justify-center">
        <span 
            class="transition-all duration-500 absolute bg-black h-[2px] w-6 border-1 rounded-full"
            :class="dropbar ? 'rotate-45' : '-translate-y-2'"
        ></span>
        <span 
            class="transition-all duration-500 absolute bg-black border-1 rounded-full"
            :class="dropbar ? 'w-2 h-0' : 'w-6 h-[2px]'"
        ></span>
        <span 
            class="transition-all duration-500 absolute bg-black h-[2px] w-6 border-1 rounded-full"
            :class="dropbar ? '-rotate-45' : 'translate-y-2'"
        ></span>
    </div>
</template>