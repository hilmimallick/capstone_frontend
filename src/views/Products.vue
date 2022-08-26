<template>
  <input
    class="SB"
    type="text"
    v-model="search"
    placeholder="Search by category"
  />

  <button @click="ChangeFood1">Food</button>
  <button @click="ChangeFood2">Food1</button>
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
  },
};
</script>
<style></style>
