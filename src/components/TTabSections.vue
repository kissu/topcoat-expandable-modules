<template>
  <div :id="sectionGroupId" class="flex w-full gap-4 overflow-auto">
    <slot></slot>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line
  name: 't-tab-sections',
  props: {
    sectionGroupId: {
      type: String,
      default: '',
    },
  },
}
</script>
