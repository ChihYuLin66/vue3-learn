import { createStore } from "vuex";
import axios from "axios";
import { apiGetPhoteRequest } from "../api";

export default createStore({
  state: {
    photoArr: [],
    idx: 0,
    isLoad: false,
  },
  actions: {
    async handleInit({ commit }) {
      try {
        let photoReponse = await apiGetPhoteRequest();
        commit('init', photoReponse.data);
        return photoReponse.data;  
      } catch (error) {
        console.error(error.response.data)
      }
      
    },
    handleLoadState({ commit }, bool) {
      commit('setLoad', bool)
    },
    handleAdd({ commit }) {
      commit('addImage');
    },
    handleRemove({ commit }) {
      commit('removeImage');
    },
  },
  mutations: {
    init(state, payload) {
      state.photoArr = payload;
    },
    setLoad(state, bool) {
      state.isLoad = bool
    },
    addImage(state) {
      state.idx++;
      if (state.idx > state.photoArr.length - 1) {
        state.idx = 0;
      }
    },
    removeImage(state) {
      state.idx--;
      if (state.idx < 0) {
        state.idx = state.photoArr.length - 1;
      }
    },
  },
  getters: {
    isLoad(state) {
      return state.isLoad;
    },
    photoArr(state) {
      return state.photoArr;
    },
    idx(state) {
      return state.idx;
    },
  },
});
