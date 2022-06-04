<template>
  <div class="wrapper-sect7">
    <div class="left-sect7">
      <h2>{{ header.header }}</h2>
      <h3>
        {{ header.title }}
      </h3>
      <p>
        {{ header.paragraph }}
      </p>
      <div class="table">
        <div
          v-for="(body, index) in body"
          :key="index"
          :class="body.firstClass"
        >
          <ul>
            <font-awesome-icon class="icon" icon="circle-check" />
            <li>{{ body.classList }}</li>
          </ul>
          <ul :class="body.secondClass">
            <font-awesome-icon class="icon" icon="circle-check" />
            <li>{{ body.classBt }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="right-sect7">
      <img src="../assets/img/i8.png" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: {
        header: "OUR SOLUTIONS",
        title:
          "We make your spending stress-free for you to have the perfect control.",
        paragraph:
          "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus.",
      },
      body: [
        {
          firstClass: "list",
          secondClass: "bt-list",
          classList: "Aenean quam ornare. Curabitur blandit.",
          classBt: "Nullam quis risus eget urna mollis ornare.",
        },
        {
          firstClass: "list",
          secondClass: "bt-list",
          classList: "Etiam porta euismod malesuada mollis.",
          classBt: "Vivamus sagittis lacus vel augue rutrum.",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  max-width: 100%;
}
.wrapper-sect7 {
  display: flex;
  gap: 20px;
  margin: 0 5rem;
}

/* LEFT SECTION */
.left-sect7 {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 45%;
}
.left-sect7 h2 {
  text-transform: uppercase;
  color: #aab0bc;
  font-size: 15px;
}
.left-sect7 h3 {
  color: #343f52;
  font-size: 36px;
  font-weight: 900;
}
.left-sect7 p {
  color: #60697b;
  max-width: 81%;
  font-weight: 500;
  line-height: 1.5rem;
}
.table {
  display: flex;
  max-width: 86%;
  gap: 65px;
}
/* .list1 {
  display: flex;
} */
.list ul {
  display: flex;
  list-style-type: none;
}
.list .icon {
  margin: 4px 8px 0 0;
  color: #fde6c6;
}
.list li {
  color: #60697b;
  font-weight: 500;
  line-height: 27px;
  font-weight: 500;
}

.bt-list {
  margin-top: 20px;
}
/* RIGHT SECTION */
.right-sect7 {
  width: 90%;
}
</style>
