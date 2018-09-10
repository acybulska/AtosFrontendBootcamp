<template>
  <b-input-group size="md" class="mb-3" prepend="Add new todo">
    <b-form-input v-model="label"/>
    <b-input-group-append>
      <b-btn size="sm" text="Button" variant="success" @click="$emit('add-todo', label)">Add</b-btn>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
import bInputGroup from "bootstrap-vue/es/components/input-group/input-group";
export default {
  props: {},
  data() {
    return {
      label: ""
    };
  },
  components: {
    "b-input-group": bInputGroup
  }
};
</script>

<style>
</style>

