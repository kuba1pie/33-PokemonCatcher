import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { pokes: [], print: { nickname: "123", pokemons: [] } },
  mutations: {
    increment(state, payload) {
      state.pokes.push(payload.item);
    },
    increment2(state, payload) {
      state.print.pokemons.push(payload.item);
    },
    increment3(state, payload) {
      state.print.nickname = (payload.item);
    }
  },
  actions: {},
  modules: {}
});
