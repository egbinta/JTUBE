<template>
  <div v-for="item in items" :key="item.id">
    <SearchPageList :item="item" />
  </div>
</template>

<script>
import SearchPageList from "@/components/SearchPageList.vue";
import axios from "axios";
export default {
  name: "Search2",
  components: {
    SearchPageList,
  },
  data() {
    return {
      items: [],
    };
  },
  inject: ["searchItem", "myspinner"],
  methods: {
    async runSearch() {
      this.myspinner.val = true;
      await axios
        .get("https://youtube138.p.rapidapi.com/search/", {
          params: { q: this.searchItem.data },
          headers: {
            "X-RapidAPI-Key":
              "0aea2bfe0bmshc9a762c6bdc9530p1e63edjsn7f1aaeb420ec",
            "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
          },
        })
        .then((response) => {
          const dataContents = response.data.contents;
          this.items = dataContents;
          console.log(this.items.data);
        })
        .catch((error) => {
          this.myspinner.val = false;
          console.log(error.message);
        });
      this.myspinner.val = false;
    },
  },

  async created() {
    await this.runSearch();
  },
};
</script>
