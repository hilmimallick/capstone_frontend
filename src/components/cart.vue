<template>
  <div class="offcanvas offcanvas-end" tabindex="-1" id="artCart">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="ffartCart">Offcanvas right</h5>
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
          <h2>
            {{ art.name }}
          </h2>
          <a class="btn" @click="this.$store.dispatch('deletecartItem', art)">
            <i class="bi bi-trash3">delimiters</i>
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

<style></style>
