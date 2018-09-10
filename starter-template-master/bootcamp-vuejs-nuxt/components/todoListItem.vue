<template>
    <b-list-group-item class="todo-list-item" :class="{completed: completed}">
      <input class="float-left"
         type="checkbox"
         :value="completed"
         :checked="completed"
         @change="$emit('mark-todo', todoId)"
      >
      {{label}}
      <b-button class="float-right" size="md" variant="danger" @click="$emit('delete-todo', todoId)">
        Delete
      </b-button>
    </b-list-group-item>
</template>

<script>

  import bListGroupItem from 'bootstrap-vue/es/components/list-group/list-group-item';
  import bButton from 'bootstrap-vue/es/components/button/button';

  export default {
    props: {
      label: {
        type: String,
        default: ""
      },
      todoId: {
        type: Number,
        default: 0
      },
      completed: {
        type: Boolean,
        default: false
      }
    },
    components: {
      "b-list-group-item": bListGroupItem,
      "b-button": bButton
    }
  }
</script>

<style>
  .todo-list-item {
    min-width:400px;
    text-align:left;
  }

  .todo-list-item.completed {
    opacity: 0.5;
    text-decoration: line-through;
  }
</style>

