export default {
  state: {
    name: '王林'
  },
  mutations: {
    updateName(state, payload) {
      state.name = payload
    }
  },
  actions: {
    aUpdateName(context) {
      setTimeout(() => {
        context.commit('updateName', '王老魔')
      }, 1000)
    }
  },
  getters: {
    fullName(state) {
      return state.name + "❤李慕婉"
    },
    fullName2(state, getter) {
      return getter.fullName + '❤王平'
    },
    //访问store下的state中的东西
    fullName3(state, getter, rootState) {
      return getter.fullName2 + rootState.counter
    }
  }
}
