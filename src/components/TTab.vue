<template>
  <div class="relative">
    <div
      class="w-max py-1 px-3 cursor-pointer transition-colors bg-opacity-95 hover:bg-opacity-100"
      :class="[
        isElevated && 'shadow',
        isSelected && [styles.borders[borderStyle], styles.borderWidthSizes[borderWidth], 'font-semibold'],
        styles.bgColors[innerBgColor],
        styles.borderColors[borderColor],
      ]"
    >
      <div class="pb-3 text-sm" :class="[styles.fontSizes[titleSize], styles.textColors[titleColor]]">
        {{ title }}
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // Strings
    borderColor: {
      type: String,
      default: 'neutral',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    borderStyle: {
      type: String,
      default: 'solid',
      validator: (v) => ['solid', 'dashed', 'dotted', 'double'].includes(v),
    },
    borderWidth: {
      type: String,
      default: 'medium',
      validator: (v) => ['normal', 'medium', 'bold', 'extrabold'].includes(v),
    },
    innerBgColor: {
      type: String,
      default: 'light',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
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
    titleSize: {
      type: String,
      default: 'sm',
      validator: (v) => ['sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(String(v)),
    },

    // Stringleans
    isElevated: {
      type: Boolean,
      default: false,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
    isOutlined: {
      type: Boolean,
      default: false,
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
        borderWidthSizes: {
          normal: 'border-b',
          medium: 'border-b-2',
          bold: 'border-b-4',
          extrabold: 'border-b-8',
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
}
</script>
