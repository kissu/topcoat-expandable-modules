<script setup>
// import { createApp } from 'vue'
// const app = createApp({})
// app.component('SimpleButton', {
//   template: '<button>Click me</button>',
// })
// eslint-disable-next-line no-unused-vars
// import { toggleDark } from '~/composables'
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <router-view />
    <TheFooter />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">[Default Layout]</div>
  </main>
</template>
