<template>
  <header class="wrapper">
    <div class="navbar-logo">
      <a href="/">
        <img
          class="sandbox-logo"
          src="../assets/img/logo-dark.png"
          alt="sandbox"
        />
      </a>
    </div>
    <div class="navbar-nav">
      <div class="nav-item-wrapper">
        <ul class="nav-item">
          <li>
            Demos
            <a href="/">
              <font-awesome-icon icon="caret-down" />
            </a>
          </li>
          <li>
            Pages
            <a href="/"><font-awesome-icon icon="caret-down" /></a>
          </li>
          <li>
            Projects
            <a href="/"><font-awesome-icon icon="caret-down" /></a>
          </li>
          <li>
            Blog
            <a href="/"><font-awesome-icon icon="caret-down" /></a>
          </li>
          <li>
            Blocks
            <a href="/"><font-awesome-icon icon="caret-down" /></a>
          </li>
          <li>
            Documentation
            <a href="/"><font-awesome-icon icon="caret-down" /></a>
          </li>
        </ul>
      </div>
    </div>

    <div class="navbar-other">
      <ul>
        <li>
          EN
          <a class="en" href="#"><font-awesome-icon icon="caret-down" /></a>
        </li>
        <li>
          <a class="info" href="#"><font-awesome-icon icon="circle-info" /></a>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap");

.wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin: 32px auto;
}
.navbar-logo {
  display: flex;
}
.navbar-logo a {
  display: flex;
}
.nav-item {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}

.nav-item li {
  display: flex;
  margin-left: 2rem;
  color: #343f52;
  align-items: center;
}
.nav-item li:hover {
  color: #e2880a;
}
.nav-item li a {
  margin-left: 5px;
  color: #e2880a;
  font-size: 13px;
}
.navbar-other {
  cursor: pointer;
}

.navbar-other ul {
  display: flex;
}
.navbar-other li {
  display: flex;
  padding: 0 1rem 0 0.8rem;
  color: #343f52;
  align-items: center;
}

.navbar-other li .en {
  margin-left: 5px;
}

.navbar-other li:hover {
  color: #e2880a;
}
.navbar-other ul li .en {
  color: #e2880a;
  font-size: 13px;
}
.navbar-other ul li .info {
  color: #343f52;
}
.navbar-other ul li .info:hover {
  color: #e2880a;
}
</style>
