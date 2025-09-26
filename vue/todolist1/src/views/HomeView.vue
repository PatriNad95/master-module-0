<script setup lang="ts">
import ToDoForm from '@/components/ToDoForm.vue'
import ToDoList from '@/components/ToDoList.vue'
import { ref } from 'vue'

const toDos = ref<string[]>([])

const handleAddToDo = (newToDo: string) => {
  toDos.value.push(newToDo)
}
</script>

<template>
  <main class="py-4">
    <ToDoForm @add-to-do="handleAddToDo" />
    <ToDoList :toDos="toDos" />
  </main>
</template>
