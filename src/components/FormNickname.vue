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

    <router-link :to="`/catcher/` + this.nickname">
      <b-button type="submit" variant="primary">Submit</b-button></router-link
    >
  </div>
</template>

<script lang="ts">
export default {
  name: "FormNickname",
  data: function() {
    return { nickname: "" };
  },
  props: {
    pokemons: Object
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
