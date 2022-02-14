<template>
  <div
    class="flex w-full mb-2 overflow-hidden"
    :class="[
      isOutlined && [
        'border',
        styles.borderRadius[isRounded],
        styles.borders[borderstyle],
        styles.borderColors[borderColor],
      ],
      hasRows ? 'flex-row' : 'flex-col',
      isElevated && 'shadow',
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 't-section',
  props: {
    // Strings
    borderColor: {
      type: String,
      default: 'neutral',
    },
    borderStyle: {
      type: String,
      default: 'solid',
      validator: (v) => ['solid', 'dashed', 'dotted', 'double'].includes(v),
    },

    // Booleans
    hasRows: {
      type: Boolean,
      default: false,
    },
    isElevated: {
      type: Boolean,
      default: false,
    },
    isOutlined: {
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
          normal: 'border',
          medium: 'border-2',
          bold: 'border-4',
          extrabold: 'border-8',
        },
      },
    }
  },
}
</script>
