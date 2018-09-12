<template>
  <section class="container">
    <div>
      <todo-form></todo-form>
      <todo-list></todo-list>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import Vue from "vue";

import todoForm from "~/components/todoForm.vue";
import todoList from "~/components/todoList.vue";

export default {
  components: {
    "todo-list": todoList,
    "todo-form": todoForm
  },
  mounted: async function() {
    // let response = await axios.get('/todos.json')
    // Vue.set(this, "todos", this.$store.state.todos);
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

