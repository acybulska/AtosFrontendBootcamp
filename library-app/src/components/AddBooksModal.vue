<template>
  <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">
                    <div class="modal-header">
                        <slot name="header">
                        <h3>Add Multiple Books</h3>
                        </slot>
                    </div>
                    <div class="modal-body">
                        <slot name="body">
                            <div class="input-group custom-file">
                                <input type="file" class="custom-file-input" id="inputFile" aria-describedby="inputFile" @change="readFile">
                                <label class="custom-file-label" for="inputFile">Choose file</label>
                            </div>
                            <table class="table" v-if="books.length!==0">
                                <thead>
                                    <th>Author</th>
                                    <th>Title</th>
                                </thead>
                                <tbody>
                                    <tr v-for="(book, index) in books" :key="index">
                                        <td>{{book.description}}</td>
                                        <td>{{book.title}}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </slot>
                    </div>
                    <div class="modal-footer">
                        <slot name="footer">
                            <button class="modal-default-button btn btn-outline-secondary" @click="$emit('close')">Cancel</button>
                            <button class="modal-default-button btn btn-outline-success" @click="handler">OK</button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
  data() {
    return {
      books: []
    };
  },
  methods: {
    readFile: function(ev) {
      const f = ev.target.files[0];

      if (f) {
        var r = new FileReader();
        r.onload = e => {
          var contents = e.target.result;
          var booksFile = JSON.parse(contents);
          booksFile.forEach(element => {
            this.books.push({
              title: element.title,
              description: element.description
            });
          });
        };
        r.readAsText(f);
      } else {
        alert("Failed to load file");
      }
    },
    handler: function() {
      this.$emit("close");
      this.$emit("get-books", this.books);
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 700px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}
</style>
