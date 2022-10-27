<template>
  <div
    v-for="content in relatedContents"
    :key="content.id"
    class="related-list row"
  >
    <RelatedVideoList :content="content" />
  </div>
</template>

<script>
import RelatedVideoList from "@/components/RelatedVideoList.vue";
export default {
  name: "RelatedVideo",
  components: {
    RelatedVideoList,
  },
  props: {
    relatedContents: Array,
  },
};
</script>

<style scoped>
.related-list {
  height: 100px;
  margin-bottom: 10px;
}
</style>
