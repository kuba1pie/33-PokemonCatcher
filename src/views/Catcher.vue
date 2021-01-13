<template>
  <div id="Catcher" class="wrapper">
    <p>Hello, {{ this.$route.params.id }}!</p>
    <Pokemon
      v-for="pokemon in pokemons"
      v-bind:pokemonUrl="pokemon.url"
      :key="pokemon.name"
    />
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
