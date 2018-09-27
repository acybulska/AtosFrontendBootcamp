<template>
 <b-button-group>
     <b-button @click="getList()">Get list</b-button>
 </b-button-group>
</template>
<script>
import bButtonGroup from 'bootstrap-vue/es/components/button-group/button-group';

export default {
    computed: {
        multipleID() {
            return this.$store.getters.multipleID ? this.$store.getters.multipleID : [];
        }
    },
    methods: {
        getList() {
            console.log(this.multipleID)
        }
    }
}
</script>
<style></style>