<template>
  <div class="wrapper-sect7">
    <div class="left-sect7">
      <h2>Our Solutions</h2>
      <h3>
        We make your <br />
        spending stress-free for <br />
        you to have the perfect control.
      </h3>
      <p>
        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
        ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget
        quam. Praesent commodo cursus.
      </p>
      <div class="table">
        <div class="list1">
          <ul>
            <font-awesome-icon class="icon" icon="circle-check" />
            <li>Aenean quam ornare. Curabitur blandit.</li>
          </ul>
          <ul class="bt-list">
            <font-awesome-icon class="icon" icon="circle-check" />
            <li>Nullam quis risus eget urna mollis ornare.</li>
          </ul>
        </div>
        <div class="list2">
          <ul>
            <font-awesome-icon class="icon" icon="circle-check" />
            <li>Etiam porta euismod malesuada mollis.</li>
          </ul>
          <ul class="bt-list">
            <font-awesome-icon class="icon" icon="circle-check" />
            <li>Vivamus sagittis lacus vel augue rutrum.</li>
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
export default {};
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
.list1 ul {
  display: flex;
  list-style-type: none;
}
.list1 .icon {
  margin: 4px 8px 0 0;
  color: #fde6c6;
}
.list1 li {
  color: #60697b;
  font-weight: 500;
  line-height: 27px;
  font-weight: 500;
}
/* .list2 {
  display: flex;
} */
.list2 ul {
  display: flex;
  list-style-type: none;
}
.list2 .icon {
  margin: 4px 8px 0 0;
  color: #fde6c6;
}
.list2 li {
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
