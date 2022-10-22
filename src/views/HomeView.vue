<template>
  <div>
    <Header @run-search="runSearch" />
    <div class="home-page">
      <SideBar />
      <!-- <ItemList :items="items" /> -->
      <LandingPage :itemsData="itemsData" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import SideBar from "@/components/SideBar.vue";
import ItemList from "@/components/ItemList.vue";
import LandingPage from "@/components/LandingPage.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    Header,
    SideBar,
    ItemList,
    LandingPage,
  },
  data() {
    return {
      items: [],
      itemsData: [],
      searchItem: "movies",
    };
  },
  methods: {
    async runSearch(search) {
      const response = await axios.get(
        "https://youtube138.p.rapidapi.com/search/",
        {
          params: { q: search },
          headers: {
            "X-RapidAPI-Key":
              "b89922295dmshe7d2453f3a26507p131c79jsnb5230be8042f",
            "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
          },
        }
      );
      const dataContents = response.data.contents;
      this.items = dataContents;
      console.log(this.items);
    },

    async loadPage() {
      const response = await axios.get(
        "https://youtube138.p.rapidapi.com/search/",
        {
          params: { q: this.searchItem },
          headers: {
            "X-RapidAPI-Key":
              "b89922295dmshe7d2453f3a26507p131c79jsnb5230be8042f",
            "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
          },
        }
      );
      const result = response.data.contents;
      this.itemsData = result;
      console.log(result);

      // .then((response) => {
      //   return response.data.contents;
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
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
  background-color: rgb(211, 208, 235);
  width: 84vw;
  max-height: 687px;
  overflow-y: scroll;
}
</style>
