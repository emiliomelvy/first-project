<template>
  <div class="wrapper-section1">
    <div class="left-section1">
      <figure>
        <img class="left-sec-img" src="../assets/img/i2.png" alt="" />
      </figure>
    </div>
    <div class="right-section1">
      <h1>Grow Your Business with Our Solutions.</h1>
      <p class="lead">
        We help our clients to increase their website traffic, rankings and
        visibility in search results.
      </p>
      <span>
        <a href="#" class="rounded-pill">Try It For Free</a>
      </span>
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
.wrapper-section1 {
  display: flex;
  color: #343f52;
  margin-top: 5rem;
  font-size: 20px;
  font-weight: bold;
  margin-left: 35px;
  margin-top: 100px;
}
.right-section1 {
  padding: 0 5rem;
  width: 45%;
}
.right-section1 h1 {
  font-size: 49px;
}
.right-section1 p {
  margin: 25px 0;
  color: #60697b;
  letter-spacing: 1px;
  word-spacing: 0.1em;
  font-weight: 500;
  line-height: 35px;
}
.right-section1 .rounded-pill:hover {
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.2);
  transform: translateY(-0.25em);
  transition: 0.5s;
}

.left-sec-img {
  width: 95%;
  height: 95%;
}
.rounded-pill {
  text-decoration: none;
  color: #fff;
  background-color: #fab758;
  padding: 15px 24px;
  /* margin-top: 20px; */
  /* margin-bottom: 10px; */
  border-radius: 30px;
  text-align: center;
  display: inline-block;
  font-size: 17px;
}

@media only screen and (max-width: 1200px) {
  /* .wrapper-section1 {
    width: 80%;
  } */
  /* .left-section1 {
    margin-left: 25%;
  } */
  .left-section1 img {
    margin-top: 70px;
  }
}

@media only screen and (max-width: 991px) {
  .wrapper-section1 {
    display: flex;
    flex-direction: column;
  }
  .right-section1 {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 85%;
  }
  .right-section1 h1 {
    text-align: center;
  }
  .right-section1 p {
    text-align: center;
  }
  .right-section1 span {
    display: flex;
    justify-content: center;
  }
}

/* IPAD AIR */

/*  */

@media only screen and (max-width: 768px) {
  .wrapper-section1 {
    margin: 0 auto;
  }
  .right-section1 {
    padding: 0;
  }
  .left-section1 {
    margin-left: 0;
  }
}
</style>
