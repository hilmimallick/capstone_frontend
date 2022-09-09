<template>
  <div id="onecard">
    <div v-if="product">
      <div v-for="item in product" :key="item.product_id" class="row">
        <div class="col-md-6">
          <div class="half-left">
             <router-link :to="{ name: 'products' }">
            <button id="one-re"><p><i class="fa-solid fa-arrow-left"></i>Return</p></button>
          </router-link>
            <div class="one-frame">
              <div class="one-border">
                <div id="one-img">
                  <img v-bind:src="item.image" class="img-fluid" id="one-pic" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="one-text" class="col-md-6">
          <div class="one-body">
            <p class="one-card-text">{{ item.name }}</p>
            <p class="one-card-text">{{ item.category }}</p>
            <p class="one-card-text">R{{ item.price }}</p>
            <p class="one-card-text">{{ item.description }}</p>
            <p class="one-card-text">{{ item.artist }}</p>
            <p class="one-card-text">{{ item.size }}cm</p>
            <button id="addtocart" @click="this.$store.dispatch('addTocart', item)">
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
    fetch("https://lc-capstone.herokuapp.com/products/" + this.$route.params.id)
      .then((res) => res.json())
      .then((productdata) => {
        this.product = productdata;
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
#one-re{
  margin-left: 12rem;
  background: transparent;
  border: none;
  font-weight: bolder;
  font-size: 1.5rem;
}

#one-re:hover{
 color: white;
}

#onecard {
  height: 100vh;
}

.half-left{
  margin-top: 5rem;
}

.one-frame {
  margin: 30px auto;
  border: 25px solid #222;
  height: 510px;
  width: 405px;
  -webkit-box-shadow: 0px 2px 3px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 3px 10px 4px rgba(0, 0, 0, 0.3);
}

.one-border {
  background: white;
  height: 100%;
  width: 100%;
  -webkit-box-shadow: inset 10px 10px 10px 4px rgba(0, 0, 0, 0.4);
  box-shadow: inset 3px 7px 2px 5px rgba(0, 0, 0, 0.4);
}

#one-img {
  height: 439px;
  width: 310px;
  margin-left: 20px;

  -webkit-box-shadow: inset 10px 10px 10px 4px rgba(0, 0, 0, 0.6);
  box-shadow: inset 3px 7px 2px 5px rgba(0, 0, 0, 0.1);
  border: 2px inset #c9c9c9;
  display: flex;
  justify-content: center;
  align-items: center;
}

#one-pic {
  height: 408px;
  width: 275px;
}

#one-text {
  display: flex;
  justify-content: center;
  align-items: center;
}

.one-card-text{
  font-weight: bold;
  font-size: 1.1rem;
}

#addtocart{
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 3px solid rgba(255, 255, 255, 0.3);
  color: white;
margin: 1rem;
border-radius: 5px;
padding: 0.3rem;
font-weight: bold;
}

#addtocart:hover{
  background: rgba(174, 172, 172, 0.3);
  color: black;
}
</style>
