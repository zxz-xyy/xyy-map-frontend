<template>
  <div id="app">
    <h3 class="title">{{ msg }}</h3>
    <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div>
  </div>
</template>

<script>import Vue from 'vue'
import VueAMap from 'vue-amap'
Vue.use(VueAMap)
VueAMap.initAMapApiLoader({
  key: '\t10063073a1f0a9635585acdaef8e2a90',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
  // 默认高德 sdk 版本为 1.4.4
  v: '1.4.4'
})
export default {
  name: 'map',
  data () {
    return {
      msg: 'vue-amap向你问好！'
    }
  }
}
</script>

<style scoped>
  .amap-wrapper {
    width: 500px;
    height: 500px;
  }
</style>
