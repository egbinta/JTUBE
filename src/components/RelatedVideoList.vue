<template>
  <div v-if="content.type == 'video'" class="col-sm-12 d-flex">
    <div class="avatar">
      <img :src="content.video.thumbnails[0].url" alt="" />
    </div>
    <div class="main-text">
      <div class="text ml-2">{{ content.video.author.title }}</div>
      <div v-if="content.video.title.length < 50" class="text-des ml-2">
        {{ content.video.title }}
      </div>
      <div v-else class="ml-2">
        {{ content.video.title.substring(0, 50) + ".." }}
      </div>
      <div v-if="content.video.stats.viewers" class="stats ml-2">
        {{ content.video.stats.viewers }} <span>views</span> .
        <span>{{ content.video.publishedTimeText }}</span>
      </div>
      <div v-else class="ml-2 stats">
        {{ content.video.stats.views }} <span>views</span> .
        <span>{{ content.video.publishedTimeText }}</span>
      </div>
    </div>
  </div>
  <div v-else class="col-sm-12 d-flex">
    <div class="avatar">
      <img :src="content.playlist.thumbnails[0].url" alt="" />
    </div>
    <div class="main-text">
      <div class="text ml-2">{{ content.playlist.title }}</div>
      <div class="ml-2">{{ content.playlist.author.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RelatedVideoList",
  props: {
    content: Object,
  },
};
</script>
<style scoped>
.avatar {
  width: 45%;
  border-radius: 10px;
}
.avatar img {
  border-radius: 10px;
}
.text {
  font-weight: 600;
}
.text-des {
  font-size: 12px;
}
.stats {
  font-size: 11px;
  color: #aca7a7;
}
</style>
