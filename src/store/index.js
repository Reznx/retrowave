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
    songName: "",
    image: null
  },
  mutations: {
    SET_SONGNAME(state, song) {
      state.songName = song;
    },
    CHANGE_BACKGROUND(state, image) {
      state.image = image;
    }
  },
  actions: {
    async FETCH_SONG({ commit }) {
      const res = await fetch(`http://145.239.26.146:7750/currentsong?sid=1`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
      const songName = await res.json();
      commit("SET_SONGNAME", songName);
    },

    GET_IMAGE({ commit }) {
      const res = `url(${
        this.state.gifs[Math.floor(Math.random() * this.state.gifs.length)]
      })`;
      commit("CHANGE_BACKGROUND", res);
    }
  },
  getters: {}
});
