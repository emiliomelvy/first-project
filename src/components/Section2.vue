<template>
  <div class="wrapper-section2">
    <div class="header-sec2">
      <h2 class="wwd">What We Do?</h2>
      <h3 class="service-h3">
        The service we offer is specifically designed to meet your needs.
      </h3>
    </div>
  </div>
  <div class="wrapper-service">
    <div class="serv area-one">
      <div class="wrapper-content">
        <img src="../assets/img/icons8-search.svg" alt="search" />
        <h4>SEO Services</h4>
        <span>
          <p>
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus cras justo.
          </p>
        </span>
        <a href="#">
          Learn More <font-awesome-icon icon="arrow-right-long" />
        </a>
      </div>
    </div>
    <div class="serv area-two">
      <div class="wrapper-content">
        <img src="../assets/img/icons8-web-design-64.png" alt="web-design" />
        <h4>Web Design</h4>
        <span>
          <p>
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus cras justo.
          </p>
        </span>
        <a href="#">Learn More <font-awesome-icon icon="arrow-right-long" /></a>
      </div>
    </div>
    <div class="serv area-three">
      <div class="wrapper-content">
        <img src="../assets/img/icons8-social-64.png" alt="social-engagement" />
        <h4>Social Engagement</h4>
        <span
          ><p>
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus cras justo.
          </p>
        </span>
        <a href="#">Learn More <font-awesome-icon icon="arrow-right-long" /></a>
      </div>
    </div>
    <div class="serv area-four">
      <div class="wrapper-content">
        <img
          src="../assets/img/icons8-content-marketing-64.png"
          alt="content-marketing"
        />
        <h4>Content Marketing</h4>
        <span>
          <p>
            Nulla vitae elit libero, a pharetra augue. Donec id elit non mi
            porta gravida at eget metus cras justo.
          </p>
        </span>
        <a href="#">Learn More <font-awesome-icon icon="arrow-right-long" /></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap");
* {
  font-family: "Manrope", sans-serif;
}
.wrapper-section2 {
  margin-top: 8rem;
  display: flex;
  flex-direction: column;
}
.wwd {
  text-transform: uppercase;
  text-align: center;
  font-size: 1rem;
  margin-bottom: 20px;
  color: #a9a9a9;
}
.service-h3 {
  text-align: center;
  font-size: 35px;
  margin: 30px auto;
  max-width: 50%;
  color: #343f52;
}
.wrapper-service {
  padding: 20px;
  display: flex;
  height: 23em;
  gap: 25px;
  margin: 0 50px;
  /* grid-template-areas:
    "one two"
    "three four"; */
}

.wrapper-service .serv {
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.wrapper-service h4 {
  font-size: 18px;
}
.wrapper-content {
  /* background: salmon; */
  /* padding: 0 55px; */
  height: 15em;
  gap: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.wrapper-content span {
  padding: 0 45px;
  color: #60697b;
}
.wrapper-service .area-one {
  /* grid-area: one; */
  text-align: center;
}
.wrapper-service .area-one img {
  margin: 0 auto;
  max-width: 64px;
  max-height: 64px;
}
.wrapper-service .area-two {
  /* grid-area: two; */
  text-align: center;
}
.wrapper-service .area-two img {
  margin: 0 auto;
  max-width: 64px;
  max-height: 64px;
}

.wrapper-service .area-three {
  /* grid-area: three; */
  text-align: center;
}
.wrapper-service .area-three img {
  margin: 0 auto;
  max-width: 64px;
  max-height: 64px;
}
.wrapper-service .area-four {
  /* grid-area: four; */
  text-align: center;
}
.wrapper-service .area-four img {
  margin: 0 auto;
  max-width: 64px;
  max-height: 64px;
}
.area-one a {
  display: inline-block;
  width: 100%;
  position: relative;
  color: #e7b271;
}
.area-one a::after {
  content: "";
  position: absolute;
  width: 39%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  top: 27px;
  left: 30%;
  background-color: #e7b271;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.area-one a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.area-two a {
  display: inline-block;
  width: 100%;
  position: relative;
  color: #03bbe0;
}
.area-two a::after {
  content: "";
  position: absolute;
  width: 39%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  top: 27px;
  left: 30%;
  background-color: #03bbe0;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.area-two a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.area-three a {
  color: #f6129e;
  display: inline-block;
  width: 100%;
  position: relative;
}
.area-three a::after {
  content: "";
  position: absolute;
  width: 39%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  top: 27px;
  left: 30%;
  background-color: #f6129e;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.area-three a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.area-four a {
  color: #e27739;
  display: inline-block;
  width: 100%;
  position: relative;
}
.area-four a::after {
  content: "";
  position: absolute;
  width: 39%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  top: 27px;
  left: 30%;
  background-color: #e27739;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}
.area-four a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.serv a {
  text-decoration: none;
}
.serv p {
  line-height: 32px;
}
</style>
