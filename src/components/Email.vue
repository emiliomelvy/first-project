<template>
  <router-link to="/">
    <a class="rounded-pill">Back to Home</a>
  </router-link>
  <h1 @click="onClick">Email List: {{ email }}</h1>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: [],
    };
  },

  methods: {
    onClick() {
      axios
        .create({
          baseURL: "https://landingpage-task-default-rtdb.firebaseio.com/",
        })
        .get("email.json")
        .then((response) => {
          Object.keys(response.data).forEach((x) => {
            this.email.push(response.data[x].email);
          });
        })
        .catch((err) => err.message);
    },
  },
};
</script>

<style scoped>
.rounded-pill {
  text-decoration: none;
  color: #fff;
  background-color: #fab758;
  padding: 15px 24px;
  border-radius: 30px;
  text-align: center;
  display: inline-block;
  font-size: 17px;
}

.rounded-pill:hover {
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.2);
  transform: translateY(-0.25em);
  transition: 0.5s;
}
</style>
