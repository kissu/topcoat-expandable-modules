import { isEmpty } from 'lodash-es'

import { mapState } from 'pinia'
import { useLayersStore } from '~/stores/layers'
import { useComponentsStore } from '~/stores/components'

export const visualizationMixin = {
  computed: {
    ...mapState(useLayersStore, ['components']),
    ...mapState(useComponentsStore, ['currentComponent']),
  },
  methods: {
    getColumn({ rowName }) {
      if (isEmpty(this.components)) return

      const componentRows = this.components[this.currentComponent].rows
      return componentRows.reduce((finalArray, currentRow) => {
        const renderedPopulatedInRow = currentRow[rowName]?.rendered
        if (renderedPopulatedInRow) finalArray.push(renderedPopulatedInRow)
        return finalArray
      }, [])
    },
  },
}
