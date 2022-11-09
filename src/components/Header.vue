<template>
  <div class="head">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-2 logo">
          <router-link to="/">
            <span><i class="fa fa-play" aria-hidden="true"></i></span>
            <span class="logo">Jtube</span>
          </router-link>
        </div>
        <div class="col-md-8 search">
          <form @submit.prevent="onsubmit" class="d-flex">
            <input
              type="text"
              class="form-control"
              v-model="searchItem"
              placeholder="Search..."
            />
            <button><i class="fa fa-search" aria-hidden="true"></i></button>
          </form>
        </div>
        <div class="col-md-2 user">
          <i class="fa fa-user-circle-o" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      searchItem: "",
    };
  },
  methods: {
    onsubmit() {
      if (this.searchItem == "") {
        alert("Please supply search item");
        return;
      }
      const search = this.searchItem;

      this.$emit("run-search", search);

      this.searchItem = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  padding: 9px;
  z-index: 999;
  border-bottom: 1px solid #ddd;
  background: rgb(250 250 250);
}
.logo {
  text-decoration: none;
  color: rgb(28, 26, 26);
  font-size: 20px;
  font-weight: 700;
}
.logo:hover {
  text-decoration: none !important;
}
.logo .fa-play {
  font-size: 22px;
  font-weight: 700;
  color: rgb(219, 19, 19);
}
.search form {
  justify-content: center;
}
.search input {
  width: 70%;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}
.search .fa-search {
  padding: 0px 20px;
}
.search button {
  border: 1px solid #ced4da;
  background: #fff;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}
.user {
  display: flex;
  justify-content: flex-end;
  color: #000;
  font-size: 22px;
  font-weight: 700;
}
</style>
