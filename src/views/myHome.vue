<template>
  <!-- home section -->
  <section id="home-section">
    <a href="#about-section">About</a>
  </section>
  <!-- about section  -->
  <section id="about-section">
    <div class="row">
      <!-- left col -->
      <div class="col-md-6" id="about-left">
        <div>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
            dolorum asperiores, velit, ullam, id atque earum ipsam aliquam eius
            aperiam vero possimus nostrum architecto necessitatibus harum et
            molestias repellendus porro rerum nemo! Asperiores accusantium
            voluptatibus reiciendis obcaecati veniam aliquam, magnam doloremque
            hic perferendis beatae facere laudantium, earum ad dolorem animi.
          </p>
        </div>
        <a href="/login">
          <button>login</button>
        </a>
        <a href="/register">
          <button>Sign-up</button>
        </a>
      </div>
      <!-- right col -->
      <div class="col-md-6" id="about-right"></div>
    </div>
  </section>
  <!-- contact section -->
  <section id="contact-section"></section>
</template>
<script>
export default {};
</script>
<style>
#home-section {
  height: 100vh;
  background-color: black;
  padding-top: 3rem;
}

#about-section {
  height: 100vh;
  background-color: white;
}

#about-left {
  height: 100vh;
  border: 2px solid blue;
}

#about-right {
  height: 100vh;
  border: 2px solid green;
}

#contact-section {
  height: 100vh;
  background-color: grey;
}
</style>
