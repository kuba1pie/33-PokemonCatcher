<template>
  <div class="Pokemon item">
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
          this.single.stats = x.map(y => ({
            name: y.stat.name,
            value: y.base_stat
          }));
          console.log(this.single.stats);
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
