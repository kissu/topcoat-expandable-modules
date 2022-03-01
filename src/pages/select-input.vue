<template>
  <h1 class="pb-6">Select Inputs</h1>
  <div class="grid grid-cols-3 gap-2 pb-6">
    <t-select-input label="Default" />
    <t-select-input label="Default Outlined & Loading" is-outlined is-loading />
    <t-select-input
      label="Bold Border"
      border-width="bold"
      border-color="primary"
      border-highlight-color="secondary"
      is-rounded="3xl"
      is-outlined
    />
    <t-select-input
      label="Dark and ExtraBold"
      border-width="extrabold"
      border-color="dark"
      border-highlight-color="secondary"
      inner-bg-color="primary"
      text-color="light"
      is-rounded="3xl"
      is-outlined
      menu-highlight-color="secondary"
      menu-text-highlight-color="dark"
      is-inside-label
    />
  </div>
</template>
