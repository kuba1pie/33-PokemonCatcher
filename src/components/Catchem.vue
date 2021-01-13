<template>
  <div id="Catchem" class="wrapper">
    <b-button v-on:click="greet" variant="success">Catch'em</b-button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Catchem",
  data: function() {
    return {
      pokemons: []
    };
  },
  methods: {
    greet: function() {
      console.clear();
      this.pokemons = JSON.parse(JSON.stringify(this.$store.state.pokes));
      for (let i = 0; i < this.pokemons.length; i++) {
        const n = this.pokemons[i];
        if (Math.random() >= 0.5) {
          this.$store.commit("increment2", { item: n });
        }
      }
      console.log(JSON.parse(JSON.stringify(this.$store.state.print)));
    }
  }
};
</script>
<style lang="sass">
.wrapper
  display: flex
  flex-flow: row
  flex-wrap: wrap
  .item
    width: 200px
    img
      width: 100%
</style>
