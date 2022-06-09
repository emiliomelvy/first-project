<template>
  <!-- <div class="test"></div> -->
  <div class="wrapper">
    <div class="wrapper-section10">
      <div class="left-sect10">
        <img src="../assets/img/i5.png" alt="" />
      </div>
      <div class="right-sect10">
        <h2>Lets'Talk</h2>
        <h3>
          Let's make something great together. We are trusted by over 5000+
          clients.
        </h3>
        <p>
          Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
          vestibulum. Maecenas faucibus mollis interdum. Fusce dapibus, tellus
          ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa
          justo sit amet risus.
        </p>
        <a href="#">Join Us</a>
      </div>
    </div>
    <div class="row-logo">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.image"
        alt=""
      />
    </div>
  </div>
  <div class="test2"></div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        { image: "/src/assets/img/c1.png" },
        { image: "/src/assets/img/c2.png" },
        { image: "/src/assets/img/c3.png" },
        { image: "/src/assets/img/c4.png" },
        { image: "/src/assets/img/c5.png" },
        { image: "/src/assets/img/c6.png" },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  margin-bottom: 10rem;
}
.wrapper-section10 {
  display: flex;
  margin: 10rem 5rem 0;
  gap: 50px;
}
/* LEFT SECTION */
.left-sect10 img {
  max-width: 100%;
  margin-top: 20px;
}
/* RIGHT SECTION */

.right-sect10 {
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 50%;
}
.right-sect10 h2 {
  font-size: 16px;
  color: #aab0bc;
}
.right-sect10 h3 {
  font-size: 38px;
  color: #343f52;
}
.right-sect10 p {
  font-size: 17px;
  color: #60697b;
  font-weight: 500;
  line-height: 28px;
}
.right-sect10 a {
  background-color: #fab758;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: white;
  width: 100px;
  height: 50px;
  border-radius: 30px;
}

.row-logo {
  display: flex;
  margin: 0 auto;
  width: 85%;
  margin-top: 5rem;
  justify-content: space-around;
}
.row-logo img {
  height: 25px;
}

.right-sect10 a:hover {
  cursor: pointer;
  transform: translateY(-3px);
  transition: 0.3s;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
}
/* 
.test {
  background: white;
  height: 209px;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.test::before {
  background: #fab758;
  bottom: 163%;
  content: "";
  display: block;
  height: 177%;
  position: absolute;
  right: 0px;
  transform-origin: 50% 74.5%;
  transform: rotate(-184deg);
  width: 109%;
} */
.test2 {
  background: #303e4e;
  height: 87px;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.test2::after {
  background: white;
  bottom: 198%;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  right: 100%;
  transform-origin: 100% 99%;
  transform: rotate(-176.1deg);
  width: 142%;
}

@media only screen and (max-width: 1200px) {
  .left-sect10 {
    margin: auto 0;
  }
}

@media only screen and (max-width: 991px) {
  .wrapper-section10 {
    flex-direction: column;
  }
  .right-sect10 {
    width: 100%;
  }
}

@media only screen and (max-width: 768px) {
  .row-logo {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 40px;
    margin: 10% auto;
    justify-items: center;
  }
}
</style>
