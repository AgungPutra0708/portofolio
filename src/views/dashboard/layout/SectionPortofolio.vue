<template>
  <section id="portfolio" class="portfolio section-bg">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>Portfolio</h2>
      </div>

      <ul
        id="portfolio-flters"
        class="d-flex justify-content-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <li @click="filterItems('*')" :class="{ 'filter-active': currentFilter === '*' }">All</li>
        <li
          @click="filterItems('filter-app')"
          :class="{ 'filter-active': currentFilter === 'filter-app' }"
        >
          App
        </li>
        <li
          @click="filterItems('filter-web')"
          :class="{ 'filter-active': currentFilter === 'filter-web' }"
        >
          Web
        </li>
      </ul>

      <div class="row portfolio-container">
        <div
          v-for="item in filteredItems"
          :key="item.id"
          class="col-md-4 col-sm-6 portfolio-item"
          :class="[item.filterClass]"
        >
          <div class="card w-100 h-100" data-aos="fade-up" data-aos-delay="200">
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">{{ item.description }}</p>
              <a :href="item.link" class="btn btn-primary" target="_blank">Show</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      currentFilter: '*',
      items: [
        {
          id: 1,
          filterClass: 'filter-app',
          title: 'Daqiq',
          description: 'Create using flutter.'
        },
        {
          id: 2,
          filterClass: 'filter-web',
          title: 'ACM Indonesia',
          description: 'Create using PHP Native with MySQL.',
          link: 'https://www.acm-indonesia.com/'
        },
        {
          id: 3,
          filterClass: 'filter-web',
          title: 'ACS Registrars Indonesia',
          description: 'Create using PHP Native with MySQL.',
          link: 'https://www.acsregistrarsindonesia.com/'
        },
        {
          id: 4,
          filterClass: 'filter-web',
          title: 'British Assessment Indonesia',
          description: 'Create using PHP Native with MySQL.',
          link: 'https://britishassessmentindonesia.com/'
        },
        {
          id: 5,
          filterClass: 'filter-web',
          title: 'VRC Indonesia',
          description: 'Create using PHP Native with MySQL.',
          link: 'https://www.vrcinternational.com/'
        },
        {
          id: 6,
          filterClass: 'filter-web',
          title: 'KSPPS Bina Auladi Mandiri',
          description: 'Create using Codeigniter with MySQL.',
          link: 'http://ksppsbam.com/'
        },
        {
          id: 7,
          filterClass: 'filter-web',
          title: 'KitaAnter',
          description: 'Create using Laravel with MySQL.',
          link: 'https://kitaanter.id/'
        },
        {
          id: 8,
          filterClass: 'filter-web',
          title: 'BMT SARANA',
          description: 'Create using Laravel with MySQL.',
          link: 'https://buku.bmtsarana.id/'
        },
        {
          id: 9,
          filterClass: 'filter-web',
          title: 'Bukit Kehi',
          description: 'Create using Laravel with MySQL.',
          link: 'https://bukitkehi.com/'
        },
        {
          id: 10,
          filterClass: 'filter-web',
          title: 'Sinar Panca',
          description: 'Create using Laravel with MySQL.',
          link: 'https://sinarpanca.id/'
        },
        {
          id: 11,
          filterClass: 'filter-web',
          title: 'PT Toba Surimi Industries',
          description: 'Create using CodeIniter 4 with MySQL.',
          link: 'https://tsi.lyrid.id/'
        },
        {
          id: 12,
          filterClass: 'filter-web',
          title: 'Pasar Baru Trade Center',
          description: 'Create using CodeIniter 4 with MySQL.',
          link: 'https://pbtc.lyrid.id/'
        }
        // Add more items with appropriate filterClass, imageSrc, title, and description
      ]
    }
  },
  computed: {
    filteredItems() {
      return this.currentFilter === '*'
        ? this.items
        : this.items.filter((item) => item.filterClass === this.currentFilter)
    }
  },
  methods: {
    filterItems(filter) {
      this.currentFilter = filter
    }
  }
}
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
