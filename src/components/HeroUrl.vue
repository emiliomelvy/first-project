<template>
  <div class="wrapper-section3">
    <div class="right-section3">
      <img src="../assets/img/i3.png" alt="" />
    </div>
    <div class="left-section3">
      <div class="wrapper-left3">
        <h2>Analyze Now</h2>
        <h3>
          Wonder how much faster your website can go? Easily check your SEO
          Score now.
        </h3>
        <p>
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
          quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur
          et.
        </p>
        <form action="#">
          <input
            v-model="websiteUrl"
            type="url"
            placeholder="Enter Website URL"
          /><button @click.prevent="onSubmit">Check</button>
        </form>
      </div>
    </div>
  </div>
  <!-- POPUP -->
  <div class="popup" :class="{ overlay: openPopup }">
    <font-awesome-icon class="icon" icon="circle-check" />
    <h2>Thank You for Joining!</h2>
    <p class="content">Your Email Has Been Send</p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      websiteUrl: "",
      openPopup: false,
    };
  },
  methods: {
    onSubmit() {
      const webUrl = {
        webUrl: this.websiteUrl,
      };

      if (!this.websiteUrl) {
        alert("Please Insert Website Url!");
      } else {
        axios
          .create({
            baseURL: "https://landingpage-task-default-rtdb.firebaseio.com/",
          })
          .post("web.json", webUrl)
          .then(
            (response) => console.log(response),
            (this.openPopup = !this.openPopup)
          )
          .catch((err) => console.log(err.message));

        this.websiteUrl = "";

        setTimeout(() => {
          this.openPopup = false;
        }, 2000);
      }
    },
  },
};
</script>

<style scoped>
/* POPUP */

.popup {
  width: 200px;
  background: #fff;
  border-radius: 6px;
  position: absolute;
  top: 478rem;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.1);
  text-align: center;
  padding: 15px 30px 30px;
  color: #333;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  visibility: hidden;
  transition: transform 0.4s, top 0.4s;
}

.popup.overlay {
  visibility: visible;
  position: fixed;
  top: 16rem;
  transform: translate(-50%, -50%) scale(1);
  box-shadow: 0 0 0 1000rem rgba(0, 0, 0, 0.5);
}

.popup .icon {
  font-size: 32px;
}

/* ----- */
.wrapper-section3 {
  display: flex;
  gap: 2rem;
  margin: 5rem;
  margin: 10rem 5rem;
}

.left-section3 {
  width: 55%;
}
.left-section3 h2 {
  text-transform: uppercase;
  font-size: 15px;
  color: #a9a9a9;
}
.left-section3 h3 {
  font-size: 39px;
  color: #343f52;
  line-height: 50px;
}
.left-section3 p {
  color: #60697b;
  font-weight: 500;
  line-height: 30px;
  font-size: 17px;
}
.left-section3 .wrapper-left3 form {
  display: flex;
}
.left-section3 input {
  padding: 15px 30px;
  border: 0px solid white;
  background-color: whitesmoke;
  border-radius: 8px 0 0 8px;
}
.left-section3 button {
  padding: 15px 30px;
  font-size: 13px;
  color: #fff;
  background-color: #fab758;
  border: 1px solid #fab758;
  border-radius: 0 8px 8px 0;
}
.left-section3 button:hover {
  cursor: pointer;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
}

.wrapper-left3 {
  display: flex;
  flex-direction: column;
  gap: 28.5px;
}

.right-section3 img {
  width: 100%;
}

@media only screen and (max-width: 1200px) {
  .wrapper-section3 {
    /* width: 97.1%; */
    margin: 30rem 5rem 10rem 5rem;
  }
  .right-section3 img {
    min-width: 300px;
    min-height: 300px;
    margin-top: 70px;
  }
}

@media only screen and (max-width: 991px) {
  .wrapper-section3 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-left: 4%;
    margin-right: 0;
  }
  .wrapper-section3 .left-section3 {
    width: 100%;
  }

  .wrapper-section3 .right-section3 {
    width: 60%;
  }

  .wrapper-section3 .right-section3 img {
    min-width: 0;
    min-height: 0;
    margin-top: 0;
  }

  .wrapper-left3 {
    align-items: center;
  }

  .left-section3 h2 {
    text-align: center;
  }

  .left-section3 h3 {
    text-align: justify;
    width: 80%;
  }
  .left-section3 p {
    text-align: justify;
    width: 80%;
  }

  .left-section3 .wrapper-left3 form {
    justify-content: center;
    width: 78%;
  }
  .left-section3 input {
    width: 70%;
  }
}

@media only screen and (max-width: 768px) {
  .wrapper-section3 {
    margin: 80rem auto 10rem;
  }
}

@media only screen and (max-width: 415px) {
  .wrapper-section3 .right-section3 {
    width: 80%;
  }
}
</style>
