// until we reach the backend, here is some static data to play with
import { mockedComponents } from '~/utils/mockedData'
import { defineStore } from 'pinia'
import { useFetch } from '@vueuse/core'

const useLayersStore = defineStore('layers', {
  state: () => ({
    components: {}, // fetchNewComponents will fill this object
    filters: {
      coffee: 'mocha',
      tea: 'matcha',
    },
    test: 'basic test state',
  }),
  getters: {
    getComponentName: (state) => {
      return (name) => state.components[name]?.columns?.[0]
    },
    getFilterValue: (state) => {
      return (filterName) => state.filters[filterName]
    },
    columns: (state) => {
      return (componentName) => state.components[componentName].columns
    },
    dimensions: (state) => {
      return (componentName) => state.components[componentName].dimensions
    },
    loading: (state) => {
      //todo isLoading could be a better name here since it's a boolean
      return (componentName) => state.components[componentName].loading
    },
    measures: (state) => {
      return (componentName) => state.components[componentName].measures
    },
    rows: (state) => {
      return (componentName) => state.components[componentName].rows
    },
  },
  actions: {
    updateTest() {
      this.test = 'successfully updated!'
    },
    async fetchNewComponents() {
      const { data } = useFetch('https://jsonplaceholder.typicode.com/users/1').get().json()
      console.log('faked fetched data', data)
      this.components = mockedComponents
    },
    updateFilterByName({ filterName, filterValue, notify = false }) {
      this.filters[filterName] = filterValue

      //todo some HTTP configuration (use the fetch composable here)
      // if (this.config.persist_filters) {
      //   axios.defaults.xsrfCookieName = 'csrftoken';
      //   axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
      //   var payload = {
      //       value: newvalue
      //   }

      //   axios.post("/api/filter/" + this.config.filters.output[i].urlparam, payload)
      //   .then((response)  =>  {
      //       // Success
      //   }, (error)  =>  {
      //       console.log("SET PERSIST FILTER ERROR");
      //       console.log(error.response.data);
      //   })
      // }

      //todo sub to the state globally
      // https://pinia.esm.dev/core-concepts/state.html#subscribing-to-the-state
      // https://github.com/posva/pinia/discussions/794#discussioncomment-1802808
    },
    nullifyFilterValue({ filterName, notify = false }) {
      this.filters[filterName] = null
      //todo manager the router to strip the param from the URL (if needed)
      //todo sub to the state globally
    },
  },
})

export { useLayersStore }

// useLayersStore.$subscribe((mutation, state) => {
//   console.log('tracked!')
// })

//todo
// filterNotify()
// onVisualizationInit()
// onVisualizationUpdated()
