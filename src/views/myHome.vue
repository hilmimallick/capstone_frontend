<template>
  <!-- home section -->
  <section id="home-section">
    <div id="home-2">
      <div>
        <div id="wel-1"><h1 class="wel-1">WELCOME TO</h1></div>
        <div><h1 class="wel-2">ART DIVERSITY</h1></div>
        <div class="a-ref"><a class="a-ref" href="#about-section">Scroll down to view more about us</a></div>
      </div>
    </div>
  </section>
  <!-- about section  -->
  <section id="about-section">
    <div class="row">
      <!-- left col -->
      <div class="col-md-6" id="about-left">
        <div id="div-1">
          <div id="us"><u>ABOUT US</u></div>
          <div class="ab-text">
            <p>
            At ART DIVERSITY we give aid to upcoming artist whereby we promote thier art through this website. Feel free to sign up for free to view the work of art of artist which we work very closly with.
            </p>
          </div>

   <router-link :to="{ name: 'login' }">
            <button id="about-log"> <h3>LOGIN</h3></button>
          </router-link>


          <router-link :to="{ name: 'register' }">
            <button id="about-reg"><h3>SIGN-UP</h3></button>
          </router-link>

          <div class="ab-text">
            <p>Feel free to scroll down and contact us about promoting your work or other artist work you maight know have great potential.</p>
          </div>

         
        </div>
      </div>
      <!-- right col -->
      <div class="col-md-6" id="about-right">

<!-- <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://picsum.photos/200/300/?blur" class="d-block w-75 h-50">
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://picsum.photos/200/300/?blur" class="d-block w-75 h-50">
    </div>
    <div class="carousel-item">
      <img src="https://picsum.photos/200/300/?blur" class="d-block w-75 h-50">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> -->
      </div>
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
  /* background: rgba(255, 255, 255, 0.01);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  height: 80%;
  width: 80%; */
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
  text-decoration: none;
  color: white;
}

#about-section {
  height:
  100vh;
}

#about-log{
  background: rgba(0, 0, 0, 0.3);
  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 3px solid rgba(255, 255, 255, 0.3);
  color: white;
margin: 1rem;
border-radius: 5px;
padding: 0.3rem;
}

#about-reg{
   background: rgba(0, 0, 0, 0.3);
  box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 3px solid rgba(255, 255, 255, 0.3);
  color: white;
margin: 1rem;
border-radius: 5px;
padding: 0.3rem;
}

#about-log:hover{
   background: rgba(255, 255, 255, 0.01);
}

#about-reg:hover{
   background: rgba(255, 255, 255, 0.01);
}

#us{
  font-weight: bolder;
  font-size: 3rem;
  margin: 1rem;
}

.ab-text{
  margin: 1rem;
  font-weight: bold;
  font-size: 1.2rem;
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
