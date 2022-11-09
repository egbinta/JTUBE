<template>
  <div class="navbar">
    <div class="navItem">
      <ul @click="onclick" class="list">
        <li class="list-item">
          <i class="fa fa-music mr-4" aria-hidden="true"></i>
          <span class="music">{{ Music }}</span>
        </li>
      </ul>

      <ul @click="onclick1" class="list">
        <li class="list-item">
          <i class="fa fa-trophy mr-4" aria-hidden="true"></i>
          <span class="sport">{{ Sport }}</span>
        </li>
      </ul>

      <ul @click="onclick2" class="list">
        <li class="list-item">
          <i class="fa fa-newspaper-o mr-4" aria-hidden="true"></i>
          <span class="news">{{ News }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      Music: "Music",
      Sport: "Sport",
      News: "News",
    };
  },
  methods: {
    onclick() {
      var value = this.$el.querySelector(".music").innerHTML;
      console.log(value);
      this.$emit("search-value", value);
    },

    onclick1() {
      var value = this.$el.querySelector(".sport").innerHTML;
      console.log(value);
      this.$emit("search-sport", value);
    },

    onclick2() {
      var value = this.$el.querySelector(".news").innerHTML;
      console.log(value);
      this.$emit("search-news", value);
    },
  },
};
</script>

<style scoped>
.navbar {
  width: 250px;
  height: 92.2vh;
  background: rgb(250 250 250);
  border-right: 1px solid #ddd;
}
.navItem {
  margin-top: -520px !important;
  width: 100% !important;
}
.navItem .list {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  margin: 0px 0px 5px 0px;
  cursor: pointer;
  border-radius: 8px;
}
.navItem .list:hover {
  background-color: aliceblue;
}
.navItem .list .list-item {
  display: flex;
  align-items: center;
  margin-left: -40px;
  padding: 7px 15px;
  font-family: sans-serif;
  font-size: 18px;
  list-style: none;
  margin-bottom: 0px;
}
.navItem .list .list-item span {
  font-size: 19px;
}
</style>
