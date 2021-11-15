<script setup lang="ts">
// eslint-disable-next-line no-undef
const router = useRouter()
</script>

<template>
  <main class="px-4 py-10 text-center text-teal-700 dark:text-gray-200">
    <div>
      <p class="text-4xl"></p>
    </div>
    <router-view />
    <div>
      <button class="btn m-3 text-sm mt-8" @click="router.back()">Back</button>
    </div>
  </main>
</template>
