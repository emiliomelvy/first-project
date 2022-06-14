<script>
// import { useCounterStore } from "./stores/counter";
// import Navbar from "./components/Navbar.vue";
// import HeroGrow from "./components/HeroGrow.vue";
// import ServiceCard from "./components/ServiceCard.vue";
// import HeroUrl from "./components/HeroUrl.vue";
// import HeroWorkingSteps from "./components/HeroWorkingSteps.vue";
// import HeroSolutions from "./components/HeroSolutions.vue";
// import ProfileCard from "./components/ProfileCard.vue";
// import HeroControl from "./components/HeroControl.vue";
// import TestimonialCard from "./components/TestimonialCard.vue";
// import CardPlan from "./components/CardPlan.vue";
// import HeroClients from "./components/HeroClients.vue";
// import Footer from "./components/Footer.vue";
// import ProgressScroll from "./components/ProgressScroll.vue";

// const store = useCounterStore();
</script>

<template>
  <!-- <router-link to="/">App</router-link>

  <router-link to="/email">Email</router-link> -->

  <!-- <router-link to="/">Home</router-link> -->

  <!-- <router-link to="/email">Email</router-link> -->

  <router-view></router-view>

  <!-- <router-view /> -->
  <!-- <TestingVue /> -->
  <!-- <Home />
  <Email /> -->
  <!-- <Navbar />
  <HeroGrow />
  <ServiceCard />
  <HeroUrl />
  <HeroWorkingSteps />
  <HeroSolutions />
  <ProfileCard />
  <HeroControl />
  <TestimonialCard />
  <CardPlan />
  <HeroClients />
  <Footer />
  <ProgressScroll /> -->
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap");
* {
  font-family: "Manrope", sans-serif;
  font-weight: bold;
  margin: 0;
  top: 0;
  padding: 0;
}

html {
  overflow-x: hidden;
}

@media only screen and (max-width: 991px) {
  html {
    overflow: scroll;
    overflow-x: hidden;
  }
}
</style>
