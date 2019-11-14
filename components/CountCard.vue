<template>
  <div class="card" style="height: 80px">
    <div class="row no-gutters">
      <div class="col">
        <svg
          class="rounded-left font-weight-bold"
          :style="{fontSize: '28px'}"
          width="100%"
          height="78px"
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
      </div>
      <div class="col my-auto">
        <center>
          <count-to :endVal="number" class="font-weight-bold" :style="{fontSize: '28px'}" />
        </center>
      </div>
    </div>
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
