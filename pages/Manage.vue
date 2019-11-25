<template>
  <Row>
    <Col span="21">
      <Button type="primary" size="small" @click="exportData(2)">
        <Icon type="ios-download-outline" style="margin-right: 2px;" />CSV
      </Button>
      <Table ref="table" :columns="columns4" :data="items" show-summary />
    </Col>
    <Col span="3" :style="{paddingLeft: '7px'}">
      <Anchor show-ink>
        <AnchorLink
          v-for="(item,index) in items"
          :key="index"
          :href="'#date-' + item.date + item.name"
          :title="item.date && item.date.slice(-5)+ ' ' + item.name"
        />
      </Anchor>
    </Col>
  </Row>
</template>
<script>
import { uniqBy, sortBy, reverse } from "lodash";
export default {
  data() {
    return {
      columns4: [
        {
          type: "selection",
          width: 52,
          align: "center"
        },
        {
          title: "Date",
          key: "date",
          render: (h, params) => {
            return h("div", [
              h(
                "div",
                {
                  attrs: {
                    id: "date-" + params.row.date + params.row.name
                  }
                },
                params.row.date
              )
            ]);
          }
        },
        {
          title: "Name",
          key: "name",
          tooltip: true
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      items: sortBy(
        [
          {
            date: "2019-11-01",
            name: "John Brown",
            age: 18,
            address: "New York No. 1 Lake Park"
          },
          {
            date: "2019-11-01",
            name: "Jim Green",
            age: 24,
            address: "London No. 1 Lake Park"
          },
          {
            date: "2019-11-01",
            name: "Joe Black",
            age: 30,
            address: "Sydney No. 1 Lake Park"
          },
          {
            date: "2019-11-01",
            name: "Jon Snow",
            age: 26,
            address: "Ottawa No. 2 Lake Park"
          },

          {
            date: "2019-11-02",
            name: "John Brown",
            age: 18,
            address: "New York No. 1 Lake Park"
          },
          {
            date: "2019-11-02",
            name: "Jim Green",
            age: 24,
            address: "London No. 1 Lake Park"
          },
          {
            date: "2019-11-03",
            name: "Joe Black",
            age: 30,
            address: "Sydney No. 1 Lake Park"
          },
          {
            date: "2019-11-04",
            name: "Jon Snow",
            age: 26,
            address: "Ottawa No. 2 Lake Park"
          },

          {
            date: "2019-11-11",
            name: "John Brown",
            age: 18,
            address: "New York No. 1 Lake Park"
          },
          {
            date: "2019-11-13",
            name: "Jim Green",
            age: 24,
            address: "London No. 1 Lake Park"
          },
          {
            date: "2019-11-18",
            name: "Joe Black",
            age: 30,
            address: "Sydney No. 1 Lake Park"
          },
          {
            date: "2019-11-20",
            name: "Jon Snow",
            age: 26,
            address: "Ottawa No. 2 Lake Park"
          },

          {
            date: "2019-11-21",
            name: "John Brown",
            age: 18,
            address: "New York No. 1 Lake Park"
          },
          {
            date: "2019-11-21",
            name: "Jim Green",
            age: 24,
            address: "London No. 1 Lake Park"
          },
          {
            date: "2019-11-21",
            name: "Joe Black",
            age: 30,
            address: "Sydney No. 1 Lake Park"
          },
          {
            date: "2019-11-22",
            name: "Jon Snow",
            age: 26,
            address: "Ottawa No. 2 Lake Park"
          },

          {
            date: "2019-11-22",
            name: "John Brown",
            age: 18,
            address: "New York No. 1 Lake Park"
          },
          {
            date: "2019-11-22",
            name: "Jim Green",
            age: 24,
            address: "London No. 1 Lake Park"
          },
          {
            date: "2019-11-23",
            name: "Joe Black",
            age: 30,
            address: "Sydney No. 1 Lake Park"
          },
          {
            date: "2019-11-23",
            name: "Jon Snow",
            age: 26,
            address: "Ottawa No. 2 Lake Park"
          },

          {
            date: "2019-11-24",
            name: "John Brown",
            age: 18,
            address: "New York No. 1 Lake Park"
          },
          {
            date: "2019-11-25",
            name: "Jim Green",
            age: 24,
            address: "London No. 1 Lake Park"
          },
          {
            date: "2019-11-25",
            name: "Joe Black",
            age: 30,
            address: "Sydney No. 1 Lake Park"
          },
          {
            date: "2019-11-26",
            name: "Jon Snow",
            age: 26,
            address: "Ottawa No. 2 Lake Park"
          },
        ],
        "date"
      ).reverse()
    };
  },
  computed: {
    uniqDate() {
      return sortBy(uniqBy(this.items, "date"), "date").reverse();
    },
    uniqUserName() {
      return uniqBy(this.items, "name");
    }
  },
  methods: {
    exportData() {
      this.$refs.table.exportCsv({
        filename: "Sorting and filtering data",
        original: false
      });
    },
    uniqData(arr, key) {
      return uniqBy(arr, key);
    }
  }
};
</script>
