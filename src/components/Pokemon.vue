<template>
  <div class="Pokemon Item">
    <img :src="single.artwork" />
    <h2>{{ single.nameToShow }}</h2>
  </div>
</template>

<script lang="js">
import axios from "axios";

export default {
  name: "Pokemon",
  data: function() {
    return {
      pokemon: [],
      errors: [],
      single: {
        name: String,
        nameToShow: String,
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
          this.single.name = response.data.name; //Upper-case, hyphens replaced with spaces
          this.single.nameToShow = this.single.name
            .replace("-", " ")
            .toUpperCase();
          this.single.artwork =
            response.data.sprites.other["official-artwork"].front_default;
          this.single.stats = x.map(y => ({
            name: y.stat.name,
            value: y.base_stat
          }));
          this.$store.commit("SAVE_POKEMON", this.single);
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
