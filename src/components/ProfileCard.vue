<template>
  <div class="wrapper-sect6">
    <h2>Our Team</h2>
    <h3>
      Think unique and be innovative. <br />
      Make a difference with Sandbox.
    </h3>
    <div class="card">
      <div v-for="(card, index) in cards" :key="index" class="card-body">
        <img :src="card.image" alt="" />
        <h4>{{ card.name }}</h4>
        <div class="job">{{ card.job }}</div>
        <p>{{ card.paragraph }}</p>
        <nav class="social">
          <a :class="card.social[0]" href="#">
            <font-awesome-icon :icon="{ prefix: 'fab', iconName: 'twitter' }"
          /></a>
          <a :class="card.social[1]" href="#"
            ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'facebook' }"
          /></a>
          <a :class="card.social[2]" href="#"
            ><font-awesome-icon :icon="{ prefix: 'fab', iconName: 'dribbble' }"
          /></a>
        </nav>
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
          name: "Coriss Ambady",
          image: "/src/assets/img/te1.jpg",
          job: "Financial Analyst",
          paragraph: "Fermentum massa justo sit amet risus morbi leo.",
          social: ["twitter", "facebook", "dribble"],
        },
        {
          name: "Cory Zamora",
          image: "/src/assets/img/te2.jpg",
          job: "Marketing Specialist",
          paragraph: "Fermentum massa justo sit amet risus morbi leo.",
          social: ["twitter", "facebook", "dribble"],
        },
        {
          name: "Nikolas Brooten",
          image: "/src/assets/img/te3.jpg",
          job: "Sales Manager",
          paragraph: "Fermentum massa justo sit amet risus morbi leo.",
          social: ["twitter", "facebook", "dribble"],
        },
        {
          name: "Jackie Sanders",
          image: "/src/assets/img/te4.jpg",
          job: "Investment Planner",
          paragraph: "Fermentum massa justo sit amet risus morbi leo.",
          social: ["twitter", "facebook", "dribble"],
        },
      ],
    };
  },
};
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

@media only screen and (max-width: 1200px) {
  /* .wrapper-sect6 {
    width: 97.1%;
  } */
  .wrapper-sect6 .card {
    width: 100%;
    display: grid;
    gap: 30px;
    grid-template-columns: 1fr 1fr;
  }
  .card-body {
    box-shadow: 0 0 20px 2px rgb(0 0 0 / 10%);
    background-color: white;
    border-radius: 10px;
    /* width: 30rem; */
    min-width: 80%;
    /* max-width: 250px; */
    /* min-height: 350px; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    /* align-items: center; */
    padding: 2rem;
    gap: 20px;
  }

  @media only screen and (max-width: 991px) {
    .wrapper-sect6 h3 {
      max-width: 100%;
    }

    .wrapper-sect6 .card {
      margin-left: 4rem;
    }
  }
}

@media only screen and (max-width: 768px) {
  .wrapper-sect6 .card {
    display: flex;
    flex-direction: column;
  }
  .card-body {
    margin: 0 auto;
  }
}
</style>
