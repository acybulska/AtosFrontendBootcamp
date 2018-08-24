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
  mounted() {
    this.fetchData();
  },
  updated() {
    this.fetchData();
  },
  methods: {
    addBook: function() {
      console.log(this.newBook);
      this.$http
        .post("http://bootcamp.opole.pl/books/add-book/mx5t", this.newBook, {
          emulateJSON: true
        })
        .then(
          response => {
            this.fetchData();
            this.newBook.description="";
            this.newBook.title="";
          },
          error => {
            console.log("ERROR");
          }
        );
    },
    fetchData: function() {
      this.$http
        .get("http://bootcamp.opole.pl/books/my-books/mx5t")
        .then(response => {
          return response.json();
        })
        .then(data => {
          // console.log(data.books);
          this.books = data.books;
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
