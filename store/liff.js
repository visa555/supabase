export const state = () => ({
  profile: {
    userId: null,
    displayName: null,
    pictureUrl: null,
    statusMessage: null,
  },
})

export const mutations = {
  SET_PROFILE(state, payload) {
    state.profile = { ...state.profile, ...payload }
  },
}

export const actions = {
  setProfile({ commit }, payload) {
    commit('SET_PROFILE', payload)
  },
}
