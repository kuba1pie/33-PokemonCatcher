<template>
  <div id="FormNickname">
    <b-table striped hover :items="pokemons"></b-table>
  </div>
</template>

<script lang="ts">
import axios from "axios";

export default {
  name: "FormNickname",
  data: function() {
    return {
      pokemons: [],
      req: this.$route.params.id.length * 10
    };
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
