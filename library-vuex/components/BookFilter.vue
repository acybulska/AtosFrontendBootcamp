<template>
 <b-button-group>
     <b-button variant="success" @click="addMultiple()">Add multiple</b-button>
     <b-button variant="danger" @click="deleteMultiple()">Delete multiple</b-button>
 </b-button-group>
</template>
<script>
import bButtonGroup from "bootstrap-vue/es/components/button-group/button-group";

export default {
  computed: {
    multipleID() {
      return this.$store.getters.multipleID
        ? this.$store.getters.multipleID
        : [];
    }
  },
  methods: {
    addMultiple() {
      // for (const i of val) {
      //     this.$store.dispatch("addBook", {book: book})
      //     }
    },
    deleteMultiple() {
      console.log(this.multipleID);
      for (const i of this.multipleID) {
        this.$store.dispatch("deleteBook", { id: i });
      }
    }
  }
};
</script>
<style></style>