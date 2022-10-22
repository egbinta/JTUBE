<template>
  <div class="main-area p-3">
    <div class="row">
      <div v-for="item in itemsData" :key="item.id" class="col-md-3">
        <div class="card mb-3" style="width: 18rem">
          <img
            class="card-img-top"
            :src="item.video.thumbnails[0].url"
            height="150"
            alt="Card image cap"
          />
          <div class="card-body d-flex">
            <div class="avatar">
              <img :src="item.video.author.avatar[0].url" alt="" />
            </div>
            <div class="pl-3">
              <span class="card-title">{{ item.video.author.title }}</span>
              <span class="card-text">
                {{ item.video.title }}
              </span>
              <div class="">
                <span>{{ item.video.stats.views }} views</span>
                <span class="ml-3">{{ item.video.publishedTimeText }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPage",
  props: {
    itemsData: Array,
  },
};
</script>
<style scoped>
.avatar img {
  height: 40px;
  width: 40px;
  border-radius: 50%;
}
.card-body {
  padding: 8px 0px;
  background-color: rgb(211, 208, 235);
}
.card {
  width: 18.5rem;
  border: none;
  height: 300px;
}
.card-title {
  font-size: 18px;
  font-weight: 900;
}
</style>
