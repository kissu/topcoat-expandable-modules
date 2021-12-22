<template>
  <div class="relative w-full primaryFilterRadius md:w-56">
    <div v-if="metadata.title" class="pb-1 text-xs font-semibold text-primaryFontColor">
      {{ metadata.title }}
    </div>
    <div v-else class="h-5"></div>
    <div class="relative">
      <span
        class="absolute z-10 items-center justify-center text-base font-normal text-center rounded text-filterFontColor right-6 top-1"
      >
        <i v-if="!loading" class="text-sm" :class="searchIcon ? searchIcon : 'fas fa-search'"></i>
        <a-icon v-else type="loading" />
      </span>
      <input
        v-model="queryText"
        type="text"
        :placeholder="metadata.placeholder || 'Search'"
        class="flex items-center justify-around w-full pl-4 border h-9 primaryFilterRadius text-filterFontColor bg-filterBackgroundColor border-filterBorderColor focus:outline-none"
        @keyup="onEnter"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchFilter',
  props: {
    searchIcon: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      text_internal: null,
      is_filter: true,
      queryText: '',
    }
  },
  computed: {
    urlParam: {
      get() {
        return this.text_internal
      },
      set(value) {
        this.text_internal = value
        this.setFilterValue('query', this.text_internal, true)
      },
    },
  },
  methods: {
    onVisualizationInit() {
      const initial_value = this.getFilterValue('query')

      if (initial_value) {
        this.text_internal = initial_value
      } else if (this.config.default_value) {
        this.text_internal = this.config.default_value
      } else {
        return
      }
      this.queryText = this.text_internal
      this.setFilterValue('query', this.text_internal, true)
    },
    onEnter(e) {
      if (e.keyCode === 13) {
        this.urlParam = this.queryText
      }
    },
  },
}
</script>
