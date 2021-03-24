import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { pokes: [], savedPokemons: [], nickname: "", catchedPokemons: [] },
  mutations: {
    SAVE_POKEMON(state, payload) {
      state.savedPokemons.push(payload);
    },
    RESET_POKEMONS(state) {
      state.savedPokemons = [];
      state.catchedPokemons = [];
    },
    CATCH_POKEMON(state, payload) {
      state.catchedPokemons.push(payload);
    },
    SAVE_NICKNAME(state, payload) {
      state.nickname = payload;
    },
    SAVE_ALL_POKEMONS(state, payload) {
      state.pokes = payload;
    },
  },
  actions: {
    async fetchPokemons(context, payload) {
      context.commit("RESET_POKEMONS");
      return axios
        .get(
          "https://pokeapi.co/api/v2/pokemon?limit=5&offset=" + payload.length
        )
        .then((response) => {
          const links = response.data.results.map((y) => y.url);
          context.commit("SAVE_ALL_POKEMONS", links);
        });
    },
  },
});
