<script setup lang="ts">
import ToDoForm from '@/components/ToDoForm.vue'
import ToDoList from '@/components/ToDoList/ToDoList.vue'
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue'
</script>

<template>
  <main class="py-4">
    <ToDoForm />
    <ToDoList />
  </main>
  <footer>
    <HelloWorld msg="Welcome to your ToDo App!" />
  </footer>
</template>
