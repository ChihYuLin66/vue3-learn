import { createStore } from "vuex";

export default createStore({
  state: {
    isOpen: true,
  },
  actions: {
    toggleMenu(context) {
      const bool = !context.state.isOpen;
      context.commit('handleMenu', bool)
    }
  },
  mutations: {
    handleMenu(state, bool) {
      state.isOpen = bool;
    }
  },
  getters: {
    isOpen(state) {
      return state.isOpen;
    }
  },
});
