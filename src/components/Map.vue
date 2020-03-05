<!--
 * @Description: 填写文件描述
 * @Author: unkown
 * @Date: 2020-02-25 14:01:45
 * @LastEditTime: 2020-03-05 11:16:29
 * @LastEditors: zql
 -->
<template>
  <div class="chart">
    <div id="container"></div>
  </div>
</template>
<script>
import {Chart} from "@antv/g2";
import DataSet from "@antv/data-set";
export default {
  mounted() {
    const GeoJSON = require("../assets/province/china.json");
    const userData = [];
    const ds = new DataSet();
    const geoDv = ds
      .createView("back")
      .source(GeoJSON, {
        type: "GeoJSON"
      })
      .transform({
        type: "map",
        callback(row) {
          userData.push({
            longitude: row.centroidX,
            latitude: row.centroidY,
            name: row.name,
            value: Math.random() * (1000 - 1)
          });
          return row;
        }
      });

    const chart = new Chart({
      container: "container",
      width: 1000,
      height: 700,
      padding: 0
    });
    chart.scale({
      latitude: { sync: true },
      longitude: { sync: true }
    });
    chart.legend(false);
    chart.axis(false);
    chart.tooltip(false);

    const geoView = chart.createView();
    geoView.data(geoDv.rows);
    geoView
      .polygon()
      .position("longitude*latitude")
      .color("#e4eef4")
      .style({
        fill: "#fff",
        stroke: "#ccc",
        lineWidth: 2
      });
      
    const userDv = ds
      .createView()
      .source(userData)
      .transform({
        geoDataView: geoDv,
        field: "name",
        type: "geo.region",
        as: ["longitude", "latitude"]
      })
      .transform({
        type: "map",
        callback: obj => {
          obj.trend = obj.value > 100 ? "男性更多" : "女性更多";
          return obj;
        }
      });
    const userView = chart.createView();
    userView.data(userDv.rows, {
      trend: {
        alias: "每100位女性对应的男性数量"
      }
    });
    userView
      .polygon()
      .position("longitude*latitude")
      .color("trend", ["#77cdf0", "#0040ba"])
      .tooltip("name*trend")
      .animate({
        leave: {
          animation: "fadeOut"
        }
      });
    chart.render();
  }
};
</script>
