<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'Expandable modules',
  meta: [{ name: 'description', content: 'Opinionated Vite Starter Template' }],
})
</script>

<template>
  <suspense>
    <template #default>
      <router-view />
    </template>
  </suspense>
</template>
