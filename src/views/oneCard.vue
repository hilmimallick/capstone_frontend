<template>
  <div class="onecard">
    <div v-if="product">
      <div
        v-for="item in product"
        :key="item.product_id"
        class="d-flex justify-content-center"
      >
        <div class="col-md-6" id="one-img">
          <img v-bind:src="item.image" class="img-fluid" id="one-pic" />
        </div>

        <div id="one-text">
          <div class="col-md-6">
            <p class="card-text">{{ item.name }}</p>
            <p class="card-text">{{ item.category }}</p>
            <p class="card-text">R{{ item.price }}</p>
            <p class="card-text">{{ item.description }}</p>
            <p class="card-text">{{ item.artist }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      product: null,
    };
  },
  mounted() {
    fetch("http://localhost:7373/products/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => {
        this.product = data;
        // console.log(product);
      });
  },
};
</script>
<style></style>
