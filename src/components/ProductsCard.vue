<template>
  <div class="col-md-6">
    <div class="frame">
      <div class="border">
        <div class="product-image">
          <img :src="product.image" class="img-fluid" id="product-img" />
        </div>

        <router-link
          :to="{ name: 'oneCard', params: { id: product.product_id } }"
          class="router-link"
        >
          <div class="pro-btn">
            <span>View Product</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
};
</script>
<style>
.frame {
  margin: 50px auto;
  border: 25px solid #222;
  height: 500px;
  width: 350px;
  -webkit-box-shadow: px 2px 3px 1px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 3px 10px 4px rgba(0, 0, 0, 0.3);
}

.border {
  background: white;
  height: 100%;
  width: 100%;
  -webkit-box-shadow: inset 10px 10px 10px 4px rgba(0, 0, 0, 0.4);
  box-shadow: inset 3px 7px 2px 5px rgba(0, 0, 0, 0.4);
}

.product-image {
  height: 350px;
  width: 250px;
  margin-left: 25px;
  margin-top: 30px;
  -webkit-box-shadow: inset 10px 10px 10px 4px rgba(0, 0, 0, 0.6);
  box-shadow: inset 3px 7px 2px 5px rgba(0, 0, 0, 0.1);
  border: 2px inset #c9c9c9;
  margin-bottom: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#product-img {
  height: 340px;
  width: 240px;
}

.pro-btn {
  width: 135px;
  height: 40px;
  border: 3px solid #222;

  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;
  transition: 1s;
  margin-left: 80px;
}

.pro-btn::before,
.pro-btn::after {
  position: absolute;
  background: white;
  z-index: -1;
  transition: 1s;
  content: "";
}
.pro-btn::before {
  height: 40px;
  width: 115px;
}
.pro-btn::after {
  width: 135px;
  height: 20px;
}
.pro-btn:hover::before {
  width: 0px;
  background: white;
}
.pro-btn:hover::after {
  height: 0px;
  background: white;
}
.pro-btn:hover {
  background: white;
}

.router-link {
  text-decoration: none;
  color: #222;
}

.router-link:hover {
  text-decoration: none;
  color: #222;
}
</style>
