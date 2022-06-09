import { defineStore, storeToRefs } from "pinia";

export const useSectionStore = defineStore({
  id: "section",
  state: () => ({
    isActive: null,
  }),
  actions: {
    showText(text) {
      this.isActive = this.isActive === text ? null : text;
    },
  },
});
