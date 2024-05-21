<script setup>
const props = defineProps({
  todos: Array,
});
const emit = defineEmits(['delete-todo'])
function deleteTodo(id){
  emit('delete-todo',id)
}
</script>

<template>
  <div v-for="todo in todos" v-bind:key="todo.id" class="todos">
    <h3> {{ todo.todoName }} </h3>
    <p> {{ todo.cleatedAt }} </p>
    <button @click="deleteTodo(todo.id)">削除</button>
  </div>
</template>

<style scoped>
.todos {
  box-shadow: 0 10px 25px 0 rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 10px auto;
  overflow: auto;
  height: auto;
  padding: 10px 20px;
}
</style>
