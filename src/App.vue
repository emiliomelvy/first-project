<script setup>
import { useCounterStore } from "./stores/counter";
import Navbar from "./components/Navbar.vue";
import Section1 from "./components/Section1.vue";
import Section2 from "./components/Section2.vue";
import Section3 from "./components/Section3.vue";
import Section4 from "./components/Section4.vue";
import Section5 from "./components/Section5.vue";
import Section6 from "./components/Section6.vue";
import Section7 from "./components/Section7.vue";
import Section8 from "./components/Section8.vue";
import Section9 from "./components/Section9.vue";
import Section10 from "./components/Section10.vue";
import Footer from "./components/Footer.vue";

const store = useCounterStore();
</script>

<template>
  <!-- <font-awesome-icon :icon="['fas', 'phone']" />
  <font-awesome-icon icon="caret-down" /> -->
  <Navbar />
  <Section1 />
  <Section2 />
  <Section3 />
  <Section4 />
  <Section5 />
  <Section6 />
  <Section7 />
  <Section8 />
  <Section9 />
  <Section10 />
  <Footer />
  <!-- <HelloWorldVue /> -->
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap");
* {
  font-family: "Manrope", sans-serif;
  font-weight: bold;
  margin: 0;
  top: 0;
  padding: 0;
  /* background-color: rgb(250, 248, 245); */
}
</style>
