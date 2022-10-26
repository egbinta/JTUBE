<template>
  <div>
    <div class="home-page">
      <SideBar />
      <div class="main-area p-3">
        <div class="row">
          <div v-for="item in items" :key="item.id" class="col-md-3">
            <SearchPageList :item="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import SearchPageList from "@/components/SearchPageList.vue";
export default {
  name: "SearchResult",
  computed: {
    SideBar,
    SearchPageList,
  },
  props: {
    items: Array,
  },
};
</script>
