<template>
  <Header class="head" @run-search="runSearch" />
  <Spinner v-if="loading.val" />
  <router-view></router-view>
</template>

<script>
import Header from "@/components/Header.vue";
import SearchResult from "@/views/SearchResult.vue";
import Spinner from "@/components/Spinner.vue";
import axios from "axios";
import { provide } from "@vue/runtime-core";
export default {
  name: "App",
  components: {
    Header,
    SearchResult,
    Spinner,
  },
  data() {
    return {
      item: {
        data: "",
      },
      loading: {
        val: false,
      },
    };
  },
  provide() {
    return {
      myspinner: this.loading,
      searchItem: this.item,
    };
  },
  methods: {
    runSearch(search) {
      this.item.data = search;
      this.$router.push({ name: "search2" });
    },
  },
};
</script>

<style>
* {
  font-family: "Raleway", sans-serif;
  font-size: 16px;
}
.head {
  padding: 9px;
  z-index: 99;
  background: rgb(47, 47, 83);
}
</style>
