<template>
  <section id="about" class="about">
    <div class="container" data-aos="fade-up">
      <div class="section-title">
        <h2>About Me</h2>
      </div>

      <div class="row content">
        <div class="col-lg-12">
          <p class="text-center">
            I have experience in programming since 2018 and created several websites and android
            applications as well.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="personal-detail" class="why-us section-bg">
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-lg-7 d-flex flex-column justify-content-center align-items-stretch order-2 order-lg-1"
        >
          <div class="section-title" data-aos="fade-up">
            <h2>Personal Detail</h2>
          </div>

          <div class="accordion-list" data-aos="fade-left">
            <ul class="accordion-list">
              <li v-for="(item, index) in navItems" :key="index">
                <a
                  data-bs-toggle="collapse"
                  :data-bs-target="'#accordion-list-' + (index + 1)"
                  class="collapse-toggle"
                >
                  <i :class="item.icon"></i><span> {{ item.text }}</span>
                  <i v-if="!item.isExpanded" class="bx bx-chevron-down icon-show"></i>
                  <i v-if="item.isExpanded" class="bx bx-chevron-up icon-close"></i>
                </a>
                <div
                  :id="'accordion-list-' + (index + 1)"
                  class="collapse show"
                  :class="{ show: item.isExpanded }"
                >
                  <template v-if="item.details.length > 1">
                    <ol>
                      <li
                        class="pt-0 pb-0"
                        v-for="(detail, detailIndex) in item.details"
                        :key="detailIndex"
                      >
                        {{ detail }}
                      </li>
                    </ol>
                  </template>
                  <template v-else>
                    <p>{{ item.details[0] }}</p>
                  </template>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="col-lg-5 align-items-stretch order-1 order-lg-2 img"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <img src="@/assets/img/why-us.png" class="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      navItems: [
        {
          text: 'Age',
          icon: 'ri-calendar-event-fill',
          details: ['24 Years Old']
        },
        {
          text: 'Education',
          icon: 'ri-graduation-cap-fill',
          details: [
            'Computer Science - Universitas Indraprasta',
            'Software Engineer - SMKN 1 Depok'
          ]
        },
        {
          text: 'Work Experience',
          icon: 'ri-building-fill',
          details: [
            'PT Lyrid Prima Indonesia - (Oktober 2023 - Now)',
            'KSPPS Bina Auladi Mandiri - (Agustus 2020 - Oktober 2023)',
            'PT Sparkish Kinosoft Technology - (Juli 2018 - Agustus 2020)'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped></style>
