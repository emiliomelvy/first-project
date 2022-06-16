<template>
  <ul class="nav-item">
    <li class="demos">
      Demos
      <a href="/">
        <font-awesome-icon class="fa-icon" icon="angle-down" />
      </a>
      <div class="content-scroll">
        <div class="content">
          <img
            v-for="(content, index) in imageSrc"
            :key="index"
            :src="content.image"
            alt=""
          />
        </div>

        <div class="scroll-view">
          <font-awesome-icon class="scroll-icon" icon="arrows-up-down" />
          <p>Scroll to view more</p>
        </div>
      </div>
    </li>
    <li class="pages">
      Pages
      <a href="/"><font-awesome-icon class="fa-icon" icon="angle-down" /></a>
      <div class="pages-dropdown">
        <ul
          v-for="(page, index) in pagesContent"
          :key="index"
          :class="page.classTitle"
        >
          <li>
            <a href="/">{{ page.dropdown }}</a>
            <font-awesome-icon
              v-if="page.dropdownObject"
              :class="page.classIcon"
              icon="angle-right"
            />
          </li>
          <div :class="page.classDiv">
            <li v-for="(object, index) in page.dropdownObject" :key="index">
              <a href="/">{{ object }}</a>
            </li>
          </div>
        </ul>
      </div>
    </li>

    <!-- END OF PAGES CONTENT -->

    <li class="projects">
      {{ projects[0].title }}
      <a href="/"><font-awesome-icon class="fa-icon" icon="angle-down" /></a>
      <div class="projects-wrapper">
        <div class="project-pages">
          <h6>{{ projects[1].dropdownMenu }}</h6>
          <ul>
            <li
              v-for="(project, index) in projects[1].dropdownObject"
              :key="index"
            >
              <a class="project-inside" href="/">{{ project }}</a>
            </li>
          </ul>
        </div>
        <div class="line-inside"></div>
        <div class="single-project">
          <h6>{{ projects[2].dropdownMenu }}</h6>
          <ul>
            <li
              v-for="(project, index) in projects[2].dropdownObject"
              :key="index"
            >
              <a class="single-project-inside" href="/">{{ project }}</a>
            </li>
          </ul>
        </div>
      </div>
    </li>
    <li class="blog">
      {{ blog[0].title }}
      <a href="/"><font-awesome-icon class="fa-icon" icon="angle-down" /></a>
      <div class="blog-dropdown">
        <ul v-for="(blog, index) in blog[1].dropdownMenu" :key="index">
          <li class="blog-without-sidebar">
            <a href="/">{{ blog }}</a>
          </li>
        </ul>
        <ul class="blog-hover">
          <li class="blog-post">
            <a href="/">{{ blog[2].dropdownMenu }}</a>
            <font-awesome-icon class="blog-icon" icon="angle-right" />
          </li>
          <div class="blog-post-content">
            <li v-for="(blog, index) in blog[2].dropdownObject" :key="index">
              <a href="/">{{ blog }}</a>
            </li>
          </div>
        </ul>
      </div>
    </li>
    <li class="blocks">
      Blocks
      <a href="/"><font-awesome-icon class="fa-icon" icon="angle-down" /></a>
      <div class="blocks-wrapper">
        <ul v-for="(block, index) in blocks" :key="index">
          <li>
            <a href="/">
              <div>
                <img :src="block.image" alt="" />
                <span>{{ block.span }}</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </li>
    <li class="documentation">
      {{ documentation[0].title }}
      <a href="/"><font-awesome-icon class="fa-icon" icon="angle-down" /></a>
      <div class="documentation-content">
        <div class="usage-styleguide">
          <h6>{{ documentation[1].dropdownMenu }}</h6>
          <ul class="usage">
            <li
              v-for="(usage, index) in documentation[1].dropdownObject"
              :key="index"
            >
              <a href="/">{{ usage }}</a>
            </li>
          </ul>
          <h6 class="styleguide-h6">{{ documentation[2].dropdownMenu }}</h6>
          <ul class="styleguide">
            <li
              v-for="(styleguide, index) in documentation[2].dropdownObject"
              :key="index"
            >
              <a href="/">{{ styleguide }}</a>
            </li>
          </ul>
        </div>
        <div class="line-blocks"></div>
        <div class="elements-wrapper">
          <h6>{{ documentation[3].dropdownMenu }}</h6>
          <ul class="elements-content">
            <li
              v-for="(element, index) in documentation[3].dropdownObject"
              :key="index"
            >
              <a href="/">{{ element }}</a>
            </li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      imageSrc: [
        { image: "/src/assets/img/dropdown/mi7.jpg" },
        { image: "/src/assets/img/dropdown/mi8.jpg" },
        { image: "/src/assets/img/dropdown/mi9.jpg" },
        { image: "/src/assets/img/dropdown/mi10.jpg" },
        { image: "/src/assets/img/dropdown/mi11.jpg" },
        { image: "/src/assets/img/dropdown/mi12.jpg" },
        { image: "/src/assets/img/dropdown/mi13.jpg" },
        { image: "/src/assets/img/dropdown/mi14.jpg" },
        { image: "/src/assets/img/dropdown/mi15.jpg" },
        { image: "/src/assets/img/dropdown/mi16.jpg" },
        { image: "/src/assets/img/dropdown/mi17.jpg" },
        { image: "/src/assets/img/dropdown/mi18.jpg" },
        { image: "/src/assets/img/dropdown/mi19.jpg" },
        { image: "/src/assets/img/dropdown/mi20.jpg" },
        { image: "/src/assets/img/dropdown/mi21.jpg" },
        { image: "/src/assets/img/dropdown/mi22.jpg" },
        { image: "/src/assets/img/dropdown/mi23.jpg" },
        { image: "/src/assets/img/dropdown/mi24.jpg" },
        { image: "/src/assets/img/dropdown/mi25.jpg" },
        { image: "/src/assets/img/dropdown/mi26.jpg" },
        { image: "/src/assets/img/dropdown/mi27.jpg" },
      ],
      pagesContent: [
        {
          dropdown: "Service",
          dropdownObject: ["Services I", "Services II"],
          classTitle: "services",
          classIcon: "pages-icon1",
          classDiv: "service-wrapper",
        },
        {
          dropdown: "About",
          dropdownObject: ["About I", "About II"],
          classTitle: "about",
          classIcon: "pages-icon2",
          classDiv: "about-wrapper",
        },
        {
          dropdown: "Shop",
          dropdownObject: [
            "Shop I",
            "Shop II",
            "Product Page",
            "Shopping Cart",
            "Checkout",
          ],
          classTitle: "shop",
          classIcon: "pages-icon3",
          classDiv: "shop-wrapper",
        },
        {
          dropdown: "Contact",
          dropdownObject: ["Contact I", "Contact II", "Contact III"],
          classTitle: "contact",
          classIcon: "pages-icon4",
          classDiv: "contact-wrapper",
        },
        {
          dropdown: "Career",
          dropdownObject: [
            "Job Listing I",
            "Job Listing II",
            "Job Description",
          ],
          classTitle: "career",
          classIcon: "pages-icon5",
          classDiv: "career-wrapper",
        },
        {
          dropdown: "Utility",
          dropdownObject: [
            "404 Not Found",
            "Page Loader",
            "Sign In I",
            "Sign In II",
            "Sign Up I",
            "Sign Up II",
            "Terms",
          ],
          classTitle: "utility",
          classIcon: "pages-icon6",
          classDiv: "utility-wrapper",
        },
        {
          dropdown: "Pricing",
        },
        {
          dropdown: "One Page",
        },
      ],
      projects: [
        {
          title: "Projects",
        },
        {
          dropdownMenu: "Project Pages",
          href: "/",
          dropdownObject: [
            "Projects I",
            "Projects II",
            "Projects III",
            "Projects IV",
          ],
        },
        {
          dropdownMenu: "Single Project",
          href: "/",
          dropdownObject: [
            "Single Project I",
            "Single Project II",
            "Single Project III",
            "Single Project IV",
          ],
        },
      ],
      blog: [
        { title: "Blog" },
        {
          dropdownMenu: [
            "Blog Without Sidebar",
            "Blog With Sidebar",
            "Blog With Left Sidebar",
          ],
        },
        {
          dropdownMenu: "Blog Posts",
          dropdownObject: [
            "Post without Sidebar",
            "Post with Sidebar",
            "Post with Left Sidebar",
          ],
        },
      ],
      blocks: [
        {
          image: "/src/assets/img/dropdown/Blocks/block1.svg",
          span: "About",
        },
        {
          image: "/src/assets/img/dropdown/Blocks/block2.svg",
          span: "Blog",
        },
        {
          image: "/src/assets/img/dropdown/Blocks/block3.svg",
          span: "Call to Action",
        },
        {
          image: "/src/assets/img/dropdown/Blocks/block4.svg",
          span: "Clients",
        },
        {
          image: "/src/assets/img/dropdown/Blocks/block5.svg",
          span: "Contact",
        },
        {
          image: "/src/assets/img/dropdown/Blocks/block6.svg",
          span: "Facts",
        },
        {
          image: "/src/assets/img/dropdown/Blocks/block7.svg",
          span: "FAQ",
        },
        {
          image: "/src/assets/img/dropdown/Blocks/block8.svg",
          span: "Features",
        },
        {
          image: "/src/assets/img/dropdown/Blocks/block9.svg",
          span: "Footer",
        },
        {
          image: "/src/assets/img/dropdown/Blocks/block10.svg",
          span: "Hero",
        },
        {
          image: "/src/assets/img/dropdown/Blocks/block11.svg",
          span: "Misc",
        },
        {
          image: "/src/assets/img/dropdown/Blocks/block12.svg",
          span: "Navbar",
        },
        {
          image: "/src/assets/img/dropdown/Blocks/block13.svg",
          span: "Portfolio",
        },
        {
          image: "/src/assets/img/dropdown/Blocks/block14.svg",
          span: "Pricing",
        },
        {
          image: "/src/assets/img/dropdown/Blocks/block15.svg",
          span: "Process",
        },
        {
          image: "/src/assets/img/dropdown/Blocks/block16.svg",
          span: "Team",
        },
        {
          image: "/src/assets/img/dropdown/Blocks/block17.svg",
          span: "Testimonials",
        },
      ],
      documentation: [
        { title: "Documentation" },
        {
          dropdownMenu: "USAGE",
          dropdownObject: [
            "Get Started",
            "Changelog",
            "Forms",
            "Credits",
            "FAQ",
          ],
        },
        {
          dropdownMenu: "STYLEGUIDE",
          dropdownObject: [
            "Colors",
            "Illustrations",
            "Fonts",
            "Backgrounds",
            "SVG Icons",
            "Misc",
            "Font Icons",
          ],
        },
        {
          dropdownMenu: "ELEMENTS",
          dropdownObject: [
            "Accordion",
            "Dividers",
            "Shadows",
            "Alerts",
            "Form Elements",
            "Shapes",
            "Animations",
            "Image Hover",
            "Tables",
            "Avatars",
            "Image Mask",
            "Tabs",
            "Background",
            "Lightbox",
            "Text Animations",
            "Badges",
            "Media Player",
            "Text Highlight",
            "Buttons",
            "Modal",
            "Tiles",
            "Card",
            "Pagination",
            "Tooltips & Popovers",
            "Carousel",
            "Progressbar",
            "Typography",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
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

/* KONTEN DEMO */
.content-scroll {
  display: none;
  /* opacity: 0;
  z-index: -1; */
}
.demos {
  height: 65px;
}
.demos:hover .content-scroll {
  display: block;
  animation: fade_in_show 0.5s;
  /* opacity: 1;
  transition: 0.5s;
  z-index: 1; */
}
.content-scroll img:hover {
  transform: translateY(-7px);
  transition: 0.5s;
}
.content-scroll:hover {
  display: block;
}

.content {
  width: 71.5rem;
  height: 95vh;
  position: absolute;
  top: 4rem;
  left: 5px;
  border-radius: 7px;
  display: grid;
  overflow-y: scroll;
  background-color: #303e4e;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
}
/* .content span {
  margin-top: 10px;
  background-color: blue;
  position: relative;
  grid-row-end: 6;
} */
::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
.content img {
  height: 125px;
  width: 140px;
  margin: 30px 10px 20px 20px;
  border-radius: 10px;
}
.scroll-view {
  position: absolute;
  display: flex;
  justify-content: center;
  top: 625px;
  left: 5px;
  width: 71.5rem;
  border-radius: 7px;
  font-size: 15px;
  gap: 3px;
  background-color: #303e4e;
  padding: 10px 0;
}
.scroll-view p {
  color: #cacaca;
  font-size: 13px;
}
.scroll-view .scroll-icon {
  margin-top: 4px;
  font-size: 13px;
  color: #cacaca;
}

/* ------------ */

/* KONTEN PAGES */
.pages-dropdown {
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
  width: 12rem;
  height: 20rem;
  position: absolute;
  top: 4rem;
  left: 23rem;
  border-radius: 7px;
  /* opacity: 0;
  z-index: -1; */
  display: none;
}
.pages:hover .pages-dropdown {
  /* opacity: 1;
  transition: 0.5s;
  z-index: 1; */
  display: block;
  animation: fade_in_show 0.5s;
}
.pages {
  height: 65px;
}
.pages-dropdown ul li {
  margin: 6px 0 0 27px;
}

.pages-dropdown .service-wrapper {
  position: absolute;
  font-size: 15px;
  left: 13rem;
  top: 1rem;
  height: 6rem;
  width: 11rem;
  background: white;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  /* opacity: 0;
  z-index: -1; */
  display: none;
}
.pages-dropdown .pages-icon1 {
  font-size: 12px;
  margin: 10px 0 0 69px;
}
.pages-dropdown ul {
  width: 14rem;
}
.pages-dropdown .services:hover .service-wrapper {
  /* opacity: 1;
  transition: 0.5s;
  z-index: 0; */
  display: block;
  animation: fade_in_show 0.5s;
}
.pages-dropdown .pages-icon2 {
  font-size: 12px;
  margin: 10px 0 0 79px;
}
.pages-dropdown .about-wrapper {
  position: absolute;
  font-size: 15px;
  left: 13rem;
  top: 2.5rem;
  height: 6rem;
  width: 11rem;
  background: white;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  /* opacity: 0;
  z-index: -1; */
  display: none;
}
.pages-dropdown .about:hover .about-wrapper {
  /* opacity: 1;
  transition: 0.5s;
  z-index: 0; */
  display: block;
  animation: fade_in_show 0.5s;
}
.pages-dropdown .pages-icon3 {
  font-size: 12px;
  margin: 10px 0 0 86px;
}
.pages-dropdown .shop-wrapper {
  position: absolute;
  font-size: 15px;
  left: 13rem;
  top: 5.5rem;
  height: 13rem;
  width: 11rem;
  background: white;
  box-shadow: 0 0 20px 2px rgb(0 0 0 / 10%);
  border-radius: 5px;
  /* opacity: 0;
  z-index: -1; */
  display: none;
}
.pages-dropdown .shop:hover .shop-wrapper {
  /* opacity: 1;
  transition: 0.5s;
  z-index: 0; */
  display: block;
  animation: fade_in_show 0.5s;
}
.pages-dropdown .pages-icon4 {
  font-size: 12px;
  margin: 10px 0 0 64px;
}
.pages-dropdown .contact-wrapper {
  position: absolute;
  font-size: 15px;
  left: 13rem;
  top: 8rem;
  height: 8rem;
  width: 11rem;
  background: white;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  /* opacity: 0;
  z-index: -1; */
  display: none;
}
.pages-dropdown .contact:hover .contact-wrapper {
  /* opacity: 1;
  transition: 0.5s;
  z-index: 0; */
  display: block;
  animation: fade_in_show 0.5s;
}
.pages-dropdown .pages-icon5 {
  font-size: 12px;
  margin: 10px 0 0 75px;
}
.pages-dropdown .career-wrapper {
  position: absolute;
  font-size: 15px;
  left: 13rem;
  top: 10rem;
  height: 8rem;
  width: 11rem;
  background: white;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  /* opacity: 0;
  z-index: -1; */
  display: none;
}
.pages-dropdown .career:hover .career-wrapper {
  /* opacity: 1;
  transition: 0.5s;
  z-index: 0; */
  display: block;
  animation: fade_in_show 0.5s;
}
.pages-dropdown .pages-icon6 {
  font-size: 12px;
  margin: 10px 0 0 80px;
}

.pages-dropdown .utility-wrapper {
  position: absolute;
  font-size: 15px;
  left: 13rem;
  top: 12rem;
  height: 17rem;
  width: 11rem;
  background: white;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  /* opacity: 0;
  z-index: -1; */
  display: none;
}
.pages-dropdown .utility:hover .utility-wrapper {
  /* opacity: 1;
  transition: 0.5s;
  z-index: 0; */
  display: block;
  animation: fade_in_show 0.5s;
}

.pages-dropdown ul li a {
  font-size: 16px;
  color: #343f52;
  text-decoration: none;
  margin-top: 10px;
  font-size: 15px;
  font-weight: 600;
}

.pages-dropdown a:hover {
  color: #e2880a;
}
/* --------------- */

/* KONTEN PROJECTS */

.projects-wrapper {
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
  width: 23rem;
  height: 15rem;
  position: absolute;
  top: 4rem;
  left: 22.5rem;
  border-radius: 7px;
  display: flex;
  gap: 20px;
  /* opacity: 0;
  z-index: -1; */
  display: none;
}
.projects:hover .projects-wrapper {
  /* opacity: 1;
  z-index: 0;
  transition: 0.5s; */
  display: flex;
  animation: fade_in_show 0.5s;
}
.projects {
  height: 65px;
}
.project-pages {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.project-pages h6 {
  margin-top: 30px;
  margin-left: 31px;
  font-size: 15px;
}
.project-pages ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.project-pages .project-inside {
  text-decoration: none;
  color: #343f52;
  margin-left: 0px;
  font-size: 15px;
}
.project-pages .project-inside:hover {
  color: #e2880a;
}
.single-project {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.single-project h6 {
  margin-top: 30px;
  margin-left: 31px;
  font-size: 15px;
}

.single-project ul {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.single-project .single-project-inside {
  text-decoration: none;
  color: #343f52;
  margin-left: 0px;
  font-size: 15px;
}
.single-project .single-project-inside:hover {
  color: #e2880a;
}
.line-inside {
  margin-left: 10px;
  margin-top: 32px;
  border: 0.5px solid #a3b2cc;
  height: 11rem;
}

/* ------- */

/* KONTEN BLOG */
.blog-dropdown {
  box-shadow: 0 0 20px 2px rgb(0 0 0 / 10%);
  background-color: white;
  width: 14.5rem;
  height: 10.6rem;
  position: absolute;
  top: 4rem;
  left: 35rem;
  border-radius: 7px;
  display: flex;
  flex-direction: column;
  /* opacity: 0; */
  /* transition: 1s; */
  display: none;
  /* z-index: -1; */
}
.blog-without-sidebar {
  margin-top: 20px;
}
.blog-dropdown .blog-hover {
  width: 16rem;
}

.blog-post {
  margin-top: 16px;
}

.blog-dropdown .blog-hover:hover .blog-post-content {
  color: #e2880a;
  opacity: 1;
  z-index: 0;
}

.blog:hover .blog-dropdown {
  /* opacity: 1; */
  /* z-index: 0; */
  display: block;
  /* transition: 0.5s; */
  animation: fade_in_show 0.5s;
}
@keyframes fade_in_show {
  0% {
    opacity: 0;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
}

.blog-dropdown .blog-hover:hover {
  color: #e2880a;
}
.blog-dropdown a {
  text-decoration: none;
  color: #343f52;
  /* margin-bottom: 15px; */
  /* margin-top: 20px; */
  font-size: 14px;
}
.blog-dropdown ul li a:hover {
  color: #e2880a;
}
.blog-dropdown .blog-icon {
  /* margin-top: 27px; */
  margin-left: 6.6rem;
  font-size: 11px;
}

.blog-post-content {
  position: absolute;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  left: 15rem;
  top: 7.5rem;
  height: 9rem;
  width: 13rem;
  background: white;
  box-shadow: 0 0 20px 2px rgb(0 0 0 / 10%);
  border-radius: 5px;
  opacity: 0;
  z-index: -1;
}

/* ----------- */

/* KONTEN BLOCKS */
.blocks-wrapper {
  width: 71.5rem;
  height: 95vh;
  position: absolute;
  top: 4rem;
  left: 0;
  border-radius: 7px;
  display: grid;
  overflow-y: scroll;
  background-color: #303e4e;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  display: none;
}
.blocks-wrapper img {
  margin: 40px 0 10px -5px;
  width: 135px;
  height: 100px;
  border-radius: 7px;
  background-color: #3b4b5d;
}
.blocks:hover .blocks-wrapper {
  /* opacity: 1;
  z-index: 0;
  transition: 0.5s; */
  display: grid;
  animation: fade_in_show 0.5s;
}
.blocks-wrapper img:hover {
  background-color: #425264;
}

.blocks-wrapper span {
  text-decoration: none;
  color: white;
}

/* ------------- */

/* KONTEN DOCUMENTATION */

.documentation-content {
  width: 71.5rem;
  height: 65vh;
  position: absolute;
  top: 4rem;
  left: 0;
  border-radius: 7px;
  display: grid;
  overflow-y: scroll;
  background-color: white;
  box-shadow: 0 0 20px 2px rgba(0, 0, 0, 0.1);
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, 1fr);
  display: flex;
  /* opacity: 0;
  z-index: -1; */
  display: none;
}

.usage-styleguide {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 30px;
}
.usage-styleguide .usage {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 20px 20px 20px -30px;
}
.usage-styleguide .styleguide {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin: 20px 20px 20px -30px;
}

.elements-wrapper {
  margin: 30px;
}
.elements-wrapper h6 {
  margin-left: 60px;
}

.documentation-content .elements-wrapper .elements-content {
  /* width: 50rem; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  margin: 20px 20px 20px -20px;
}
.elements-wrapper .elements-content a {
  font-size: 14px;
  margin-left: 50px;
}

.documentation-content h6 {
  font-size: 0.9rem;
}

.documentation-content .styleguide-h6 {
  margin-top: 25px;
}

.documentation-content a {
  font-size: 15px;
  text-decoration: none;
  color: #343f52;
}
.line-blocks {
  margin-left: 55px;
  margin-top: 32px;
  border: 0.5px solid #d0d3d8;
  height: 20rem;
}

.documentation:hover .documentation-content {
  /* opacity: 1;
  z-index: 0;
  transition: 0.5s; */
  display: flex;
  animation: fade_in_show 0.5s;
}

.documentation-content a:hover {
  color: #e2880a;
}

/* -------------------- */

@media only screen and (max-width: 1200px) {
  .content {
    width: 65rem;
    left: 46px;
  }

  .scroll-view {
    top: 535px;
    left: 46px;
    width: 65rem;
  }

  .blocks-wrapper {
    width: 65rem;
    left: 46px;
  }
  .blocks-wrapper img {
    margin: 30px 0px 6px -16px;
  }

  .documentation-content {
    width: 64rem;
    left: 59px;
  }

  .usage-styleguide {
    margin-left: 20px;
    margin-top: 20px;
  }
}
</style>
