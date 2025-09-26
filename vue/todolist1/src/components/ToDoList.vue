<script setup lang="ts">
import { useToDosStore } from '@/stores/toDos'
import { onMounted } from 'vue'

const toDoStore = useToDosStore()

onMounted(() => {
  toDoStore.loadToDos()
})

const onChange = (timestamp: number) => {
  toDoStore.toggleCompleted(timestamp)
}

const onRemove = (timestamp: number) => {
  toDoStore.removeToDo(timestamp)
}
</script>

<template>
  <ul class="max-w-[500px]">
    <li v-for="toDo in toDoStore.toDos" :key="toDo.timestamp">
      <form @submit.prevent class="flex items-center justify-between">
        <input
          type="checkbox"
          :id="`toDo-${toDo.timestamp}`"
          :checked="toDo.completed"
          @change="onChange(toDo.timestamp)"
        />
        <label
          :for="`toDo-${toDo.timestamp}`"
          class="mr-auto"
          :class="{ 'line-through text-gray-400': toDo.completed }"
          >{{ toDo.text }}</label
        >
        <button @click="onRemove(toDo.timestamp)">Delete</button>
      </form>
    </li>
  </ul>
</template>
