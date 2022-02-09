<template>
  <div>
    <!-- Note: need to make a library like page for all components -->
    <h1 class="pb-6">Search Filters</h1>
    <div class="grid grid-cols-3 gap-2">
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
    <h1 class="pb-6">Tabs</h1>
    <div class="flex gap-5 flex-wrap">
      <div class="flex">
        <t-tab border-width="bold" border-style="dashed" is-elevated is-selected title="Page 1" />
        <t-tab is-elevated title="Page 2" />
      </div>
      <div class="flex">
        <t-tab
          inner-bg-color="primary"
          title-color="light"
          border-color="secondary"
          is-elevated
          is-selected
          title-size="lg"
          title="Page 3"
        >
        </t-tab>
        <t-tab inner-bg-color="dark" title-color="light" is-elevated title-size="lg" title="Page 4" />
      </div>
    </div>
  </div>
</template>
