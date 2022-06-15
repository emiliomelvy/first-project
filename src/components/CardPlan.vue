<template>
  <div class="wrapper-section9">
    <div class="left-sect9">
      <h2>Our Pricing</h2>
      <h3>We offer great and premium prices.</h3>
      <p>
        Enjoy a <a href="#">free 30-day trial</a> and experience the full
        service. No credit card required!
      </p>
      <a class="rounded-pill" href="#">See All Prices</a>
    </div>
    <div class="right-sect9">
      <div class="switcher">
        <p>Monthly</p>
        <label class="switch">
          <input @click="changePrice" type="checkbox" />
          <span class="slider"></span>
        </label>
        <p>
          Yearly
          <span>(Save 30%)</span>
        </p>
      </div>
      <div class="card-wrapper">
        <div
          v-for="(card, index) in cards"
          :key="index"
          :class="card.classBody"
        >
          <div :class="card.classPrice">
            <span
              v-if="changer"
              class="showingAnimation"
              :class="card.classCurrency"
              >{{ card.currency }}</span
            >
            <span v-else class="showingAnimation" :class="card.classCurrency">{{
              card.currency
            }}</span>
            <span
              v-if="changer"
              class="showingAnimation"
              :class="card.classValue"
              >{{ card.value }}</span
            >
            <span v-else class="showingAnimation" :class="card.classValue">{{
              card.secondValue
            }}</span>
            <span
              v-if="changer"
              class="showingAnimation"
              :class="card.classDuration"
              >{{ card.duration }}</span
            >
            <span v-else class="showingAnimation" :class="card.classDuration">{{
              card.secondDuration
            }}</span>
          </div>
          <h4 :class="card.classPlan">{{ card.plan }}</h4>
          <div :class="card.classBenefits">
            <ul>
              <font-awesome-icon class="icon" icon="check" />
              <li class="">
                <strong>{{ card.numProject }}</strong> {{ card.project }}
              </li>
            </ul>
            <ul>
              <font-awesome-icon class="icon" icon="check" />
              <li class="">
                <strong>{{ card.numAPI }}</strong> {{ card.API }}
              </li>
            </ul>
            <ul>
              <font-awesome-icon class="icon" icon="check" />
              <li class="">
                <strong>{{ card.numStorage }}</strong> {{ card.storage }}
              </li>
            </ul>
            <ul>
              <font-awesome-icon class="icon" icon="check" />
              <li class="">
                {{ card.totalReport }} <strong>{{ card.report }}</strong>
              </li>
            </ul>
            <ul>
              <font-awesome-icon class="icon" icon="check" />
              <li class="">
                {{ card.hour }} <strong>{{ card.supp }}</strong>
              </li>
            </ul>
          </div>
          <!-- </ul> -->
          <a href="#" :class="card.pill">Choose Plan</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changer: true,
      cards: [
        {
          classBody: "card-body1",
          classPlan: "card-plan1",
          classBenefits: "benefits1",
          classPrice: "price1",
          classCurrency: "price-currency1",
          classValue: "price-value1",
          classDuration: "price-duration1",
          currency: "$",
          value: "19",
          secondValue: "199",
          duration: "/mo",
          secondDuration: "/yr",
          plan: "Premium Plan",
          numProject: "5",
          project: "Projects",
          numAPI: "100K",
          API: "API Access",
          numStorage: "200MB",
          storage: "Storage",
          totalReport: "Weekly",
          report: "Reports",
          hour: "7/24",
          supp: "Support",
          pill: "rounded-pill",
        },
        {
          classBody: "card-body2",
          classPlan: "card-plan2",
          classBenefits: "benefits2",
          classPrice: "price2",
          classCurrency: "price-currency2",
          classValue: "price-value2",
          classDuration: "price-duration2",
          currency: "$",
          value: "49",
          secondValue: "499",
          duration: "/mo",
          secondDuration: "/yr",
          plan: "Corporate Plan",
          numProject: "20",
          project: "Projects",
          numAPI: "300K",
          API: "API Access",
          numStorage: "500MB",
          storage: "Storage",
          totalReport: "Weekly",
          report: "Reports",
          hour: "7/24",
          supp: "Support",
          pill: "rounded-pill",
        },
      ],
    };
  },
  methods: {
    changePrice() {
      this.changer = !this.changer;
    },
  },
};
</script>

<style scoped>
.wrapper-section9 {
  display: flex;
  gap: 20px;
  margin: 5rem 4rem;
}

/* LEFT SECTION */

.left-sect9 {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 9rem;
}

.left-sect9 h2 {
  color: #aab0bc;
  font-size: 16px;
}
.left-sect9 h3 {
  color: #343f52;
  font-size: 38px;
}
.left-sect9 p {
  color: #60697b;
  font-size: 17px;
  font-weight: 500;
  line-height: 30px;
}
.left-sect9 p a {
  text-decoration: none;
  color: #fab758;
}

/* RIGHT SECTION */
.card-wrapper {
  display: flex;
  /* gap: 30px; */
}
.switcher {
  display: flex;
  justify-content: right;
  gap: 6px;
  margin-bottom: 30px;
  color: #60697b;
  font-weight: 400;
}
.switch:hover {
  cursor: pointer;
}

.switcher span {
  color: #e2626b;
}
.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 30px;
  margin: 0 10px;
}
.slider {
  position: absolute;
  cursor: pinter;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}
.switch input {
  display: none;
}
.slider::before {
  position: absolute;
  content: "";
  height: 23px;
  width: 23px;
  left: 5px;
  bottom: 4px;
  background-color: #fab758;
  transition: 0.4s;
  border-radius: 50px;
}
/* input:checked + .slider {
  background-color: #ff278c;
} */
input:checked + .slider::before {
  transform: translateX(18px);
}
.card-body1 {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 25px 0 0 40px;
  height: 31rem;
  width: 17rem;
  border-radius: 8px;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
}

.card-body1 .price1 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-body1 .rounded-pill {
  margin: 0 auto;
}
.price-currency1 {
  color: #343f52;
}
.price-value1 {
  color: #343f52;
  font-size: 45px;
}
.price-duration1 {
  color: #60697b;
}
.card-plan1 {
  color: #343f52;
  margin-bottom: 40px;
  font-size: 18.5px;
}
.benefits1 {
  margin: 0 auto 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.benefits1 ul {
  list-style-type: none;
  display: flex;
  gap: 8px;
  justify-content: left;
}
.benefits1 li {
  color: #60697b;
  font-weight: 500;
}
.benefits1 .icon {
  margin-top: 2px;
  color: #fab758;
}

.card-body2 {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 0 0 0 40px;
  height: 34rem;
  width: 17rem;
  border-radius: 8px;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
}

.card-body2 .price2 {
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-body2 .rounded-pill {
  margin: 0 auto;
}
.price-currency2 {
  color: #343f52;
}
.price-value2 {
  color: #343f52;
  font-size: 45px;
}
.price-duration2 {
  color: #60697b;
}
.card-plan2 {
  color: #343f52;
  margin-bottom: 40px;
  font-size: 18.5px;
}
.benefits2 {
  margin: 0 auto 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.benefits2 ul {
  list-style-type: none;
  display: flex;
  gap: 8px;
  justify-content: left;
}
.benefits2 li {
  color: #60697b;
  font-weight: 500;
}
.benefits2 .icon {
  margin-top: 2px;
  color: #fab758;
}
.rounded-pill {
  text-decoration: none;
  background-color: #fab758;
  color: white;
  display: flex;
  justify-content: center;
  line-height: 2.8rem;
  border-radius: 30px;
  width: 10rem;
  height: 3rem;
}

.rounded-pill:hover {
  transform: translateY(-3px);
  transition: 0.3s;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
}

.showingAnimation {
  animation: fade_in_show 0.5s;
}
@keyframes fade_in_show {
  0% {
    opacity: 0;
    transform: translateY(-50px) scale(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0px) scale(1);
  }
}

@media only screen and (max-width: 991px) {
  .wrapper-section9 {
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  }

  .left-sect9 {
    margin-top: 0;
  }
  .switcher {
    justify-content: left;
  }

  .card-body1 {
    margin: 0 0 0 40px;
    height: 34rem;
    width: 20rem;
  }
  .card-body2 {
    width: 20rem;
  }
}

@media only screen and (max-width: 768px) {
  .card-wrapper {
    flex-direction: column;
    gap: 20px;
  }

  .card-body1 {
    width: 80%;
  }
  .card-body2 {
    width: 80%;
  }
}

@media only screen and (max-width: 415px) {
  .card-body1 {
    margin: 0 auto;
    width: 100%;
  }
  .card-body2 {
    margin: 0 auto;
    width: 100%;
  }
}
</style>
