<script setup lang="ts">
defineProps<{
  toDos: string[]
}>()
</script>

<template>
  <ul>
    <li v-for="(toDo, index) in toDos" :key="index">{{ toDo }}</li>
  </ul>
</template>
