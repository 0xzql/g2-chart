<!--
 * @Description: 填写文件描述
 * @Author: unkown
 * @Date: 2020-02-25 14:01:45
 * @LastEditTime: 2020-03-05 18:35:02
 * @LastEditors: zql
 -->
<template>
  <div class="chart">
    <div id="container"></div>
  </div>
</template>
<script>
import {Chart} from "@antv/g2";
// import DataSet from "@antv/data-set";
export default {
  mounted() {
    const data = require("../assets/common.json")
    
    const chart = new Chart({
      container: "container",
      autoFit: true,
      height: 500
    });
    chart.data(data);
    chart.scale({
      unitValue: {
        type: "timeCat" // 为属性定义别名
      }
    });
    chart.coordinate('theta', {
      radius: 0.8,
    });
    chart
      .interval()
      .position("value")
      .color("eventCode")
      .adjust('stack')
//       .adjust([
//   {
//     type: 'dodge',
//     dodgeBy: 'eventCode', // 声明按照 xx 字段进行分组，一般不需要声明
//   },
// ])
    chart.render();
  }

};
</script>
