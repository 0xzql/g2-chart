<!--
 * @Description: 填写文件描述
 * @Author: unkown
 * @Date: 2020-02-25 14:01:45
 * @LastEditTime: 2020-02-25 18:17:27
 * @LastEditors: zql
 -->
<template>
  <div class="chart">
    <div id="container"></div>
  </div>
</template>
<script>
import G2 from "@antv/g2";
// import DataSet from "@antv/data-set";
export default {
  mounted() {
    const data = require("../assets/common.json");
    const chart = new G2.Chart({
      container: "container",
      forceFit: true,
      height: 500
    });
    chart.source(data);
    chart.legend({
  position: 'top-center'
});
    chart
      .interval()
      .position("date*value")
      .color("eventCode")
      .opacity(1)
  .adjust([{
    type: 'jitter',
    marginRatio: 1 / 32
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
