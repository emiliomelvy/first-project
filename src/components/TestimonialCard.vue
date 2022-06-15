<template>
  <div class="wrapper-sect8">
    <div class="left-sect8">
      <div class="card">
        <div
          v-for="(card, index) in cards"
          :key="index"
          :class="card.classBody"
        >
          <div :class="card.classWrapper">
            <p :class="card.classQuote">
              {{ card.paragraph }}
            </p>
            <h5>{{ card.name }}</h5>
            <p :class="card.classJob">{{ card.job }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="right-sect8">
      <h2>Our Community</h2>
      <h3>
        Don't take our word for it. See what customers are saying about us.
      </h3>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
        magna, vel scelerisque <br />
        nisl consectetur et. Nulla vitae elit libero, a pharetra augue. Maecenas
        faucibus mollis interdum. <br />
        Vestibulum id ligula porta felis euismod.
      </p>
      <div class="hover-a">
        <a href="#">All Testimonials</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          classBody: "card-body1",
          classWrapper: "wrapper-cb1",
          classQuote: "quote1",
          classJob: "job1",
          paragraph:
            "Cum sociis natoque penatibus et magnis dis parturient montes.",
          name: "Coriss Ambady",
          job: "Financial Analyst",
        },
        {
          classBody: "card-body2",
          classWrapper: "wrapper-cb2",
          classQuote: "quote2",
          classJob: "job2",
          paragraph:
            "“Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod.”",
          name: "Cory Zamora",
          job: "Marketing Specialist",
        },
        {
          classBody: "card-body3",
          classWrapper: "wrapper-cb3",
          classQuote: "quote3",
          classJob: "job3",
          paragraph:
            "  “Donec id elit non porta gravida at eget metus. Duis mollis est luctus commodo nisi erat.”",
          name: "Barclay Widerski",
          job: "Sales Specialist",
        },
        {
          classBody: "card-body4",
          classWrapper: "wrapper-cb4",
          classQuote: "quote4",
          classJob: "job4",
          paragraph:
            "  “Nisi erat porttitor ligula, eget lacinia odio sem nec elit. Aenean eu leo pellentesque.”",
          name: "Jackie Sanders",
          job: "Investment Planner",
        },
      ],
    };
  },
};
</script>

<style scoped>
.wrapper-sect8 {
  display: flex;
  margin: 13rem 4rem;
  gap: 45px;
}

/* LEFT SECTION */

.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 25px;
}

.card-body1 {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 64px 0 0;
  height: 17rem;
  width: 17rem;
  border-radius: 8px;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
}
.card-body1 .wrapper-cb1 {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.wrapper-cb1 .quote1 {
  color: #60697b;
  font-size: 18px;
  text-align: left;
  padding: 0 50px;
  font-weight: 400;
  line-height: 30px;
}
.wrapper-cb1 h5 {
  color: #343f52;
  font-size: 19px;
  padding-left: 50px;
  text-align: left;
  margin-top: 10px;
}
.wrapper-cb1 .job1 {
  color: #60697b;
  text-align: left;
  padding-left: 50px;
  font-size: 17px;
  font-weight: 500;
}

.card-body2 {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 21rem;
  width: 17rem;
  margin-left: -40px;
  border-radius: 8px;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
}
.card-body2 .wrapper-cb2 {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.wrapper-cb2 .quote2 {
  color: #60697b;
  font-size: 18px;
  text-align: left;
  padding: 0 28px;
  /* max-width: 25rem; */
  font-weight: 400;
  line-height: 30px;
}
.wrapper-cb2 h5 {
  color: #343f52;
  font-size: 19px;
  padding-left: 28px;
  text-align: left;
  margin-top: 10px;
}
.wrapper-cb2 .job2 {
  color: #60697b;
  text-align: left;
  padding-left: 28px;
  font-size: 17px;
  font-weight: 500;
}

.card-body3 {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  margin: 0 0 0 40px;
  height: 21rem;
  width: 17rem;
  border-radius: 8px;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
}
.card-body3 .wrapper-cb3 {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.wrapper-cb3 .quote3 {
  color: #60697b;
  font-size: 18px;
  text-align: left;
  padding: 0 55px;
  font-weight: 400;
  line-height: 30px;
}
.wrapper-cb3 h5 {
  color: #343f52;
  font-size: 19px;
  padding-left: 55px;
  text-align: left;
  margin-top: 10px;
}
.wrapper-cb3 .job3 {
  color: #60697b;
  text-align: left;
  padding-left: 55px;
  font-size: 17px;
  font-weight: 500;
}

.card-body4 {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 17rem;
  width: 19rem;
  border-radius: 8px;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
}
.card-body4 .wrapper-cb4 {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.wrapper-cb4 .quote4 {
  color: #60697b;
  font-size: 18px;
  text-align: left;
  padding: 0 47px;
  /* max-width: 25rem; */
  font-weight: 400;
  line-height: 30px;
}
.wrapper-cb4 h5 {
  color: #343f52;
  font-size: 19px;
  padding-left: 47px;
  text-align: left;
  margin-top: 10px;
}
.wrapper-cb4 .job4 {
  color: #60697b;
  text-align: left;
  padding-left: 47px;
  font-size: 17px;
  font-weight: 500;
}
/* RIGHT SECTION */

.right-sect8 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  width: 95%;
}

.right-sect8 h2 {
  color: #aab0bc;
  font-size: 16px;
}
.right-sect8 h3 {
  font-size: 38px;
  color: #343f52;
}
.right-sect8 p {
  font-size: 17px;
  color: #60697b;
  font-weight: 500;
  line-height: 30px;
  /* max-width: 85%; */
}

.right-sect8 a {
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

.right-sect8 a:hover {
  transform: translateY(-3px);
  transition: 0.3s;
  box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
}

@media only screen and (max-width: 1200px) {
  .card-body2 {
    margin-left: 0;
  }
  .card-body3 {
    margin-left: 0;
  }
  .card-body4 {
    height: 21rem;
  }
}

@media only screen and (max-width: 991px) {
  .wrapper-sect8 {
    flex-direction: column;
    margin: 8rem auto;
  }

  .left-sect8 {
    margin: 0 auto;
  }
  .right-sect8 {
    margin: 0 auto;
    width: 80%;
  }
}

@media only screen and (max-width: 768px) {
  .card {
    display: flex;
    flex-direction: column;
  }

  .card-body1 {
    width: 80%;
    margin: 0 auto;
    height: 13rem;
  }
  .card-body2 {
    width: 80%;
    margin: 0 auto;
    height: 13rem;
  }
  .card-body3 {
    width: 80%;
    margin: 0 auto;
    height: 13rem;
  }
  .card-body4 {
    width: 80%;
    margin: 0 auto;
    height: 13rem;
  }
}

@media only screen and (max-width: 415px) {
  .card-body2 {
    height: 18rem;
  }

  .card-body3 {
    height: 18rem;
  }

  .card-body4 {
    height: 16rem;
  }
}
</style>
