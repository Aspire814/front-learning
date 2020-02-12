<template>
  <div class="todo-content">
    <input id="get-start"
    @keyup.enter="addTodo"
    placeholder="接下来想做什么呢..."/>
    <div class="todo-items">
      <TodoItem class="todo-item"
        :todo="todo"
        @del="deleteTodo"
        v-for="todo in dataList" :key="todo.id"
      />
    </div>
  </div>
</template>

<script>
import TodoItem from './todo-item.vue'
let id = 0

export default {
  name: 'todo',
  data() {
    return {
      dataList:[]
    }
  },
  components:{
    TodoItem
  },
  methods:{
    addTodo(e){
        this.dataList.unshift({
          id:id++,
          content:e.target.value.trim(),
          compeleted:false
        })
        e.target.value=''
    },
    deleteTodo(){
        this.dataList.splice(this.dataList.findIndex(todo => todo.id == id),1)
    }
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
