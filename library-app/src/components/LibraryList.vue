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
        <LibraryListItem v-for="book in books" :key="book.id" 
        :description="book.description" :title="book.title" :id="book.id" :rating="book.rating"
         v-on:update-book="onUpdatedBook"></LibraryListItem>
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
    books: {
      type: Array
    }
  },
  methods: {
    onUpdatedBook: function(id) {
      this.$emit("update-book");
    }
  }
};
</script>