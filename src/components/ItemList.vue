<template>
  <div class="main-area p-3">
    <div class="row">
      <div v-for="item in items" class="col-md-3">
        <div class="card">
          <div class="card-body">
            <p>Card body</p>
          </div>
          <div class="card-footer">
            <p>card footer</p>
          </div>
        </div>
      </div>
      <!-- <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <p>Card body</p>
          </div>
          <div class="card-footer">
            <p>card footer</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <p>Card body</p>
          </div>
          <div class="card-footer">
            <p>card footer</p>
          </div>
        </div>
      </div>
      <div class="col-md-3">
        <div class="card">
          <div class="card-body">
            <p>Card body</p>
          </div>
          <div class="card-footer">
            <p>card footer</p>
          </div>
        </div>
      </div> -->
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
