<template>
  <navbar />
  <router-view />

  <Footer />
</template>

<script>
import navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";

export default {
  name: "App",
  components: {
    navbar,
    Footer,
  },
};
</script>

<style>
body {
  background-color: #8f5f00;
  background-image: url("https://www.transparenttextures.com/patterns/brick-wall.png");
}
</style>
