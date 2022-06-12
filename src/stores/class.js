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
    dropdownComponents: null,
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
        dropMenu: "",
      },
      {
        titles: "Pages",
        components: [
          { first: "Services", dropMenu: ["Services I", "Services II"] },
          { first: "About", dropMenu: ["About I", "About II"] },
          // "Services",
          // "About",
          // "Shop",
          // "Contact",
          // "Career",
          // "Utility",
          // "Pricing",
          // "One Page",
        ],
        // dropMenu: [
        //   { services: ["Services I", "Services II"] },
        //   { about: ["About I", "About II"] },
        //   { shop: ["About I", "About II"] },
        //   { contact: ["About I", "About II"] },
        //   { career: ["About I", "About II"] },
        //   { utility: ["About I", "About II"] },
        //   { pricing: ["About I", "About II"] },
        //   { onepage: ["About I", "About II"] },
        // ],
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
    displayComponents(judul) {
      this.dropdownComponents =
        this.dropdownComponents === judul ? null : judul;
    },
  },
});
