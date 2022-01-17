// register vue composition api globally
// @ts-nocheck
import { ViteSSG } from 'vite-ssg'
import generatedRoutes from 'virtual:generated-pages'
import { setupLayouts } from 'virtual:generated-layouts'
// @ts-ignore next-line
import App from './App.vue'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './assets/css/main.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'
// UnoCSS
import 'uno.css'
// Pinia stores 🍍
import { globalMixins } from '~/mixins/indexMixin'

const routes = setupLayouts(generatedRoutes)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  { routes },
  (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
    const { app } = ctx
    //* mixins
    app.mixin(globalMixins)
    // app.directive('layer', {
    //   mounted(_el, binding, vnode) {
    //     console.log('vnode', vnode)
    //     vnode.ref.i.data.layer = binding.value
    //   },
    //   updated(_el, binding, vnode) {
    //     vnode.ref.i.data.layer = binding.value
    //   },
    // })
  },
)
