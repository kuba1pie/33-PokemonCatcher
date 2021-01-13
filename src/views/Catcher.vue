<template>
  <div id="Catcher" class="wrapper">
    <p>Hello, {{ this.$route.params.id }}!</p>
    <Pokemon
      v-for="pokemon in pokemons"
      v-bind:pokemonUrl="pokemon.url"
      :key="pokemon.name"
    />
    <Catchem />
  </div>
</template>

<script lang="ts">
import axios from "axios";
import Pokemon from "@/components/Pokemon.vue";
import Catchem from "@/components/Catchem.vue";

export default {
  name: "Catcher",
  data: function() {
    return {
      pokemons: [],
      foo: "123"
    };
  },
  components: {
    Pokemon,
    Catchem
  },
  state: {
    poks: 0
  },
  methods: {
    loadData() {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=5&offset=" + this.req)
        .then(response => {
          this.pokemons = response.data.results;
          this.$store.commit("increment");
        })
        .catch(e => {
          //this.errors.push(e);
        });
    }
  },
  mutations: {
    increment(state) {
      state.count++;
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
