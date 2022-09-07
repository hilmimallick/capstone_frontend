<template>
  <div class="foot-section">
    <h1>Hello Footer</h1>
  </div>
</template>
<script>
export default {
  name: "footer",
};
</script>
<style>
.foot-section {
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid #1976d2;
  height: 5rem;
  width: 100%;
}
</style>
