<script setup lang="ts">
import { useToDosStore } from '@/stores/toDos'
import { ref } from 'vue'

const toDoInput = ref('')

const toDoStore = useToDosStore()
const addToDo = () => {
  toDoStore.addToDo(toDoInput.value)
  toDoInput.value = ''
}
</script>

<template>
  <form @submit.prevent="addToDo">
    <label for="toDo">To Do:</label>
    <input id="toDo" type="text" v-model="toDoInput" class="border-2" />
    <button>Add</button>
  </form>
</template>
