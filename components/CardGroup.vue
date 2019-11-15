<template>
  <Row type="flex" justify="center" :gutter="4">
    <Col span="4">
      <Card class="pb-2">
        <div slot="title" :style="{fontSize: '16px'}">Sales</div>
        <div class="font-weight-bold" :style="{fontSize: '28px'}">
          &yen;
          <count-to :end-val="2001941" />
        </div>
        <div class="float-right">去年120%</div>
      </Card>
    </Col>
    <Col span="4">
      <Card class="pb-2">
        <div slot="title" :style="{fontSize: '16px'}">Sales</div>
        <div class="font-weight-bold" :style="{fontSize: '28px'}">
          &yen;
          <count-to :end-val="2001941" />
        </div>
        <div class="float-right">去年120%</div>
      </Card>
    </Col>
    <Col span="4">
      <Card class="pb-2">
        <div slot="title" :style="{fontSize: '16px'}">Sales</div>
        <div class="font-weight-bold" :style="{fontSize: '28px'}">
          &yen;
          <count-to :end-val="2001941" />
        </div>
        <div class="float-right">去年120%</div>
      </Card>
    </Col>
    <Col span="4">
      <Card class="pb-2">
        <div slot="title" :style="{fontSize: '16px'}">Sales</div>
        <div class="font-weight-bold" :style="{fontSize: '28px'}">
          &yen;
          <count-to :end-val="2001941" />
        </div>
        <div class="float-right">去年120%</div>
      </Card>
    </Col>
    <Col span="4">
      <Card class="pb-2">
        <div slot="title" :style="{fontSize: '16px'}">Sales</div>
        <div class="font-weight-bold" :style="{fontSize: '28px'}">
          &yen;
          <count-to :end-val="2001941" />
        </div>
        <div class="float-right">去年120%</div>
      </Card>
    </Col>
    <Col span="4">
      <Card class="pb-2">
        <div slot="title" :style="{fontSize: '16px'}">Sales</div>
        <div class="font-weight-bold" :style="{fontSize: '28px'}">
          &yen;
          <count-to :end-val="2001941" />
        </div>
        <div class="float-right">去年120%</div>
      </Card>
    </Col>
  </Row>
</template>

<script>
import countTo from "vue-count-to";
export default {
  components: {
    countTo
  }
};
</script>
