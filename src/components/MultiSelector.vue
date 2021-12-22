<script>
export default {
  name: 'MultiSelect',
  data() {
    return {
      showMenu: false,
      selected_internal: '',
      expanded: false,
      menuMargin: '0px',
      is_filter: true,
      selectedItemsCount: true,
    }
  },
  computed: {
    selectedItems: {
      get() {
        const ids = this.selected_internal ? this.selected_internal.split('|') : []
        return this.menu.filter((item) => ids.includes(item.id))
      },
      set(value) {
        this.handleMenuMargin()
        const selected = value.map((item) => item.id).join('|')
        this.selected_internal = selected
        this.setFilterValue('selected_items', selected, true)
        if (!value || !value.length) {
          this.unsetFilterValue('selected_items', true)
        }
      },
    },
    names() {
      const columnName = this.findColumnByTag('names')
      if (!columnName) return
      return this.getColumn(columnName)
    },
    ids() {
      const columnName = this.findColumnByTag('ids')
      if (!columnName) return
      return this.getColumn(columnName)
    },
    menu() {
      let menu = []
      for (let index in this.names) {
        const id = this.ids[index]
        const name = this.names[index]
        menu.push({ id, name })
      }
      return menu
    },
  },
  methods: {
    selectItem({ id, name }) {
      const selectedItems = this.selectedItems || []
      selectedItems.push({ id, name })
      this.selectedItems = selectedItems
    },
    removeItem(selectedItem) {
      let selectedItems = this.selectedItems || []
      selectedItems = this.selectedItems.filter((item) => item.id !== selectedItem.id)
      this.selectedItems = selectedItems
    },
    onVisualizationInit() {
      const initial_value = this.getFilterValue('selected_items')
      if (initial_value) {
        this.selected_internal = initial_value
      } else if (this.config.default_value) {
        this.selected_internal = this.config.default_value
      } else {
        return this.unsetFilterValue('selected_items', true)
      }
      return this.setFilterValue('selected_items', this.selected_internal, true)
    },
    async handleMenuMargin() {
      await this.$nextTick()
      const container = this.$refs.container
      if (container) {
        const height = container.clientHeight
        return (this.menuMargin = `${height}px`)
      }
      return (this.menuMargin = 0)
    },
    close() {
      this.showMenu = false
      this.expanded = false
      this.handleMenuMargin()
      this.selectedItemsCount = true
    },
    open() {
      this.showMenu = true
      this.handleMenuMargin()
    },
    expandSelectButton() {
      this.expanded = true
      this.handleMenuMargin()
      this.selectedItemsCount = false
    },
  },
}
</script>

<template>
  <div class="relative w-full md:w-56" :class="{ 'h-14': expanded }" @mouseleave="close">
    <!-- <div v-if="metadata.title" class="pb-1 text-xs font-semibold text-primaryFontColor">
      {{ metadata.title }}
    </div>
    <div v-else class="h-5"></div> -->
    <div
      ref="container"
      class="block w-full overflow-hidden leading-tight border rounded appearance-none border-filterBorderColor bg-filterBackgroundColor text-filterFontColor focus:outline-none primaryFilterRadius"
      :class="expanded ? 'absolute h-max z-50' : 'relative h-9'"
      @click="open"
    >
      <button
        type="button"
        class="relative left-0 right-0 inline-flex w-full py-2 pl-2 overflow-hidden rounded-lg rounded-b-none focus:z-10 focus:outline-none"
        @mouseenter="expandSelectButton"
      >
        <div class="relative flex w-10/12 h-full gap-1 overflow-hidden" :class="{ 'flex-wrap': expanded }">
          <div v-if="!selectedItems || !selectedItems.length" class="w-auto text-left">
            Select Multiple...
          </div>
          <div
            v-for="item in selectedItems"
            :key="item"
            class="h-full px-2 text-xs rounded-3xl bg-filterHighlightColor text-filterFontHighlightColor min-w-max"
            @click="removeItem(item)"
          >
            {{ item.name }}
            <i class="ml-1 fas fa-times"></i>
          </div>
        </div>
      </button>
      <div
        class="absolute flex w-1/12 px-2 text-sm pointer-events-none top-3 right-3 text-filterFontColor hover:text-filterFontHighlightColor"
      >
        <span v-if="selectedItems && selectedItems.length && selectedItemsCount" class="relative bottom-1">
          {{ selectedItems.length }}
        </span>
        <i v-else-if="!loading" class="fas fa-chevron-down"></i>
        <a-icon v-else type="loading" />
      </div>
    </div>
    <div
      v-if="showMenu"
      class="absolute z-50 block w-full overflow-auto leading-tight border rounded shadow-xl appearance-none border-filterBorderColor bg-filterMenuColor text-filterFontColor focus:outline-none max-h-56"
      :style="{ 'margin-top': menuMargin }"
    >
      <button
        v-for="item in menu"
        :key="item"
        type="button"
        class="relative inline-flex w-full px-4 py-3 border-b-2 focus:z-10 focus:outline-none border-filterBorderColor focus:text-grayscaleOneColor hover:text-grayscaleOneColor hover:bg-filterHighlightColor hover:text-filterFontHighlightColor"
        @click="selectItem(item)"
      >
        <template v-if="!selectedItems.includes(item)">
          <div class="text-sm h-max">
            {{ item.name }}
          </div>
        </template>
      </button>
    </div>
  </div>
</template>
