<template>
  <navbar />
  <router-view />
</template>

<script>
import navbar from "./components/navbar.vue";
export default {
  name: "App",
  components: {
    navbar,
  },
};
</script>

<style>
body {
  overflow-x: hidden;
}

#app {
  height: 100%;
}
</style>
