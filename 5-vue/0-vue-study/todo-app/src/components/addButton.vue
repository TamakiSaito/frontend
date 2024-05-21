<script setup>
import { computed, ref } from 'vue';

const addTodo = ref("");
const now = new Date();
const y = now.getFullYear();
const m = now.getMonth() +1;
const d = now.getDate();
const createdAt = y + '年' + m + '月' + d + '日'
const props = defineProps({
  msg: String,
});
const emit = defineEmits(['add-todo'])
const isInput = computed(() => addTodo.value.length > 0);
function submitTodo() {
  const newTodo = {
    id: Math.floor(Math.random()*100000),
    todoName: addTodo.value,
    cleatedAt: createdAt,
    cleared: false,
  }
  console.log(newTodo)
  emit('add-todo',newTodo)
}

</script>

<template>
  <inout v-model="addTodo" />
  <button class="btn" :disabled="!isInput" @click="submitTodo"> {{ msg }} </button>
</template>

<style scoped>
</style>
