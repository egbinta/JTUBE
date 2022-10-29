<template>
  <div class="mt-3 comment-count">
    {{ comment.length }} <span>Comments</span>
  </div>
  <hr />
  <div v-for="comment in comment" :key="comment.id" class="comment">
    <ViewCommentDetials :comment="comment" />
  </div>
</template>

<script>
import ViewCommentDetials from "@/components/ViewCommentDetails.vue";
export default {
  name: "ViewComments",
  components: {
    ViewCommentDetials,
  },
  props: {
    comment: Array,
  },
};
</script>

<style scoped>
.comment-count {
  font-size: 20px;
}
</style>
