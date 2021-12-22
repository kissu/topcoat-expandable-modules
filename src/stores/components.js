import { defineStore } from 'pinia'

export const useComponentsStore = defineStore('components', {
  state: () => ({
    currentComponent: 'team_filter_123',
  }),
  actions: {
    updateCurrentComponent({ componentName = 'season_filter_123' }) {
      this.currentComponent = componentName
    },
  },
})
