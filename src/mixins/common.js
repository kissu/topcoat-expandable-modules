//doc notion related: https://www.notion.so/topcoat/Data-and-Method-Stubs-for-Expandable-Modules-e8d0bb0b4fcb473facb16873545cbc38 📕
import { mapState, mapActions } from 'pinia'
import { useLayersStore } from '~/stores/layers'

export const commonMixin = {
  computed: {
    ...mapState(useLayersStore, ['test', 'filters']),
    //? below is a getter, but we're writting it like that in Pinia as shown here https://pinia.esm.dev/core-concepts/getters.html#usage-with-the-options-api
    ...mapState(useLayersStore, { getComponentName: (store) => store.getComponentName }),
    ...mapState(useLayersStore, { getFilterValue: (store) => store.getFilterValue }),
    ...mapState(useLayersStore, { columns: (store) => store.columns }),
    ...mapState(useLayersStore, { dimensions: (store) => store.dimensions }),
    ...mapState(useLayersStore, { loading: (store) => store.loading }),
    ...mapState(useLayersStore, { measures: (store) => store.measures }),
    ...mapState(useLayersStore, { rows: (store) => store.rows }),
  },
  methods: {
    ...mapActions(useLayersStore, ['fetchNewComponents', 'updateFilterByName', 'nullifyFilterValue']),

    setFilterValue({ filterName, filterValue, notify = false }) {
      this.updateFilterByName({ filterName, filterValue, notify })
    },
    unsetFilterValue({ filterName, notify = false }) {
      this.nullifyFilterValue({ filterName, notify })
    },
  },
}
