<template>
    <div>
        <input type="text" v-model="bookAuthor" @change="editBook">
        <input type="text" v-model="bookTitle" @change="editBook">
        <button @click="deleteBook">Delete</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      bookAuthor: this.description,
      bookTitle: this.title,
      bookId: this.id
    };
  },
  props: {
    description: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    deleteBook: function() {
      this.$http
        .delete(
          "http://bootcamp.opole.pl/books/delete-book/" + this.bookId + "/mx5t"
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
    }
  }
};
</script>