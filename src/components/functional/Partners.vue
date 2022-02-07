<template>
  <div>
    <div class="section-container home-margin">
      <mob-partner-section-one></mob-partner-section-one>
    </div>
    <div class="section-container" v-scrollAnimation>
      <mob-partner-section-two></mob-partner-section-two>
    </div>
    <div class="section-container" v-scrollAnimation>
      <mob-partner-section-three></mob-partner-section-three>
    </div>
    <div class="section-container" v-scrollAnimation>
      <div class="sectionFour-bg">
        <div
          class="
            visible-small-mobile visible-mobile
            hidden-laptop hidden-desktop hidden-tablet
          "
        >
          <div class="p-grid">
            <div class="p-col-12">
              <div class="home-margin mob-mt-77">
                <p class="sectionFour-title">
                  We built it from ground up to give you an amazing experience
                </p>
                <p class="sectionFour-note">
                  For over 15 years we have delivered trade finance software
                  services in Africa, in large banks, as well as startups on
                  innovation understanding of the complexities of international
                  trade in Nigeria. Today, thanks to the extensive experience
                  and expertise we acquired, we have created a useful platform
                  and will continue to develop better tools and services to
                  enable trade finance.
                </p>
              </div>
            </div>
            <div class="p-col-12">
              <div class="home-margin">
                <mob-carousel v-bind:carousel-no="4"></mob-carousel>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            hidden-small-mobile hidden-mobile
            visible-laptop visible-desktop visible-tablet
          "
        >
          <div class="p-grid">
            <div class="p-col-6">
              <div style="margin-left: -3em">
                <mob-carousel v-bind:carousel-no="4"></mob-carousel>
              </div>
            </div>
            <div class="p-col-6">
              <div class="home-margin mob-mt-77">
                <p class="sectionFour-title">
                  We built it from ground up to give you an amazing experience
                </p>
                <p class="sectionFour-note">
                  For over 15 years we have delivered trade finance software
                  services in Africa, in large banks, as well as startups on
                  innovation understanding of the complexities of international
                  trade in Nigeria. Today, thanks to the extensive experience
                  and expertise we acquired, we have created a useful platform
                  and will continue to develop better tools and services to
                  enable trade finance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section-container" v-scrollAnimation>
      <mob-partner-section-five></mob-partner-section-five>
    </div>
    <div class="section-container" v-scrollAnimation>
      <mob-partner-section-fourcopy></mob-partner-section-fourcopy>
    </div>
  </div>
</template>

<script>
import MobPartnerSectionOne from "./PartnerSections/PartnerSectionOne";
import MobPartnerSectionTwo from "./PartnerSections/PartnerSectionTwo";
import MobPartnerSectionThree from "./PartnerSections/PartnerSectionThree";
// import MobPartnerSectionFour from "./PartnerSections/PartnerSectionFour";
import MobPartnerSectionFive from "./PartnerSections/PartnerSectionFive";
import MobPartnerSectionFourcopy from "./PartnerSections/PartnerSectionFourcopy";
import MobCarousel from "../utitility/Carousel";
export default {
  name: "mob-partners",
  components: {
    MobCarousel,
    MobPartnerSectionThree,
    MobPartnerSectionTwo,
    MobPartnerSectionOne,
    // MobPartnerSectionFour,
    MobPartnerSectionFive,
    MobPartnerSectionFourcopy,
  },
};
</script>

<style scoped>
.sectionFour-title {
  font-weight: 600;
  /* black */
  color: #000000;
}
.sectionFour-note {
  color: #000000;
}
.sectionFour-bg {
  padding-top: 57px;
  padding-bottom: 57px;
  background: linear-gradient(180deg, #f5f3f9 0%, rgba(245, 243, 249, 0) 100%);
}
</style>
