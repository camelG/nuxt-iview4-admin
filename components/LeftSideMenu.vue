<template>
  <Drawer title="LOGO" placement="left" v-model="isCollapsed">
    <Menu :active-name="activeMenu" @on-select="selectedMenu">
      <MenuItem
        v-for="m in menu"
        :key="m.id"
        :name="m.id"
        :to="m.to"
        :style="{fontSize: '18px'}"
        class="p-2"
      >
        <Icon :type="m.icon" />
        <span>{{ m.name }}</span>
      </MenuItem>
    </Menu>
  </Drawer>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    isCollapsed: {
      get() {
        return this.$store.state.menu.isCollapsed;
      },
      set(val) {
        this.$store.commit("menu/setIsCollapsed", val);
      }
    },
    ...mapState({
      activeMenu: state => state.menu.activeMenu,
      menu: state => state.menu.items
    })
  },
  methods: {
    selectedMenu(value) {
      return this.$store.commit("menu/setActiveMenu", value);
    }
  }
};
</script>
