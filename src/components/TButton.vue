<template>
  <button
    class="p-3 whitespace-nowrap transition-colors cursor-pointer bg-opacity-95 hover:bg-opacity-100"
    :class="[
      styles.bgColors[bgColor],
      styles.borderWidthSizes[linePosition][lineSize],
      styles.fontSizes[titleSize],
      isDisabled && 'opacity-60 !cursor-not-allowed',
      isRounded && styles.borderRadius[isRounded],
      isVertical ? 'w-full' : 'w-max',
      isActive
        ? [
            'text-opacity-100',
            styles.borders[lineStyle],
            styles.borderColors[lineColor],
            styles.textColors[titleHighlightColor],
          ]
        : ['text-opacity-90', 'border-transparent', styles.textColors[titleColor]],
    ]"
    :disabled="isDisabled"
    @click="handleClick"
  >
    <div class="flex gap-2 items-center">
      <slot name="left-icon"></slot>
      {{ title }}
      <slot name="right-icon"></slot>
    </div>
    <slot></slot>
  </button>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 't-button',
  props: {
    //* Strings
    bgColor: {
      type: String,
      default: 'light',
    },
    lineColor: {
      type: String,
      default: 'neutral',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    lineSize: {
      type: String,
      default: 'medium',
      validator: (v) => ['normal', 'medium', 'bold', 'extrabold'].includes(v),
    },
    lineStyle: {
      type: String,
      default: 'solid',
      validator: (v) => ['solid', 'dashed', 'dotted', 'double'].includes(v),
    },
    title: {
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
      default: 'dark',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    titleSize: {
      type: String,
      default: 'sm',
      validator: (v) => ['sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(String(v)),
    },
    url: {
      type: String,
      default: '',
    },

    //* Booleans
    isActive: {
      type: Boolean,
      default: false,
    },
    isVertical: {
      type: Boolean,
      default: false,
    },

    //* String-leans
    isDisabled: {
      type: [Boolean, String],
      default: false,
      validator: (v) => ['true', 'false'].includes(String(v)),
    },
    isRounded: {
      type: [Boolean, String],
      default: 'none',
      validator: (v) => ['true', 'none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(String(v)),
    },
  },
  emits: ['clicked'],
  data() {
    return {
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
  methods: {
    handleClick() {
      if (!this.isDisabled) {
        if (this.url) {
          return window.open(this.url, '_blank')
        }
        return this.$emit('clicked')
      }
    },
  },
}
</script>
