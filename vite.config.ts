import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueMacro from 'unplugin-vue-macros/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueMacro({
      plugins: {
        vue: Vue()
      }
    }),
    AutoImport({
      dts: true,
      imports: [
          'vue',
          'vue/macros',
          '@vueuse/core'
      ]
    }),
    Components({
      dts: true
    })
  ],
})

