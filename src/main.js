import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
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

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());

app.mount("#app");
