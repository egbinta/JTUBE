<template>
  <div class="head">
    <div class="container-fluid">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-2 logo">
          <span><i class="fa fa-play" aria-hidden="true"></i></span>
          Jtube
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
  /* padding: 10px; */
  /* height: 50px; */
  padding: 10px;
  z-index: 99;
  background: rgb(47, 47, 83);
}
.logo {
  color: #fff;
  font-size: 20px;
  font-weight: 700;
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
  justify-content: end;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
}
</style>
