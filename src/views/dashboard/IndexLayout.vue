<script setup>
import HeadersLayout from './layout/HeadersSections.vue'
import SectionHero from './layout/SectionHero.vue'
import SectionAbout from './layout/SectionAbout.vue'
import SectionSkill from './layout/SectionSkill.vue'
import SectionPortofolio from './layout/SectionPortofolio.vue'
import SectionContact from './layout/SectionContacts.vue'
</script>

<template>
  <!-- ======= Header ======= -->
  <HeadersLayout />
  <!-- End Header -->

  <!-- ======= Hero Section ======= -->
  <SectionHero />
  <!-- End Hero -->

  <main id="main">
    <!-- ======= Clients Section ======= -->
    <!-- <SectionClient /> -->
    <!-- End Cliens Section -->

    <!-- ======= About Us Section ======= -->
    <SectionAbout />
    <!-- End About Us Section -->

    <!-- ======= Skill Section ======= -->
    <SectionSkill />
    <!-- End Skill Section -->

    <!-- ======= Portfolio Section ======= -->
    <SectionPortofolio />
    <!-- End Portfolio Section -->

    <!-- ======= Contact Section ======= -->
    <SectionContact />
    <!-- End Contact Section -->
  </main>
  <!-- End #main -->

  <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="container footer-bottom clearfix">
      <div class="copyright">
        &copy; Copyright <strong><span>PutraAgung.tech</span></strong
        >. All Rights Reserved
      </div>
    </div>
  </footer>
  <!-- End Footer -->
</template>

<script>
export default {
  mounted() {
    // Attach a scroll event listener when the component is mounted
    window.addEventListener('scroll', this.handleScroll)
    // Dynamically load external scripts
  },
  methods: {
    handleScroll() {
      const scrollPosition = this.$el.scrollTop || document.documentElement.scrollTop
      const selectHeader = document.getElementById('header')
      if (selectHeader) {
        if (scrollPosition > 100) {
          selectHeader.classList.add('header-scrolled')
        } else {
          selectHeader.classList.remove('header-scrolled')
        }
      }
      let navbarlinks = document.querySelectorAll('#navbar .scrollto')
      let position = window.scrollY + 200
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return
        let section = document.querySelector(navbarlink.hash)
        if (!section) return
        if (position >= section.offsetTop && position <= section.offsetTop + section.offsetHeight) {
          navbarlink.classList.add('active')
        } else {
          navbarlink.classList.remove('active')
        }
      })
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
