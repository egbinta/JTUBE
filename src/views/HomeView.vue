<template>
  <div>
    <div class="home-page">
      <SideBar />
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
    };
  },
  methods: {
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
    },
  },
  // computed: {
  //   async loadPage() {
  //     const response = await axios.get(
  //       "https://youtube138.p.rapidapi.com/search/",
  //       {
  //         params: { q: this.searchItem },
  //         headers: {
  //           "X-RapidAPI-Key":
  //             "b89922295dmshe7d2453f3a26507p131c79jsnb5230be8042f",
  //           "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
  //         },
  //       }
  //     );
  //     const result = response.data.contents;
  //     this.itemsData = result;
  //     console.log(result);
  //   },
  // },
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
