<template>
  <div class="main-area p-3">
    <div class="row">
      <div v-for="item in items" :key="item.id" class="col-md-3">
        <div class="card mb-3" style="width: 18rem">
          <img class="card-img-top" src="" alt="Card image cap" />
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ItemList",
  props: {
    items: Array,
  },
};
</script>
<style scoped>
.card-body {
  height: 140px;
}
.footer {
  background: rgb(178, 205, 229);
  height: 100px;
}
</style>
