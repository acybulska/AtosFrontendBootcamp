<template>
  <b-input-group size="md" class="mb-3" prepend="Add new todo">
    <b-form-input v-model="label"/>
    <b-input-group-append>
      <b-btn size="sm" text="Button" variant="success" @click="addTodo(label)">Add</b-btn>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
import bInputGroup from "bootstrap-vue/es/components/input-group/input-group";
export default {
  data() {
    return {
      label: ""
    };
  },
  components: {
    "b-input-group": bInputGroup
  },
  methods: {
    addTodo(label) {
      if (label.length < 3) {
        alert("Please provide at least 3 characters");
      } else {
        this.$store.dispatch("addTodo", {
          id: this.$store.getters.nextId,
          label: label
        });
      }
    }
  }
};
</script>

<style>
</style>

