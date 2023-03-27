import { createStore } from 'vuex'
import { getTasks, setTasks } from '~~/services/storageService'

let tasks
if (process.client) tasks = localStorage.getItem('tasks')
const store = createStore({
  state() {
    return {
      tasks: tasks ? JSON.parse(tasks) : [],
      searchText: '',
    }
  },
  actions: {
    async getTasks({ commit }) {
      try {
        const data = await getTasks()
        commit('setTasks', data)
      } catch (err) {
        console.log(err)
      }
    },
    updateTasks({ commit }, data) {
      commit('setTasks', data)
    },
    addTask({ commit, state }, data) {
      commit('setTasks', [...state.tasks, data])
    },
  },
  mutations: {
    setTasks(state, value) {
      setTasks(JSON.stringify(value))
      state.tasks = value
    },
    updateSearchText(state, data) {
      state.searchText = data
    },
  },

  getters: {
    filteredTasks({ tasks, searchText }) {
      return tasks.filter((i) =>
        i.title.toLowerCase().includes(searchText.toLowerCase())
      )
    },
  },
})

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store)
})
