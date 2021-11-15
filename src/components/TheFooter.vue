<script setup>
import { toggleDark } from '~/composables'
</script>

<script>
export default {
  name: 'TheFooter',
}
</script>

<template>
  <nav class="text-xl mt-6">I am a footer</nav>
  <button class="icon-btn mx-2 !outline-none" title="salut" @click="toggleDark()">
    <button class="i-carbon-sun dark:i-carbon-moon" text="primary-300 dark:secondary-500"></button>
  </button>
</template>
