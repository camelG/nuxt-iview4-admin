<template>
  <div>
    <Card style="width:120px" class="text-danger">
      <count-to :endVal="589121" />
    </Card>
  </div>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: {
    countTo
  }
};
</script>

<style lang="scss" scoped>
</style>
