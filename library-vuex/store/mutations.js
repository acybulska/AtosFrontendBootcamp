import Vue from 'vue'

export default {
  deleteBook(state, id) {
    Vue.set(state, "books", state.books.filter(book => {
      return book.id != id
    }));
  },
  markBook(state, id) {
    Vue.set(state, "books", state.books.map(book => {
      book.id == id ? book.toList = !book.toList : null
      return book
    }));
  },
  addBook: (state, book) => {
    let newBooks = state.books
    newBooks.push({ description: book.description, title: book.title, id: book.id })
    Vue.set(state, "books", newBooks);
  },
  initBooks: (state, books) => {
    Vue.set(state, "books", books)
  },
  multipleID: (state, multipleID) => {
    Vue.set(state, "multipleID", multipleID)
  }
}
