<template>
  <div class="wrapper-section4">
    <div class="left-section4">
      <h2>Our Strategy</h2>
      <h3>Here are 3 working steps to organize our business projects.</h3>
      <p>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
        vestibulum. Etiam porta sem malesuada magna mollis euismod. Nullam id
        dolor id nibh ultricies vehicula ut id elit. Nullam quis risus eget urna
        mollis.
      </p>
      <p>
        Nullam id dolor id nibh ultricies vehicula ut id elit. Vestibulum id
        ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed
        consectetur.
      </p>
      <a href="#">Learn More</a>
    </div>
    <div class="right-section4">
      <div class="card4-1-body">
        <span class="icon">
          <span class="number"> 01 </span>
        </span>
        <div class="text">
          <h4>Collect Ideas</h4>
          <p>
            Nulla vitae elit libero pharetra augue <br />
            dapibus.
          </p>
        </div>
      </div>
      <div class="card4-2-body">
        <span class="icon">
          <span class="number"> 02 </span>
        </span>
        <div class="text">
          <h4>Data Analysis</h4>
          <p>
            Vivamus sagittis lacus vel augue <br />
            laoreet.
          </p>
        </div>
      </div>
      <div class="card4-3-body">
        <span class="icon">
          <span class="number"> 03 </span>
        </span>
        <div class="text">
          <h4>Finalize Product</h4>
          <p>Cras mattis consectetur purus sit amet.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper-section4 {
  display: flex;
  margin: 0 5rem;
  gap: 20px;
}

/* LEFT SECTION */
.left-section4 {
  width: 55%;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.left-section4 h2 {
  color: #aab0bc;
  text-transform: uppercase;
  font-size: 15px;
}
.left-section4 h3 {
  font-size: 37px;
  max-width: 90%;
  color: #343f52;
}
.left-section4 p {
  color: #60697b;
  max-width: 90%;
  line-height: 30px;
  font-size: 17px;
  font-weight: 500;
}
.left-section4 a {
  text-align: center;
  text-decoration: none;
  width: 100px;
  height: 27px;
  padding: 10px 24px;
  background-color: #fab758;
  color: white;
  border: 1px solid #fab758;
  border-radius: 40px;
  font-size: 17px;
}
.left-section4 a:hover {
  cursor: pointer;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  transform: translateY(-0.25rem);
}
/* RIGHT SECTION */

/* Card 1 */
.card4-1-body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 15px;
  width: 30rem;
  height: 9rem;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;
  background-color: white;
  border-radius: 10px;
}
.card4-1-body .text {
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-right: 90px;
}
.card4-1-body h4 {
  background-color: white;
  color: #343f52;
  font-size: 20px;
}
.card4-1-body p {
  background-color: white;
  color: #60697b;
  font-size: 15px;
  font-weight: 500;
}
.icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: #fde6c6;
  border-radius: 100%;
  margin: 0px 5px 20px 0;
}
.text h4 {
  margin-bottom: 10px;
  line-height: 30px;
}
.text p {
  line-height: 25px;
}
.icon .number {
  color: #fab758;
  background-color: transparent;
}

/* Card 2 */
.card4-2-body {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 45px 0 45px 45px;
  gap: 15px;
  width: 30rem;
  height: 9rem;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;
  background-color: white;
  border-radius: 10px;
}
.card4-2-body .text {
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-right: 90px;
}
.card4-2-body h4 {
  background-color: white;
  color: #343f52;
  font-size: 20px;
}
.card4-2-body p {
  background-color: white;
  color: #60697b;
  font-size: 15px;
  font-weight: 500;
}
/* Card 3 */

.card4-3-body {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  width: 30rem;
  height: 7.5rem;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  border: 1px solid transparent;
  background-color: white;
  border-radius: 10px;
}
.card4-3-body .text {
  display: flex;
  flex-direction: column;
  background-color: white;
  margin-right: 90px;
}
.card4-3-body h4 {
  background-color: white;
  color: #343f52;
  font-size: 20px;
}
.card4-3-body p {
  background-color: white;
  color: #60697b;
  font-size: 15px;
  font-weight: 500;
}
</style>
