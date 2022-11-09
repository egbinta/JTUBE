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
  components: {
    SideBar,
    SearchPageList,
  },
  data() {
    return {
      items: Array,
    };
  },
  inject: ["searchData"],
  computed: {
    getSearchResult() {
      this.items = this.searchData.data;
    },
  },
  created() {
    this.getSearchResult();
  },
};
</script>

<style scoped>
.home-page {
  display: flex;
}
.main-area {
  background-color: rgb(211, 208, 235);
  width: 84vw;
  max-height: 687px;
  overflow-y: scroll;
}
</style>
