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
          { first: "Demo I" },
          { first: "Demo II" },
          { first: "Demo III" },
          { first: "Demo IV" },
          { first: "Demo V" },
          { first: "Demo VI" },
          { first: "Demo VII" },
          { first: "Demo VIII" },
          { first: "Demo IX" },
          { first: "Demo X" },
          { first: "Demo XI" },
          { first: "Demo XII" },
          { first: "Demo XIII" },
          { first: "Demo XIV" },
          { first: "Demo XV" },
          { first: "Demo XVI" },
          { first: "Demo XVII" },
          { first: "Demo XVIII" },
          { first: "Demo XIX" },
          { first: "Demo XX" },
          { first: "Demo XXI" },
          { first: "Demo XXII" },
          { first: "Demo XXIII" },
          { first: "Demo XXIV" },
          { first: "Demo XXV" },
          { first: "Demo XXVI" },
          { first: "Demo XXVII" },
        ],
      },
      {
        titles: "Pages",
        components: [
          { first: "Services", dropMenu: ["Services I", "Services II"] },
          { first: "About", dropMenu: ["About I", "About II"] },
          {
            first: "Shop",
            dropMenu: [
              "Shop I",
              "Shop II",
              "Product Page",
              "Shopping Cart",
              "Checkout",
            ],
          },
          {
            first: "Contact",
            dropMenu: ["Contact I", "Contact II", "Contact III"],
          },
          {
            first: "Career",
            dropMenu: ["Job Listing I", "Job Listing II", "Job Description"],
          },
          {
            first: "Utility",
            dropMenu: [
              "404 Not Found",
              "Page Loader",
              "Sign In I",
              "Sign In II",
              "Sign Up I",
              "Sign Up II",
              "Terms",
            ],
          },
          { first: "Pricing" },
          { first: "One Page" },
        ],
      },
      {
        titles: "Projects",
        components: [
          {
            first: "PROJECT PAGES",
          },
          { first: "Projects I" },
          { first: "Projects II" },
          { first: "Projects III" },
          { first: "Projects IV" },
          {
            first: "SINGLE PROJECTS",
          },
          { first: "Single Project I" },
          { first: "Single Project II" },
          { first: "Single Project III" },
          { first: "Single Project IV" },
        ],
      },
      {
        titles: "Blog",
        components: [
          { first: "Blog without Sidebar" },
          { first: "Blog with Sidebar" },
          { first: "Blog with Left Sidebar" },
          { first: "Blog Posts" },
        ],
      },
      {
        titles: "Blocks",
        components: [
          {
            first: "About",
          },
          {
            first: "Blog",
          },
          {
            first: "Call to Action",
          },
          {
            first: "Clients",
          },
          {
            first: "Contact",
          },
          {
            first: "Facts",
          },
          {
            first: "FAQ",
          },
          {
            first: "Features",
          },
          {
            first: "Footer",
          },
          {
            first: "Hero",
          },
          {
            first: "Misc",
          },
          {
            first: "Navbar",
          },
          {
            first: "Portfolio",
          },
          {
            first: "Pricing",
          },
          {
            first: "Process",
          },
          {
            first: "Team",
          },
          {
            first: "Testimonials",
          },
        ],
      },

      {
        titles: "Documentation",
        components: [
          { first: "USAGE" },
          { first: "Get Started" },
          { first: "Forms" },
          { first: "FAQ" },
          { first: "Changelog" },
          { first: "Credits" },
          { first: "STYLEGUIDE" },
          { first: "Colors" },
          { first: "Fonts" },
          { first: "SVG Icons" },
          { first: "Font Icons" },
          { first: "Illustrations" },
          { first: "Backgrounds" },
          { first: "Misc" },
          { first: "ELEMENTS" },
          { first: "Accordion" },
          { first: "Alerts" },
          { first: "Animations" },
          { first: "Avatars" },
          { first: "Background" },
          { first: "Badges" },
          { first: "Buttons" },
          { first: "Card" },
          { first: "Carousel" },
          { first: "Dividers" },
          { first: "Form Elements" },
          { first: "Image Hover" },
          { first: "Image Mask" },
          { first: "Lightbox" },
          { first: "Media Player" },
          { first: "Modal" },
          { first: "Pagination" },
          { first: "Progressbar" },
          { first: "Shadows" },
          { first: "Shapes" },
          { first: "Tables" },
          { first: "Tabs" },
          { first: "Text Animations" },
          { first: "Text Highlight" },
          { first: "Tiles" },
          { first: "Tooltips & Popovers" },
          { first: "Typography" },
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
    displayComponents(judul) {
      this.dropdownComponents =
        this.dropdownComponents === judul ? null : judul;
    },
  },
});
