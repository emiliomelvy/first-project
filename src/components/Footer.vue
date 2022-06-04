<template>
  <div class="container">
    <div class="header">
      <h3>Join our community by using our services and grow your business.</h3>
      <a class="rounded-pill" href="#">Try It For Free</a>
    </div>
    <hr class="line" />
    <div class="body">
      <div class="sandbox">
        <img src="../assets/img/logo-light2x.png" alt="" />
        <p>
          © 2022 Sandbox. <br />
          All rights reserved.
        </p>
        <nav class="social">
          <a href="#"
            ><font-awesome-icon
              class="social-icon"
              :icon="{
                prefix: 'fab',
                iconName: 'twitter',
              }" /><font-awesome-icon
              class="social-icon"
              :icon="{
                prefix: 'fab',
                iconName: 'facebook',
              }" /><font-awesome-icon
              class="social-icon"
              :icon="{
                prefix: 'fab',
                iconName: 'dribbble',
              }" /><font-awesome-icon
              class="social-icon"
              :icon="{
                prefix: 'fab',
                iconName: 'instagram',
              }" /><font-awesome-icon
              class="social-icon"
              :icon="{ prefix: 'fab', iconName: 'youtube' }"
          /></a>
        </nav>
      </div>
      <div class="touch">
        <h4>Get in Touch</h4>
        <p>Moonshine St. 14/05 Light City, London, United Kingdom</p>
        <a href="#">info@email.com</a>
        00 (123) 456 78 90
      </div>
      <div class="learn">
        <h4>Learn More</h4>
        <a href="#">About Us</a>
        <a href="#">Our Story</a>
        <a href="#">Projects</a>
        <a href="#">Terms of Use</a>
        <a href="#">Privacy Policy</a>
      </div>
      <div class="newsletter">
        <h4>Our Newsletter</h4>
        <p>
          Subscribe to our newsletter to get our news & deals delivered to you.
        </p>
        <form action="#">
          <input type="email" placeholder="Email Address" />
          <button>Join</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  background-color: #303e4e;
  padding-bottom: 5rem;
}
.header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 30vh;
}
.header h3 {
  font-size: 38px;
  color: white;
  max-width: 50%;
}
.header .rounded-pill {
  text-decoration: none;
  background-color: #fab758;
  color: white;
  display: flex;
  justify-content: center;
  line-height: 2.8rem;
  border-radius: 30px;
  width: 10rem;
  height: 3rem;
}
.body {
  display: flex;
  justify-content: space-evenly;
}
.sandbox {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.sandbox img {
  width: 134px;
  height: 26px;
}
hr {
  border: 0.5px solid #68727e;
  width: 83%;
  margin: 2rem auto 5rem;
}
.sandbox p {
  color: #cacaca;
}
.sandbox a {
  color: white;
  display: flex;
  gap: 19px;
}
.touch {
  display: flex;
  flex-direction: column;
  width: 12%;
  gap: 7px;
  color: #cacaca;
  font-weight: 500;
}
.touch h4 {
  color: white;
  font-size: 20px;
}
.touch p {
  margin: 15px 0;
  font-weight: 500;
}
.touch a {
  text-decoration: none;
  color: #cacaca;
  font-weight: 500;
}
.learn {
  display: flex;
  flex-direction: column;
  /* gap: 10px; */
}
.learn h4 {
  color: white;
  font-size: 20px;
}
.learn a {
  text-decoration: none;
  margin-top: 15px;
  color: #cacaca;
  font-weight: 500;
}
.newsletter {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 18%;
}

.newsletter h4 {
  color: white;
  font-size: 20px;
}

.newsletter p {
  color: #cacaca;
  font-weight: 500;
}

.newsletter input {
  padding: 18px 0px;
  border: 0.5px solid #68727e;
  background-color: #303e4e;
  border-radius: 8px 0 0 8px;
  text-align: center;
  font-weight: 500;
}
.newsletter button {
  padding: 12px 20px;
  font-size: 14px;
  color: #fff;
  background-color: #fab758;
  border: 1px solid #fab758;
  border-radius: 0 8px 8px 0;
}
.newsletter form {
  display: flex;
}

.header .rounded-pill:hover {
  transform: translateY(-3px);
  transition: 0.3s;
}
.touch a:hover {
  color: #115db5;
}
.learn a:hover {
  color: #115db5;
}
.newsletter button:hover {
  cursor: pointer;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}
.social .social-icon:hover {
  transform: translateY(-3px);
  transition: 0.3s;
}
</style>
