<template>
  <div class="wrapper-section5">
    <div class="left-sect5">
      <img src="../assets/img/i62x.png" alt="" />
    </div>
    <div class="right-sect5">
      <h2>Why choose us?</h2>
      <h3>We bring solutions to make life easier for our clients.</h3>
      <div class="card-header">
        <div class="card-btn1">
          <font-awesome-icon class="icon" icon="caret-down" />
          <button>Professional Design</button>
        </div>
        <div class="card-body1">
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Cras mattis
            consectetur purus sit amet fermentum. Praesent commodo cursus magna,
            vel.
          </p>
        </div>
        <div class="card-btn2">
          <font-awesome-icon class="icon" icon="caret-down" />
          <button>Top-Notch Support</button>
        </div>
        <!-- <div class="card-body1">
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Cras mattis
            consectetur purus sit amet fermentum. Praesent commodo cursus magna,
            vel.
          </p>
        </div> -->
        <div class="card-btn3">
          <font-awesome-icon class="icon" icon="caret-down" />
          <button>Header and Slider Option</button>
        </div>
        <!-- <div class="card-body1">
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Cras mattis
            consectetur purus sit amet fermentum. Praesent commodo cursus magna,
            vel.
          </p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper-section5 {
  margin: 10rem 40px 0 85px;
  display: flex;
  gap: 50px;
}
/* LEFT SECTION */
.left-sect5 img {
  max-width: 100%;
  max-height: 100%;
  margin-top: 80px;
}

/* RIGHT SECTION */

.right-sect5 {
  /* max-width: 45%; */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.right-sect5 h2 {
  text-transform: uppercase;
  color: #aab0bc;
  font-size: 15px;
}
.right-sect5 h3 {
  font-size: 38px;
  color: #343f52;
  max-width: 85%;
}
.card-btn1 {
  display: flex;
  gap: 10px;
  font-size: 18px;
}
.card-btn1 button {
  background-color: white;
}
.card-btn1 .icon {
  margin-top: 5px;
  color: #e2880a;
  transform: rotateX(180deg);
}
.card-btn1:hover {
  cursor: pointer;
  color: #e2880a;
}
.card-btn1 button:hover {
  cursor: pointer;
  color: #e2880a;
}

.card-btn2 {
  display: flex;
  gap: 10px;
  font-size: 18px;
  margin-top: 20px;
}
.card-btn2 button {
  background-color: white;
}
.card-btn2 .icon {
  margin-top: 2px;
  color: #e2880a;
}
.card-btn2:hover {
  cursor: pointer;
  color: #e2880a;
}
.card-btn2 button:hover {
  cursor: pointer;
  color: #e2880a;
}
.card-btn3 {
  display: flex;
  gap: 10px;
  font-size: 18px;
}
.card-btn3 button {
  background-color: white;
}
.card-btn3 .icon {
  margin-top: 2px;
  color: #e2880a;
}
.card-btn3:hover {
  cursor: pointer;
  color: #e2880a;
}
.card-btn3 button:hover {
  cursor: pointer;
  color: #e2880a;
}

.card-header button {
  color: #343f52;
  margin-bottom: 20px;
  border: none;
  font-size: 18px;
}

.card-body1 p {
  color: #60697b;
  max-width: 75%;
  /* margin: 0 10px 0 20px; */
  margin-left: 22px;
  line-height: 1.95rem;
  font-weight: 500;
  font-size: 17px;
}
</style>
