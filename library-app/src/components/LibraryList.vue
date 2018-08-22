<template>
    <div class="container">
    <div id="bookList">
        <ul>
            <li v-for="(book, index) in books" :key="index">
                <LibraryListItem :author="book.author" :title="book.title"></LibraryListItem>
            </li>
        </ul>
    </div>
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