<template>
  <h2>Directives</h2>

  <p>team filter</p>
  <simple-div
    v-slot="{ user: rows }"
    t-layer="team_filter_123"
    t-filter:start_date="2021-02-20"
    t-filter:end_date="2021-02-25"
  >
    <p>x: {{ rows }}</p>
  </simple-div>
  <button @click="updateTest">update test</button>

  <p>season filter</p>
  <!-- <simple-div v-slot="{ user: rows }" t-layer="season_filter_123">
    <p>x: {{ rows }}</p>
  </simple-div> -->
</template>

<script>
import { mapActions } from 'pinia'
import { useLayersStore } from '~/stores/layers'

export default {
  data() {
    return {
      layer: 'pong@gmail.com',
    }
  },
  methods: {
    ...mapActions(useLayersStore, ['updateTest']),
  },
}
</script>
