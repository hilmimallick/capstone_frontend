<template>
  <div id="products-section">
    <div id="border-one">
      <div id="border-two">
        <div>
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
        </div>
      </div>
    </div>

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
  height: 50px;
  width: 50px;
  border: 2px solid black;
  background-image: url("https://picsum.photos/200/300?grayscale");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}

#border-one {
  height: 15rem;
  width: 90%;
  border: 2px solid black;
  margin-left: 20px;
}

#border-two {
  height: 15rem;
  width: 100%;
  border: 2px solid black;
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  background: transparent;
}

#products-section {
  padding-top: 3rem;
}
</style>
