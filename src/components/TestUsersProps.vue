<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  users: {
    type: [Array, Object],
    default: () => [],
  },
})

const { users } = toRefs(props)
</script>

<template>
  <div class="mt-4 text-2xl text-success-300">Header: Cool users</div>
  <p class="text-xl font-bold text-warning-700">List below</p>
  <br />
  <ul>
    <template v-for="user in users" :key="user.id">
      <li v-if="user.id % 2 === 0">
        <span class="text-primary-500">{{ user.name }}</span>
        <span class="ml-2 text-secondary-400">{{ user.email }}</span>
      </li>
    </template>
  </ul>
</template>
