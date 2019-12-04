<template>
  <div>
    <Layout>
      <top-nav />
      <Layout>
        <left-side-menu />
        <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
          <nuxt />
        </Content>
      </Layout>
    </Layout>
    <div :style="{position: 'fixed', right: '25px', bottom: '70px'}">
      <Avatar icon="md-nutrition" size="60" :style="{background: 'tomato'}" />
    </div>
    <BackTop />
  </div>
</template>
<script>
import TopNav from "@/components/TopNav";
import LeftSideMenu from "@/components/LeftSideMenu";
export default {
  components: {
    TopNav,
    LeftSideMenu
  },
  data() {
    return {
      isCollapsed: false,
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
        { id: 1, name: "Dashboard", to: "/dashboard", icon: "md-analytics" },
        { id: 2, name: "Manage", to: "/manage", icon: "ios-card" },
        { id: 3, name: "Stock", to: "/stock", icon: "ios-apps" },
        { id: 4, name: "User", to: "/user", icon: "ios-people" }
      ];
    }
  },
  methods: {
    selectedMenu(value) {
      this.$set(this, "activeMenu", value);
      console.log(value);
      // this.$router.push("/dashboard");
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
