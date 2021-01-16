<template>
  <div id="Catchem">
    <button v-on:click="greet">Catch'em!</button>
  </div>
</template>

<script lang="ts">
export default {
  name: "Catchem",
  data: function() {
    return {
      pokemons: [],
      nick: this.$route.params.id
    };
  },
  methods: {
    greet: function() {
      console.clear();
      this.pokemons = this.$store.state.pokes;
      for (let i = 0; i < this.pokemons.length; i++) {
        const n = this.pokemons[i];
        if (Math.random() >= 0.5) {
          this.$store.commit("pokemonToState", { item: n });
          this.$store.commit("nickToState", { item: this.nick });
        }
      }
      console.log(this.$store.state.print);
      alert("Check the console!");
    }
  }
};
</script>
