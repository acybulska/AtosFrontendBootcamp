<template>
  <div>
    <table id="bookList" class="table table-borderless">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Author</th>
          <th scope="col">Title</th>
          <th scope="col">Rating</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody>
        <LibraryListItem v-for="book in books" :key="book.id" :book="book" v-on:update-book="onUpdatedBook" v-on:checkbox-id="getId"></LibraryListItem>
      </tbody>
    </table>
    <p>Books count {{ books.length }}</p>
  </div>
</template>

<script>
import LibraryListItem from "./LibraryListItem";

export default {
  components: {
    LibraryListItem
  },
  props: {
    books: Array,
    deleteMultiple: Array
  },
  methods: {
    onUpdatedBook: function() {
      this.$emit("update-book");
    },
    getId: function(id) {
      this.$emit("checkbox-id", id);
    }
  }
};
</script>