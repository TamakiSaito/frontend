<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <header>
    <h1> {{ title }} </h1>
  </header>
</template>

<style scoped>
.header {
  display: flex;
}
</style>
