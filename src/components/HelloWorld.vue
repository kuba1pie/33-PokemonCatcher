<template>
  <div id="HelloWorld">
    <b-form>
      <b-form-group id="input-name" label label-for="input-name" description>
        <b-form-input
          id="input-0"
          v-model="name"
          type="text"
          placeholder="Name"
        ></b-form-input>
      </b-form-group>
    </b-form>
    <b-button type="submit" @click="onSubmit()" variant="primary"
      >Submit</b-button
    >
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "HelloWord",
  methods: {
    onSubmit: function() {
      axios({
        method: "get",
        url: "https://pokeapi.co/api/v2/pokemon?limit=5&offset=10",
      }).then(function(response) {
        console.log(response.data.results);
      });
    },
  },
  props: {
    name: {
      default: "",
      type: String,
    },
  },
};
</script>

<style scoped lang="sass">
input
  text-align: center
h3
  margin: 40px 0 0
ul
  list-style-type: none
  padding: 0
li
  display: inline-block
  margin: 0 10px
a
  color: #42b983
</style>
