<template>
  <div
    class="
      visible-small-mobile visible-mobile
      hidden-laptop hidden-desktop hidden-tablet
    "
  ></div>
  <div
    class="
      hidden-small-mobile hidden-mobile
      visible-laptop visible-desktop visible-tablet
    "
  >
    <div class="psection-four"></div>
  </div>
</template>

<script>
import MobPlainGreenRectangleIcon from "../../icons/PlainRectangularBackgroundIcon.vue";
import MobCarousel from "../../utitility/Carousel";
export default {
  name: "mob-partnerSectionFour",
  components: MobPlainGreenRectangleIcon,
  MobCarousel,
};
</script>

<style scoped>
.psection-four {
  width: 600px;
  height: 400px;
  background-color: rgba(245, 243, 249, 0);
}
.text {
  position: relative;
  left: 70px;
  top: 50px;
}

.section-header {
  font-size: 30px;
  font-weight: 600;
  width: 530px;
}
.section-title {
  width: 750px;
  position: relative;
  top: 30px;
  font-size: 18px;
}
</style>
