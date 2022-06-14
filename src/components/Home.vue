<script setup>
import { useCounterStore } from "../stores/counter";
import Navbar from "./Navbar.vue";
import HeroGrow from "./HeroGrow.vue";
import ServiceCard from "./ServiceCard.vue";
import HeroUrl from "./HeroUrl.vue";
import HeroWorkingSteps from "./HeroWorkingSteps.vue";
import HeroSolutions from "./HeroSolutions.vue";
import ProfileCard from "./ProfileCard.vue";
import HeroControl from "./HeroControl.vue";
import TestimonialCard from "./TestimonialCard.vue";
import CardPlan from "./CardPlan.vue";
import HeroClients from "./HeroClients.vue";
import Footer from "./Footer.vue";
import ProgressScroll from "./ProgressScroll.vue";

const store = useCounterStore();
</script>

<template>
  <Navbar />
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
  <ProgressScroll />
</template>

<style></style>
