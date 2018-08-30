<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <h1 class="text-center">My Book Library</h1>
      <hr>
      <div class="addBookDiv row">
        <div class="col-md-12">
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <h3>Add new book</h3>
          </div>
          <div class="form-group mb-2">
            <label for="authorInput" class="sr-only">Author</label>
            <input id="authorInput" type="text" class="form-control" v-model="newBook.description" placeholder="Author">
          </div>
          <div class="form-group mx-sm-3 mb-2">
            <label for="titleInput" class="sr-only">Title</label>
            <input type="text" class="form-control" id="titleInput" v-model="newBook.title" placeholder="Title">
          </div>
          <button type="submit" class="btn btn-success mb-2" @click="addBook"><i class="fas fa-plus text-white"></i></button>
        </form></div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <button type="button" class="btn btn-danger" id="deleteMultipleBtn"><i class='far fa-trash-alt'></i> Delete selected</button>
        <button type="button" class="btn btn-success" id="addFromFileBtn"><i class="far fa-file"></i> Add from file</button>
      </div>
      <div class="col-md-4">
        <span class="font-weight-bold">Sort by</span>
        <div class="btn-group" role="group" aria-label="Basic example">
          <button type="button" class="btn btn-secondary">Author</button>
          <button type="button" class="btn btn-secondary">Title</button>
          <button type="button" class="btn btn-secondary">Rating</button>
        </div>
      </div>
      <form class="col-md-4 form-inline align-right">
        <input type="search" aria-label="Search" class="form-control flex-grow-1" id="searchInput" placeholder="Search">
        <button class="btn btn-dark" type="submit" onclick="searchElement()">
          <i class="fas fa-search"></i>
        </button>
      </form>
    </div>
    <Library :books="books" v-on:update-book="onUpdatedBook"></Library>
  </div>
</template>

<script>
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
  methods: {
    onUpdatedBook: function() {
      this.fetchData();
    },
    addBook: function() {
      console.log(this.newBook);
      this.$http
        .post("http://bootcamp.opole.pl/books/add-book/mx5t", this.newBook, {
          emulateJSON: true
        })
        .then(
          response => {
            console.log(response);
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
          this.fetchRatings(data.books);
        });
    },
    fetchRatings: function(booksData) {
      this.$http
        .get("http://bootcamp.opole.pl/books/my-rates/mx5t")
        .then(response => {
          return response.json();
        })
        .then(data => {
          console.log(data.rates);
          if (data.rates.length > 0) {
            for (var i = 0; i < booksData.length; i++) {
              this.$set(booksData[i], "rating", "0.00");
              for (var j = 0; j < data.rates.length; j++) {
                if (booksData[i].id == data.rates[j].book) {
                  var rate = parseFloat(
                    data.rates[j].sum / data.rates[j].rates
                  ).toFixed(2);
                  console.log(
                    "IN bookid " + booksData[i].id + " rated " + rate
                  );
                  this.$set(booksData[i], "rating", rate);
                }
              }
            }
          } else {
            for (var i = 0; i < booksData.length; i++) {
              var rate = "0.00";
              this.$set(booksData[i], "rating", rate);
            }
          }
          this.books = booksData;
          console.log(this.books);
        });
    }
  }
};
</script>

<style>
table {
  margin: 0 auto;
}
</style>
