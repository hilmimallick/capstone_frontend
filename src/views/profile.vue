<template>
  <div v-if="user">
    <div v-for="item in user" :key="item.user_id" class="row">
      <div id="one-text" class="col-md-6">
        <div class="one-body">
          <p class="card-text">{{ item.full_name }}</p>
          <p class="card-text">{{ item.email }}</p>
          <p class="card-text">{{ item.phone }}</p>
          <p class="card-text">{{ item.country }}</p>
          <p class="card-text">{{ item.billing_address }}</p>
          <p class="card-text">{{ item.default_shipping_address }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["id"],
  data() {
    return {
      user: null,
    };
  },
  mounted() {
    fetch("http://localhost:7373/users/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => {
        this.user = data;
        // console.log(product);
      });
  },
};
</script>
<style></style>
