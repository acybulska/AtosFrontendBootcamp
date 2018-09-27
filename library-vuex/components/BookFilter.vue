<template>
 <b-button-group>
    <b-button variant="success" v-b-modal.addMultipleModal>Add multiple</b-button>
    <b-button variant="danger" @click="deleteMultiple()">Delete multiple</b-button>
    <b-modal id="addMultipleModal" title="Add JSON file" @ok="addMultiple">
        <b-form-file v-model="file" :state="Boolean(file)" placeholder="Choose a file..." @change="checkFile"></b-form-file>
        <div class="mt-3">Selected file: {{file && file.name}}</div>
    </b-modal>
 </b-button-group>
</template>
<script>
import bButtonGroup from "bootstrap-vue/es/components/button-group/button-group";
import vBModal from "bootstrap-vue/es/directives/modal/modal";

export default {
  data() {
    return {
      file: null,
      booksArr: []
    };
  },
  computed: {
    multipleID() {
      return this.$store.getters.multipleID
        ? this.$store.getters.multipleID
        : [];
    }
  },
  methods: {
    checkFile(evt) {
      console.log(evt);
      const f = evt.target.files[0];
      if (f) {
        var r = new FileReader();
        r.onload = e => {
          var contents = e.target.result;
          var booksFile = JSON.parse(contents);
          booksFile.forEach(element => {
            this.booksArr.push({
              title: element.title,
              description: element.description
            });
          });
        };
        r.readAsText(f);
        console.log(this.booksArr);
      } else {
        alert("Failed to load file");
      }
    },
    addMultiple() {
      for (const book of this.booksArr) {
          this.$store.dispatch("addBook", {book: book})
          }
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