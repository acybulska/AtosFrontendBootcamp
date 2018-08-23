<template>
    <div>
        <input type="text" v-model="bookAuthor">
        <input type="text" v-model="bookTitle">
        <button>Delete</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      bookAuthor: this.description,
      bookTitle: this.title
    };
  },
  props: {
    description: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>