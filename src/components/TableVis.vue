<template>
  <VisualizationWrapper ref="wrapper" v-slot="{ height }">
    <div ref="top" style="padding: 10px">
      <div :style="{ paddingBottom: metadata.searchable || metadata.download_csv ? '20px' : '0px' }">
        <div
          v-if="metadata && metadata.title"
          ref="title"
          style="padding: 10px; font-weight: 700; font-size: 16px"
        >
          {{ metadata.title }}
        </div>
        <div v-if="metadata && metadata.subtitle" ref="subtitle" style="font-weight: 400; font-size: 12px">
          {{ metadata.subtitle }}
        </div>
        <div
          v-if="metadata.searchable || metadata.download_csv"
          style="position: absolute; top: 20px; right: 15px"
        >
          <a-input-search
            v-if="metadata.searchable"
            :allow-clear="true"
            style="width: 252px; font-size: 11px"
            placeholder="Search"
            @search="searchTable"
          />
          <a-dropdown v-if="metadata.download_csv" style="font-size: 13px">
            <a-menu slot="overlay">
              <a-menu-item key="csv" @click="downloadCSV">Download CSV</a-menu-item>
            </a-menu>
            <a-button style="margin-left: 5px; margin-top: -5px" type="primary">
              Export...<a-icon type="down" />
            </a-button>
          </a-dropdown>
        </div>
      </div>
      <a-table
        v-if="extLoaded"
        :scroll="{ y: tableHeight(height) }"
        :row-key="(record) => record._index"
        :columns="tableColumns"
        :pagination="pagination"
        size="middle"
        :data-source="tableData"
        @change="handleChange"
      >
        >
        <span
          ref="first"
          slot="first"
          slot-scope="text"
          :style="{
            color: config.negative_red && (text < 0 || (text.length && text[0] == '-')) ? 'red' : 'unset',
            fontWeight: 'bold',
          }"
          >{{ text.rendered }}</span
        >

        <span
          ref="column"
          slot="columns"
          slot-scope="text"
          :style="{
            color: config.negative_red && (text < 0 || (text.length && text[0] == '-')) ? 'red' : 'unset',
          }"
          >{{ text.rendered }}</span
        >

        <template ref="custom" #custom="text, record, index, column">
          <CustomCell :template="column.html" :cell="text" />
        </template>
      </a-table>
    </div>
  </VisualizationWrapper>
</template>

<script>
import { visualizationMixin } from '../mixins/visualization_mixin.js'
import CustomCell from '../framework/CustomCell.vue'
import VisualizationWrapper from '../framework/VisualizationWrapper.vue'

export default {
  components: { CustomCell, VisualizationWrapper },
  mixins: [visualizationMixin],
  data() {
    return {
      extLoaded: false,
      pagination: false,
      sortKey: null,
      search: null,
    }
  },
  computed: {
    tableData: function () {
      if (!this.rows) return null
      else if (!this.search || this.search == '') return this.rows
      else {
        var results = []
        var re = new RegExp(this.search, 'i')
        var rows = this.rows
        var columns = this.columns
        // Promise
        var runSearch = new Promise(function (resolve, reject) {
          for (var i = 0; i < rows.length; i++) {
            for (var j = 0; j < columns.length; j++) {
              const value = String(rows[i][columns[j]].rendered)
              if (value.match(re)) results.push(rows[i])
            }
          }
          resolve(results)
        })
        return results
      }
    },
    tableColumns: function () {
      if (!this.columns || !this.rows) return null
      var columns = []
      for (var i = 0; i < this.columns.length; i++) {
        if (this.columns[i] == '_index') continue
        var column = null
        var html = null
        var width = null
        // Look for a custom html column
        for (var m = 0; m < this.metadata.columns.length; m++) {
          if (this.metadata.columns[m].name && this.metadata.columns[m].name == this.columns[i]) {
            if (this.metadata.columns[m].html) {
              html = this.metadata.columns[m].html
            }
            if (this.metadata.columns[m].width != null) {
              width = this.metadata.columns[m].width
            }
          }
        }
        if (html) {
          column = {
            title: this.columns[i].replace('_', ' '),
            html: html,
            dataIndex: this.columns[i],
            key: this.columns[i],
            index: i,
            width: width,
            scopedSlots: { customRender: 'custom' },
          }
        } else if (i == 0) {
          column = {
            title: this.columns[i].replace('_', ' '),
            dataIndex: this.columns[i],
            key: this.columns[i],
            index: i,
            width: width,
            sorter: this.metadata.sortable ? (a, b) => this.columnSort(a, b) : null,
            scopedSlots: { customRender: 'first' },
          }
        } else {
          column = {
            title: this.columns[i].replace('_', ' '),
            dataIndex: this.columns[i],
            key: this.columns[i],
            index: i,
            width: width,
            sorter: this.metadata.sortable ? (a, b) => this.columnSort(a, b) : null,
            scopedSlots: { customRender: 'columns' },
          }
        }
        columns.push(column)
      }
      return columns
    },
  },
  methods: {
    handleChange(pagination, filters, sorter) {
      this.pagination = pagination
      this.sortKey = sorter.columnKey
    },
    onVisualizationInit() {
      //console.log("onVisualizationInit");
      const pagesize = this.metadata.pagesize ? this.metadata.pagesize : 10
      if (this.count > pagesize) {
        this.pagination = {
          pageSize: pagesize,
          current: 1,
        }
      } else {
        this.pagination = false
      }
      this.$nextTick(function () {
        this.extLoaded = true
      })
    },
    onVisualizationUpdated() {
      this.extLoaded = false
      this.$nextTick(function () {
        this.extLoaded = true
      })
    },
    tableHeight: function (height) {
      var orig_height = height

      // If there is a title and/or subtitle
      if (this.$refs.title) orig_height -= this.$refs.title.offsetHeight
      if (this.$refs.subtitle) orig_height -= this.$refs.subtitle.offsetHeight

      // Subtract the header height
      orig_height -= 64
      // Subtract the pagination
      if (this.pagination) orig_height -= 57
      // Subtract extra padding if certain features are enabled
      if (this.metadata.searchable || this.metadata.download_csv) orig_height -= 20
      return orig_height
    },
    searchTable: function (value) {
      this.search = value
    },
    columnSort: function (aObj, bObj) {
      if (this.sortKey == null) {
        return
      }
      var a = aObj[this.sortKey].value
      var b = bObj[this.sortKey].value
      if (!a) a = 0
      if (!b) b = 0
      if (typeof a == 'number') {
        return a - b
      } else if (a.includes('%')) {
        const aFloat = parseFloat(a.replace('%', ''))
        const bFloat = parseFloat(b.replace('%', ''))
        return Math.round(aFloat - bFloat)
      } else if (a.includes('$')) {
        const aFloat = parseFloat(a.replace('$', ''))
        const bFloat = parseFloat(b.replace('$', ''))
        return Math.round(aFloat - bFloat)
      } else {
        return a.localeCompare(b)
      }
    },
  },
}
</script>
