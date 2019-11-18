<template>
  <div>
    <card-group :style="{marginBottom: '10px'}" />
    <panel-group />
    <keyboard-chart id="id2" height="500px" width="100%" />
    <Row>
      <Col span="6">
        <pie-chart id="id0" width="400px" height="400px" />
        <pie-chart width="400px" height="400px" />
      </Col>
      <Col>
        <Table ref="table" :columns="fields" :data="news" />
      </Col>
    </Row>
    <Row>
      <Col span="12">
        <line-chart id="id1" width="auto" height="400px" :style="{display: 'relative'}" />
      </Col>
      <Col span="12">
        <mix-chart id="id3" width="auto" height="500px" />
      </Col>
    </Row>
  </div>
</template>

<script>
import CardGroup from "@/components/CardGroup";
import PanelGroup from "@/components/PanelGroup";
import PieChart from "@/components/charts/Pie";
import LineChart from "@/components/charts/Line";
import KeyboardChart from "@/components/charts/Keyboard";
import MixChart from "@/components/charts/MixChart";
import SunburstChart from "@/components/charts/Sunburst";
import { getNews } from "@/api/news";
export default {
  components: {
    CardGroup,
    PanelGroup,
    PieChart,
    LineChart,
    KeyboardChart,
    MixChart,
    SunburstChart
  },
  data() {
    return {
      news: [],
      fields: [
        {
          key: "id",
          title: "#",
          width: 52,
          render: (h, { index }) => {
            return h("span", index + 1);
          }
        },
        {
          key: "title",
          sortable: true,
          title: "Title",
          render: (h, { row }) => {
            return h("span", [
              h("Avatar", {
                props: {
                  src: row.urlToImage,
                  size: "small"
                },
                style: {
                  marginRight: "5px"
                }
              }),
              h(
                "a",
                {
                  attrs: { href: row.url, target: "_blank", class: "mr-2" }
                },
                row.title
              )
            ]);
          }
        },
        {
          key: "source",
          title: "Source",
          width: 200,
          render: (h, { row }) => {
            return h("div", row.source.name);
          }
        },
        {
          key: "author",
          title: "Author",
          width: 150,
          render: (h, { row }) => {
            return h("div", row.author && row.author.slice(0, 15));
          }
        },
        {
          key: "publishedAt",
          sortable: true,
          title: "Created",
          width: 200
        }
      ]
    };
  },
  mounted() {
    getNews().then(data => {
      console.log(data);
      this.news = data && data.articles;
    });
  },
  methods: {
    exportCsv() {
      this.$refs.table.exportCsv({
        filename: "Sorting and filtering data",
        original: false
      });
    }
  }
};
</script>
