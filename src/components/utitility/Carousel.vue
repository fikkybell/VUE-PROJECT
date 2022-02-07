<template>
  <div class="custom-carousel-main">
    <div class="custom-carousel">
      <div
        v-if="getControlOne === 1 && carouselNo === 1"
        class="carousel-item animate__animated animate__flipInX animate__slow"
      >
        <img alt="1" src="@/assets/images/Shots-01.jpg" />
      </div>
      <div
        v-if="getControlThree === 1 && carouselNo === 3"
        class="animate__animated animate__flipInX animate__slow carousel-item"
      >
        <img alt="2" src="@/assets/images/Shots-02.jpg" />
      </div>
      <div
        v-if="getControlThree === 3 && carouselNo === 3"
        class="animate__animated animate__flipInX animate__slow carousel-item"
      >
        <img alt="3" src="@/assets/images/Shots-03.jpg" />
      </div>
      <div
        v-if="getControlTwo === 1 && carouselNo === 2"
        class="animate__animated animate__flipInX animate__slow carousel-item"
      >
        <img alt="4" src="@/assets/images/Shots-04.jpg" />
      </div>
      <div
        v-if="getControlThree === 2 && carouselNo === 3"
        class="animate__animated animate__flipInX animate__slow carousel-item"
      >
        <img alt="5" src="@/assets/images/Shots-05.jpg" />
      </div>
      <div
        v-if="getControlOne === 2 && carouselNo === 1"
        class="animate__animated animate__flipInX animate__slow carousel-item"
      >
        <img alt="6" src="@/assets/images/Shots-06.jpg" />
      </div>
      <div
        v-if="getControlFour === 1 && carouselNo === 4"
        class="animate__animated animate__flipInX animate__slow carousel-item"
      >
        <img alt="7" src="@/assets/images/Shots-07.jpg" />
      </div>
      <div
        v-if="getControlOne === 3 && carouselNo === 1"
        class="animate__animated animate__flipInX animate__slow carousel-item"
      >
        <img alt="8" src="@/assets/images/Shots-08.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mob-carousel",
  computed: {
    getControlOne() {
      return this.$store.getters.getControlOne;
    },
    getControlTwo() {
      return this.$store.getters.getControlTwo;
    },
    getControlThree() {
      return this.$store.getters.getControlThree;
    },
    getControlFour() {
      return this.$store.getters.getControlFour;
    },
  },
  props: {
    carouselNo: Number,
  },
};
</script>

<style scoped>
.custom-carousel-main {
  position: relative;
}
.custom-carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.custom-carousel-main.pointer-event {
  touch-action: pan-y;
}

.custom-carousel::after {
  display: block;
  clear: both;
  content: "";
}

.carousel-item {
  position: relative;
  float: left;
  width: 100%;
  margin-right: -100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: transform 0.6s ease-in-out;
}

.carousel-item img {
  width: 100% !important;
  height: auto !important;
  max-height: 460px;
  min-height: 228px;
}

@media screen and (max-width: 760px) {
}
</style>
