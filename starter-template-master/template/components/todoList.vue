<template>
    <b-list-group>
      <todo-list-item
        v-for="todo in todos"
        :key="todo.label"
        :label="todo.label"
        :todo-id="todo.id"
        :completed="todo.completed"
      ></todo-list-item>
    </b-list-group>
</template>

<script>
import axios from "axios";
import todoListItem from "~/components/todoListItem.vue";
import bListGroup from "bootstrap-vue/es/components/list-group/list-group";

export default {
  computed: {
    todos() {
      return this.$store.getters.todos ? this.$store.getters.todos : [];
    }
  },
  components: {
    "b-list-group": bListGroup,
    "todo-list-item": todoListItem
  },
  mounted: async function() {
    await this.$store.dispatch('initTodos')
  },
  methods: {}
};
</script>

<style>
.todo-list {
  min-width: 400px;
}
</style>

