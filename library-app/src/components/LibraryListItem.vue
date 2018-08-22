<template>
    <div>
        <input type="text" v-model="bookAuthor">
        <input type="text" v-model="bookTitle">
        <button>Del</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      bookAuthor: this.author,
      bookTitle: this.title
    };
  },
  props: {
    author: {
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