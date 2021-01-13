<template>
  <div id="FormNickname">
    Hello, {{ this.$route.params.id }}!
    <div v-for="pokemon in pokemons" :key="pokemon.name">
      <Pokemon v-bind:pokemonUrl="pokemon.url" />
    </div>
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Pokemon from "@/components/Pokemon.vue";

export default {
  name: "FormNickname",
  data: function() {
    return {
      pokemons: [],
      req: this.$route.params.id.length * 10
    };
  },
  components: {
    Pokemon
  },
  methods: {
    loadData() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=5&offset=" + this.req)
        .then(response => {
          this.pokemons = response.data.results;
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>
