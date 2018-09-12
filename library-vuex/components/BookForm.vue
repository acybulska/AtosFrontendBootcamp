<template>
  <b-input-group size="md" class="mb-3" prepend="Add new book">
    <b-form-input v-model="book.description" placeholder="Author"/>
    <b-form-input v-model="book.title" placeholder="Title"/>
    <b-input-group-append>
      <b-btn size="sm" text="Button" variant="success" @click="$emit('add-todo', book)">Add</b-btn>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
import bInputGroup from "bootstrap-vue/es/components/input-group/input-group";

export default {
  data() {
    return {
      book: {
        title: "",
        description: ""
      }
    };
  },
  components: {
    "b-input-group": bInputGroup
  }
};
</script>

<style>
</style>