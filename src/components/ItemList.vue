<template>
  <div class="main-area p-3">
    <div class="row">
      <div v-for="item in items" :key="item.id" class="col-md-3">
        <div class="card mb-3">
          <div class="card-body">
            {{ type.video.descriptionSnippet }}
          </div>
          <div class="footer">
            <p>card footer</p>
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
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  /* border: 1px solid rgba(0,0,0,.125); */
  /* border-radius: .25rem; */
}
</style>
