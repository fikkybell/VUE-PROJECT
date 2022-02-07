<template>
  <div class="position-relative">
    <div class="section-three-bg">
      <div
        class="
          mobile
          visible-mobile visible-small-mobile
          hidden-desktop hidden-laptop hidden-tablet
        "
      >
        <div class="mobile-ribbon-I">
          <mob-white-ribbon-icon-i></mob-white-ribbon-icon-i>
        </div>
        <div class="mobile-ribbon-II">
          <mob-white-ribbon-icon></mob-white-ribbon-icon>
        </div>
        <div class="mobile-ribbon-III">
          <mob-white-ribbon-icon></mob-white-ribbon-icon>
        </div>
        <div class="mob-mt-94 mob-ml-17 mob-mr-39">
          <p class="mob-font-size-14 section-three-title mob-line-height-21">
            Facilitation of trade finance activities
          </p>
          <p class="mob-font-22 section-three-note mob-font-33">
            Unify every player in your international trade value chain
          </p>

          <div class="mob-mt-16">
            <mob-check-list
              check-color="green"
              note-color="checkNoteWhite"
              margin
              note="Engage with suppliers while processing Draft Letters of Credit"
            ></mob-check-list>
          </div>
          <div class="mob-mt-10">
            <mob-check-list
              check-color="green"
              note-color="checkNoteWhite"
              margin
              note="Access shipping documents received by the bank from offshore banks"
            ></mob-check-list>
          </div>
          <div class="mob-mt-25">
            <mob-custom-link
              type="tertiary"
              icon-type="pi pi-chevron-right"
              name="Try Optimus"
            ></mob-custom-link>
          </div>

          <div class="plain-green-position">
            <div class="plain-green-bg"></div>
            <div
              style="position: relative; top: -18em"
              class="mob-ml-16 mob-mr-16"
            >
              <mob-carousel v-bind:carousel-no="2"></mob-carousel>
            </div>
            <div
              style="
                position: relative;
                top: -10em;
                width: 80px;
                margin: 1em auto;
              "
            >
              <div style="display: inline">
                <div style="display: inline-block">
                  <mob-long-indicator
                    fill-color="#31BD37"
                    v-bind:active="1"
                  ></mob-long-indicator>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="
          hidden-mobile hidden-small-mobile
          visible-desktop visible-laptop visible-tablet
        "
      >
        <div class="mobile-ribbon-II">
          <mob-white-ribbon-icon></mob-white-ribbon-icon>
        </div>
        <div class="mobile-ribbon-III">
          <mob-white-ribbon-icon></mob-white-ribbon-icon>
        </div>
        <div class="p-grid">
          <div class="p-col-6">
            <div class="mob-ml-17">
              <div class="mob-mt-94 mob-ml-17 mob-mr-39">
                <p
                  class="
                    mob-font-size-14
                    section-three-title
                    mob-line-height-21
                  "
                >
                  Facilitation of trade finance activities
                </p>
                <p class="mob-font-22 section-three-note mob-font-33">
                  Unify every player in your international trade value chain
                </p>

                <div class="mob-mt-16">
                  <mob-check-list
                    check-color="green"
                    note-color="checkNoteWhite"
                    margin
                    note="Engage with suppliers while processing Draft Letters of Credit"
                  ></mob-check-list>
                </div>
                <div class="mob-mt-10">
                  <mob-check-list
                    check-color="green"
                    note-color="checkNoteWhite"
                    margin
                    note="Access shipping documents received by the bank from offshore banks"
                  ></mob-check-list>
                </div>
                <div class="mob-mt-25">
                  <mob-custom-link
                    type="tertiary"
                    icon-type="pi pi-chevron-right"
                    name="Try Optimus"
                  ></mob-custom-link>
                </div>
              </div>
            </div>
          </div>
          <div class="p-col-6">
            <div class="plain-green-bg mob-mt-351"></div>
            <div
              class="mob-ml-16 mob-mr-16"
              style="position: relative; top: -18em"
            >
              <mob-carousel v-bind:carousel-no="2"></mob-carousel>
            </div>
            <div class="p-text-center" style="position: relative; top: -14em">
              <div style="display: inline">
                <div style="display: inline-block">
                  <mob-long-indicator
                    fill-color="#31BD37"
                    v-bind:active="1"
                  ></mob-long-indicator>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MobWhiteRibbonIconI from "../../icons/WhiteRibbonIconI";
import MobWhiteRibbonIcon from "../../icons/WhiteRibbonIcon";
import MobCheckList from "../../utitility/CheckList";
import MobCustomLink from "../../utitility/CustomLink";
import MobCarousel from "../../utitility/Carousel";
import MobLongIndicator from "../../icons/LongIndicator";

export default {
  name: "mob-sectionThree",
  components: {
    MobLongIndicator,
    MobCarousel,
    MobCustomLink,
    MobCheckList,
    MobWhiteRibbonIcon,
    MobWhiteRibbonIconI,
  },
  methods: {
    switchCarouselTwo() {
      this.$store.commit("switchCarouselOne");
    },
  },
};
</script>

<style scoped>
.section-three-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3000px;
  width: 100% !important;
  background-color: #4f1a6c;
  transform: rotate(-0.03deg);
}
.mobile-ribbon-I {
  position: absolute;
  top: -10em;
  left: 30px;
}
.mobile-ribbon-III {
  position: absolute;
  bottom: -8em;
  left: 30px;
}
.mobile-ribbon-II {
  position: absolute;
  top: -1em;
  right: 30px;
}
.section-three-title {
  text-transform: uppercase;
  /* light-grey */
  color: #f4f6fc;
  font-weight: 500;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.section-three-note {
  color: #ffffff;
  font-weight: 600;
  transform: matrix(1, 0, 0, 1, 0, 0);
}

.plain-green-position {
  position: absolute;
  top: 685px;
  left: 0;
  right: 0;
}

.plain-green-bg {
  background: #a9d6ab;
  width: 100%;
  height: 133px;
  border-radius: 4px;
  //transform: rotate(179.97deg);
}
</style>
