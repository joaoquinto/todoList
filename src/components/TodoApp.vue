<template>
  <div
    v-for="todo in todos"
    :key="todo.id"
    data-test="todo"
    :class="[todo.completed ? 'completed' : '']"
  >
    {{ todo.text }}
    <input type="checkbox" data-test="todo-checkbox" v-model="todo.completed" />
  </div>

  <form data-test="form" @submit.prevent="createTodo">
    <input type="text" data-test="new-todo" v-model="newTodo" />
    <button type="submit">Create Todo</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const todos = ref([{ id: 1, text: 'Learn Vue.js 3', completed: false }])
const newTodo = ref('')

function createTodo() {
  todos.value.push({ id: 2, text: newTodo.value, completed: false })
}
</script>

<style scoped>
div {
  width: 300px;
  font-family: monospace;
  border-radius: 5px;
  padding: 5px;
}

div + div {
  margin-top: 10px;
}

form {
  margin-top: 10px;
}

button {
  margin-left: 5px;
}

div:not(.completed) {
  font-weight: 500;
  color: white;
  background: red;
}

.completed {
  font-weight: 700;
  color: white;
  background: green;
}
</style>
