<template>
  <!-- table data -->
  <tr>
    <td>{{ user.user_id }}</td>
    <td>{{ user.email }}</td>
    <td>R{{ user.password }}</td>
    <td>{{ user.full_name }}</td>
    <td>{{ user.billing_address }}</td>
    <td>{{ user.default_shipping_address }}</td>
    <td>{{ user.country }}</td>
    <td>{{ user.phone }}</td>
    <td>{{ user.user_type }}</td>
    <td>
      <i @click="deleteuser(user.user_id)" class="fa-solid fa-trash-can"></i>
    </td>
  </tr>
</template>
<script>
export default {
  props: ["user"],
  methods: {
    deleteuser(id) {
      return this.$store.dispatch("Deleteuser", id);
    },
  },
};
</script>
<style>
#admin-user-img {
  height: 6em;
  width: 6em;
}

tr,
td,
th {
  border: 2px solid black;
}
</style>
