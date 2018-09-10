import Vuex from 'vuex'
import Vue from 'vue'

const createStore = () => {

  return new Vuex.Store({
    state: {
      "todos": [
        {
          "id": 1,
          "label": "Wake Up",
          "completed": false
        },
        {
          "id": 2,
          "label": "Drink coffee",
          "completed": true
        },
        {
          "id": 3,
          "label": "Go to work",
          "completed": false
        },
        {
          "id": 4,
          "label": "Code!",
          "completed": false
        }
      ]
    },
    mutations: {
      deleteTodo(state, id) {
        Vue.set(state, "todos", state.todos.filter(todo => {
          return todo.id != id
        }));
      },
      markTodo(state, id) {
        Vue.set(state, "todos", state.todos.map(todo => {
          todo.id == id ? todo.completed = !todo.completed : null
          return todo
        }))
      }
    },
    getters: {
      todos: state => {
        return state.todos
      }
    }
  })
}

export default createStore