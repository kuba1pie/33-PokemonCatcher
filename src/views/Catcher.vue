<template>
  <div id="Catcher" class="Wrapper">
    <p>Hello, {{ this.nickname }}!</p>
    <p>You can catch them!</p>
    <div class="Row">
      <Pokemon
        v-for="pokemon in pokes"
        v-bind:pokemonUrl="pokemon"
        :key="pokemon"
      />
    </div>
    <div class="Row"><Catchem /></div>
  </div>
</template>

<script lang="ts">
import Pokemon from "@/components/Pokemon.vue";
import Catchem from "@/components/Catchem.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "Catcher",
  data: function () {
    return {};
  },
  components: {
    Pokemon,
    Catchem,
  },
  computed: {
    ...mapState(["pokes", "nickname"]),
  },
  methods: {
    ...mapActions(["fetchPokemons"]),
  },
  mounted() {
    this.fetchPokemons(this.nickname);
  },
};
</script>
