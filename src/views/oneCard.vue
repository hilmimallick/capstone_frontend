<template>
  <div id="onecard">
    <div v-if="product">
      <div v-for="item in product" :key="item.product_id" class="row">
        <div class="half-left">
          <div class="one-frame">
            <div class="one-border">
              <div class="col-md-6" id="one-img">
                <img v-bind:src="item.image" class="img-fluid" id="one-pic" />
              </div>
            </div>
          </div>
        </div>

        <div id="one-text" class="col-md-6">
          <div class="one-body">
            <p class="card-text">{{ item.name }}</p>
            <p class="card-text">{{ item.category }}</p>
            <p class="card-text">R{{ item.price }}</p>
            <p class="card-text">{{ item.description }}</p>
            <p class="card-text">{{ item.artist }}</p>
            <p class="card-text">{{ item.size }}</p>
            <button @click="this.$store.dispatch('addTocart', item)">
              <i class="fa-solid fa-cart-plus"></i>Add to cart
            </button>
          </div>
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
      product: null,
    };
  },
  mounted() {
    fetch("http://localhost:7373/products/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => {
        this.product = data;
        // console.log(product);
      });
  },

  methods: {
    add() {
      this.$store.dispatch("addTocart", this.id);
    },
  },
};
</script>
<style>
.half-left {
  width: 50%;
}

.one-frame {
  margin: 50px auto;
  border: 25px solid #222;
  height: 559px;
  width: 450px;
  -webkit-box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 3px 10px 4px rgba(0, 0, 0, 0.3);
}

.border {
  background: white;
  height: 100%;
  width: 100%;
  -webkit-box-shadow: inset 10px 10px 10px 4px rgba(0, 0, 0, 0.4);
  box-shadow: inset 3px 7px 2px 5px rgba(0, 0, 0, 0.4);
}

#one-img {
  height: 459px;
  width: 355px;
  margin-left: 20px;
  margin-top: 30px;
  -webkit-box-shadow: inset 10px 10px 10px 4px rgba(0, 0, 0, 0.6);
  box-shadow: inset 3px 7px 2px 5px rgba(0, 0, 0, 0.1);
  border: 2px inset #c9c9c9;
  display: flex;
  justify-content: center;
  align-items: center;
}

#one-pic {
  height: 410px;
  width: 310px;
}

#one-text {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 50%;
}

.one-body {
  height: 100%;
  width: 100%;
}
</style>
