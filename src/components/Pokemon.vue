<template>
  <div class="Pokemon">
    Pokemon: {{ single.name }} <br />
    <img :src="single.artwork" />
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "Pokemon",
  data: function() {
    return {
      pokemon: [],
      single: {
        name: String,
        artwork: String,
        stats: [{ name: "" }, { value: 0 }]
      }
    };
  },
  methods: {
    loadData() {
      axios
        .get(this.pokemonUrl)
        .then(response => {
          const x = response.data.stats;
          this.pokemon = response.data.stats; // Delete
          this.single.name = response.data.name; //Upper-case, hyphens replaced with spaces
          this.single.artwork =
            response.data.sprites.other["official-artwork"].front_default;
          this.single.stats = [
            // loop
            {
              name: x[0].stat.name,
              value: x[0].base_stat
            },
            {
              name: x[1].stat.name,
              value: x[1].base_stat
            },
            {
              name: x[2].stat.name,
              value: x[2].base_stat
            }
          ];
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
    pokemonUrl: String
  }
};
</script>
