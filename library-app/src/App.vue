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
          <button type="submit" class="btn btn-success mb-2" @click="addBook(newBook)"><i class="fas fa-plus text-white"></i></button>
        </form></div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4">
        <button type="button" class="btn btn-danger" id="deleteMultipleBtn" @click="deleteMultipleBooks">
          <i class='far fa-trash-alt'></i> Delete selected
        </button>
        <button type="button" class="btn btn-success" id="addFromFileBtn" @click="addBooksModal=true">
          <i class="far fa-file"></i> Add from file
        </button>
        <modal v-if="addBooksModal" @close="addBooksModal = false" @get-books="addMultipleBooks"></modal>
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
    <Library :books="filteredBooks" :deleteMultiple="deleteMultiple" v-on:update-book="onUpdatedBook" v-on:checkbox-id="getId"></Library>
  </div>
</template>

<script>
import Library from "./components/LibraryList";
import Modal from "./components/AddBooksModal";

export default {
  name: "App",
  components: {
    Library,
    Modal
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
      sortOrder: sortOrder,
      deleteMultiple: [],
      addBooksModal: false
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
          a = a[sortKey].toLowerCase();
          b = b[sortKey].toLowerCase();
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
    getId: function(id) {
      var exists = false;
      if (this.deleteMultiple.length !== 0) {
        this.deleteMultiple.forEach(function(key) {
          if (key === id) {
            exists = true;
          }
        });
      }
      const index = this.deleteMultiple.indexOf(id);
      exists
        ? this.deleteMultiple.splice(index, 1)
        : this.deleteMultiple.push(id);
      console.log("Length:" + this.deleteMultiple.length);
    },
    sortBy: function(key) {
      this.sortKey = key;
      this.sortOrder[key] = this.sortOrder[key] * -1;
    },
    deleteMultipleBooks: function() {
      for (const i of this.deleteMultiple) {
        this.deleteBook(i);
      }
      this.fetchData();
    },
    deleteBook: function(id) {
      this.$http
        .delete("http://bootcamp.opole.pl/books/delete-book/" + id + "/mx5t")
        .then(
          response => {
            console.log("Book " + id + " is deleted");
          },
          error => {
            console.log("ERROR");
          }
        );
    },
    addMultipleBooks: function(val) {
      for (const i of val) {
        this.addBook(i);
      }
      this.fetchData();
    },
    addBook: function(newB) {
      console.log(newB.description + " " + newB.title);
      this.$http
        .post(
          "http://bootcamp.opole.pl/books/add-book/mx5t",
          {
            title: newB.title,
            description: newB.description
          },
          {
            emulateJSON: true
          }
        )
        .then(
          response => {
            console.log(response);
          },
          error => {
            console.log("Error while adding book");
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

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
