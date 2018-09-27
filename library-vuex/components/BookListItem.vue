<template>
  <b-row>
    <b-col lg="12">
      <b-input-group>
        <b-input-group-prepend is-text>
          <input type="checkbox" aria-label="Edit item or delete multiple checkbox" @change="disableInput = !disableInput" />
        </b-input-group-prepend>
        <b-form-input v-model="book.description" placeholder="Author" @change="editBook()" :disabled="disableInput"/>
        <b-form-input v-model="book.title" placeholder="Title" @change="editBook()" :disabled="disableInput"/>
        <b-input-group-append>
          <b-button variant="danger" @click="deleteBook(bookId)">Delete</b-button>
        </b-input-group-append>
      </b-input-group>
    </b-col>
  </b-row> 
</template>

<script>
import bListGroupItem from "bootstrap-vue/es/components/list-group/list-group-item";
import bButton from "bootstrap-vue/es/components/button/button";

export default {
  data() {
    return {
      book: {
        id: this.bookId,
        title: this.bookTitle,
        description: this.bookAuthor
      },
      disableInput: true
    };
  },
  props: {
    bookId: {
      type: String,
      default: ""
    },
    bookTitle: {
      type: String,
      default: ""
    },
    bookAuthor: {
      type: String,
      default: ""
    }
  },
  components: {
    "b-list-group-item": bListGroupItem,
    "b-button": bButton
  },
  methods: {
    markBook(id) {
      // this.$store.commit("markTodo", { id: id });
      // :value="toList"
      //    :checked="toList"
      //    @change="markBook(book.id)"
    },
    deleteBook(id) {
      this.$store.dispatch("deleteBook", { id: id });
    },
    editBook() {
      this.$store.dispatch("editBook", { book: this.book });
    },
    toList() {}
  }
};
</script>

<style>
</style>