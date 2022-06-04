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
        <NavItem />
      </div>
    </div>
    <div class="navbar-other">
      <ul>
        <li class="en">
          EN
          <a class="en" href="#"
            ><font-awesome-icon class="en-icon" icon="angle-down"
          /></a>
          <div class="en-content">
            <ul>
              <li>
                <a
                  @click.prevent="classStore.changer('en')"
                  :class="{ active: classStore.isActive === 'en' }"
                  href="/"
                  >EN</a
                >
              </li>
              <li>
                <a
                  @click.prevent="classStore.changer('de')"
                  :class="{ active: classStore.isActive === 'de' }"
                  href="/"
                  >DE</a
                >
              </li>
              <li>
                <a
                  @click.prevent="classStore.changer('es')"
                  :class="{ active: classStore.isActive === 'es' }"
                  href="/"
                  >ES</a
                >
              </li>
            </ul>
          </div>
        </li>
        <li>
          <a @click="classStore.toggleSidebar()" class="info" href="#"
            ><font-awesome-icon icon="circle-info"
          /></a>
        </li>
        <div class="sidebar_info" :class="{ focus: classStore.displaySidebar }">
          <div class="sidebar-header">
            <div class="header-top">
              <h3>Sandbox</h3>
              <button @click="classStore.removeSidebar()">
                <font-awesome-icon class="fa-icon" icon="xmark" />
              </button>
            </div>
            <p>
              Sandbox is a multipurpose HTML5 template with various layouts
              which will be a great solution for your business.
            </p>
          </div>
          <div class="sidebar-body">
            <div class="contact">
              <h3>Contact Info</h3>
              <p>
                Moonshine St. 14/05 <br />
                Light City, London
              </p>
              <div class="email-num">
                <a href="/"> info@email.com </a>
                00 (123) 456 78 90
              </div>
            </div>
            <div class="learnmore">
              <h4>{{ classStore.sidebar.title }}</h4>
              <ul>
                <li
                  v-for="(list, index) in classStore.sidebar.learnmore"
                  :key="index"
                >
                  <a href="/"> {{ list }} </a>
                </li>
              </ul>
            </div>
            <div class="nav-social">
              <h4>Follow Us</h4>
              <nav class="social">
                <a href="#"
                  ><font-awesome-icon
                    class="social-icon"
                    :icon="{
                      prefix: 'fab',
                      iconName: 'twitter',
                    }" /><font-awesome-icon
                    class="social-icon"
                    :icon="{
                      prefix: 'fab',
                      iconName: 'facebook',
                    }" /><font-awesome-icon
                    class="social-icon"
                    :icon="{
                      prefix: 'fab',
                      iconName: 'dribbble',
                    }" /><font-awesome-icon
                    class="social-icon"
                    :icon="{
                      prefix: 'fab',
                      iconName: 'instagram',
                    }" /><font-awesome-icon
                    class="social-icon"
                    :icon="{ prefix: 'fab', iconName: 'youtube' }"
                /></a>
              </nav>
            </div>
          </div>
        </div>
      </ul>
    </div>
  </header>
  <div
    class="overlay"
    :class="{ focus: classStore.displaySidebar }"
    @click="classStore.removeSidebar()"
  ></div>
</template>

<script setup>
import { useClassStore } from "../stores/class";
import NavItem from "../InsideComponents/Navbar/NavItem.vue";

const classStore = useClassStore();
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap");

.wrapper.is_sticky {
  position: fixed;
  background-color: red;
  z-index: 0;
  top: 0;
  right: 0;
  left: 0;
  /* top: 0;
  right: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  background-color: white;
  -webkit-animation: 0.95s ease-in-out 0s normal none 1 running fadeInDown;
  animation: 0.95s ease-in-out 0s normal none 1 running fadeInDown;
  -webkit-transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
  z-index: 1030; */
}

/* .wrapper.is_sticky:hover {
  z-index: 0;
} */

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 76%;
  height: 5000px;
  z-index: 99;
  transform: translateX(-100%);
}

.overlay.focus {
  transform: translateX(0%);
}

/* KONTEN SIDEBAR */

/* HEADER */
.sidebar_info {
  width: 19rem;
  right: 0;
  background-color: #1a232d;
  overflow-y: scroll;
  position: fixed;
  z-index: 100;
  bottom: 0px;
  box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.5);
  transform: translateX(1000%);
  transition: 1s;
  /* display: none; */
}

.sidebar_info {
  cursor: default;
}

.sidebar_info h3 {
  cursor: auto;
}

.sidebar_info p {
  cursor: auto;
}

.sidebar_info.focus {
  transform: translateX(0%);
  transition: 0.7s ease-in-out;
}
.sidebar-header {
  display: flex;
  flex-direction: column;
  gap: 30px;
  color: #cacaca;
  margin: 20px 30px 0 30px;
}
.header-top {
  display: flex;
  justify-content: space-between;
}
.header-top button {
  font-size: 16px;
  color: white;
  height: 33px;
  width: 33px;
  /* outline: none; */
  background-color: #3e4c5b;
  border-radius: 50%;
  border: 1px solid transparent;
}

.header-top button {
  cursor: pointer;
}

.header-top button:hover {
  background-color: #4c5a68;
}

/* BODY */
.sidebar-header h3 {
  color: white;
  font-size: 25px;
}
.sidebar-header p {
  font-weight: 500;
  font-size: 17px;
  line-height: 25px;
  width: 96%;
}
.sidebar-body .contact {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px 30px 0 30px;
  color: #cacaca;
}
.sidebar-body .contact a {
  text-decoration: none;
  color: #cacaca;
}

.sidebar-body .contact a:hover {
  color: #e2880a;
}
.contact h3 {
  color: white;
  font-size: 20px;
}
.sidebar-body .email-num {
  display: flex;
  flex-direction: column;
}

.learnmore {
  display: flex;
  flex-direction: column;
  margin: 30px 30px 0 30px;
}
.learnmore h4 {
  color: white;
  font-size: 20px;
}

.learnmore ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0 5px -14px;
}
.learnmore ul li a {
  margin-top: 10px;
  text-decoration: none;
  color: #cacaca;
}
.learnmore li a:hover {
  color: #e2880a;
}
/* FOOTER */

.nav-social {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px;
  color: white;
}

.social a {
  display: flex;
  gap: 15px;
  color: white;
}

.social .social-icon:hover {
  transform: translateY(-3px);
  transition: 0.3s;
}

/* -------------- */

/* KONTEN EN */

.en-content ul li a.active {
  text-decoration: none;
  color: #e2880a;
}

.en-content {
  width: 4rem;
  height: 8rem;
  position: absolute;
  top: 4rem;
  left: 64.5rem;
  border-radius: 7px;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  /* opacity: 0;
  z-index: -1; */
  display: none;
}
.en-content ul {
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: center;
  align-items: center;
  height: 120px;
}
.en-content ul li a {
  text-decoration: none;
  color: #343f52;
}
.en:hover .en-content {
  /* opacity: 1;
  z-index: 0;
  transition: 0.5s; */
  display: block;
  animation: fade_in_show 0.5s;
}

.en li a:hover {
  color: #e2880a;
}
.en {
  height: 65px;
  display: flex;
  align-items: center;
}

/* --------- */

.wrapper {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1140px;
  margin: 14px auto;
  position: relative;
}

/* .sticky {
  position: fixed;
  z-index: -1;
} */

.hovered {
  z-index: 0;
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
.nav-item li .fa-icon {
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
