<template>
  <div id="profile-section">
    <div v-if="user" id="out-pro">
      <div v-for="item in user" :key="item.user_id">
        <div class="pro-first">
          <div class="pro-second">
            <div class="profile-text">
              <p class="pro-text">{{ item.full_name }}</p>
              <p class="pro-text">{{ item.email }}</p>
              <p class="pro-text">{{ item.phone }}</p>
              <p class="pro-text">{{ item.country }}</p>
              <p class="pro-text">{{ item.billing_address }}</p>
              <p class="pro-text">{{ item.default_shipping_address }}</p>
            </div>
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
      user: null,
    };
  },
  mounted() {
    fetch("https://lc-capstone.herokuapp.com/users/" + this.$route.params.id)
      .then((res) => res.json())
      .then((data) => {
        this.user = data;
        // console.log(product);
      });
  },
};
</script>
<style>
#profile-section {
}

#out-pro {
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  height: 100vh;
}

.pro-first {
  height: 27rem;
  width: 27rem;
  border: 0.5rem solid white;
  background: transparent;
}

.pro-second {
  height: 27rem;
  width: 27rem;
  border: 0.5rem solid white;
  margin-left: 1rem;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://i.postimg.cc/Fs0nFkcS/user-g6c1055bc9-1280.png);
  background-position: center;
}

.pro-text {
  color: white;
}
</style>
