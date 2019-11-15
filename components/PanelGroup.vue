<template>
  <Row type="flex" justify="center" :gutter="4">
    <Col span="4">
      <count-card title="Members" bg-color="#007bff" :number="1990" />
    </Col>
    <Col span="4">
      <count-card title="Sales" bg-color="#28a745" :number="990" />
    </Col>
    <Col span="4">
      <count-card title="Members" bg-color="#17a2b8" :number="190" />
    </Col>
    <Col span="4">
      <count-card title="Members" bg-color="#ffc107" :number="1123" />
    </Col>
    <Col span="4">
      <count-card title="Members" bg-color="#dc3545" :number="31990" />
    </Col>
    <Col span="4">
      <count-card title="Members" bg-color="tomato" :number="31990" />
    </Col>
  </Row>
</template>

<script>
import CountCard from "./CountCard";
export default {
  components: {
    CountCard
  }
};
</script>
