<template>
  <div>
    <div class="section-container">
      <mob-section-one></mob-section-one>
    </div>
    <div class="home-margin" v-scrollAnimation>
      <mob-arrow-down-icon></mob-arrow-down-icon>
    </div>
    <div id="homeSectionII" class="mob-mt-65 home-margin" v-scrollAnimation>
      <div class="p-text-right">
        <mob-arrow-up-icon></mob-arrow-up-icon>
      </div>
    </div>
    <div class="section-container mob-mt-128" v-scrollAnimation>
      <mob-section-two></mob-section-two>
    </div>
    <div class="section-container mob-mt-174" v-scrollAnimation>
      <mob-section-three></mob-section-three>
    </div>
    <div class="mob-mt-1300" v-scrollAnimation>
      <div class="section-container home-margin" v-scrollAnimation>
        <mob-section-four></mob-section-four>
      </div>
      <div class="section-container home-margin" v-scrollAnimation>
        <mob-section-five></mob-section-five>
      </div>
      <div class="section-container" v-scrollAnimation>
        <mob-section-six></mob-section-six>
      </div>
      <div class="section-container home-margin" v-scrollAnimation>
        <mob-section-seven></mob-section-seven>
      </div>
    </div>
  </div>
</template>

<script>
import MobSectionOne from "./sections/SectionOne";
import MobArrowDownIcon from "../icons/ArrowDownIcon";
import MobArrowUpIcon from "../icons/ArrowUpIcon";
import MobSectionTwo from "./sections/SectionTwo";
import MobSectionThree from "./sections/SectionThree";
import MobSectionFour from "./sections/SectionFour";
import MobSectionFive from "./sections/SectionFive";
import MobSectionSix from "./sections/SectionSix";
import MobSectionSeven from "./sections/SectionSeven";
// import MobSectionSix from "./sections/SectionSix";
// import MobSectionSeven from "./sections/SectionSeven";
// import MobSectionFour from "./sections/SectionFour";
// import MobSectionFive from "./sections/SectionFive";
export default {
  name: "mob-home",
  components: {
    MobSectionSeven,
    MobSectionSix,
    MobSectionFive,
    MobSectionFour,
    // MobSectionFive,
    // MobSectionFour,
    MobSectionThree,
    MobSectionTwo,
    MobArrowUpIcon,
    MobArrowDownIcon,
    MobSectionOne,
    // MobSectionSix,
    // MobSectionSeven,
  },
};
</script>

<style scoped></style>
