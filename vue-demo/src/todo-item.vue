<template>
  <div class="todo-item-content">
    <input class="item-box" type="checkbox" v-model="todo.compeleted"/>
    <input class="item-text" type ="text" v-model="todo.content"/>
    <button class="item-btn" @click="deleteTodo">X</button>
  </div>
</template>

<script>
export default {
  name: 'todo-item',
  props:{
    todo:{
      type : Object,
      required:true
    }
  },
  methods:{
    deleteTodo(){
      this.$emit('del',this.todo.id);
    }
  }
}
</script>

<style scoped>
  .todo-item-content{
    float: left;
    margin: 10 auto;
    width: 100%;

  }

  .item-box{
    width: 20px;
    height: 20px;
  }

  .item-text{
    width: 85%;
    height: 40px;
  }

  .item-btn{
    float: right;
    width: 20px;
    height: 20px;
  }
</style>
