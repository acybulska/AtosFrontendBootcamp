import {loadBooks} from "../api/books";
import axios from 'axios'

export default {
  markBook({commit}, payload){
    commit('markBook', payload.id)
  },
    deleteBook({commit}, payload){
    commit('deleteBook', payload.id)
  },
    addBook({commit}, payload){
      axios.post('http://bootcamp.opole.pl/books/add-book/mx5t', {
      description: payload.book.description,
      title: payload.book.title
    }).then(function (response) {
      console.log(response.data)
      commit('addBook', payload.book)
    })
  },
  async initBooks({commit}){
    commit('initBooks', await loadBooks())
  }
}