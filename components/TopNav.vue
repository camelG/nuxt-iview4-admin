<template>
  <Row type="flex" class="nav-height ivu-menu-dark">
    <Col>
      <div class="header-logo">
        <Icon
          @click.native="$store.commit('menu/setIsCollapsed', !isCollapsed)"
          :style="{margin: '0 20px'}"
          type="md-menu"
          size="24"
        ></Icon>LOGO
      </div>
    </Col>
    <Col :style="{marginLeft: 'auto'}">
      <Menu
        mode="horizontal"
        theme="dark"
        :active-name="activeMenu"
        @on-select="selectedMenu"
        class="nav-height"
      >
        <MenuItem v-for="m in menu" :key="m.id" :name="m.id" :to="m.to">
          <Icon :type="m.icon" />
          <span>{{ m.name }}</span>
        </MenuItem>
        <Dropdown>
          <Avatar icon="ios-person" />
          <Icon type="ios-arrow-down" :style="{color: '#fff'}"></Icon>
          <DropdownMenu slot="list">
            <DropdownItem>驴打滚</DropdownItem>
            <DropdownItem>炸酱面</DropdownItem>
            <DropdownItem>豆汁儿</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </Menu>
    </Col>
  </Row>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      isCollapsed: state => state.menu.isCollapsed,
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

<style scoped>
.header-logo {
  color: #fff;
}
.nav-height {
  height: 45px;
  line-height: 45px;
}
</style>
