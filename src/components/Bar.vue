<!--
 * @Description: 填写文件描述
 * @Author: unkown
 * @Date: 2020-02-25 14:01:45
 * @LastEditTime: 2020-03-06 17:12:38
 * @LastEditors: zql
 -->
<template>
  <div class="chart">
    <div id="container"></div>
  </div>
</template>
<script>
import {Chart} from "@antv/g2";
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
    chart.data(data);
    chart.scale({
      unitValue: {
        type: "timeCat" // 为属性定义别名
      }
    });
    chart
      .interval()
      .position("unitValue*value")
      .color("eventCode")
      .adjust([{
        type: 'dodge',
        marginRatio: 0
      }]);
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
