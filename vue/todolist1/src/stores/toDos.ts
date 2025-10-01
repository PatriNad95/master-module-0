import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { ToDo } from '@/types'
import { useStorage } from '@/composables/storage'

const toDoFactory = (text: string): ToDo => ({
  timestamp: Date.now(),
  text,
  completed: false,
})

export const useToDosStore = defineStore('toDoList', () => {
  const toDos = ref<ToDo[]>([])
  const total = computed(() => toDos.value?.length ?? 0)
  const completedToDos = computed(() => (toDos.value ?? []).filter((toDo) => toDo.completed))
  const completed = computed(() => completedToDos.value.length)
  const pendingToDos = computed(() => (toDos.value ?? []).filter((toDo) => !toDo.completed))

  const storage = useStorage<ToDo[]>('toDos')

  const loadToDos = () => {
    toDos.value = storage.get()!
  }
  const addToDo = (toDo: string) => {
    const newToDo = toDoFactory(toDo)
    toDos.value.push(newToDo)
    storage.set(toDos.value)
  }

  const toggleCompleted = (timestamp: number) => {
    const toDo = toDos.value.find((t) => t.timestamp === timestamp)
    if (toDo) {
      toDo.completed = !toDo.completed
    }
    storage.set(toDos.value)
  }

  const removeToDo = (timestamp: number) => {
    const index = toDos.value.findIndex((t) => t.timestamp === timestamp)
    if (index !== -1) {
      toDos.value.splice(index, 1)
    }
    storage.set(toDos.value)
  }

  return {
    total,
    completed,
    completedToDos,
    pendingToDos,
    toDos,
    loadToDos,
    addToDo,
    toggleCompleted,
    removeToDo,
  }
})
