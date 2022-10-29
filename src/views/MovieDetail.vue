<template>
  <div class="about">
    <div class="container mt-4 mb-5">
      <div class="row">
        <div class="col-md-8">
          <YouTube :src="videoURL" ref="youtube" width="850" height="500" />
          <h4 class="mt-3">{{ details.title }}</h4>
          <div class="row d-flex align-items-center">
            <div class="col-md-5">
              <div class="subscribers d-flex">
                <img :src="details.author.avatar[0].url" alt="" />
                <div class="subscribers-detail">
                  <span class="title">{{ details.author.title }}</span>
                  <span class="subscribersText">{{
                    details.author.stats.subscribersText
                  }}</span>
                </div>
              </div>
            </div>
            <div class="col-md-7 mt-2 badges">
              <span class="">
                <span class="likes">
                  <i class="fa fa-thumbs-o-up" aria-hidden="true"></i>
                  <span class="font-weight pl-2">
                    {{ details.stats.likes }}
                  </span>
                </span>
                <span class="dislikes">
                  <i class="fa fa-thumbs-o-down" aria-hidden="true"></i>
                </span>
              </span>
              <span class="likes-share ml-3">
                <i class="fa fa-share" aria-hidden="true"></i>
                <span class="font-weight pl-2">Share</span>
              </span>
            </div>
          </div>
          <div class="stats">
            <span class="statView">{{ details.stats.views }} Views</span>
            <span class="ml-2 publishDate"
              >Published: {{ details.publishedDate }}</span
            >
            <div v-if="details.description.length < 200">
              {{ details.description }}
            </div>
            <div v-else>
              {{ details.description.substring(0, 200) + "..." }}
              <span v-show="showMoretext" class="extendDetails">
                {{ details.description.slice(200, details.description.length) }}
              </span>
              <strong v-show="showmore" @click="show" class="ml-1 cursor">
                More
              </strong>
              <strong v-show="showless" @click="hide" class="cursor ml-1">
                Show Less
              </strong>
            </div>
          </div>
          <!-- comments section -->
          <ViewComments :comment="comment" />
        </div>
        <div class="col-md-4">
          <RelatedVideo :relatedContents="relatedContents" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import YouTube from "vue3-youtube";
import RelatedVideo from "@/components/RelatedVideo.vue";
import ViewComments from "@/components/ViewComments.vue";
export default {
  name: "MovieDetail",
  components: {
    YouTube,
    RelatedVideo,
    ViewComments,
  },
  data() {
    return {
      videoURL: "",
      videoID: "",
      details: "",
      relatedContents: [],
      comment: [],
      showMoretext: false,
      showmore: true,
      showless: false,
    };
  },
  methods: {
    show() {
      this.showMoretext = !this.showMoretext;
      this.showmore = false;
      this.showless = true;
    },
    hide() {
      this.showMoretext = !this.showMoretext;
      this.showmore = true;
      this.showless = false;
    },
    async videoDetail() {
      const response = await axios.get(
        "https://youtube138.p.rapidapi.com/video/details/",
        {
          params: { id: this.videoID },
          headers: {
            "X-RapidAPI-Key":
              "0aea2bfe0bmshc9a762c6bdc9530p1e63edjsn7f1aaeb420ec",
            "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
          },
        }
      );
      const result = response.data;
      this.details = result;
      console.log(result);
    },
    async relatedcontent() {
      const response = await axios
        .get("https://youtube138.p.rapidapi.com/video/related-contents/", {
          params: { id: this.videoID },
          headers: {
            "X-RapidAPI-Key":
              "0aea2bfe0bmshc9a762c6bdc9530p1e63edjsn7f1aaeb420ec",
            "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
          },
        })
        .then((response) => {
          this.relatedContents = response.data.contents;
          console.log("test ", response.data.contents);
        })
        .catch((error) => {
          console, log(error);
        });
    },
    async comments() {
      await axios
        .get("https://youtube138.p.rapidapi.com/video/comments/", {
          params: { id: this.videoID },
          headers: {
            "X-RapidAPI-Key":
              "0aea2bfe0bmshc9a762c6bdc9530p1e63edjsn7f1aaeb420ec",
            "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
          },
        })
        .then((response) => {
          this.comment = response.data.comments;
          console.log("test2 ", response.data.comments);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  watch: {
    $route(to, from) {
      if (to.params.videoId) {
        this.videoURL = `https://www.youtube.com/watch?v=${to.params.videoId}`;
        this.videoID = to.params.videoId;
        this.videoDetail();
        this.relatedcontent();
        this.comments();
      }
    },
  },
  created() {
    this.videoURL = `https://www.youtube.com/watch?v=${this.$route.params.videoId}`;
    this.videoID = this.$route.params.videoId;
    this.videoDetail();
    this.relatedcontent();
    this.comments();
  },
};
</script>
<style scoped>
.container {
  max-width: 1300px;
}
.likes {
  background-color: #ebf3f9;
  padding: 5px 18px;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  cursor: pointer;
}
.likes-share {
  background-color: #ebf3f9;
  padding: 5px 18px;
  border-radius: 25px;
  cursor: pointer;
}
.dislikes {
  background-color: #ebf3f9;
  padding: 5px 18px;
  margin-left: 2px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  cursor: pointer;
}
.likes-share:hover {
  background: #d7e5ef;
}
.likes:hover {
  background: #d7e5ef;
}
.dislikes:hover {
  background: #d7e5ef;
}
.stats {
  background: #ebf3f9;
  border-radius: 10px;
  padding: 9px;
  margin-top: 10px;
}
.statView {
  color: #040101;
  font-weight: 600;
  font-size: 14px;
}
.publishDate {
  color: #040101;
  font-weight: 600;
  font-size: 14px;
}
.subscribers-detail {
  margin-left: 8px;
  display: flex;
  flex-direction: column;
}
.subscribers img {
  border-radius: 50%;
}
.subscribers-detail .title {
  font-weight: 600;
}
.subscribers-detail .subscribersText {
  font-size: 13px;
}
.font-weight {
  font-weight: 500;
}
.badges {
  justify-content: flex-end;
  display: flex;
  align-items: center;
}
.cursor {
  cursor: pointer;
}
</style>
