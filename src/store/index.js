import { createStore } from 'vuex'

export default createStore({
  state: {
    clothes: [],
    cartItems: new Map(),
  },
  getters:{
    totalSumOfClothes(state) {
      const clothes = state.cartItems
      let sum = 0
      for(const clothe of clothes.values()) {
        sum += clothe.price * clothe.count
      }

      return sum
    }
  },
  mutations: {
    SET_CLOTHES(state, json) {
      state.clothes = json;
    },
    ADD_CLOTHE_TO_CART(state, clothe) {
      const isClotheAlreadyAdded = state.cartItems.get(clothe.id)

      if(isClotheAlreadyAdded) {
        const modifiedClothe = {
          ...clothe,
          count:isClotheAlreadyAdded.count + 1
        }
        state.cartItems.set(clothe.id, modifiedClothe)
      } else {
        state.cartItems.set(clothe.id, {...clothe, count: 1})
      }
    },
    DECREMENT_CART_ITEM(state, id) {
      const currentClothe = state.cartItems.get(id)

      if(currentClothe.count > 1) {
        currentClothe.count = currentClothe.count - 1 
      }
    },
    INCREMENT_CART_ITEM(state, id) {
      const currentClothe = state.cartItems.get(id)

      currentClothe.count = currentClothe.count + 1 
    },
    REMOVE_CART_ITEM(state, id) {
      state.cartItems.delete(id)
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
