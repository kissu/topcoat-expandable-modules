<template>
  <button class="p-2 bg-white rounded text-primary-500" @click="callMeMaybe">click on me</button>
  <p>Preference: {{ getComponentName('team_filter_123') }}</p>

  <h3>Columns:</h3>
  <div v-for="column in getColumn({ rowName: 'team_name' })" :key="column">
    {{ column }}
  </div>

  <br />
  <button class="p-2 mb-2 bg-white rounded text-primary-500" @click="printFilter('coffee')">
    get coffee filter value
  </button>

  <br />
  <button class="p-2 mb-2 bg-white rounded text-primary-500" @click="printFilter('tea')">
    get tea filter value
  </button>

  <br />
  <p>email: {{ email }}</p>

  <br />
  <h3>Helpers section</h3>
  <p>Columns</p>
  <div v-for="column in columns('team_filter_123')" :key="column">
    {{ column }}
  </div>
  <br />

  <p>Dimensions</p>
  <div v-for="dimension in dimensions('team_filter_123')" :key="dimension">
    {{ dimension }}
  </div>
  <br />

  <p>Loading? >> {{ loading('team_filter_123') }}</p>
  <br />

  <p>Measures</p>
  <div v-for="measure in measures('team_filter_123')" :key="measure">
    {{ measure }}
  </div>
  <br />

  <p>Rows</p>
  <div v-for="row in rows('team_filter_123')" :key="row">
    {{ row }}
  </div>
  <br />
</template>

<script>
import { useFetch, until } from '@vueuse/core'

export default {
  name: 'AccessPinia',
  data() {
    return {
      email: 'wrong one',
    }
  },
  async created() {
    //? faking a layers/components fetch here
    this.fetchNewComponents()
    const { data, isFinished } = useFetch('https://jsonplaceholder.typicode.com/users/1').get().json()
    await until(isFinished).toBe(true)
    this.email = data.value.email
  },
  methods: {
    printFilter(filterName) {
      console.log(`the value of ${filterName} is ${this.getFilterValue(filterName)}`)
    },
  },
}
</script>
