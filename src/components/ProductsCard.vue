<template>
  <div class="col-md-3">
    <div class="card m-3" style="width: 18rem" id="whole-card">
      <img :src="product.image" class="img-fluid" id="product-img" />
      <div class="card-body">
        <router-link
          :to="{ name: 'oneCard', params: { id: product.product_id } }"
        >
          <div id="pro-btn">
            <button class="product-btn">View Product</button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style></style>
