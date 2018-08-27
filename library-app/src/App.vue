<template>
  <div id="app" class="container">
    <div class="jumbotron">
      <h1 class="text-center">My Book Library</h1>
      <hr>
        <div class="addBookDiv">
          <form class="form-inline align-middle">
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
            <button type="submit" class="btn btn-primary mb-2" @click="addBook"><i class="fas fa-plus text-white"></i></button>
          </form>
        </div>
    </div>
    <Library :books="books"></Library>
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
    this.fetchRatings();
  },
  updated() {
    this.fetchData();
    this.fetchRatings();
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
            this.newBook.description = "";
            this.newBook.title = "";
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
    },
    fetchRatings: function() {
      this.$http
        .get("http://bootcamp.opole.pl/books/my-rates/mx5t")
        .then(
          response => {
            return response.json();
            // this.ratings = response.rates;
            // console.log(response);
            // console.log(this.books);

            // for(var j=0;j<this.response.rates.length;j++)
            // {
            //   for(var i=0;i<this.books.length;i++)
            //   {
            //     if(this.books[i].id==this.response.rates[j].bookId)
            //     {
            //       var rate = parseFloat(this.response.rates[j].sum / response.rates[j].rates).toFixed(2);
            //       this.set(this.books[i],ratingId,this.response.rates[j].id);
            //       this.set(this.books[i],rating,rate);
            //     }
            //   }
            // }
          },
          error => {
            console.log("ERROR RATING");
          }
        )
        .then(data => {
          console.log(data);
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
