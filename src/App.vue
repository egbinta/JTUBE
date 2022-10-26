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
            "b89922295dmshe7d2453f3a26507p131c79jsnb5230be8042f",
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

<style></style>
