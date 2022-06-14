import { defineStore, storeToRefs } from "pinia";

export const useSectionStore = defineStore({
  id: "section",
  state: () => ({
    isActive: null,
    solutions: [
      {
        titles: "Professional Design",
        paragraph:
          "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
      },
      {
        titles: "Top-Notch Support",
        paragraph:
          "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
      },
      {
        titles: "Header and Slider Option",
        paragraph:
          "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum. Praesent commodo cursus magna, vel.",
      },
    ],
  }),
  actions: {
    showText(text) {
      this.isActive = this.isActive === text ? null : text;
    },
  },
});
