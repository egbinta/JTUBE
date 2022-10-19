<template>
  <div>
    <Header @run-search="runSearch" />
    <div class="home-page">
      <SideBar />
      <ItemList :items="itmes" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import SideBar from "@/components/SideBar.vue";
import ItemList from "@/components/ItemList.vue";
import axios from "axios";
export default {
  name: "HomeView",
  components: {
    Header,
    SideBar,
    ItemList,
  },
  data() {
    return {
      items: [],
    };
  },
  methods: {
    async runSearch(search) {
      try {
        const res = await axios.get(
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
        console.log(res.data.contents);
        return res.data.contents;
      } catch (error) {
        console.log(error);
      }
    },
  },

  async created() {
    this.items = await this.runSearch();
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
}
</style>
