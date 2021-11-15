<script setup>
import vueLogo from '~/assets/images/vue_logo.png'
</script>

<script>
export default {
  data() {
    return {
      envVariable: import.meta.env.VITE_TEST,
    }
  },
}
</script>

<template>
  This emoji will react when hovered >>
  <div class="i-twemoji-grinning-face-with-smiling-eyes hover:i-twemoji-face-with-tears-of-joy" />

  <br />
  Firefox emoji: <span class="text-sm i-fxemoji-chicken"></span>
  <p>here is an env variable: {{ envVariable }}</p>
  <img :src="vueLogo" />

  <app-button color="ghost" is-disabled>
    <!-- <template #left-icon><div class="i-mdi:chevron-right"></div></template> -->
    <template #right-icon><div class="i-mdi:bell"></div></template>
  </app-button>
</template>
