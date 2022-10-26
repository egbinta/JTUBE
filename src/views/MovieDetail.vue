<template>
  <div class="about">
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nam
          ullam voluptatum doloremque, quo voluptatem veniam aliquid et est
          corporis dicta saepe id vero, dolorem expedita unde eius cupiditate!
          Eos quidem nostrum fugiat itaque tempora laborum dolore officiis
          accusamus deleniti.
          <router-link to="/">Back</router-link>
        </div>
        <div class="col-md-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
          doloribus!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieDetail",
  data() {
    return {
      test: "true",
    };
  },
};
</script>
<style scoped>
.container {
  max-width: 1300px;
}
</style>
