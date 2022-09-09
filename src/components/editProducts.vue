<template>
  <!-- Modal -->
  <div
    class="modal fade"
    :id="`editProduct` + product.product_id"
    tabindex="-1"
    :aria-labelledby="product.id + `EditLabel`"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" :id="`editProductLabel` + product.product_id">
            Edit Product
          </h5>
          <button
            type="button"
            :id="`editProductClose` + product.product_id"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form method="PUT" @submit.prevent="editProduct">
            <label class="form-label">Product Name</label>
            <input type="text" class="form-control" v-model="product.name" />
            <label class="form-label">Price</label>
            <input type="number" class="form-control" v-model="product.price" />
            <label class="form-label">Description</label>
            <textarea
              style="resize: none"
              class="form-control"
              cols="30"
              rows="2"
              v-model="product.description"
            ></textarea>

            <label class="form-label">Artist</label>
            <input type="text" class="form-control" v-model="product.artist" />
            <label class="form-label">Product Image</label>
            <input type="text" class="form-control" v-model="product.image" />
            <label class="form-label">Category</label>
            <input
              type="text"
              class="form-control"
              v-model="product.category"
            />
            <label class="form-label">Size</label>
            <input type="text" class="form-control" v-model="product.size" />

            <button
              data-bs-dismiss="modal"
              type="submit"
              class="btn btn-grad"
              @click="editProduct"
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],

  methods: {
    editProduct() {
      // e.preventDefault();
      //   let newProduct = {
      //     id: this.product.id,
      //     title: this.product.name,
      //     img: this.product.img,
      //     description: this.product.descriptions,
      //     category: this.product.category,
      //     price: this.product.price,
      //   };
      this.$store.dispatch("updateProduct", this.product);
      //   document.getElementById(`editProductClose` + this.product.id).click();
    },
  },
};
</script>
<style></style>
