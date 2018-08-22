<template>
  <div id="app">
    <h1>My Book Library</h1>
    <p>Add new book:</p>
    <div class="addBookDiv">
      <input type="text" v-bind:value="input1" v-on:input="inputChanged">
      <input type="text" v-model="input2">
      <button @click="addBook()">Add</button>
    </div>
    <body>
      <Library :books="books"></Library>
    </body>
  </div>
</template>

<script>
// import Vue from 'vue'
import Library from "./components/LibraryList";

export default {
  name: "App",
  components: {
    Library
  },
  data() {
    return {
      input1: "Harry",
      input2: "Potter",
      books: [
        { author: "J.K.Rowling", title: "Harry Potter i Kamień Filozoficzny" },
        { author: "J.K.Rowling", title: "Harry Potter i Komnata Tajemnic" },
        { author: "J.K.Rowling", title: "Harry Potter i więzień Azkabanu" },
        { author: "J.K.Rowling", title: "Harry Potter i Czara Ognia" },
        { author: "J.K.Rowling", title: "Harry Potter i Zakon Feniksa" }
      ]
    };
  },
  methods: {
    addBook: function() {
      console.log(this.input1);
      console.log(this.input2);
    },
    inputChanged: function(event) {
      this.input1 = event.target.value;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
