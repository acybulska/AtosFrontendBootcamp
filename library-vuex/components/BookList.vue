<template>
  <b-list-group>
    <book-list-item
     v-for="book in books"
        :key="book.id"
        :book-id="book.id"
        :book-title="book.title"
        :book-author="book.description"
    ></book-list-item>
  </b-list-group>
</template>

<script>
import bListGroup from "bootstrap-vue/es/components/list-group/list-group";
import bookListItem from "~/components/BookListItem";

export default {
  computed: {
    books() {
      return this.$store.getters.books ? this.$store.getters.books : [];
    }
  },
  components: {
    "b-list-group": bListGroup,
    "book-list-item": bookListItem
  },
  mounted: async function() {
    await this.$store.dispatch("initBooks");
  }
};
</script>

<style>
</style>