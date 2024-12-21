<script setup>

    import { ref } from "vue";
    import CloseButton from "./CloseButton.vue"
    import NavButton from "./NavButton.vue";

    const dropbar = ref(false)

</script>

<template>
    <header>
        <nav class="sticky">
            
            <!-- navbar opened -->
        <div class="bg-white/70 backdrop-blur-[1px] h-12 flex items-center justify-between px-4">
                <img class="h-4/5" src="../assets/logo.png" alt="">
                
                <CloseButton class="sm:hidden" @click="dropbar = !dropbar"/>
        </div>
        
        <!-- dropbar -->
        <div 
            class="sm:hidden absolute bg-white/70 backdrop-blur-[1px] flex flex-col items-end overflow-hidden transition-all duration-300 size-fit right-0 text-sm"
            :class="dropbar ? 'h-[11rem] py-2' : 'h-0 py-0'"
        >
            <NavButton text="Início" href="/" />
            <NavButton text="Empresa" href="empresa" class="cursor-pointer" />
            <NavButton text="Serviços" href="servicos" />
            <NavButton text="Produtos" href="produtos" />
            <NavButton text="Contatos" href="contatos" />
        </div>

        </nav>
    </header>
</template>