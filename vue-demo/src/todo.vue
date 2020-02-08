<template>
  <div class="todo-content">
    <input id="get-start" placeholder="接下来想做什么呢..."/>
    <div class="todo-items">
      <TodoItem class="todo-item" v-for="item in dataList" :key="item.id">
      </TodoItem>
    </div>
  </div>
</template>

<script>
import TodoItem from './todo-item.vue'

export default {
  name: 'todo',
  data() {
    return {
      dataList:[{id:1},{id:2}]
    }
  },
  components:{
    TodoItem
  }
}
</script>

<style scoped>
  .todo-content{
    width: 40%;
    margin: 0 auto;
  }
  #get-start{
    width: 100%;
    height: 50px;
    font-size: 20px;
  }
  .todo-items{
    margin-top: 10px;
  }
  .todo-item{
    margin-top: 10px;
  }
</style>
