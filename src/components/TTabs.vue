<template>
  <div
    class="h-max my-2 flex w-full shadow overflow-x-hidden"
    :class="[
      isVertical ? 'flex-row' : 'flex-col',
      isOutlined && [
        'border',
        styles.borders[borderStyle],
        styles.borderWidthSizes.outline[borderWidth],
        styles.borderColors[borderColor],
      ],
      styles.borderRadius[isRounded],
    ]"
  >
    <!-- Tab Buttons -->
    <div class="flex" :class="[styles.bgColors[tabsBgColor], isVertical ? 'flex-col w-max' : 'w-full']">
      <div
        v-for="(child, index) in childNodes"
        :key="index"
        class="p-3 whitespace-nowrap transition-colors cursor-pointer bg-opacity-95 hover:bg-opacity-100"
        :class="[
          styles.bgColors[tabsBgColor],
          styles.borderWidthSizes[linePosition][tabLineSize],
          styles.fontSizes[titleSize],
          isVertical ? 'w-full' : 'w-max',
          activeIndex === index
            ? [
                'text-opacity-100',
                styles.borders[tabLineStyle],
                styles.borderColors[tabLineColor],
                styles.textColors[titleHighlightColor],
              ]
            : ['text-opacity-90', 'border-transparent', styles.textColors[titleColor]],
        ]"
        @click="setActive(index)"
      >
        {{ child.title }}
      </div>
    </div>

    <div
      ref="slotsContainer"
      class="py-4 px-2 bg-opacity-90 flex"
      :class="[styles.bgColors[contentBgColor], styles.textColors[contentTextColor]]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 't-tabs',
  props: {
    // Strings
    borderColor: {
      type: String,
      default: 'transparent',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    borderStyle: {
      type: String,
      default: 'solid',
      validator: (v) => ['solid', 'dashed', 'dotted', 'double'].includes(v),
    },
    borderWidth: {
      type: String,
      default: 'normal',
      validator: (v) => ['normal', 'medium', 'bold', 'extrabold'].includes(v),
    },
    contentBgColor: {
      type: String,
      default: 'transparent',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    contentTextColor: {
      type: String,
      default: 'dark',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    tabsBgColor: {
      type: String,
      default: 'light',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    tabLineColor: {
      type: String,
      default: 'neutral',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    tabLineStyle: {
      type: String,
      default: 'solid',
      validator: (v) => ['solid', 'dashed', 'dotted', 'double'].includes(v),
    },
    tabLineSize: {
      type: String,
      default: 'medium',
      validator: (v) => ['normal', 'medium', 'bold', 'extrabold'].includes(v),
    },
    titleColor: {
      type: String,
      default: 'dark',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    titleHighlightColor: {
      type: String,
      default: 'dark',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    titleSize: {
      type: String,
      default: 'sm',
      validator: (v) => ['sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(String(v)),
    },

    // Booleans
    isOutlined: {
      type: Boolean,
      default: false,
    },
    isVertical: {
      type: Boolean,
      default: false,
    },
    isRounded: {
      type: [Boolean, String],
      default: 'none',
      validator: (v) => ['true', 'none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(String(v)),
    },
  },
  data() {
    return {
      activeIndex: 0,
      childNodes: [],
      styles: {
        bgColors: {
          primary: 'bg-primary-400',
          secondary: 'bg-secondary-400',
          light: 'bg-neutral-50',
          dark: 'bg-neutral-900',
          neutral: 'bg-neutral-400',
          transparent: 'bg-transparent',
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
          outline: {
            normal: 'border',
            medium: 'border-2',
            bold: 'border-4',
            extrabold: 'border-8',
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
    linePosition() {
      return this.isVertical ? 'right' : 'bottom'
    },
  },
  mounted() {
    this.getSlotElements()
    this.setActive(0)
  },
  methods: {
    getSlotElements() {
      const slotContainer = this.$refs.slotsContainer
      if (slotContainer) {
        this.childNodes = slotContainer.children
      }
    },
    setActive(index) {
      this.activeIndex = index
      for (let elIndex in this.childNodes) {
        elIndex = parseInt(elIndex) // elIndex is type of string by default
        const element = this.childNodes[elIndex]

        if (typeof element === 'object') {
          if (elIndex === index) {
            element.style.display = 'inherit'
          } else {
            element.style.display = 'none'
          }
        }
      }
    },
  },
}
</script>
