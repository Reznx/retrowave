import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    gifs: [
      "https://i.giphy.com/media/l3UcrZHrGW2CjHXqM/giphy.webp",
      "https://i.giphy.com/media/D4zbzXKSl9tOE/giphy.webp",
      "https://i.giphy.com/media/xT9IglBTX4JAsRHH9K/giphy.webp",
      "https://i.giphy.com/media/qOnd3CqaqSoa4/giphy.webp",
      "https://i.giphy.com/media/3oriNLWh9ZXbuppKkE/giphy.webp"
    ],
    audio: null,
    background: null
  },
  mutations: {
    SET_BACKGROUND(state, payload) {
      state.background = payload;
    }
  },
  actions: {
    // startAudio({ commit }) {
    //   const key = process.env.GIPHY_API_KEY;
    //   const audio = new Audio("http://145.239.26.146:7750/;stream/1");
    // },

    async fetchBackground({ commit }) {
      const key = "emul0GaWKdV9iS4pfzUPGRWxuQpqyGdh";
      const res = await fetch(
        ` http://api.giphy.com/v1/gifs/search?q=retrowave&api_key=${key}&limit=30 `
      );
      const background = await res.json();
      commit("SET_BACKGROUND", background);
    }
  },
  getters: {
    audio: s => s.audio,
    background: s => s.background
  }
});
