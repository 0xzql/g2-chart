<template>
  <div class="chart">
    <table>
      <thead>
        <tr>
          <th>指标</th>
          <th>合计</th>
          <th v-for="serise in source.seriesList" :key="serise">{{serise}}</th>
        </tr>
      </thead>
      <tbody v-for="(rows, key) in source.$ALL" :key="key">
        <tr v-for="row in rows" :key="row">
          <td>{{key}}</td>
          <td>{{row.total}}</td>
          <td v-for="serie in source.seriesList" :key="serie">{{row.value[serie]}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { DataView } from "@antv/data-set";
export default {
  data: () => ({
    source: []
  }),
  mounted () {
    const data = require("../assets/data.json");
    this.source = data
  }
}
</script>