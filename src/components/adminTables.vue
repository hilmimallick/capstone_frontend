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
    <td>{{ product.size }}</td>
  </tr>
</template>
<script>
export default {
  props: ["product"],
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
