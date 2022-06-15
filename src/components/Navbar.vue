<template>
  <header :class="positionY > 400 ? 'is_sticky' : ''" class="wrapper">
    <div class="navbar-logo">
      <router-link to="/">
        <a>
          <img
            class="sandbox-logo"
            src="../assets/img/logo-dark.png"
            alt="sandbox"
          />
        </a>
      </router-link>
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
        <li class="hamburger-menu">
          <a @click.prevent="classStore.toggleSideNav()" href="">
            <font-awesome-icon icon="bars" />
          </a>
        </li>
        <div :class="{ onFocus: classStore.displaySideNav }" class="sidebarNav">
          <div class="navHeader">
            <h3>Sandbox</h3>
            <button @click="classStore.hideSideNav">
              <font-awesome-icon class="fa-icon" icon="xmark" />
            </button>
          </div>
          <div class="navBody">
            <ul class="navbarNav">
              <div class="navDropdown">
                <li
                  class="navbarNavList"
                  v-for="(title, index) in classStore.sideNavComponents"
                  :key="index"
                >
                  <div>
                    <span
                      @click.prevent="classStore.displayDropdown(title.titles)"
                    >
                      {{ title.titles }}
                      <font-awesome-icon class="fa-icon" icon="angle-down" />
                    </span>
                    <div>
                      <ul>
                        <li
                          class="dropdown"
                          v-for="(component, index) in title.components"
                          :key="index"
                          :class="{
                            showDrop: classStore.dropdownMenu == title.titles,
                          }"
                          @click="classStore.displayComponents(component.first)"
                        >
                          {{ component.first }}
                          <font-awesome-icon
                            v-if="component.dropMenu"
                            class="fa-icon"
                            icon="angle-down"
                          />

                          <ul
                            v-for="(listDrop, index) in component.dropMenu"
                            :key="index"
                            class="dropdownComponent"
                            :class="{
                              active:
                                classStore.dropdownComponents ==
                                component.first,
                            }"
                          >
                            <li>{{ listDrop }}</li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </div>
            </ul>
            <div class="contactSideNav">
              <a href="">info@email.com</a>
              00 (123) 456 78 90
            </div>
            <div class="sideNavSocial">
              <nav>
                <a href=""
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
  <div
    :class="{ sideNavFocus: classStore.displaySideNav }"
    class="overlaySidebar"
    @click="classStore.hideSideNav()"
  ></div>
</template>

<script>
import { useClassStore } from "../stores/class";
import { ref, onMounted } from "vue";
import NavItem from "../InsideComponents/Navbar/NavItem.vue";

export default {
  setup() {
    const classStore = useClassStore();

    const positionY = ref(0);

    function posY() {
      positionY.value = window.pageYOffset;
    }

    onMounted(() => {
      window.addEventListener("scroll", posY);
    });

    return {
      classStore,
      positionY,
      posY,
      onMounted,
    };
  },
  components: {
    NavItem,
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap");

.dropdown .dropdownComponent {
  display: none;
}
.dropdown .dropdownComponent.active {
  display: block;
}
.dropdown .dropdownComponent.active li {
  color: white;
  margin-top: 13px;
}

.sidebarNav {
  display: flex;
  flex-direction: column;
  gap: 35px;
  width: 19rem;
  left: 0;
  background-color: #1a232d;
  overflow-y: scroll;
  position: fixed;
  z-index: 100;
  bottom: 0px;
  transform: translateX(-20%);
  padding: 17px;
  /* display: none; */

  position: fixed;
  z-index: 100;
  bottom: 0px;
  box-shadow: 0 0 0 1000px rgba(0, 0, 0, 0.5);
  transform: translateX(-1000%);
  transition: 1s;
}
.sidebarNav.onFocus {
  transform: translateX(0%);
}

.overlaySidebar {
  position: absolute;
  top: 0;
  left: 20rem;
  width: 73%;
  height: 5000px;
  z-index: 99;
  transform: translateX(-1000%);
  transition: 1s;
}

.overlaySidebar.sideNavFocus {
  position: absolute;
  top: 0;
  left: 20rem;
  width: 73%;
  height: 5000rem;
  z-index: 100;
  transform: translateX(0%);
}
.navBody {
  display: flex;
  flex-direction: column;
  gap: 35px;
}
.navHeader {
  display: flex;
  gap: 125px;
}
.navHeader h3 {
  color: white;
  font-size: 28px;
}
.navHeader h3:hover {
  cursor: auto;
}
.navHeader button {
  font-size: 20px;
  color: white;
  height: 40px;
  width: 40px;
  /* outline: none; */
  background-color: #3e4c5b;
  border-radius: 50%;
  border: 1px solid transparent;
}
.navHeader button:hover {
  cursor: pointer;
}
.navbarNav {
  display: flex;
  flex-direction: column;
  gap: 17px;
  font-size: 16px;
}

.navbarNav .navDropdown {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
}

.navbarNav .navDropdown span {
  display: flex;
  width: 18rem;
  justify-content: space-between;
}

.navbarNav .navDropdown .fa-icon {
  font-size: 13px;
}

.navbarNav a {
  color: white;
}

.sidebarNav .navbarNav .navbarNavList {
  color: white;
  display: flex;
  justify-content: space-between;
  margin-left: -11px;
  flex-direction: column;
}

.navbarNavList span {
  margin-bottom: 7px;
}

.navbarNavList ul {
  display: flex;
  flex-direction: column;
}

.contactSideNav {
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;
}
.contactSideNav a {
  text-decoration: none;
  color: white;
}
.contactSideNav a:hover {
  color: #e2880a;
}
.sideNavSocial a {
  color: white;
  display: flex;
  gap: 15px;
  font-size: 18px;
}
.sideNavSocial a .social-icon:hover {
  transform: translateY(-5px);
  transition: 0.2s;
}

.navbarNav .dropdown {
  margin-top: 10px;
  margin-bottom: 8px;
  display: none;
  color: white;
}
.navbarNav .dropdown .fa-icon {
  position: relative;
  top: -21px;
  left: 16.6rem;
}

.navBody .navbarNav .dropdown.showDrop {
  display: flex;
  flex-direction: column;
  align-items: start;
}

/* ------------------- */

.wrapper.is_sticky {
  position: sticky;
  z-index: 99;
  right: auto;
  left: auto;
  background: rgba(255, 255, 255, 0.9);
  /* padding: 5px; */
  width: 100%;
  max-width: 1263px;
  margin: 14px auto;
}

.sandbox-logo {
  margin-left: 60px;
}
.navbar-other .hamburger-menu {
  display: none;
}
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
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
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
  left: 60.5rem;
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
  margin-right: 60px;
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

@media only screen and (max-width: 1200px) {
  /* .wrapper {
    width: 85%;
  } */
}

@media only screen and (max-width: 769px) {
  .wrapper.is_sticky {
    width: 55rem;
  }
}

@media only screen and (max-width: 991px) {
  .wrapper.is_sticky {
    width: 100%;
  }
  .navbar-logo {
    margin: 0;
  }

  .navbar-other {
    margin-right: 0;
  }
  .navbar-other .hamburger-menu {
    display: block;
    margin-top: 17px;
    margin-left: 5px;
  }
  .navbar-other .hamburger-menu a {
    text-decoration: none;
    color: #343f52;
    font-size: 23px;
  }
  .navbar-nav {
    display: none;
  }
}
</style>
