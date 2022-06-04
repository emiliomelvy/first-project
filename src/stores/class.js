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
  },
});
