<template>
  <div class="home-margin" style="margin: 1em auto">
    <div
      class="
        visible-laptop visible-desktop visible-tablet
        hidden-mobile hidden-small-mobile
      "
    >
      <div class="p-text-center">
        <p class="section-copy-title">But don’t take our work for it</p>
        <p class="section-copy-sub-title" style="margin-top: -1.5em">
          See what people have to say about our product
        </p>
      </div>

      <div class="mob-mt-174">
        <div class="p-grid">
          <div class="p-col-2">
            <div>
              <button class="icon1">
                <div><mob-arrow-left-icon></mob-arrow-left-icon></div>
              </button>
            </div>
          </div>
          <div
            class="p-col-8"
            style="
              border-top: 1px solid black;
              padding: 3em 0;
              border-bottom: 1px solid black;
            "
          >
            <div class="p-grid">
              <div class="p-col-6">
                <div class="rect"></div>
                <div class="text">
                  For many years we have been partnering large enterprises, as
                  well as startups on innovation through design, and reflection
                  about user experience
                </div>
                <div class="mob-mt-57">
                  <div class="name">Emmanuel Nkenwokeneme</div>
                  <div class="title">CTO Unionsystems</div>
                </div>
              </div>
              <div class="p-col-6">
                <div style="margin-top: -2em">
                  <mob-carousel v-bind:carousel-no="1"></mob-carousel>
                </div>
              </div>
            </div>
          </div>
          <div class="p-col-2">
            <div style="float: right">
              <button class="icon2">
                <div><mob-arrow-right-icon></mob-arrow-right-icon></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="
        hidden-laptop hidden-desktop hidden-tablet
        visible-mobile visible-small-mobile
      "
    >
      <div class="p-text-center">
        <p class="section-copy-title">But don’t take our work for it</p>
        <p class="section-copy-sub-title" style="margin-top: -1.5em">
          See what people have to say about our product
        </p>
      </div>

      <div>
        <div class="home-margin" style="border-top: 1px solid black">
          <mob-carousel v-bind:carousel-no="1"></mob-carousel>
        </div>
      </div>

      <div class="home-margin">
        <div class="rect"></div>
        <div class="text">
          For many years we have been partnering large enterprises, as well as
          startups on innovation through design, and reflection about user
          experience
        </div>
        <div class="mob-mt-57">
          <div class="name">Emmanuel Nkenwokeneme</div>
          <div class="title">CTO Unionsystems</div>
        </div>
      </div>

      <div class="home-margin mob-mb-16 mob-mt-40">
        <div class="p-grid">
          <div class="p-col-2">
            <div>
              <div class="adjust-icon">
                <button class="icon1">
                  <div><mob-arrow-left-icon></mob-arrow-left-icon></div>
                </button>
              </div>
            </div>
          </div>
          <div class="p-col-8">
            <div class="p-text-center mob-mt-27">
              <mob-pagination type="1"></mob-pagination>
            </div>
          </div>
          <div class="p-col-2">
            <div class="adjust-icon">
              <div style="float: right">
                <button class="icon2">
                  <div><mob-arrow-right-icon></mob-arrow-right-icon></div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MobArrowLeftIcon from "../../icons/ArrowleftIcon";
import MobArrowRightIcon from "../../icons/ArrowrightIcon";
import MobCarousel from "../../utitility/Carousel";
import MobPagination from "../../utitility/Pagination";
export default {
  name: "mob-partnerSectionFourcopy",
  components: {
    MobPagination,
    MobCarousel,
    MobArrowRightIcon,
    MobArrowLeftIcon,
  },
};
</script>

<style scoped>
.bigimg {
  background: #000000;
  border-radius: 8px;
  width: 322px;
  height: 224px;
  position: relative;
  right: 20px;
  bottom: 50px;
}

.rect {
  background: #d0c9de;
  transform: rotate(-0.03deg);
  width: 179px;
  height: 50px;
}

.adjust-icon {
  position: relative;
  top: -5em;
}

.icon1 {
  background: #d0c9de;
  transform: rotate(-0.03deg);
  border-radius: 100%;
  border-color: #d0c9de;
  width: 53px;
  height: 53px;
  position: relative;
  top: 7em;
}

.icon2 {
  background: #571d7a;
  border: blueviolet;
  transform: rotate(-0.03deg);
  border-radius: 100px;
  width: 53px;
  height: 53px;
  top: 7em;
  position: relative;
}
.text {
  size: 18px;
  font-weight: 400;
  position: relative;
  top: 40px;
}
.name {
  font-weight: 700;
}
.title {
  color: gray;
  font-size: 18px;
}
.btm {
  position: relative;
  top: 100px;
}
.left-section {
  position: relative;
  left: 200px;
  top: 50px;
}
.mob-h-ruler {
  width: 987px;
  background-blend-mode: color-dodge;
  position: relative;
  left: 200px;
}
.section-copy-title {
  font-weight: 500;
  /* identical to box height */
  text-align: center;
  color: #000000;
}
.section-copy-sub-title {
}
.section-copy-sub-note {
}
</style>
