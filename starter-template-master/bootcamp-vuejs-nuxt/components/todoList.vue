<template>
    <b-list-group>
      <todo-list-item
        v-on:delete-todo="deleteTodo"
        v-on:mark-todo="markTodo"
        v-for="todo in todos"
        :key="todo.label"
        :label="todo.label"
        :todo-id="todo.id"
        :completed="todo.completed"
      ></todo-list-item>
    </b-list-group>
</template>

<script>
import Vue from "vue";
import todoListItem from "~/components/todoListItem.vue";
import bListGroup from "bootstrap-vue/es/components/list-group/list-group";

export default {
  props: {
    todos: {
      type: Array
    }
  },
  data() {
    return {};
  },
  computed: {
    computedTodos: {
      get() {
        return this.todos ? this.todos : [];
      },
      set() {}
    }
  },
  components: {
    "b-list-group": bListGroup,
    "todo-list-item": todoListItem
  },
  mounted: async function() {},
  methods: {
    deleteTodo(id) {
      this.$emit("delete-todo", id);
    },
    markTodo(id) {
      Vue.set(
        this,
        "computedTodos",
        this.computedTodos.map(todo => {
          todo.id == id ? (todo.completed = !todo.completed) : null;
          return todo;
        })
      );
    }
  }
};
</script>

<style>
.todo-list {
  min-width: 400px;
}
</style>

