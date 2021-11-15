<template>
  <div v-for="guy in people" :key="guy.id">
    {{ guy.name }}
  </div>
</template>

<script>
export default {
  name: 'yolo',
  data() {
    return {
      // array of objects
      people: [
        {
          id: 1,
          name: 'John',
          age: 30,
        },
        {
          id: 2,
          name: 'Peter',
          age: 40,
        },
      ],
    }
  },
}
</script>
