<template>
  <div id="FormNickname">
    Hello, {{ this.$route.params.id }}!
    <b-table striped hover :items="pokemons"
      ><Pokemon v-bind:pokemonId="this.pokemons"
    /></b-table>
    <li v-for="pokemon in pokemons" :key="pokemon.name">
      {{ pokemon.name }}
      <Pokemon v-bind:pokemonId="pokemon.url" />
    </li>
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
          console.log();
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
