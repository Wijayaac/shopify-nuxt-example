export const state = () => ({
  base: {
    items: [],
  },
})

export const getters = {
  items: (state) => {
    if (state.base && state.base.items) {
      return state.base.items
    } else {
      return []
    }
  },
}

export const mutations = {
  setBase(state, response) {
    state.base.items = response
  },
}

export const actions = {
  updateBase({ commit }, response) {
    commit('setBase', response)
  },
}
