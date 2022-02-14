<template>
  <div>
    <!-- Note: need to make a library like page for all components -->
    <h1 class="pb-6">Tabs</h1>
    <div class="flex flex-wrap">
      <h1 class="py-4 font-extrabold">Tab Section 1</h1>
      <t-section border-color="secondary" is-outlined>
        <t-tabs is-elevated target-id="first-nav">
          <t-tab line-color="secondary" target-id="tab_dark_1"> Text Inputs </t-tab>
          <t-tab line-color="secondary" target-id="tab_dark_2"> Select Inputs </t-tab>
        </t-tabs>

        <t-tab-sections section-group-id="first-nav">
          <t-tab-section section-id="tab_dark_1" inner-bg-color="light">
            <t-text-input label="Default" />
            <t-text-input
              label="Label"
              is-inside-label
              is-outlined
              is-rounded
              inner-bg-color="dark"
              text-color="light"
              placeholder="Placeholder"
            />
          </t-tab-section>
          <t-tab-section section-id="tab_dark_2" inner-bg-color="light"
            >No Select inputs in this branch</t-tab-section
          >
        </t-tab-sections>
      </t-section>

      <h1 class="py-4 font-extrabold">Tab Section 2</h1>
      <t-section is-rounded is-outlined>
        <t-tabs inner-bg-color="dark" is-elevated target-id="second-nav">
          <t-tab
            line-color="primary"
            inner-bg-color="dark"
            title-color="light"
            title-highlight-color="secondary"
            title-size="lg"
            target-id="secondary_nav_1"
          >
            Big Tab 1
          </t-tab>
          <t-tab
            line-color="primary"
            inner-bg-color="dark"
            title-color="light"
            title-highlight-color="secondary"
            title-size="lg"
            target-id="secondary_nav_2"
          >
            Big Tab 2
          </t-tab>
        </t-tabs>

        <t-tab-sections section-group-id="second-nav">
          <t-tab-section section-id="secondary_nav_1" inner-bg-color="dark" text-color="light">
            This is dark section 1
          </t-tab-section>
          <t-tab-section section-id="secondary_nav_2" inner-bg-color="dark" text-color="light"
            >This is dark section 2</t-tab-section
          >
        </t-tab-sections>
      </t-section>

      <h1 class="py-4 font-extrabold">Tab Section 3 (Sidebar)</h1>
      <t-section is-rounded is-outlined is-elevated has-rows>
        <t-tabs inner-bg-color="dark" is-elevated target-id="third_nav">
          <t-tab
            line-color="light"
            inner-bg-color="primary"
            title-color="light"
            title-highlight-color="secondary"
            title-size="lg"
            target-id="sidebar_1"
          >
            Sidebar Tab 1
          </t-tab>
          <t-tab
            line-color="light"
            inner-bg-color="primary"
            title-color="light"
            title-highlight-color="secondary"
            title-size="lg"
            target-id="sidebar_2"
          >
            Sidebar Tab 2
          </t-tab>
        </t-tabs>

        <t-tab-sections section-group-id="third_nav">
          <t-tab-section section-id="sidebar_1" inner-bg-color="secondary" text-color="dark">
            This is sidebar section 1
          </t-tab-section>
          <t-tab-section section-id="sidebar_2" inner-bg-color="secondary" text-color="dark"
            >This is sidebar section 2</t-tab-section
          >
        </t-tab-sections>
      </t-section>
    </div>
  </div>
</template>
