<template>
  <div>
    <h1 class="pt-2">Tabs</h1>
    <t-tabs
      tabs-bg-color="dark"
      title-color="light"
      title-highlight-color="secondary"
      line-color="secondary"
      line-style="dashed"
      content-bg-color="dark"
      content-text-color="light"
    >
      <div title="Section 1">This is section 1</div>
      <div title="Section 2">This is section 2</div>
    </t-tabs>

    <h1 class="pt-2">Text Inputs</h1>
    <t-tabs>
      <t-text-input label="Label" title="Default" />
      <t-text-input is-outlined title="Outlined" label="Label" />
    </t-tabs>
  </div>
</template>
