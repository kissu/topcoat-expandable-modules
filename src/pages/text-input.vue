<template>
  <h1 class="pb-6">Text Inputs</h1>
  <div class="grid grid-cols-3 gap-2 pb-6">
    <t-text-input
      label="Default"
      border-width="medium"
      border-color="dark"
      border-highlight-color="secondary"
    />
    <t-text-input label="Default Outlined & Loading" is-outlined is-loading />
    <t-text-input label="Outlined & Clearable" is-outlined is-clearable="true" />
    <t-text-input
      label="Label"
      placeholder="Placeholder & Rounded 3xl"
      border-width="bold"
      border-color="primary"
      border-highlight-color="secondary"
      is-rounded="3xl"
      is-outlined
    />
    <t-text-input
      label="Label"
      placeholder="Inside Label & dark color"
      is-inside-label
      is-rounded="3xl"
      inner-bg-color="dark"
      is-outlined
      text-color="light"
    />
    <t-text-input
      label="Label"
      placeholder="Border width is bolder"
      border-width="extrabold"
      is-rounded="3xl"
      is-outlined
    />
  </div>
</template>
