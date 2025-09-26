import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ToDo } from '@/types'

const toDoFactory = (text: string): ToDo => ({
  timestamp: Date.now(),
  text,
  completed: false,
})

const getToDosFromStorage = (): ToDo[] => {
  const toDos = localStorage.getItem('toDos') ? JSON.parse(localStorage.getItem('toDos')!) : []
  return toDos
}

const setToDosInStorage = (toDo: ToDo) => {
  const toDos = getToDosFromStorage()
  toDos.push(toDo)
  localStorage.setItem('toDos', JSON.stringify(toDos))
}

export const useToDosStore = defineStore('toDoList', () => {
  const toDos = ref<ToDo[]>([])

  const loadToDos = () => {
    toDos.value = getToDosFromStorage()
  }
  const addToDo = (toDo: string) => {
    const newToDo = toDoFactory(toDo)
    toDos.value.push(newToDo)
    setToDosInStorage(newToDo)
  }

  const toggleCompleted = (timestamp: number) => {
    const toDo = toDos.value.find((t) => t.timestamp === timestamp)
    if (toDo) {
      toDo.completed = !toDo.completed
    }
  }

  const removeToDo = (timestamp: number) => {
    const index = toDos.value.findIndex((t) => t.timestamp === timestamp)
    if (index !== -1) {
      toDos.value.splice(index, 1)
    }
  }

  return { toDos, loadToDos, addToDo, toggleCompleted, removeToDo }
})
