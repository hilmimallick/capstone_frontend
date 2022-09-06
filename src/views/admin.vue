<template>
  <div id="admin-pro-table">
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn btn-primary"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
    >
      Add product
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Add Product</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <form @submit="createProduct()">
            <div class="modal-body">
              <input type="text" v-model="name" placeholder="name" />
              <input type="text" v-model="price" placeholder="price" />
              <input
                type="text"
                v-model="description"
                placeholder="description"
              />
              <input type="text" v-model="artist" placeholder="artist" />
              <input type="text" v-model="category" placeholder="category" />
              <input type="text" v-model="image" placeholder="IMG URL" />
              <input type="text" v-model="size" placeholder="size" />
            </div>
            <div class="modal-footer">
              <button type="submit" class="btn btn-primary">Done</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <input type="text" v-model="search" placeholder="Search by category" />

    <table class="table table-striped">
      <tr>
        <th>#</th>
        <th>name</th>
        <th>price</th>
        <th>description</th>
        <th>artist</th>
        <th>image</th>
        <th>category</th>
        <th>size</th>
        <th>Delete</th>
      </tr>
      <adminTables
        v-for="product in filteredproducts"
        :key="product.id"
        :product="product"
      ></adminTables>
    </table>
  </div>
</template>
<script>
import adminTables from "../components/adminTables.vue";
export default {
  computed: {
    filteredproducts() {
      return this.$store.state.products?.filter((product) => {
        return product.category
          ?.toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
    products() {
      return this.$store.state.product;
    },
  },
  components: { adminTables },
  data() {
    return {
      products: null,
      search: "",
      name: "",
      price: "",
      description: "",
      artist: "",
      category: "",
      image: "",
      size: "",
    };
  },
  methods: {
    createProduct() {
      this.$store.dispatch("Addproduct", {
        name: this.name,
        price: this.price,
        description: this.description,
        artist: this.artist,
        category: this.category,
        image: this.image,
        size: this.size,
      });
    },
  },

  mounted() {
    this.$store.dispatch("getproducts");
  },
};
</script>
<style>
#admin-pro-table {
  padding-top: 3rem;
}
</style>
