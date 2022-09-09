<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="artCart">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="ffartCart">Your cart details</h5>
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <div v-if="artCart">
        <div class="card" v-for="art in artCart" :key="art">
         <p> {{ art.name }}</p>
         <p>R {{ art.price }}</p>
          <a class="btn" @click="this.$store.dispatch('deletecartItem', art)">
            <i class="fa-solid fa-trash-can"></i>
          </a>
        </div>
        <button
          class="btn btn-primary"
          @click="this.$store.dispatch('clearcart')"
        >
          Clear Cart
        </button>
      </div>
      <div v-else>Nothing</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product_id"],
  computed: {
    artCart() {
      return this.$store.state.arts;
    },
  },
};
</script>

<style>
#artCart {
  width: 50%;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

#ffartCart{
  color: white;
}

</style>
