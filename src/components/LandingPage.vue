<template>
  <div class="main-area p-3">
    <div class="row">
      <div v-for="item in itemsData" :key="item.id" class="col-md-3">
        <LandingPageList :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import LandingPageList from "@/components/LandinPageList.vue";
export default {
  name: "LandingPage",
  components: {
    LandingPageList,
  },
  props: {
    itemsData: Array,
  },
};
</script>
<style scoped></style>
