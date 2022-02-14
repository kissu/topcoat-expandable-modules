<template>
  <div class="h-max" :class="isSidebarTab && 'w-full'" @click="setActive">
    <div
      class="p-3 whitespace-nowrap transition-colors cursor-pointer w-full bg-opacity-95 hover:bg-opacity-100"
      :class="[
        isElevated && 'shadow',
        isActive ? [styles.borders[lineStyle], styles.borderColors[lineColor]] : 'border-transparent',
        styles.bgColors[innerBgColor],
        styles.borderRadius[isRounded],
        styles.borderWidthSizes[linePosition][lineSize],
      ]"
    >
      <div
        class="text-sm flex flex-col"
        :class="[styles.fontSizes[titleSize], isActive ? 'text-opacity-100' : 'text-opacity-90', textColor]"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 't-tab',
  props: {
    // Strings
    activeSection: {
      type: String,
      default: '',
    },
    innerBgColor: {
      type: String,
      default: 'light',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    targetId: {
      type: String,
      default: '',
    },
    titleColor: {
      type: String,
      default: 'dark',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    titleHighlightColor: {
      type: String,
      default: '', // Should use titleColor only if no value provided
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    titleSize: {
      type: String,
      default: 'sm',
      validator: (v) => ['sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(String(v)),
    },
    lineColor: {
      type: String,
      default: 'neutral',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    lineStyle: {
      type: String,
      default: 'solid',
      validator: (v) => ['solid', 'dashed', 'dotted', 'double'].includes(v),
    },
    lineSize: {
      type: String,
      default: 'medium',
      validator: (v) => ['normal', 'medium', 'bold', 'extrabold'].includes(v),
    },
    url: {
      type: String,
      default: '',
    },

    // Booleans
    isElevated: {
      type: Boolean,
      default: false,
    },

    // Stringleans
    isRounded: {
      type: [Boolean, String],
      default: 'none',
      validator: (v) => ['true', 'none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(String(v)),
    },
  },
  data() {
    return {
      styles: {
        bgColors: {
          primary: 'bg-primary-400',
          secondary: 'bg-secondary-400',
          light: 'bg-neutral-50',
          dark: 'bg-neutral-900',
          neutral: 'bg-neutral-400',
        },
        borders: {
          solid: 'border-solid',
          dashed: 'border-dashed',
          dotted: 'border-dotted',
          double: 'border-double',
        },
        borderColors: {
          primary: 'border-primary-400',
          secondary: 'border-secondary-400',
          light: 'border-neutral-50',
          dark: 'border-neutral-900',
          neutral: 'border-neutral-400',
        },
        borderRadius: {
          none: 'rounded-none',
          true: 'rounded',
          sm: 'rounded-sm',
          md: 'rounded-md',
          lg: 'rounded-lg',
          xl: 'rounded-xl',
          '2xl': 'rounded-2xl',
          '3xl': 'rounded-3xl',
        },
        borderWidthSizes: {
          bottom: {
            normal: 'border-b',
            medium: 'border-b-2',
            bold: 'border-b-4',
            extrabold: 'border-b-8',
          },
          right: {
            normal: 'border-r',
            medium: 'border-r-2',
            bold: 'border-r-4',
            extrabold: 'border-r-8',
          },
        },
        fontSizes: {
          sm: 'text-sm',
          md: 'text-md',
          lg: 'text-lg',
          xl: 'text-xl',
          '2xl': 'text-2xl',
          '3xl': 'text-3xl',
        },
        textColors: {
          primary: 'text-primary-400',
          secondary: 'text-secondary-400',
          light: 'text-neutral-50',
          dark: 'text-neutral-900',
          neutral: 'text-neutral-400',
        },
      },
    }
  },
  computed: {
    currentActiveSection() {
      if (this.$parent.activeSection) {
        return this.$parent.activeSection
      }
      return null
    },
    hasParentWrapper() {
      return this.$parent.activeSection !== undefined
    },
    isActive() {
      return this.currentActiveSection === this.targetId
    },
    isSidebarTab() {
      return this.$parent.isSidebar
    },
    linePosition() {
      return this.isSidebarTab ? 'right' : 'bottom'
    },
    textColor() {
      if (this.isActive && this.titleHighlightColor) {
        return this.styles.textColors[this.titleHighlightColor]
      }
      return this.styles.textColors[this.titleColor]
    },
  },
  mounted() {
    if (!this.currentActiveSection && this.hasParentWrapper) {
      this.setActive()
    }
  },
  methods: {
    setActive() {
      // If has url, open it new tab.
      if (this.url) {
        return window.open(this.url, '_blank')
      }

      // If part of a tab family, set active.
      if (this.hasParentWrapper) {
        this.$parent.setActive(this.targetId)
      }

      // Set attached section active
      const section = document.getElementById(this.targetId)
      if (section) {
        if (this.hasParentWrapper) {
          return (section.style.display = 'flex')
        }

        // If not part of parent, work as a toggler
        const isVisible = section.style.display === 'flex'
        section.style.display = isVisible ? 'none' : 'flex'
      }
    },
  },
}
</script>
