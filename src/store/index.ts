import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { pokes: [], print: { nickname: "123", pokemons: [] } },
  mutations: {
    resultToState(state, payload) {
      state.pokes.push(payload.item);
    },
    pokemonToState(state, payload) {
      state.print.pokemons.push(payload.item);
    },
    nickToState(state, payload) {
      state.print.nickname = (payload.item);
    }
  },
  actions: {},
  modules: {}
});
