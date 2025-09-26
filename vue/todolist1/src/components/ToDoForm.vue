<script setup lang="ts">
import { ref } from 'vue'
import { defineEmits } from 'vue'

const emit = defineEmits<{
  'add-to-do': [toDos: string]
}>()

const toDoInput = ref('')

const addToDo = () => {
  emit('add-to-do', toDoInput.value)
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
