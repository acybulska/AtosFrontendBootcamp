<template>
  <section class="container">
    <div>
      <book-form></book-form>
      <!-- <book-filter></book-filter> -->
      <book-list></book-list>
    </div>
  </section>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import bookForm from "~/components/BookForm";
import bookList from "~/components/BookList";

export default {
  components: {
    "book-form": bookForm,
    "book-list": bookList
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

