import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  // resolve alias e vue ... é não precisar buildar
  // em específico o componente de rota NotFoundComponent
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js', // Permite templates em runtime
    },
  },
})
