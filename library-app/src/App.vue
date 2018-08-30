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
        <div class="btn-group" role="group" aria-label="Sorting">
          <button type="button" class="btn btn-secondary" v-for="(key,index) in sortColumns" :key="key" @click="sortBy(key)">{{sortTitles[index]}}</button>
        </div>
      </div>
      <form class="col-md-4 form-inline align-right">
        <input type="search" aria-label="Search" class="form-control flex-grow-1" id="searchInput" placeholder="Search" v-model="searchQuery">
      </form>
    </div>
    <Library :books="filteredBooks" v-on:update-book="onUpdatedBook"></Library>
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
    var sortOrder = {};
    var sortTitles = ["Author", "Title", "Rating"];
    var sortColumns = ["description", "title", "rating"];
    sortColumns.forEach(function(key) {
      sortOrder[key] = 1;
    });
    return {
      newBook: {
        title: "",
        description: ""
      },
      books: [],
      searchQuery: "",
      sortColumns: sortColumns,
      sortTitles: sortTitles,
      sortKey: "",
      sortOrder: sortOrder
    };
  },
  mounted() {
    this.fetchData();
  },
  computed: {
    filteredBooks: function() {
      var sortKey = this.sortKey;
      var searchQuery = this.searchQuery && this.searchQuery.toLowerCase();
      var order = this.sortOrder[sortKey] || 1;
      var books = this.books;
      if (searchQuery) {
        books = books.filter(function(row) {
          return Object.keys(row).some(function(key) {
            return (
              String(row[key])
                .toLowerCase()
                .indexOf(searchQuery) > -1
            );
          });
        });
      }
      if (sortKey) {
        books = books.slice().sort(function(a, b) {
          a = a[sortKey];
          b = b[sortKey];
          return (a === b ? 0 : a > b ? 1 : -1) * order;
        });
      }
      return books;
    }
  },
  methods: {
    onUpdatedBook: function() {
      this.fetchData();
    },
    sortBy: function(key) {
      this.sortKey = key;
      this.sortOrder[key] = this.sortOrder[key] * -1;
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
                  console.log();
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
