import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = () =>

  new Vuex.Store({
    state: {
      dataJson: "",
    },

    mutations: {
      increment(state) {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
          .then((response) => response.json())
          .then((json) => (state.dataJson = json));
      },
    },
  });

export default store;
