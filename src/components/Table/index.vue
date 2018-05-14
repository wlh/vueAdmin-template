<template>
  <div class="app-container">

    <el-table :data="tableList" border fit highlight-current-row style="width: 100%">
      <el-table-column :key='column.name' v-for='column in formThead' :label="column.label">
        <template slot-scope="scope">
          {{scope.row[column.name]}}
        </template>
      </el-table-column>
      <el-table-column align="center" v-if='isDisplayAction' :label='tableActions.label' width="230" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button v-for='btn in tableActions.buttons' :key='btn.id' :type='btn.type' size="mini" @click="button.handler(scope.row)">{{ btn.name }}</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  props: {
    tableData: {
      type: Array,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    actions: {
      type: Object
    }
  },
  data() {
    return {
      isDisplayAction: true,
      isDisplayPagination: false
    }
  },
  computed: {
    tableList() {
      if (!this.tableData) {
        this.tableList = []
      }
      return this.tableData
    },
    formThead() {
      if (!this.columns) {
        this.columns = []
      }
      return this.columns
    },
    tableActions() {
      if (this.actions) {
        this.isDisplayAction = true
      }
      return this.actions
    }
  }
}
</script>
