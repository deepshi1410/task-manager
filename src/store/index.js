import { createStore } from 'vuex'
import { v4 as uuidv4 } from "uuid";

export default createStore({
  state: {
    tasks: [],
  },
  mutations: {
    addTask(state, payload) {
      // state.tasks.push(payload)
      state.tasks = JSON.parse(localStorage.getItem('tasks'))
      console.log(state.tasks, 'type', typeof state.tasks)
      console.log(payload)
      const newTask = {
        name: payload.name,
        description: payload.description,
        completed: payload.completed,
        id: uuidv4()
      }
      // state.tasks.push(newTask)
      localStorage.setItem('tasks', JSON.stringify(newTask))
    },
    setCompleteTask(state, payload) {
      // state.completeTasks.push(payload)
      console.log(state, payload)
    },
    deleteTask(state, id) {
      console.log(id)
      let allTasks = JSON.parse(localStorage.getItem('tasks'))
      allTasks = allTasks.filter(task => task.id != id)
      console.log('filtered tasks', allTasks)
      state.tasks = allTasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  },
  actions: {
  },
  getters: {
    tasks: state => {
      console.log('store tasks', state)
      return state.tasks
    },
  }
})
