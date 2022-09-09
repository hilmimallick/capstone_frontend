<template>
  <div id="products-section">
    <div id="border-one">
      <div id="border-two">
        <div>
          <button class="fil-btn" @click="ChangeArt0">ALL</button>
          <button class="fil-btn" @click="ChangeArt1">Sculpture</button>
          <button class="fil-btn" @click="ChangeArt2">Painting</button>
          <button class="fil-btn" @click="ChangeArt3">Drawing</button>
        </div>
        <div class="search-text"><h4>Search by art: Name, Category, Artist</h4></div>
        <div class="search-div">
           <input
           class="search-input"
            type="text"
            v-model="search"
            placeholder="SEARCH?"
          /> 
        </div>
      </div>
    </div>

    <div v-if = "products" class="row">
      <ProductsCard
        v-for="product in filteredproducts"
        :key="product.id"
        :product="product"
      ></ProductsCard>
    </div>
    <div v-else>
        <img src="https://im.ge/i/OJyGqC">
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
    filteredproducts() {
      return this.$store.state.products?.filter((product) => {
        return product.artist
          ?.toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
     filteredproducts() {
      return this.$store.state.products?.filter((product) => {
        return product.name
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
    ChangeArt0() { 
        this.search = "";
    },
    ChangeArt1() {
      this.search = "sculpture";
    },
    ChangeArt2() {
      this.search = "painting";
    },
    ChangeArt3() {
      this.search = "drawing";
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

  background-color: #8f5f00;
  background-image: url("https://www.transparenttextures.com/patterns/brick-wall.png");
}

#products-section {
  padding-top: 3rem;
}

.fil-btn {
  background: rgba(75, 75, 75, 0.3);
  box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(74, 74, 74, 0.3);
  border-radius: 1rem;
  margin: 0.5rem;
  color: white;
  font-weight: bolder;
}

.fil-btn:hover {
  background: rgba(255, 255, 255, 0.5);
}
.search-div{

}

.search-input{
 background: rgba(255, 255, 255, 0.5);
  box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 0.2rem solid rgba(0, 0, 0, 0.6);
}

.search-text{
  margin-top: 1rem;
}
</style>
