import Vue from "vue";
import VueResource from "vue-resource";
import App from "./App";

// 安装插件
Vue.use(VueResource);

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  el: "#root",
  render: (h) => h(App),
});
