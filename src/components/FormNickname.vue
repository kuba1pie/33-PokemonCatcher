<template>
  <div id="FormNickname">
    <b-form>
      <b-form-group id="input-name" label label-for="input-name" description>
        <b-form-input
          id="input-0"
          v-model="nickname"
          type="text"
          placeholder="Name"
        ></b-form-input>
      </b-form-group>
    </b-form>
    <b-button type="submit" @click="postPost" variant="primary"
      >Submit</b-button
    >
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "FormNickname",
  data: function() {
    return { nickname: "" };
  },
  methods: {
    postPost() {
      axios
        .get(
          "https://pokeapi.co/api/v2/pokemon?limit=5&offset=" +
            this.nickname.length * 10
        )
        .then(response => {
          console.log(response.data.results);
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  }
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
