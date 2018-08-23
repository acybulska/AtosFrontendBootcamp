<template>
  <div id="app">
    <h1>My Book Library</h1>
    <p>Add new book:</p>
    <div class="addBookDiv">
      <input type="text" v-model="newBook.description" placeholder="Author">
      <input type="text" v-model="newBook.title" placeholder="Title">
      <button @click="addBook">Add</button>
    </div>
    <body>
      <button @click="fetchData">Get data</button>
      <Library :books="books"></Library>
    </body>
  </div>
</template>

<script>
// import Vue from 'vue'
import Library from "./components/LibraryList";

export default {
  name: "App",
  components: {
    Library
  },
  data() {
    return {
      newBook: {
        title: "",
        description: ""
      },
      books: []
    };
  },
  methods: {
    addBook: function() {
      console.log(this.newBook);
      this.$http
        .post("http://bootcamp.opole.pl/books/add-book/mx5t", this.newBook)
        .then(
          response => {
            console.log(response);
          },
          error => {
            console.log("ERROR");
          }
        );
    },
    fetchData() {
      this.$http
        .get("http://bootcamp.opole.pl/books/my-books/mx5t")
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data.books);

          //for (let i=0; i<data.books.length; data.books) {
            // this.books.push(data.books[i]);
         //}
        });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
