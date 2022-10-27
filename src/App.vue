<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/moviedetail">About</router-link>
  </nav> -->
  <Header @run-search="runSearch" />
  <router-view :items="items"></router-view>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      items: [],
    };
  },
  async runSearch(search) {
    const response = await axios.get(
      "https://youtube138.p.rapidapi.com/search/",
      {
        params: { q: search },
        headers: {
          "X-RapidAPI-Key":
            "0aea2bfe0bmshc9a762c6bdc9530p1e63edjsn7f1aaeb420ec",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }
    );
    const dataContents = response.data.contents;
    this.items = dataContents;
    console.log(this.items);
  },
};
</script>

<style>
* {
  font-family: "Times New Roman", Times, serif;
  font-size: 16px;
}
</style>
