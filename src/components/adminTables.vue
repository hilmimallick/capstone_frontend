<template>
  <!-- table data -->
  <tr>
    <td>{{ product.product_id }}</td>
    <td>{{ product.name }}</td>
    <td>R{{ product.price }}</td>
    <td>{{ product.description }}</td>
    <td>{{ product.artist }}</td>
    <td><img :src="product.image" class="img-fluid" id="admin-img" /></td>
    <td>{{ product.category }}</td>
    <td>{{ product.size }}cm</td>
    <td>
      <!-- Button trigger modal -->
      <button
        type="button"
        data-bs-toggle="modal"
        :data-bs-target="`#editProduct` + product.product_id"
      >
        Edit
      </button>
    </td>
    <td>
      <i
        @click="deleteproduct(product.product_id)"
        class="fa-solid fa-trash-can"
      ></i>
    </td>
    <editProducts :product="product" />
  </tr>
</template>
<script>
import editProducts from "./editProducts.vue";
export default {
  props: ["product"],
  components: {
    editProducts,
  },
  methods: {
    deleteproduct(id) {
      return this.$store.dispatch("Deleteproduct", id);
    },
  },
};
</script>
<style>
#admin-img {
  height: 6em;
  width: 6em;
}

tr,
td,
th {
  border: 2px solid black;
}
</style>
