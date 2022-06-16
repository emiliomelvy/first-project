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
    <div v-for="(card, index) in cards" :key="index" class="serv area">
      <div class="wrapper-content">
        <img :src="card.image" alt="search" />
        <h4>{{ card.title }}</h4>
        <span>
          <p>
            {{ card.paragraph }}
          </p>
        </span>
        <a :class="card.class" href="#">
          Learn More
          <font-awesome-icon icon="arrow-right-long" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          image: "/src/assets/img/icons8-search.svg",
          title: "SEO Services",
          class: "arrow1",
          paragraph:
            "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.",
        },
        {
          image: "/src/assets/img/icons8-web-design-64.png",
          title: "Web Design",
          class: "arrow2",
          paragraph:
            "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.",
        },
        {
          image: "/src/assets/img/icons8-social-64.png",
          title: "Social Engagement",
          class: "arrow3",
          paragraph:
            "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.",
        },
        {
          image: "/src/assets/img/icons8-content-marketing-64.png",
          title: "Content Marketing",
          class: "arrow4",
          paragraph:
            "Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus cras justo.",
        },
      ],
    };
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap");

* {
  font-family: "Manrope", sans-serif;
}

/* MEDIA QUERIES */

/* MEDIA QUERIES */
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

.wrapper-content .arrow1 {
  color: #e7b271;
}
.area .arrow1::after {
  background-color: #e7b271;
}

.wrapper-content .arrow2 {
  color: #03bbe0;
}
.area .arrow2::after {
  background-color: #03bbe0;
}

.wrapper-content .arrow3 {
  color: #f6129e;
}
.area .arrow3::after {
  background-color: #f6129e;
}

.wrapper-content .arrow4 {
  color: #e27739;
}
.area .arrow4::after {
  background-color: #e27739;
}

.wrapper-service .area {
  text-align: center;
}
.wrapper-service .area img {
  margin: 0 auto;
  max-width: 64px;
  max-height: 64px;
}

.area a {
  display: inline-block;
  width: 100%;
  position: relative;
  color: #e7b271;
}
.area a::after {
  content: "";
  position: absolute;
  width: 39%;
  transform: scaleX(0);
  height: 2px;
  bottom: 0;
  top: 27px;
  left: 30%;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.area a:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.serv a {
  text-decoration: none;
}
.serv p {
  line-height: 32px;
}

@media only screen and (max-width: 1200px) {
  .wrapper-service {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .wrapper-service .serv {
    padding: 10%;
  }
}

@media only screen and (max-width: 991px) {
  .wrapper-section2 {
    margin-left: 8%;
  }
  .wrapper-service {
    width: 100%;
    margin-left: 1.5%;
  }

  .service-h3 {
    width: 100%;
    max-width: 100%;
    margin-left: 10px;
  }
}

@media only screen and (max-width: 768px) {
  .wrapper-section2 {
    margin: 8rem auto;
  }
  .wrapper-service {
    display: flex;
    flex-direction: column;
    width: 75%;
    margin: 0 auto;
  }
}

@media only screen and (max-width: 415px) {
  .service-h3 {
    max-width: 100%;
    margin-left: 0;
  }

  .wrapper-service {
    width: 100%;
    padding: 0;
  }
}
</style>
