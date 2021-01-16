<template>
  <div id="Catcher" class="Wrapper">
    <p>Hello, {{ this.$route.params.id }}!</p>
    <p>You can catch them!</p>
    <div class="Row">
      <Pokemon
        v-for="pokemon in pokemons"
        v-bind:pokemonUrl="pokemon.url"
        :key="pokemon.name"
      />
    </div>
    <div class="Row"><Catchem /></div>
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
      errors: []
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
        .get(
          "https://pokeapi.co/api/v2/pokemon?limit=5&offset=" +
            this.$route.params.id.length * 10
        )
        .then(response => {
          this.pokemons = response.data.results;
          this.$store.commit("resultToState");
        })
        .catch(e => {
          this.errors.push("Error Axios");
        });
    }
  },
  mounted() {
    this.loadData();
  }
};
</script>
