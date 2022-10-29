<template>
  <div class="row mb-3">
    <div class="col-sm- avatar">
      <img :src="comment.author.avatar[0].url" alt="" />
    </div>
    <div class="col-sm-11">
      <span class="title">{{ comment.author.title }}</span>
      <span class="publish ml-2">{{ comment.publishedTimeText }}</span>
      <div class="content">{{ comment.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewCommentDetials",
  props: {
    comment: Object,
  },
};
</script>

<style scoped>
.avatar img {
  border-radius: 50%;
}
.title {
  font-weight: 600;
  font-size: 14px;
}
.publish {
  font-size: 12px;
  color: #aaa8a8;
}
</style>
