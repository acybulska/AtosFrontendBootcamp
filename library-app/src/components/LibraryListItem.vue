<template>
<tr>
  <td>
    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input" id="multipleCheck" @click="getId">
      <label class="form-check-label sr-only" for="multipleCheck">Checkbox</label>
    </div>
  </td>
  <td>
    <div class="form-group mb-2">
      <label for="authorInput" class="sr-only">Author</label>
      <input id="authorInput" type="text" class="form-control" v-model="bookAuthor" @change="editBook">
    </div>
  </td>
  <td>
    <div class="form-group mb-2">
      <label for="titleInput" class="sr-only">Title</label>
      <input type="text" class="form-control" id="titleInput" v-model="bookTitle" @change="editBook">
    </div>
  </td>
  <td>
    <star-rating v-model="bookRating" @rating-selected="rateBook" :star-size="20"></star-rating>
  </td>
  <td>
    <button type="submit" class="btn btn-danger mb-2" @click="deleteBook"><i class='far fa-trash-alt'></i></button>
  </td>
</tr>
</template>

<script>
import StarRating from "vue-star-rating";
export default {
  data() {
    return {
      bookAuthor: this.book.description,
      bookTitle: this.book.title,
      bookId: this.book.id,
      bookRating: +this.book.rating
    };
  },
  components: {
    StarRating
  },
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    getId: function() {
      this.$emit("checkbox-id", this.bookId);
    },
    deleteBook: function() {
      this.$http
        .delete(
          "http://bootcamp.opole.pl/books/delete-book/" + this.bookId + "/mx5t"
        )
        .then(
          response => {
            this.$emit("update-book");
          },
          error => {
            console.log("ERROR");
          }
        );
    },
    editBook: function() {
      this.$http
        .post(
          "http://bootcamp.opole.pl/books/edit-book/" + this.bookId + "/mx5t",
          {
            title: this.bookTitle,
            description: this.bookAuthor
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
            console.log("ERROR");
          }
        );
    },
    rateBook: function(rating) {
      this.$http
        .post(
          "http://bootcamp.opole.pl/books/rate/mx5t",
          {
            id: this.bookId,
            rate: this.bookRating
          },
          {
            emulateJSON: true
          }
        )
        .then(response => {
          console.log(response);
          var rate = parseFloat(
            response.body.result.sum / response.body.result.rates
          ).toFixed(2);
          this.bookRating = +rate;
        });
    }
  }
};
</script>