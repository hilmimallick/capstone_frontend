<template>
  <input
    class="SB"
    type="text"
    v-model="search"
    placeholder="Search by category"
  />
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
};
</script>
<style></style>
