<template>
  <div class="flex flex-col items-center space-y-2">
    <!-- Note: need to make a library like page for all components -->
    <router-link
      class="inline-block rounded-md bg-success-400 p-4 text-neutral-800"
      :to="{ name: 'text-input' }"
    >
      text input
    </router-link>
    <router-link
      class="inline-block rounded-md bg-success-400 p-4 text-neutral-800"
      :to="{ name: 'select-input' }"
    >
      select input
    </router-link>
  </div>
</template>
