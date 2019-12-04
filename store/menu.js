const state = () => ({
  items: [
    { id: 1, name: "Dashboard", to: "/dashboard", icon: "md-analytics" },
    { id: 2, name: "Manage", to: "/manage", icon: "ios-card" },
    { id: 3, name: "Stock", to: "/stock", icon: "ios-apps" },
    { id: 4, name: "User", to: "/user", icon: "ios-people" }
  ],
  isCollapsed: false,
  activeMenu: 1
});

const mutations = {
  setActiveMenu(state, id) {
    state.activeMenu = id;
    state.isCollapsed = false;
  },
  setIsCollapsed(state, data) {
    state.isCollapsed = data;
  }
};

const getters = {
  getMenuById: state => id => {
    return state.items.find(i => i.id === id);
  }
};

export default {
  state,
  mutations,
  getters
};
