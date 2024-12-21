<script setup>
    import { ref } from 'vue'

    const hover = ref(false)

    defineProps(['text','href'])

</script>

<template>
    <a  class="mx-4 py-1.5 relative before:bg-black before:absolute before:h-px before:bottom-0 before:transition-all before:duration-300"
        :class="hover ? 'before:w-full' : 'before:w-0'"
        @mouseover="hover = true"
        @mouseout="hover = false"
        :href="href"
        >{{ text }}</a>
</template>