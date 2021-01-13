<template>
  <div id="Catcher" class="Wrapper">
    <p>Hello, {{ this.$route.params.id }}!</p>
    <div class="Row">
      <Pokemon
        v-for="pokemon in pokemons"
        v-bind:pokemonUrl="pokemon.url"
        :key="pokemon.name"
      />
    </div>
    <div class="Row"><Catchem v-bind:name="12"/></div>
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
          this.errors.push(e);
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
