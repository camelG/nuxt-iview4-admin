<template>
  <div class="mx-1">
    <div>
      <PanelGroup />
    </div>
    <div :style="{display: 'flex'}" class="pr-2">
      <pie-chart id="id0" width="400px" height="400px" class="mx-1" />
      <line-chart id="id1" width="100%" height="400px" class="mx-1" :style="{display: 'relative'}" />
    </div>
    <div :style="{display: 'flex'}">
      <mix-chart id="id3" width="100%" height="500px" class="mx-1" />
    </div>
    <div>
      <keyboard-chart id="id2" height="500px" width="100%" />
    </div>
    <sunburst-chart id="id4" width="500px" height="500px" />
  </div>
</template>

<script>
import PanelGroup from "@/components/PanelGroup";
import PieChart from "@/components/charts/Pie";
import LineChart from "@/components/charts/Line";
import KeyboardChart from "@/components/charts/Keyboard";
import MixChart from "@/components/charts/MixChart";
import SunburstChart from "@/components/charts/Sunburst";

export default {
  components: {
    PanelGroup,
    PieChart,
    LineChart,
    KeyboardChart,
    MixChart,
    SunburstChart
  }
};
</script>
