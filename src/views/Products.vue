<template>
  <div class="row">
    <div class="row">
      <div class="col-md-6" id="test">
        <div id="border-one">
          <div id="border-two">
            <h1>Hello</h1>
          </div>
        </div>
        <!-- <div class="card-cam" @click="ChangeFood4">
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
        <button @click="ChangeFood3">drawing</button> -->
      </div>

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

#border-one {
  height: 600px;
  width: 500px;
  border: 2px solid black;
  margin-left: 20px;
}

#border-two {
  height: 600px;
  width: 500px;
  border: 2px solid black;
  margin-top: 20px;
  margin-left: 20px;
  display: flex;
  justify-content: center;
  background: white;
}
</style>
