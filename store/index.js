export const state = () => ({
  auth: null
});

export const mutations = {
  setAuth(state, auth) {
    state.auth = auth;
  }
};
