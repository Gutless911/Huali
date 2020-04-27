import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numALL: 0
  },
  mutations: {
    add(state) {
      // state:表示当前store中state里面的数据   data：表示触发的时候传递过来的数据
      // console.log(state);
      // console.log(data);
      state.numALL++;
    },
    sub(state) {
      // state:表示当前store中state里面的数据   data：表示触发的时候传递过来的数据
      // console.log(state);
      // console.log(data);
      state.numALL--;
    }
  },
  actions: {},
  modules: {}
});
