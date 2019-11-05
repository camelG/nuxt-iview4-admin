<template>
  <div>
    <h1>iView4 粋だね</h1>
    <Slider v-model="value" range />
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [20, 50]
    };
  }
};
</script>
