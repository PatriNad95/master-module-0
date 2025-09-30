<script setup lang="ts">
import { useToDosStore } from '@/stores/toDos'
import { onMounted, ref } from 'vue'

const toDoStore = useToDosStore()

const onChange = (timestamp: number) => {
  toDoStore.toggleCompleted(timestamp)
}

const onRemove = (timestamp: number) => {
  toDoStore.removeToDo(timestamp)
}

const toDosToShow = ref(toDoStore.toDos)

const showOnlyPendingToDos = (event: Event) => {
  const isChecked = (event.target as HTMLInputElement).checked
  if (isChecked) {
    toDosToShow.value = toDoStore.pendingToDos
  } else {
    toDosToShow.value = toDoStore.toDos
  }
}

onMounted(() => {
  toDoStore.loadToDos()
  toDosToShow.value = toDoStore.toDos
})
</script>

<template>
  <div v-if="toDoStore.total">
    <p>Total: {{ toDoStore.total }}</p>
    <p>Completados: {{ toDoStore.completed }}</p>
  </div>
  <div>
    <input type="checkbox" id="toggle-all" @change="showOnlyPendingToDos" />
    <label for="toggle-all">Show only pending</label>
  </div>
  <hr />
  <ul class="max-w-[500px]">
    <li v-for="toDo in toDosToShow" :key="toDo.timestamp">
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
