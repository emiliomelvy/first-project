<template>
  <div class="wrapper-sect6">
    <h2>Our Team</h2>
    <h3>
      Think unique and be innovative. <br />
      Make a difference with Sandbox.
    </h3>
    <div class="card">
      <div class="card-body">
        <img src="../assets/img/te1.jpg" alt="" />
        <h4>Coriss Ambady</h4>
        <div class="job">Financial Analyst</div>
        <p>Fermentum massa justo sit amet risus morbi leo.</p>
        <nav class="social">
          <a class="twitter" href="#">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"
          /></a>
          <a class="facebook" href="#"
            ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"
          /></a>
          <a class="dribble" href="#"
            ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'dribbble' }"
          /></a>
        </nav>
      </div>
      <!--  -->
      <!--  -->
      <!--  -->
      <div class="card-body">
        <img src="../assets/img/te2.jpg" alt="" />
        <h4>Cory Zamora</h4>
        <div class="job">Marketing Specialist</div>
        <p>Fermentum massa justo sit amet risus morbi leo.</p>
        <nav class="social">
          <a class="twitter" href="#">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"
          /></a>
          <a class="facebook" href="#"
            ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"
          /></a>
          <a class="dribble" href="#"
            ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'dribbble' }"
          /></a>
        </nav>
      </div>
      <div class="card-body">
        <img src="../assets/img/te3.jpg" alt="" />
        <h4>Nikolas Brooten</h4>
        <div class="job">Sales Manager</div>
        <p>Fermentum massa justo sit amet risus morbi leo.</p>
        <nav class="social">
          <a class="twitter" href="#">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"
          /></a>
          <a class="facebook" href="#"
            ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"
          /></a>
          <a class="dribble" href="#"
            ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'dribbble' }"
          /></a>
        </nav>
      </div>
      <div class="card-body">
        <img src="../assets/img/te4.jpg" alt="" />
        <h4>Jackie Sanders</h4>
        <div class="job">Investment Planner</div>
        <p>Fermentum massa justo sit amet risus morbi leo.</p>
        <nav class="social">
          <a class="twitter" href="#">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"
          /></a>
          <a class="facebook" href="#"
            ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"
          /></a>
          <a class="dribble" href="#"
            ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'dribbble' }"
          /></a>
        </nav>
      </div>
      <!--  -->
      <!--  -->
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper-sect6 {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10rem auto;
  flex-direction: column;
  gap: 30px;
}
.wrapper-sect6 h2 {
  font-size: 18px;
  color: #aab0bc;
}
.wrapper-sect6 h3 {
  font-size: 35px;
  color: #343f52;
  max-width: 50%;
  text-align: center;
}
.wrapper-sect6 .card {
  max-width: 85%;
  display: flex;
  gap: 50px;
}

.card-body {
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
  border-radius: 10px;
  max-width: 250px;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  padding: 2rem;
  gap: 20px;
}

.card-body h4 {
  background-color: white;
  font-size: 1.1rem;
  /* max-width: 70%; */
  color: #343f52;
}
.card-body img {
  max-height: 100px;
  max-width: 100px;
  border-radius: 50%;
}
.card-body .job {
  background-color: white;
  color: #aab0bc;
  font-size: 0.8rem;
  font-weight: 1000;
  text-transform: uppercase;
}
.card-body p {
  background-color: white;
  line-height: 1.6rem;
  color: #60697b;
  font-weight: 500;
}
.card-body .social {
  background-color: white;
  border: none;
  display: flex;
  gap: 15px;
}
.card-body .social a {
  background-color: white;
}
.social .twitter:hover {
  transform: translateY(-5px);
  transition: 0.5s;
}
.social .twitter {
  color: aqua;
  /* background-color: white; */
}
.social .facebook {
  color: #4267b2;
}
.social .facebook:hover {
  transform: translateY(-5px);
  transition: 0.5s;
}
.social .dribble {
  color: deeppink;
}
.social .dribble:hover {
  transform: translateY(-5px);
  transition: 0.5s;
}
</style>
