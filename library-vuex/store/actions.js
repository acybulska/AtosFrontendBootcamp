import {loadBooks} from "../api/books";

export default {
  markBook({commit}, payload){
    commit('markBook', payload.id)
  },
    deleteBook({commit}, payload){
    commit('deleteBook', payload.id)
  },
    addBook({commit}, payload){
    commit('addBook', payload)
  },
  async initBooks({commit}){
    commit('initBooks', await loadBooks())
  }
}