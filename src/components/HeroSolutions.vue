<template>
  <div class="wrapper-section5">
    <div class="left-sect5">
      <img src="../assets/img/i62x.png" alt="" />
    </div>
    <div class="right-sect5">
      <h2>Why choose us?</h2>
      <h3>We bring solutions to make life easier for our clients.</h3>
      <div class="card-header">
        <div
          v-for="(sol, index) in sectionStore.solutions"
          :key="index"
          class="wrapper-btn"
        >
          <div @click="sectionStore.showText(sol.titles)" class="card-btn">
            <font-awesome-icon
              class="icon"
              :class="{ iconActive: sectionStore.isActive === sol.titles }"
              icon="angle-down"
            />
            <button>{{ sol.titles }}</button>
          </div>
          <div
            :class="{ active: sectionStore.isActive === sol.titles }"
            class="card-body1"
          >
            <p>
              {{ sol.paragraph }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useSectionStore } from "@/stores/useSectionStore";
export default {
  setup() {
    const sectionStore = useSectionStore();
    return {
      sectionStore,
    };
  },
};
</script>

<style scoped>
.wrapper-btn .active {
  display: block;
  animation: fade_in_show 0.5s;
}

.iconActive {
  transform: rotateX(180deg);
  animation: fade_in_show 0.5s;
}

.wrapper-btn .show {
  display: none;
}
.wrapper-btn .hide {
  display: block;
}
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
  min-width: 49.5%;
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
.card-btn {
  display: flex;
  gap: 10px;
  font-size: 18px;
}
.card-btn button {
  background-color: white;
}
.card-btn .icon {
  margin-top: 5px;
  color: #e2880a;
  /* transform: rotateX(180deg); */
}
.card-btn:hover {
  cursor: pointer;
  color: #e2880a;
}
.card-btn button:hover {
  cursor: pointer;
  color: #e2880a;
}

.card-header button {
  color: #343f52;
  margin-bottom: 20px;
  border: none;
  font-size: 18px;
}
.card-body1 {
  display: none;
  animation: fade_in_show 0.5s;
}

.card-body1 p {
  color: #60697b;
  max-width: 75%;
  margin-left: 22px;
  margin-bottom: 20px;
  line-height: 1.95rem;
  font-weight: 500;
  font-size: 17px;
}

@keyframes fade_in_show {
  0% {
    opacity: 0;
    transform: translateY(50px) scale(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
}

@media only screen and (max-width: 991px) {
  .wrapper-section5 {
    display: flex;
    flex-direction: column;
    width: 80%;
  }
}
</style>
