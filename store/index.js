import Cookie from 'js-cookie'
export const state = () => {
  return {
    auth: null
  }
}
export const mutations = {
  setAuth (state, auth) {
    state.auth = auth
  }
}
export const actions = {
  setAuth ({ commit }, data) {
    let auth = null
    if (data) {
        auth = data
    }
    commit('setAuth', auth)
  }
}
