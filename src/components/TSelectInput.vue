<template>
  <div class="relative">
    <div
      class="relative flex items-center w-full h-max"
      :class="[
        styles.borders[borderStyle],
        styles.textColors[textColor],

        stringleanIsOutlined && [styles.bgColors[innerBgColor], styles.borderRadius[stringleanIsRounded]],
        stringleanIsDisabled && 'opacity-30 group',
        stringleanIsError && 'border-error-400',
        !stringleanIsError && isFocused && styles.borderColors[borderHighlightColor],
        !stringleanIsError && !isFocused && styles.borderColors[borderColor],

        stringleanIsOutlined
          ? styles.borderWidthSizes.outline[borderWidth]
          : styles.borderWidthSizes.underline[borderWidth],
      ]"
    >
      <!-- Label -->
      <div class="flex flex-col justify-center w-full">
        <div
          class="text-left transition-colors w-max"
          :class="[stringleanIsInsideLabel && 'pt-2', stringleanIsError && 'text-error-400']"
        >
          <!-- Inside Label -->
          <label
            v-if="stringleanIsInsideLabel"
            :for="computedInputUuid"
            class="top-0 px-1 pb-1 ml-4 text-sm opacity-80 group-hover:cursor-not-allowed"
          >
            {{ label }}
          </label>

          <!-- Top Label -->
          <label
            v-else
            class="absolute px-1 ml-4 transition-transform transform group-hover:cursor-not-allowed"
            :for="computedInputUuid"
            :class="[
              // Translate label according to border-width.
              stringleanIsOutlined && styles.bgColors[innerBgColor],
              topLabel
                ? [styles.borderLabelPosition[borderWidth], 'opacity-100']
                : 'translate-y-4 h-max opacity-40',
            ]"
          >
            <div :class="topLabel && 'bottom-[5px]'" class="relative">{{ label }}</div>
          </label>
        </div>

        <div>
          <!-- Select Input -->
          <input
            :id="computedInputUuid"
            :value="selected && selected.label"
            :disabled="stringleanIsDisabled || stringleanIsLoading"
            :class="[
              styles.borderRadius[stringleanIsRounded],
              stringleanIsInsideLabel ? 'pt-1 pb-3' : 'py-4',
            ]"
            readonly
            class="pl-5 pr-8 bg-transparent outline-none appearance-none cursor-pointer h-max group-hover:cursor-not-allowed w-full"
            aria-label="select field"
            @focus="isFocused = true"
            @blur="isFocused = false"
          />
        </div>
      </div>

      <!-- Icon -->
      <div
        class="absolute top-0 bottom-0 right-0 pt-2 pr-3 my-auto h-max"
        :class="styles.textColors[textColor]"
      >
        <div v-if="stringleanIsLoading">
          <i class="i-mdi:loading animate-spin"></i>
        </div>
        <label v-else :for="computedInputUuid" class="cursor-pointer">
          <i class="transition transform i-mdi:menu-down"></i>
        </label>
      </div>
    </div>

    <!-- Menu -->
    <div
      v-show="items.length && (isFocused || focusedMenuItem)"
      class="absolute top-0 z-10 w-full max-h-48 shadow-2xl overflow-auto"
      :class="[
        styles.bgColors[innerBgColor],
        styles.borderRadius[stringleanIsRounded],
        styles.textColors[textColor],
      ]"
    >
      <!-- Options -->
      <div
        v-for="item in items"
        :key="item.id"
        class="py-2 px-5 cursor-pointer text-left overflow-hidden"
        :class="
          focusedMenuItem == item.id
            ? [styles.bgColors[menuHighlightColor], styles.textColors[menuTextHighlightColor]]
            : styles.bgColors[innerBgColor]
        "
        @mouseenter="focusedMenuItem = item.id"
        @mouseleave="focusedMenuItem = null"
        @click="selectItem(item)"
      >
        {{ item.label }}
      </div>
    </div>
  </div>
</template>

<script>
import { computedInputUuid } from '~/utils/helpers'

export default {
  // eslint-disable-next-line
  name: 't-select-input',
  props: {
    //* Strings
    borderColor: {
      type: String,
      default: 'neutral',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    borderHighlightColor: {
      type: String,
      default: 'primary',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    borderStyle: {
      type: String,
      default: 'solid',
      validator: (v) => ['solid', 'dashed', 'dotted', 'double'].includes(v),
    },
    borderWidth: {
      type: String,
      default: 'normal',
      validator: (v) => ['normal', 'medium', 'bold', 'extrabold'].includes(v),
    },
    innerBgColor: {
      type: String,
      default: 'light',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    label: {
      type: String,
      default: '',
    },
    menuHighlightColor: {
      type: String,
      default: 'dark',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    menuTextHighlightColor: {
      type: String,
      default: 'light',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },
    textColor: {
      type: String,
      default: 'dark',
      validator: (v) => ['primary', 'secondary', 'light', 'dark', 'neutral'].includes(v),
    },

    //* String-leans
    isClearable: {
      type: [Boolean, String],
      default: false,
      validator: (v) => ['true', 'false'].includes(String(v)),
    },
    isDisabled: {
      type: [Boolean, String],
      default: false,
      validator: (v) => ['true', 'false'].includes(String(v)),
    },
    isError: {
      type: [Boolean, String],
      default: false,
      validator: (v) => ['true', 'false'].includes(String(v)),
    },
    isInsideLabel: {
      type: [Boolean, String],
      default: false,
      validator: (v) => ['true', 'false'].includes(String(v)),
    },
    isLoading: {
      type: [Boolean, String],
      default: false,
      validator: (v) => ['true', 'false'].includes(String(v)),
    },
    isOutlined: {
      type: [Boolean, String],
      default: false,
      validator: (v) => ['true', 'false'].includes(String(v)),
    },
    isRounded: {
      type: [Boolean, String],
      default: 'none',
      validator: (v) => ['true', 'none', 'sm', 'md', 'lg', 'xl', '2xl', '3xl'].includes(String(v)),
    },
  },
  data() {
    return {
      isFocused: false, // true if input has value or typing cursor
      focusedMenuItem: null,
      styles: {
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
        borderLabelPosition: {
          normal: '-translate-y-0.5 !text-xs',
          medium: '-translate-y-0.5 !text-xs',
          bold: '-translate-y-1 !text-xs',
          extrabold: '-translate-y-2 !text-sm',
        },
        borderRadius: {
          none: 'rounded-none',
          true: 'rounded',
          sm: 'rounded-sm',
          md: 'rounded-md',
          lg: 'rounded-lg',
          xl: 'rounded-xl',
          '2xl': 'rounded-2xl',
          '3xl': 'rounded-3xl',
        },
        borderWidthSizes: {
          outline: {
            normal: 'border',
            medium: 'border-2',
            bold: 'border-4',
            extrabold: 'border-8',
          },
          underline: {
            normal: 'border-b',
            medium: 'border-b-2',
            bold: 'border-b-4',
            extrabold: 'border-b-8',
          },
        },
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
      // Fake values, remove before pushing to topcoat-public
      items: [
        {
          id: 1,
          label: 'John',
        },
        {
          id: 2,
          label: 'Wick',
        },
        {
          id: 3,
          label: 'Doe',
        },
        {
          id: 4,
          label: 'Keanu',
        },
        {
          id: 5,
          label: 'Reeves',
        },
      ],
      selected: null,
      is_filter: true, // Todo: remove when spa is live, old backend logic uses to check if component is a viz or filter
    }
  },
  computed: {
    computedInputUuid,
    topLabel() {
      // Border label that animates to top if any of these condition are true.
      // Unlike `inside label` top label is only active when input focus or input has value.
      return (this.isFocused || this.selected) && !this.stringleanIsInsideLabel
    },
  },
  methods: {
    onVisualizationInit() {
      const initial_value = this.getFilterValue('dropdown')

      this.getItems()

      if (initial_value) {
        // Url has selected value (url param is id).
        this.selected = this.items.filter((item) => item.id == initial_value)[0]
      } else if (this.items.length) {
        if (this.config.default_value) {
          // Find id of default, if specified (default value is label).
          this.selected = this.items.filter((item) => item.label == this.config.default_value)[0]
        } else {
          // Assign first item as selected.
          this.selected = this.items[0]
        }
      } else {
        // Found nothing, keep url empty.
        return
      }

      // Todo: Remove this when spa is live
      this.setFilterValue('dropdown', this.selected.id, true)

      // Todo: Use this when spa is live
      // this.setFilterValue({ filterName: 'query', filterValue: this.text_internal, notify: true })
    },
    getItems() {
      const idColumn = this.findColumnByTag('ids')
      const labelColumn = this.findColumnByTag('labels')

      const ids = this.getColumn(idColumn)
      const labels = this.getColumn(labelColumn)

      const items = []
      if (ids && labels) {
        for (let index in ids) {
          const id = ids[index]
          const label = labels[index]
          items.push({ id, label })
        }
      }
      this.items = items
    },
    selectItem(item) {
      this.selected = item
      this.focusedMenuItem = null
      this.setFilterValue('dropdown', this.selected.id, true)
    },
  },
}
</script>
