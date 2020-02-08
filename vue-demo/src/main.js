import Vue from 'vue'
import App from './App.vue'

const root = document.createElement("div");
document.body.appendChild(root); //将div节点添加到body下

new Vue({
  render: h => h(App)
}).$mount(root)
