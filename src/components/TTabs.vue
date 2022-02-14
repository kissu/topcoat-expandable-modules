<template>
  <div
    class="flex relative flex-wrap h-max"
    :class="[isElevated && 'shadow', styles.bgColors[innerBgColor], isSidebar ? 'w-min' : 'w-full']"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 't-tabs',
  props: {
    // Strings
    innerBgColor: {
      type: String,
      default: 'light',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    targetId: {
      type: String,
      default: '',
    },

    // Booleans
    isElevated: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeSection: '',
      styles: {
        bgColors: {
          primary: 'bg-primary-400',
          secondary: 'bg-secondary-400',
          light: 'bg-neutral-50',
          dark: 'bg-neutral-900',
          neutral: 'bg-neutral-400',
        },
      },
    }
  },
  computed: {
    isSidebar() {
      // Parent wrapper is forcing items to be in line.
      // In that case convert the tabs to sidebar buttons.
      return this.$parent.hasRows
    },
  },
  methods: {
    setActive(section) {
      this.activeSection = section
      this.hideSections()
    },
    hideSections() {
      const targetSection = document.getElementById(this.targetId)
      if (targetSection) {
        const childSections = targetSection.querySelectorAll('.t-tab-section')
        if (childSections) {
          for (let section of childSections) {
            section.style.display = 'none'
          }
        }
      }
    },
  },
}
</script>
