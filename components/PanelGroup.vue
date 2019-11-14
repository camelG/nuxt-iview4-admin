<template>
  <div>
    <div class="d-flex mb-2">
      <count-card title="Members" bg-color="#007bff" :number="1990" class="mx-1" />
      <count-card title="Sales" bg-color="#28a745" :number="990" class="mx-1" />
      <count-card title="Members" bg-color="#17a2b8" :number="190" class="mx-1" />
      <count-card title="Members" bg-color="#ffc107" :number="1123" class="mx-1" />
      <count-card title="Members" bg-color="#dc3545" :number="31990" class="mx-1" />
      <count-card title="Members" bg-color="tomato" :number="31990" class="mx-1" />
    </div>
  </div>
</template>

<script>
import CountCard from "./CountCard";
export default {
  components: {
    CountCard
  }
};
</script>
