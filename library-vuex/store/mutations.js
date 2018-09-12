import Vue from 'vue'

export default {
  deleteBook (state, id) {
    Vue.set(state, "books", state.books.filter(book => {
      return book.id != id
    }));
  },
  markBook(state, id){
    Vue.set(state, "books", state.books.map(book => {
      book.id == id ? book.toList = !book.toList : null
      return book
    }));
  },
  addBook(state, book){
    let newBooks = state.books
    newBooks.push({ id: book.id, label:book.label, completed: false })
    Vue.set(state, "books", newBooks);
  },
  initBooks: (state, books) => {
    Vue.set(state, "books", books)
  }
}
