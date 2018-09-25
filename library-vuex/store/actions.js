import { loadBooks } from "../api/books";
import axios from 'axios'

export default {
  markBook({ commit }, payload) {
    commit('markBook', payload.id)
  },
  deleteBook({ commit }, payload) {
    commit('deleteBook', payload.id)
  },
  async addBook({ commit }, payload) {
    const params = new URLSearchParams();
    params.append('title', payload.book.title);
    params.append('description', payload.book.description);
    await axios({
      method: 'post',
      url: 'http://bootcamp.opole.pl/books/add-book/mx5t',
      data: params
    }).then(function (response) {
      console.log(response.data)
      commit('addBook', payload.book)
    })
  },
  async initBooks({ commit }) {
    commit('initBooks', await loadBooks())
  }
}