<script setup>
import Header from './components/Header.vue';
import Todos from './components/Todos.vue';
import addButton from './components/addButton.vue';
import { reactive } from 'Vue';

const items = reactive([
  {
    id: 0,
    todoName: "勉強する",
    cleatedAt: "2024年5月11日",
    cleard: false,
  },
  {
    id: 1,
    todoName: "Disney行く",
    cleatedAt: "2024年6月6日",
    cleard: false,
  },
]);
function appAction(newTodo) {
  items.push(newTodo)
}
function deleteTodo(id) {
  items.forEach(function(item, index) {
    if(item.id===id){
      items.splice(index,1)
    }
  })
}
</script>

<template>
  <div class="container">
    <Header title="Todo List" />
    <Todos @delete-todo="deleteTodo" :todos="items" />
    <addButton msg="追加" @add-todo="appAction" />
  </div>
</template>

<style scoped>
.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  padding: 30px;
}
</style>
