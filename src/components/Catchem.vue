<template>
  <div id="Catchem" class="wrapper">
    <button v-on:click="greet">Catch'em</button>
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
      this.pokemons = this.$store.state.pokes;
      for (let i = 0; i < this.pokemons.length; i++) {
        const n = this.pokemons[i];
        if (Math.random() >= 0.5) {
          this.$store.commit("increment2", { item: n });
        }
      }
      console.log(this.$store.state.print);
    }
  }
};
</script>
