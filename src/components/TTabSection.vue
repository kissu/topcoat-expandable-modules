<template>
  <div
    :id="sectionId"
    class="w-full flex-wrap flex t-tab-section p-4 hidden gap-3"
    :class="[styles.bgColors[innerBgColor], styles.textColors[textColor]]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 't-tab-section',
  props: {
    innerBgColor: {
      type: String,
      default: 'light',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    sectionId: {
      type: String,
      default: '',
    },
    textColor: {
      type: String,
      default: 'dark',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
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
