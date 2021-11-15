import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
import Inspect from 'vite-plugin-inspect'
import Unocss from 'unocss/vite'
import { presetUno, presetIcons } from 'unocss'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/],
    }),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages({
      extensions: ['vue'],
      nuxtStyle: true,
    }),

    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),

    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load components under `./src/components/`
      extensions: ['vue'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],

      // custom resolvers
      resolvers: [],

      dts: 'src/components.d.ts',
    }),

    // https://github.com/antfu/vite-plugin-windicss
    WindiCSS({
    }),

    // https://github.com/antfu/vite-plugin-inspect
    Inspect({
      // change this to enable inspect for debugging
      enabled: false,
    }),
    Unocss({
      presets: [
        // @ts-ignore next-line
        // presetUno(),
        presetIcons({
          prefix: 'i-',
          scale: 1.15,
          extraProperties: {
            display: 'inline-block'
          }
        }),
      ],
      // https://github.com/antfu/unocss/issues/143#issuecomment-974265839
      variants: presetUno().variants
    })
  ],

  server: {
    fs: {
      strict: true,
    },
  },

  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
  },

  optimizeDeps: {
    include: [
      'vue',
      'vue-router',
      '@vueuse/core',
      '@vueuse/head',
    ],
    exclude: [
      'vue-demi',
    ],
  },
})
