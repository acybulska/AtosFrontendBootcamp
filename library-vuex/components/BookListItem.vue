<template>
  <b-list-group-item class="book-item">
      <!-- <input class="float-left"
         type="checkbox"
         :value="toList"
         :checked="toList"
         @change="markBook(book.id)"
      >  -->
      <b-form-input v-model="bookAuthor" placeholder="Author"/>
      <b-form-input v-model="bookTitle" placeholder="Title"/>
      <b-button class="float-right" size="md" variant="danger" @click="deleteBook(book.id)">
        Delete
      </b-button>
    </b-list-group-item>
</template>

<script>
import bListGroupItem from "bootstrap-vue/es/components/list-group/list-group-item";
import bButton from "bootstrap-vue/es/components/button/button";

export default {
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
      this.$store.commit("markTodo", { id: id });
    },
    deleteBook(id) {
      this.$store.commit("deleteTodo", { id: id });
    }
  }
};
</script>

<style>
  .todo-list-item {
    min-width:400px;
    text-align:left;
  }

  .todo-list-item.completed {
    opacity: 0.5;
    text-decoration: line-through;
  }
</style>