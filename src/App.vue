<template>
  <div id="app">
    <ul class="tabs">
      <li><a @click="chartChange('g2Map')">地图</a></li>
      <li><a @click="chartChange('g2Line')">折线图</a></li>
      <li><a @click="chartChange('g2Bar')">柱状图</a></li>
      <li><a @click="chartChange('sheet')">表格</a></li>
    </ul>
    <h3>{{comp}}</h3>
    <component :is="comp" msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Map from './components/Map.vue'
import Line from './components/Line.vue'
import Bar from './components/Bar.vue'

export default {
  name: 'App',
  components: {
    g2Map: Map,
    g2Line: Line,
    g2Bar: Bar
  },
  data: () => ({
    comp: 'g2Map'
  }),
  methods: {
    chartChange (val) {
      this.comp = val
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.tabs {
  display: flex;
}
.tabs li {
  margin-left: 10px;
  list-style: none;
  cursor: pointer;
}
.tabs li:hover {
  color: brown;
}
</style>
