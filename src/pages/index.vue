<template>
  <div>
    <h1 class="pt-2">Tabs</h1>
    <t-tabs
      tabs-bg-color="dark"
      tabs-title-color="light"
      tabs-title-highlight-color="secondary"
      tabs-line-color="secondary"
      tabs-line-style="dashed"
      tabs-line-size="medium"
      content-bg-color="dark"
      content-text-color="light"
      border-color="secondary"
      border-width="bold"
      is-outlined
      is-rounded
    >
      <div title="Section 1">This is section 1</div>
      <div title="Section 2">This is section 2</div>
    </t-tabs>

    <h1 class="pt-2">Text Inputs</h1>
    <t-tabs content-bg-color="light">
      <t-text-input label="Label" title="Default" />
      <t-text-input is-outlined title="Outlined" label="Label" />
    </t-tabs>
    <t-button
      is-active
      url="https://twitter.com/"
      title="Twitter"
      line-color="dark"
      line-highlight-color="secondary"
      is-rounded
    >
      <template #left-icon>
        <i class="i-mdi:twitter" />
      </template>
    </t-button>
  </div>
</template>
