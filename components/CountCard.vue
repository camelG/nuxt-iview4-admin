<template>
  <div :style="{border: '1px solid #ccc',height: '80px'}">
    <Row align="middle" :style="{height: '80px'}">
      <Col span="12">
        <svg
          :style="{fontSize: '28px',height: '78px'}"
          class="rounded-left font-weight-bold"
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
          role="img"
        >
          <rect width="100%" height="100%" :fill="bgColor" />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dominant-baseline="central"
            fill="#fff"
          >{{ title }}</text>
        </svg>
      </Col>
      <Col span="12" :style="{textAlign: 'center', paddingTop:'15px'}">
        <count-to :endVal="number" :style="{fontSize: '28px'}" />
      </Col>
    </Row>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    number: {
      type: Number,
      default: 0
    },
    bgColor: {
      type: String,
      default: "#333"
    }
  },
  components: {
    countTo
  }
};
</script>

<style lang="scss" scoped>
</style>
