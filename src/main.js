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
  faCaretDown,
  faCircleInfo,
  faArrowRightLong,
  faCircleCheck,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(
  faPhone,
  faCaretDown,
  faCircleInfo,
  faArrowRightLong,
  faTwitter,
  faFacebook,
  faDribbble,
  faCircleCheck,
  faCheck,
  faInstagram,
  faYoutube
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

app.use(createPinia());

app.mount("#app");
