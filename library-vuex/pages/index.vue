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
</style>

