<script setup>
// import { createApp } from 'vue'
// const app = createApp({})
// app.component('SimpleButton', {
//   template: '<button>Click me</button>',
// })
// eslint-disable-next-line no-unused-vars
// import { toggleDark } from '~/composables'
</script>

<script>
import { mapStores } from 'pinia'
import { useLayersStore } from '~/stores/layers'

export default {
  computed: {
    ...mapStores(useLayersStore),
  },
  async created() {
    //! this one is mandatory to simulate the async call
    await this.fetchNewComponents()
    this.layersStore.$subscribe((mutation, state) => {
      console.log('sub mutation', mutation)
      console.log('sub state', state)
      // import { MutationType } from 'pinia'
      mutation.type // 'direct' | 'patch object' | 'patch function'
      // same as cartStore.$id
      mutation.storeId // 'cart'
      // only available with mutation.type === 'patch object'
      mutation.payload // patch object passed to cartStore.$patch()
    })
  },
}
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <router-view />
    <TheFooter />
    <div class="mt-5 mx-auto text-center opacity-25 text-sm">[Default Layout]</div>
  </main>
</template>
