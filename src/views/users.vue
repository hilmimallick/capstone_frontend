<template>
  <div id="admin-user-table">
    <input type="text" v-model="search" placeholder="Search by full_name" />
    <table class="table table-striped">
      <tr>
        <th>#</th>
        <th>email</th>
        <th>password</th>
        <th>full_name</th>
        <th>billing_address</th>
        <th>default_shipping_address</th>
        <th>country</th>
        <th>phone</th>
        <th>user_type</th>
      </tr>
      <usersTable
        v-for="user in filteredusers"
        :key="user.id"
        :user="user"
      ></usersTable>
    </table>
  </div>
</template>
<script>
import usersTable from "../components/usersTable.vue";
export default {
  components: { usersTable },
  data() {
    return {
      search: "",
      users: [],
    };
  },

  computed: {
    filteredusers() {
      return this.$store.state.users?.filter((user) => {
        return user.full_name
          ?.toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
    users() {
      return this.$store.state.users;
    },
  },
  mounted() {
    this.$store.dispatch("getusers");
  },
};
</script>
<style>
#admin-user-table {
  padding-top: 3rem;
  height: 100vh;
}
</style>
