<template>
  <div>
    <table id="bookList" class="table">
      <thead>
        <tr>
          <th scope="col">Author</th>
          <th scope="col">Title</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody v-for="(book, index) in books" :key="index">
        <LibraryListItem :description="book.description" :title="book.title" :id="book.id"></LibraryListItem>
      </tbody>
    </table>
    <p>Books count {{ books.length }}</p>
  </div>
</template>

<script>
import LibraryListItem from "./LibraryListItem";

export default {
  data() {
    return {};
  },
  components: {
    LibraryListItem
  },
  props: {
    books: {
      type: Array
    }
  }
};
</script>