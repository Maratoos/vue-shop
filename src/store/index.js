import { createStore } from 'vuex'

export default createStore({
  state: {
    clothes: []
  },
  mutations: {
    SET_CLOTHES(state, json) {
      state.clothes = json;
    }
  },
  actions: {
    async getClothes(context) {
      const response = await fetch("http://localhost:3000/clothes")
      const json = await response.json()

      context.commit("SET_CLOTHES", json)
    }
  },
  modules: {
  }
})
