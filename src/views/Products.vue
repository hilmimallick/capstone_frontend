<template>
  <div class="card-cam" @click="ChangeFood4">
    <h1>hello</h1>
  </div>

  <input
    class="SB"
    type="text"
    v-model="search"
    placeholder="Search by category"
  />
  <button @click="ChangeFood1">Food</button>
  <button @click="ChangeFood2">painting</button>
  <button @click="ChangeFood3">drawing</button>

  <div class="product-body">
    <div class="row">
      <ProductsCard
        v-for="product in filteredproducts"
        :key="product.id"
        :product="product"
      ></ProductsCard>
    </div>
  </div>
</template>
<script>
import ProductsCard from "../components/ProductsCard.vue";
export default {
  components: { ProductsCard },
  data() {
    return {
      search: "",
      products: [],
    };
  },

  computed: {
    filteredproducts() {
      return this.$store.state.products?.filter((product) => {
        return product.category
          ?.toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
    products() {
      return this.$store.state.products;
    },
  },
  mounted() {
    this.$store.dispatch("getproducts");
  },
  methods: {
    ChangeFood3() {
      this.search = "drawing";
    },
    ChangeFood2() {
      this.search = "painting";
    },
    ChangeFood4() {
      this.search = "3d painting";
    },
  },
};
</script>
<style>
.card-cam {
  height: 300px;
  width: 300px;
  border: 2px solid black;
  background-image: url("https://picsum.photos/200/300?grayscale");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}
</style>
