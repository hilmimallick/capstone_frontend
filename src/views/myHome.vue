<template>
  <!-- home section -->
  <section id="home-section">
    <div id="home-2">
      <div>
        <div id="wel-1"><h1 class="wel-1">WELCOME TO</h1></div>
        <div><h1 class="wel-2">ART DIVERSITY</h1></div>
        <div class="a-ref"><a href="#about-section">About</a></div>
      </div>
    </div>
  </section>
  <!-- about section  -->
  <section id="about-section">
    <div class="row">
      <!-- left col -->
      <div class="col-md-6" id="about-left">
        <div id="div-1">
          <div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              dolorum asperiores, velit, ullam, id atque earum ipsam aliquam
              eius aperiam vero possimus nostrum architecto necessitatibus harum
              et molestias repellendus porro rerum nemo! Asperiores accusantium
              voluptatibus reiciendis obcaecati veniam aliquam, magnam
              doloremque hic perferendis beatae facere laudantium, earum ad
              dolorem animi.
            </p>
          </div>

          <router-link :to="{ name: 'login' }">
            <!-- <a href="/login"> -->
            <button>login</button>
            <!-- </a> -->
          </router-link>

          <router-link :to="{ name: 'register' }">
            <button>Sign-up</button>
          </router-link>
        </div>
      </div>
      <!-- right col -->
      <div class="col-md-6" id="about-right"></div>
    </div>
  </section>
  <!-- contact section -->
  <section id="contact-section">
    <div class="contact-body">
      <div class="container-contact">
        <div class="contact-box">
          <div class="left">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13233.069675818386!2d18.4926986!3d-33.9856643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1662725910918!5m2!1sen!2sza"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div class="right">
            <h2 class="h2-con">Countact Us</h2>
            <form action="https://formspree.io/f/mgednobw" method="POST">
              <input type="text" class="field" placeholder="Your Name" />
              <input type="email" class="field" placeholder="Your Email" />
              <input type="text" class="field" placeholder="Your Phone" />
              <textarea class="field" placeholder="Message"></textarea>
              <button class="contact-btn">SEND</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {};
</script>
<style>
#home-section {
  height: 100vh;
  padding-top: 4rem;
  display: flex;
  justify-content: center;
}

#home-2 {
  background: rgba(255, 255, 255, 0.01);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 80%;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.wel-1 {
  display: flex;
  justify-content: center;
}

.wel-1 {
  font-weight: bolder;
  font-size: 5rem;
  font-family: "Rubik Wet Paint";
}

.wel-2 {
  font-weight: bolder;
  font-size: 8rem;
  font-family: "Rubik Wet Paint";
}

.a-ref {
  display: flex;
  justify-content: center;
}

#about-section {
  height: 100vh;
}
#div-1 {
  height: 80%;
  width: 80%;
  border: 4px solid black;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

#about-left {
  height: 100vh;
  display: flex;
  justify-content: center;
}

#about-right {
  height: 100vh;
}

#contact-section {
  height: 100vh;
}
.contact-body {
  width: 100%;
  height: 100%;
}

.container-contact {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px 100px;
}

.container-contact:after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  z-index: -1;
  filter: blur(50px);
}

.contact-box {
  max-width: 850px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
}

.iframe {
  height: 100%;
}

.right {
  padding: 25px 40px;
}

.h2-con {
  position: relative;
  padding-bottom: 10px;
  margin-bottom: 10px;
  color: white;
}

.h2-con:after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  height: 4px;
  width: 50px;
  border-radius: 2px;
  background-color: white;
}

.field {
  width: 100%;
  padding: 0.5rem 1rem;
  outline: none;
  border: 2px solid white;
  background-color: rgba(230, 230, 230, 0.6);
  font-size: 1.1rem;
  margin-bottom: 22px;
  transition: 0.3s;
}

.field:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.field:focus {
  background-color: #fff;
  border: 3px solid rgba(255, 255, 255, 0.6);
}

.area {
  min-height: 150px;
}

.contact-btn {
  width: 100%;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  background-color: #a87b22;
  cursor: pointer;
  outline: none;
  border: none;
  color: #fff;
  transition: 0.3s;
}

.contact-btn:hover {
  background-color: transparent;
}

@media screen and (max-width: 880px) {
  .contact-box {
    grid-template-columns: 1fr;
  }
  .iframe {
    height: 200px;
  }
}
</style>
