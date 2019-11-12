<template>
  <div>
    <Layout>
      <Header>
        <Row type="flex">
          <Col>
            <div class="layout-logo">
              <Icon
                @click.native="collapsedSider"
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
            >
              <MenuItem v-for="m in menu" :key="m.id" :name="m.id">
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
      </Header>
      <Layout>
        <Sider
          ref="side1"
          v-model="isCollapsed"
          hide-trigger
          collapsible
          :collapsed-width="55"
          :style="{background: '#fff'}"
        >
          <Menu
            width="auto"
            :class="menuitemClasses"
            :active-name="activeMenu"
            @on-select="selectedMenu"
          >
            <MenuItem v-for="m in menu" :key="m.id" :name="m.id">
              <Icon :type="m.icon" />
              <span v-if="!isCollapsed">{{ m.name }}</span>
            </MenuItem>
          </Menu>
        </Sider>
        <Layout>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <nuxt />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: true,
      activeMenu: 1
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    },
    menuitemClasses() {
      return ["menu-item", this.isCollapsed ? "collapsed-menu" : ""];
    },
    menu() {
      return [
        { id: 1, name: "Dashboard", icon: "md-analytics" },
        { id: 2, name: "Management", icon: "ios-card" },
        { id: 3, name: "Stock", icon: "ios-apps" },
        { id: 4, name: "User", icon: "ios-people" }
      ];
    }
  },
  methods: {
    selectedMenu(value) {
      this.$set(this, "activeMenu", value);
    },
    collapsedSider() {
      this.$refs.side1.toggleCollapse();
    }
  }
};
</script>
<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.layout-logo {
  color: #fff;
}
.layout-nav {
  margin-left: auto;
}
.ivu-layout-header {
  height: 45px;
  line-height: 45px;
}
.ivu-menu-horizontal {
  height: 45px;
  line-height: 45px;
}
.menu-icon {
  transition: all 0.3s;
}
.rotate-icon {
  transform: rotate(-90deg);
}
.menu-item span {
  display: inline-block;
  overflow: hidden;
  width: 69px;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: bottom;
  transition: width 0.2s ease 0.2s;
}
.menu-item i {
  transform: translateX(0px);
  transition: font-size 0.2s ease, transform 0.2s ease;
  vertical-align: middle;
  font-size: 16px;
}
.collapsed-menu span {
  width: 0px;
  transition: width 0.2s ease;
}
.collapsed-menu i {
  transform: translateX(5px);
  transition: font-size 0.2s ease 0.2s, transform 0.2s ease 0.2s;
  vertical-align: middle;
  font-size: 22px;
}
</style>
