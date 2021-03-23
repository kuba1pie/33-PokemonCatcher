<template>
  <div id="Catchem">
    <button v-on:click="greet">Catch'em!</button>
  </div>
</template>

<script lang="ts">
import { mapState, mapMutations } from "vuex";
export default {
  name: "Catchem",
  data: function() {
    return { nickname: this.nickname };
  },
  computed: {
    ...mapState(["savedPokemons"], ["nickname"], ["catchedPokemons"])
  },
  methods: {
    ...mapMutations(["CATCH_POKEMON"]),
    greet: function() {
      console.clear();
      for (let i = 0; i < this.savedPokemons.length; i++) {
        const n = this.savedPokemons[i];
        if (Math.random() >= 0.5) {
          this.CATCH_POKEMON(n);
        }
      }
      console.log({ pokemons: this.catchedPokemons });
      //alert("Check the console!");
    }
  }
};
</script>
