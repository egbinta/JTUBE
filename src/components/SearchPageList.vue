<template>
  <div class="search-container">
    <div class="mb-3 mt-3 item-container row">
      <div class="content-thumbnail col-md-4">
        <router-link to="/moviedetail">
          <img
            class="card-img-top"
            :src="item.video.thumbnails[0].url"
            height="210"
            alt=""
          />
        </router-link>
      </div>
      <div class="content-description d-flex col-md-8">
        <div class="pl-3">
          <div class="card-title mb-2">{{ item.video.descriptionSnippet }}</div>
          <div class="views-publish mb-2">
            <span>{{ item.video.stats.views }} views</span>
            <span class="ml-3">{{ item.video.publishedTimeText }}</span>
          </div>
          <div class="d-flex align-items-center">
            <div class="avatar">
              <img :src="item.video.author.avatar[0].url" alt="" />
            </div>
            <div class="card-text pl-2" v-if="item.video.title.length < 60">
              {{ item.video.title }}
            </div>
            <div class="card-text pl-2" v-else>
              {{ item.video.title.substring(0, 60) + "..." }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SearchPageList",
  props: {
    item: Object,
  },
};
</script>

<style scoped>
.avatar img {
  height: 30px;
  width: 30px;
  border-radius: 50%;
}
/* .card-body {
  padding: 8px 0px;
  background-color: rgb(211, 208, 235);
} */
/* .card {
  width: 18.5rem;
  border: none;
  height: 270px;
} */
.card-title {
  font-size: 18px;
  font-weight: 500;
  margin-bottom: -3px;
}
.card-text {
  font-size: 14px;
}
.views-publish {
  font-size: 13px;
  font-weight: 500;
  color: #27829f;
}
/* ======================== */
.search-container {
  margin-left: 150px;
  margin-right: 150px;
}
.item-container {
  display: flex;
  width: 100%;
}
.item-container .content-thumbnail {
  width: 33%;
}
.card-img-top {
  border-radius: 15px;
}
.item-container .content-description {
  width: 67;
  margin-left: -25px;
}
</style>
