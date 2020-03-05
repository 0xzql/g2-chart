<!--
 * @Description: 填写文件描述
 * @Author: unkown
 * @Date: 2020-02-25 14:01:45
 * @LastEditTime: 2020-02-25 17:29:39
 * @LastEditors: zql
 -->
<template>
  <div class="chart">
    <div id="container"></div>
  </div>
</template>
<script>
import G2 from "@antv/g2";
import DataSet from "@antv/data-set";
export default {
  mounted() {
    const data = require("../assets/common.json");

    const ds = new DataSet();
    const dv = ds.createView().source(data);
    // fold 方式完成了行列转换，如果不想使用 DataSet 直接手工转换数据即可
    // dv.transform({
    //   type: "fold",
    //   fields: ["Tokyo", "London"], // 展开字段集
    //   key: "city", // key字段
    //   value: "temperature" // value字段
    // });
    const chart = new G2.Chart({
      container: "container",
      forceFit: true,
      height: 500
    });
    chart.source(dv, {
      month: {
        range: [0, 1]
      }
    });
    chart.tooltip({
      crosshairs: {
        type: "line"
      }
    });
    chart.axis("temperature", {
      label: {
        formatter: val => {
          return val + "°C";
        }
      }
    });
    chart
      .line()
      .position("date*value")
      .color("eventCode")
      .shape("smooth");
    chart
      .point()
      .position("date*value")
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
