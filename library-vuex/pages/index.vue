<template>
  <b-container>
    <b-jumbotron header="My Library App">
      <book-form></book-form>
      <book-filter></book-filter>
    </b-jumbotron>
    <book-list></book-list>
  </b-container>
</template>

<script>
import Vue from "vue";
import axios from "axios";
import BootstrapVue from 'bootstrap-vue';

import bookForm from "~/components/BookForm";
import bookFilter from "~/components/BookFilter";
import bookList from "~/components/BookList";

export default {
  components: {
    "book-form": bookForm,
    "book-filter": bookFilter,
    "book-list": bookList
  }
};
</script>

<style>
/* .container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; 
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
} */
</style>

