<!--
 * @Description: 填写文件描述
 * @Author: unkown
 * @Date: 2020-02-25 14:01:45
 * @LastEditTime: 2020-03-06 17:05:12
 * @LastEditors: zql
 -->
<template>
  <div class="chart">
    <div id="container"></div>
  </div>
</template>
<script>
import { Chart } from "@antv/g2";
import DataSet from "@antv/data-set";
import { transfromToList } from '../unit'
export default {
  mounted() {
    const originData = require("../assets/data.json");
    const data = transfromToList(originData)
    const chart = new Chart({
      container: "container",
      autoFit: true,
      height: 500
    });
    chart.data(data)
    chart.tooltip({
      crosshairs: {
        type: "line"
      }
    });
    chart
      .line()
      .position("unitValue*value")
      .color("eventCode")
      .shape("smooth");
    chart
      .point()
      .position("unitValue*value")
      .color("eventCode")
      .size(4)
      .shape("circle")
      .style({
        stroke: "#fff",
        lineWidth: 1
      });
    chart.render();
  }
};
</script>
