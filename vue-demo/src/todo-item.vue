<template>
  <div class="todo-item-content">
    <input class="item-box" type="checkbox"/>
    <input class="item-text" type ="text"/>
    <button class="item-btn"></button>
  </div>
</template>

<script>
export default {
  name: 'todo-item'
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
    width: 88%;
    height: 40px;
  }

  .item-btn{
    float: right;
    width: 20px;
    height: 20px;
  }
</style>
