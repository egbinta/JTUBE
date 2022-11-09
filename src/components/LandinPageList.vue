<template>
  <div class="card mb-3" style="width: 18rem">
    <router-link
      :to="{
        name: 'movie',
        params: { videoId: item.video.videoId },
      }"
    >
      <img
        class="card-img-top"
        :src="item.video.thumbnails[0].url"
        height="150"
        alt=""
      />
    </router-link>
    <div class="card-body d-flex">
      <div class="avatar">
        <img :src="item.video.author.avatar[0].url" alt="" />
      </div>
      <div class="pl-3">
        <div class="card-title">{{ item.video.author.title }}</div>
        <div class="card-text" v-if="item.video.title.length < 60">
          {{ item.video.title }}
        </div>
        <div class="card-text" v-else>
          {{ item.video.title.substring(0, 60) + "..." }}
        </div>
        <div class="views-publish">
          <span>{{ item.video.stats.views }} views</span>
          <span class="ml-3">{{ item.video.publishedTimeText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LandingPageList",
  props: {
    item: Object,
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
  background: rgb(250 250 250);
}
.card {
  width: 18.5rem;
  border: none;
  height: 270px;
}
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
</style>
