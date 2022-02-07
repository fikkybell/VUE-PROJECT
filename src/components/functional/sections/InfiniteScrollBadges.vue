<template>
  <div class="slider">
    <div class="slide-track">
      <div class="slide">
        <img src="@/assets/gtb.png" height="60" width="100" />
      </div>
      <div class="slide">
        <div class="mob-mt-14">
          <img src="@/assets/coronation.png" height="30" width="185" alt="" />
        </div>
      </div>
      <div class="slide">
        <img src="@/assets/firstbank.png" height="60" width="174" alt="" />
      </div>
      <div class="slide">
        <img
          src="@/assets/standardChartered.png"
          height="60"
          width="174"
          alt=""
        />
      </div>
      <div class="slide">
        <img src="@/assets/uba.png" height="60" width="174" alt="" />
      </div>

      <div class="slide"></div>

      <div class="slide">
        <img src="@/assets/gtb.png" height="60" width="100" />
      </div>
      <div class="slide">
        <div class="mob-mt-14">
          <img src="@/assets/coronation.png" height="30" width="185" alt="" />
        </div>
      </div>
      <div class="slide">
        <img src="@/assets/firstbank.png" height="60" width="174" alt="" />
      </div>
      <div class="slide">
        <img
          src="@/assets/standardChartered.png"
          height="60"
          width="174"
          alt=""
        />
      </div>
      <div class="slide">
        <img src="@/assets/uba.png" height="60" width="174" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mob-InfiniteScrollBadges",
};
</script>

<style scoped>
body {
  align-items: center;
  background: #e3e3e3;
  display: flex;
  height: 100vh;
  justify-content: center;
}
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
.slider {
  background: white;
  //box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  height: 100px;
  z-index: -3;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 960px;
}
.slider::before,
.slider::after {
  //background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: "";
  height: 100px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  animation: scroll 40s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slider .slide {
  height: 100px;
  width: 250px;
}
</style>
