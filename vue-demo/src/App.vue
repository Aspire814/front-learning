<template>
<div>
  <Header></Header>
  <Todo></Todo>
  <Footter></Footter>
</div>
</template>

<script>
import Header from './header.vue'
import Todo from './todo.vue'
import Footter from './footter.vue'

export default {
  name: 'app',
  components:{
    Header,
    Todo,
    Footter,
  },
  data () {
    return {

    }
  }
}
</script>

<style>
  body{
    background-image: url(./assets/images/beijing.jpg);
  }
</style>
