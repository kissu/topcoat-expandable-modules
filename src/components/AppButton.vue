<script>
export default {
  name: 'AppButton',
  props: {
    color: {
      type: String,
      default: 'primary',
    },
    isDisabled: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'regular',
    },
  },
  data() {
    return {
      colors: {
        primary:
          'bg-primary-500 hover:bg-primary-300 active:bg-primary-700 disabled:bg-neutral-200 text-neutral-50',
        secondary:
          'bg-secondary-500 hover:bg-secondary-300 active:bg-secondary-600 disabled:bg-neutral-200 text-neutral-900',
        ghost:
          'bg-white border border-primary-500 text-primary-500 hover:border-primary-300 hover:text-primary-300 active:bg-primary-50 disabled:bg-neutral-100 disabled:text-neutral-400 disabled:border-neutral-400',
      },
      sizes: {
        small: 'px-3 py-2 text-md',
        regular: 'px-4 py-3 text-md',
        large: 'px-5 py-3 text-xl',
      },
    }
  },
}
</script>

<template>
  <button
    class="
      flex
      items-center
      justify-center
      font-semibold
      text-center
      rounded-md
      transition-colors
      duration-200
    "
    :disabled="isDisabled"
    :class="[
      colors[color],
      sizes[size],
      {
        'cursor-not-allowed text-neutral-400': isDisabled,
      },
    ]"
  >
    <div v-if="$slots['default'] && ($slots['left-icon'] || $slots['right-icon'])" class="flex align-items">
      <!-- 👈 left icon -->
      <span v-if="$slots['left-icon']" class="flex flex-col mr-2">
        <slot name="left-icon"></slot>
      </span>

      <!-- 🏠 default -->
      <span class="font-bold leading-chill m-0-auto">
        <slot>Button CTA</slot>
      </span>

      <!-- 👉 right icon -->
      <span v-if="$slots['right-icon']" class="flex flex-col ml-2">
        <slot name="right-icon"></slot>
      </span>
    </div>

    <template v-else>
      <!-- 👈 left-icon -->
      <span v-if="$slots['left-icon']" class="flex flex-col mr-2">
        <slot name="left-icon"></slot>
      </span>

      <!-- 🏠 default -->
      <span class="font-bold leading-chill m-0-auto">
        <slot>Button CTA</slot>
      </span>

      <!-- 👉 right-icon -->
      <span v-if="$slots['right-icon']" class="flex flex-col ml-2">
        <slot name="right-icon"></slot>
      </span>
    </template>
  </button>
</template>
