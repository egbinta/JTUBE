<template>
  <div>
    <div class="home-page">
      <SideBar
        @search-value="searchValue"
        @search-sport="searchSport"
        @search-news="searchNews"
      />
      <!-- <ItemList :items="items" /> -->
      <LandingPage :itemsData="itemsData" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "@/components/SideBar.vue";
import ItemList from "@/components/ItemList.vue";
import LandingPage from "@/components/LandingPage.vue";

import axios from "axios";
export default {
  name: "HomeView",
  components: {
    SideBar,
    ItemList,
    LandingPage,
  },
  data() {
    return {
      itemsData: [],
      searchItem: "videos",
      getData: [],
    };
  },
  inject: ["myspinner", "searchData"],

  methods: {
    async loadPage() {
      this.myspinner.val = true;
      await axios
        .get("https://youtube138.p.rapidapi.com/search/", {
          params: { q: this.searchItem },
          headers: {
            "X-RapidAPI-Key":
              "0aea2bfe0bmshc9a762c6bdc9530p1e63edjsn7f1aaeb420ec",
            "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
          },
        })
        .then((response) => {
          const result = response.data.contents;
          this.itemsData = result;
          console.log(result);
        })
        .catch((error) => {
          this.myspinner.val = false;
          console.log(error.message);
        });

      this.myspinner.val = false;
    },

    async searchValue(value) {
      this.myspinner.val = true;
      await axios
        .get("https://youtube138.p.rapidapi.com/search/", {
          params: { q: value },
          headers: {
            "X-RapidAPI-Key":
              "0aea2bfe0bmshc9a762c6bdc9530p1e63edjsn7f1aaeb420ec",
            "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
          },
        })
        .then((response) => {
          const result = response.data.contents;
          this.itemsData = result;
          console.log(result);
        })
        .catch((error) => {
          this.myspinner.val = false;
          console.log(error);
        });
      this.myspinner.val = false;
    },

    async searchSport(value) {
      this.myspinner.val = true;
      await axios
        .get("https://youtube138.p.rapidapi.com/search/", {
          params: { q: value },
          headers: {
            "X-RapidAPI-Key":
              "0aea2bfe0bmshc9a762c6bdc9530p1e63edjsn7f1aaeb420ec",
            "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
          },
        })
        .then((response) => {
          const result = response.data.contents;
          this.itemsData = result;
          console.log(result);
        })
        .catch((error) => {
          this.myspinner.val = false;
          console.log(error);
        });
      this.myspinner.val = false;
    },

    async searchNews(value) {
      this.myspinner.val = true;
      await axios
        .get("https://youtube138.p.rapidapi.com/search/", {
          params: { q: value },
          headers: {
            "X-RapidAPI-Key":
              "0aea2bfe0bmshc9a762c6bdc9530p1e63edjsn7f1aaeb420ec",
            "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
          },
        })
        .then((response) => {
          const result = response.data.contents;
          this.itemsData = result;
          console.log(result);
        })
        .catch((error) => {
          this.myspinner.val = false;
          console.log(error);
        });
      this.myspinner.val = false;
    },
  },
  async created() {
    await this.loadPage();
  },
};
</script>
<style scoped>
.home-page {
  display: flex;
}
.main-area {
  background: rgb(250 250 250);
  width: 84vw;
  max-height: 687px;
  overflow-y: scroll;
}
</style>
