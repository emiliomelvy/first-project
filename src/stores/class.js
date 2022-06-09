import { defineStore, storeToRefs } from "pinia";

export const useClassStore = defineStore({
  id: "class",
  state: () => ({
    isActive: "",
    displaySidebar: false,
    sidebar: {
      title: "Learn More",
      learnmore: ["Our Story", "Terms of Use", "Privacy Policy", "Contact Us"],
    },
    positionY: 0,
    displaySideNav: false,
    dropdownMenu: null,
    sideNavComponents: [
      {
        titles: "Demos",
        components: [
          "Demo I",
          "Demo II",
          "Demo III",
          "Demo IV",
          "Demo V",
          "Demo VI",
          "Demo VII",
          "Demo VIII",
          "Demo IX",
          "Demo X",
          "Demo XI",
          "Demo XII",
          "Demo XIII",
          "Demo XIV",
          "Demo XV",
          "Demo XVI",
          "Demo XVII",
          "Demo XVIII",
          "Demo XIX",
          "Demo XX",
          "Demo XXI",
          "Demo XXII",
          "Demo XXIII",
          "Demo XXIV",
          "Demo XXV",
          "Demo XXVI",
          "Demo XXVII",
        ],
      },
      {
        titles: "Pages",
        components: [
          "Services",
          "About",
          "Shop",
          "Contact",
          "Career",
          "Utility",
          "Pricing",
          "One Page",
        ],
      },
    ],
  }),
  actions: {
    changer(lang) {
      this.isActive = lang;
    },
    toggleSidebar() {
      this.displaySidebar = !this.displaySidebar;
    },
    removeSidebar() {
      this.displaySidebar = false;
    },
    toggleSideNav() {
      this.displaySideNav = !this.displaySideNav;
    },
    hideSideNav() {
      this.displaySideNav = false;
    },
    displayDropdown(drop) {
      this.dropdownMenu = this.dropdownMenu === drop ? null : drop;
    },
  },
});
