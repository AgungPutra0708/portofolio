<template>
  <header id="header" class="fixed-top">
    <div class="container d-flex align-items-center">
      <h1 class="logo me-auto"></h1>
      <nav id="navbar" :class="{ 'navbar-mobile': isMobileNavVisible }" class="navbar">
        <ul>
          <li v-for="(item, index) in navItems" :key="index" :class="{ dropdown: item.submenu }">
            <a
              :class="['nav-link', 'scrollto', { active: item.active }]"
              :href="item.href"
              @click="toggleActive(index)"
            >
              {{ item.text }}
              <i v-if="item.submenu" class="bi bi-chevron-down"></i>
            </a>
          </li>
        </ul>
        <i @click="toggleMobileNav" class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <!-- .navbar -->
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { text: 'Home', href: '#hero', active: true },
        { text: 'About', href: '#about' },
        { text: 'Skills', href: '#skills' },
        { text: 'Experience', href: '#portfolio' },
        { text: 'Contact', href: '#contact' }
      ],
      isMobileNavVisible: false
    }
  },
  methods: {
    toggleActive(index) {
      this.navItems.forEach((item, i) => {
        item.active = i === index
      })
    },
    toggleMobileNav() {
      this.isMobileNavVisible = !this.isMobileNavVisible
    }
  }
}
</script>

<style scoped>
/* Add styles for mobile navigation if needed */
</style>
