import Vuex from 'vuex'
import Vue from 'vue'
import { loadTodos } from '../api/todos'

const createStore = () => {
  return new Vuex.Store({
    state: {
      "todos": []
    },
    actions: {
      markTodo({ commit }, payload) {
        commit('markTodo', payload.id)
      },
      deleteTodo({ commit }, payload) {
        commit('deleteTodo', payload.id)
      },
      addTodo({ commit }, payload) {
        commit('addTodo', payload)
      },
      async initTodos({ commit }) {
        commit('initTodos', await loadTodos())
      }
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
        }));
      },
      addTodo(state, todo) {
        let newTodos = state.todos
        newTodos.push({ id: todo.id, label: todo.label, completed: false });
        Vue.set(state, "todos", newTodos);
      },
      initTodos: (state, todos) => {
        Vue.set(state, "todos", todos)
      }
    },
    getters: {
      todos: state => {
        return state.todos
      },
      nextId: state => {
        let id = 0;
        state.todos.forEach(todo => {
          todo.id > id ? (id = todo.id) : id;
        })
        return id + 1
      }
    }
  })
}

export default createStore