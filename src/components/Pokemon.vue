<template>
  <div id="Pokemon">Pokename: {{ pokemonId }}</div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "Pokemon",
  data: function() {
    return {
      pokemon: [],
      req: this.$route.params.id
    };
  },
  methods: {
    loadData() {
      axios
        .get(this.pokemonId)
        .then(response => {
          this.pokemon = response.data;
          // Create new object class pokemon by this data
          console.log();
        })
        .catch(e => {
          this.errors.push(e);
        });
    }
  },
  mounted() {
    this.loadData();
  },
  props: {
    pokemonId: String
  }
};
</script>
