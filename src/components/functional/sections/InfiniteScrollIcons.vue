<template>
  <div>
    <div class="slider">
      <div class="slide-track">
        <div class="slide">
          <img src="@/assets/trms.png" height="20" width="67" />
        </div>
        <div class="slide">
          <div>
            <img
              src="@/assets/singleWindow.png"
              height="20"
              width="176"
              alt=""
            />
          </div>
        </div>
        <div class="slide">
          <img
            src="@/assets/NigeriaCustom.png"
            height="21"
            width="205"
            alt=""
          />
        </div>

        <div class="slide">
          <img src="@/assets/trms.png" height="20" width="67" />
        </div>
        <div class="slide">
          <div>
            <img
              src="@/assets/singleWindow.png"
              height="20"
              width="176"
              alt=""
            />
          </div>
        </div>
        <div class="slide">
          <img
            src="@/assets/NigeriaCustom.png"
            height="21"
            width="205"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mob-infiniteScrollIcons",
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
  height: 100px;
  z-index: -3;
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 600px;
}
.slider::before,
.slider::after {
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
