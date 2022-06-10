import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
// import firebase from "firebase";
import {
  fab,
  faTwitter,
  faFacebook,
  faDribbble,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import {
  faPhone,
  faCircleInfo,
  faArrowRightLong,
  faCircleCheck,
  faCheck,
  faArrowUp,
  faArrowsUpDown,
  faAngleDown,
  faAngleRight,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faPhone,
  faCircleInfo,
  faArrowRightLong,
  faTwitter,
  faFacebook,
  faDribbble,
  faCircleCheck,
  faCheck,
  faInstagram,
  faYoutube,
  faArrowUp,
  faArrowsUpDown,
  faAngleDown,
  faAngleRight,
  faXmark,
  faBars
);

// const firebaseConfig = {
//   apiKey: "AIzaSyCB9VoejZC-QFlHRk0tDLXBhnN8EoX-VEc",
//   authDomain: "landingpage-task.firebaseapp.com",
//   projectId: "landingpage-task",
//   storageBucket: "landingpage-task.appspot.com",
//   messagingSenderId: "674832731616",
//   appId: "1:674832731616:web:e1706bf472538e0b66af85",
//   measurementId: "G-QNKWT5ESKH",
// };

const app = createApp(App);

// firebase.initializeApp(firebaseConfig);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());

app.mount("#app");
