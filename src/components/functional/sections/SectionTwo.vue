<template>
  <div
    class="
      mobile
      visible-mobile visible-small-mobile
      hidden-desktop hidden-laptop hidden-tablet
    "
  >
    <div>
      <div class="gray-bg-mobile below">
        <mob-gray-background-icon
          width="315"
          height="208"
        ></mob-gray-background-icon>
      </div>
      <div class="plain-bg-mobile below">
        <div class="mobile-bg"></div>
      </div>
      <div class="onTop">
        <div class="p-grid">
          <div class="p-col-12">
            <div>
              <p
                class="
                  section-header
                  mob-font-size-14 mob-mt-128 mob-line-height-24
                "
              >
                Import & Export Transaction Processing
              </p>
              <p class="section-title mob-font-size-22 mob-line-height-33">
                Ensure interoperability with your banks
              </p>
            </div>
            <div class="rectangular-place-holder">
              <mob-carousel v-bind:carousel-no="1"></mob-carousel>
            </div>
          </div>
          <div class="p-col-12">
            <div class="mob-mt-37">
              <p class="section-sub-title">
                Complete and manage all CBN forms without visiting the bank
              </p>
              <p class="faint-text">
                Get notified on Form M expiry/Rejection, LC Expiry, PAAR
                issuance, ECD Submission, payments obligations and other
                transaction events
              </p>
              <div>
                <mob-custom-link
                  type="primaryLink"
                  icon-type="pi pi-chevron-right"
                  name="Try Optimus"
                ></mob-custom-link>
              </div>
              <div class="mob-mt-28 p-text-center">
                <div style="display: inline">
                  <div style="display: inline-block">
                    <mob-long-indicator
                      @click="switchIconState(1, 'Carousel_IndicatorI')"
                      fill-color="#5C69E0"
                      v-model:active="caroselIndicatorI"
                    ></mob-long-indicator>
                  </div>
                  <div class="p-ml-2" style="display: inline-block">
                    <mob-short-indicator
                      @click="switchIconState(2, 'Carousel_IndicatorII')"
                      v-model:active="caroselIndicatorII"
                      fill-color="#5C69E0"
                    ></mob-short-indicator>
                  </div>
                  <div class="p-ml-2" style="display: inline-block">
                    <mob-short-indicator
                      @click="switchIconState(3, 'Carousel_IndicatorIII')"
                      v-model:active="caroselIndicatorIII"
                      fill-color="#5C69E0"
                    ></mob-short-indicator>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="
      tablet
      hidden-mobile hidden-small-mobile hidden-desktop hidden-laptop
      visible-tablet
    "
  >
    <div class="section-two">
      <div class="gray-bg below">
        <mob-gray-background-icon
          width="356"
          height="246"
        ></mob-gray-background-icon>
      </div>
      <div class="plain-bg-tablet below">
        <mob-plain-rectangular-background-icon
          width="365"
          height="161"
        ></mob-plain-rectangular-background-icon>
      </div>
      <div class="onTop">
        <div class="p-grid">
          <div class="p-col-6">
            <div>
              <p class="section-header">
                Import & Export Transaction Processing
              </p>
              <p class="section-title">
                Ensure interoperability with your banks
              </p>
            </div>
            <div class="rectangular-place-holder">
              <mob-carousel v-bind:carousel-no="1"></mob-carousel>
            </div>
          </div>
          <div class="p-col-6">
            <div class="mob-mt-220">
              <p class="section-sub-title">
                Complete and manage all CBN forms without visiting the bank
              </p>
              <p class="faint-text">
                Get notified on Form M expiry/Rejection, LC Expiry, PAAR
                issuance, ECD Submission, payments obligations and other
                transaction events
              </p>
              <div>
                <mob-custom-link
                  type="primaryLink"
                  icon-type="pi pi-chevron-right"
                  name="Try Optimus"
                ></mob-custom-link>
              </div>
              <div class="mob-mt-63">
                <div class="p-text-center">
                  <div style="display: inline">
                    <div style="display: inline-block">
                      <mob-long-indicator
                        @click="switchIconState(1, 'Carousel_IndicatorI')"
                        fill-color="#5C69E0"
                        v-model:active="caroselIndicatorI"
                      ></mob-long-indicator>
                    </div>
                    <div class="p-ml-2" style="display: inline-block">
                      <mob-short-indicator
                        @click="switchIconState(2, 'Carousel_IndicatorII')"
                        v-model:active="caroselIndicatorII"
                        fill-color="#5C69E0"
                      ></mob-short-indicator>
                    </div>
                    <div class="p-ml-2" style="display: inline-block">
                      <mob-short-indicator
                        @click="switchIconState(3, 'Carousel_IndicatorIII')"
                        v-model:active="caroselIndicatorIII"
                        fill-color="#5C69E0"
                      ></mob-short-indicator>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="
      laptop
      hidden-mobile hidden-small-mobile
      visible-desktop visible-laptop
      hidden-tablet
    "
  >
    <div class="section-two">
      <div class="gray-bg below">
        <mob-gray-background-icon
          width="535"
          height="353"
        ></mob-gray-background-icon>
      </div>
      <div class="plain-bg below">
        <mob-plain-rectangular-background-icon
          width="512"
          height="210"
        ></mob-plain-rectangular-background-icon>
      </div>
      <div class="onTop">
        <div class="p-grid">
          <div class="p-col-6">
            <div>
              <p class="section-header">
                Import & Export Transaction Processing
              </p>
              <p class="section-title">
                Ensure interoperability with your banks
              </p>
            </div>
            <div class="rectangular-place-holder">
              <mob-carousel v-bind:carousel-no="1"></mob-carousel>
            </div>
          </div>
          <div class="p-col-6">
            <div class="mob-mt-250 p-ml-3">
              <p class="section-sub-title">
                Complete and manage all CBN forms without visiting the bank
              </p>
              <p class="faint-text">
                Get notified on Form M expiry/Rejection, LC Expiry, PAAR
                issuance, ECD Submission, payments obligations and other
                transaction events
              </p>
              <div>
                <mob-custom-link
                  type="primaryLink"
                  icon-type="pi pi-chevron-right"
                  name="Try Optimus"
                ></mob-custom-link>
              </div>
              <div class="mob-mt-63">
                <div class="p-text-center">
                  <div style="display: inline">
                    <div style="display: inline-block">
                      <mob-long-indicator
                        @click="switchIconState(1, 'Carousel_IndicatorI')"
                        fill-color="#5C69E0"
                        v-model:active="caroselIndicatorI"
                      ></mob-long-indicator>
                    </div>
                    <div class="p-ml-2" style="display: inline-block">
                      <mob-short-indicator
                        @click="switchIconState(2, 'Carousel_IndicatorII')"
                        v-model:active="caroselIndicatorII"
                        fill-color="#5C69E0"
                      ></mob-short-indicator>
                    </div>
                    <div class="p-ml-2" style="display: inline-block">
                      <mob-short-indicator
                        @click="switchIconState(3, 'Carousel_IndicatorIII')"
                        v-model:active="caroselIndicatorIII"
                        fill-color="#5C69E0"
                      ></mob-short-indicator>
                    </div>
                  </div>
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
import MobGrayBackgroundIcon from "../../icons/GrayBackgroundIcon";
import MobPlainRectangularBackgroundIcon from "../../icons/PlainRectangularBackgroundIcon";
import MobCustomLink from "../../utitility/CustomLink";
import MobCarousel from "../../utitility/Carousel";
import MobLongIndicator from "../../icons/LongIndicator";
import MobShortIndicator from "../../icons/ShortIndicator";
export default {
  name: "mob-sectionTwo",
  components: {
    MobShortIndicator,
    MobLongIndicator,
    MobCarousel,
    MobCustomLink,
    MobPlainRectangularBackgroundIcon,
    MobGrayBackgroundIcon,
  },
  data() {
    return {
      caroselIndicatorI: 1,
      caroselIndicatorII: 0,
      caroselIndicatorIII: 0,
    };
  },
  methods: {
    switchIconState(itemNo, ACTION) {
      switch (ACTION) {
        case "Carousel_IndicatorI":
          if (!this.caroselIndicatorI) {
            this.caroselIndicatorI = 1;
            this.caroselIndicatorII = 0;
            this.caroselIndicatorIII = 0;
          }
          break;
        case "Carousel_IndicatorII":
          if (!this.caroselIndicatorII) {
            this.caroselIndicatorII = 1;
            this.caroselIndicatorIII = 0;
            this.caroselIndicatorI = 0;
          }
          break;
        default:
          if (!this.caroselIndicatorIII) {
            this.caroselIndicatorIII = 1;
            this.caroselIndicatorI = 0;
            this.caroselIndicatorII = 0;
          }
      }
      this.$store.commit("switchCarouselOne", itemNo);
    },
  },
};
</script>

<style scoped>
.mobile-bg {
  max-width: 850px;
  width: 360px;
  height: 134px;
  background: #b5bae7;
  border-radius: 4px;
  transform: rotate(-0.03deg);
}
.gray-bg-mobile {
  position: absolute;
  top: 75px;
  left: -3em;
}
.gray-bg {
  position: absolute;
  top: 0;
  left: -70px;
}
.plain-bg-mobile {
  position: absolute;
  top: 380px;
  left: -75px;
}
.plain-bg-tablet {
  position: absolute;
  top: 300px;
  left: -68px;
}
.plain-bg {
  position: absolute;
  top: 428px;
  left: -68px;
}
.section-two {
  position: relative;
  min-height: 800px;
}
.onTop {
  z-index: 3;
}
.below {
  z-index: -2 !important;
}
.section-header {
  font-style: normal;
  font-weight: 500;
  /* identical to box height */
  text-transform: uppercase;
  /* gray */
  color: #5a5b5d;
  transform: rotate(-0.03deg);
}
.section-title {
  font-style: normal;
  font-weight: 500;
  /* black */
  color: #000000;
  transform: rotate(-0.03deg);
}
.section-sub-title {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* black */
  color: #000000;
  transform: rotate(-0.03deg);
}
.rectangular-place-holder {
  border-radius: 8px;
  transform: rotate(-0.03deg);
}
.faint-text {
  font-weight: 500;
  margin-top: 30px;
  font-size: 20px;
  line-height: 30px;
}

@media screen and (max-width: 760px) {
  .p-grid {
    //display: block !important;
  }
  .p-col-7 {
    //width: 450px !important;
  }

  .section-header {
    font-style: normal;
    font-weight: 550;
    font-size: 19px;
    line-height: 30px;
    /* identical to box height */
    text-transform: uppercase;
    /* gray */
    color: #5a5b5d;
    transform: rotate(-0.03deg);
    position: relative;
    //right: 34px;
  }

  .section-title {
    font-style: normal;
    font-weight: 600;
    font-size: 29px;
    line-height: 50px;
  }
  .section-sub-title {
    font-style: normal;
    font-size: 17px;
    line-height: 25px;
    font-weight: 600;
  }

  .rectangular-place-holder {
    border-radius: 8px;
    transform: rotate(-0.03deg);
    position: relative;
  }
  .p-col-5 {
    //width: 510px;
    //position: relative;
    //bottom: 200px;
  }
  .faint-text {
    font-weight: 500;
    font-size: 20px;
    color: black;
  }
  .mob-mt-63 {
  }

  svg {
    //height: 226px;
    //width: 560px;
    position: relative;
    //bottom: 180px;
    //right: 22px;
  }
}

@media screen and (min-width: 768px) {
  .section-header {
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 30px;
    /* identical to box height */
    text-transform: uppercase;
    /* gray */
    color: #5a5b5d;
    transform: rotate(-0.03deg);
  }
  .section-title {
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 52px;
    position: relative;
    /* black */
    color: #000000;
    transform: rotate(-0.03deg);
  }

  .section-sub-title {
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    position: relative;
  }

  .faint-text {
    font-weight: 500;
    margin-top: 30px;
    font-size: 14px;
    line-height: 21px;
    /* text-muted */
    color: #babcbe;
    position: relative;
  }
  .rectangular-place-holder {
    border-radius: 8px;
    transform: rotate(-0.03deg);
    position: relative;
  }
  svg {
    //height: 200px;
    //width: 560px;
    position: relative;
    //bottom: 160px;
    //right: 46px;
  }
}

@media screen and (min-width: 992px) {
  .gray-bg {
    position: absolute;
    top: 0;
    left: -70px;
  }

  .plain-bg {
    position: absolute;
    top: 428px;
    left: -68px;
  }
  .section-two {
    position: relative;
    min-height: 800px;
  }
  .onTop {
    z-index: 3;
  }
  .below {
    z-index: -2 !important;
  }
  .section-header {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    /* identical to box height */
    text-transform: uppercase;
    /* gray */
    color: #5a5b5d;
    transform: rotate(-0.03deg);
  }
  .section-title {
    font-style: normal;
    font-weight: 500;
    font-size: 35px;
    line-height: 52px;
    /* black */
    color: #000000;
    transform: rotate(-0.03deg);
  }
  .section-sub-title {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    /* black */
    color: #000000;
  }
  .rectangular-place-holder {
    border-radius: 8px;
    transform: rotate(-0.03deg);
  }
  .faint-text {
    font-weight: 500;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    line-height: 30px;
    /* text-muted */
    color: #babcbe;
  }
  svg {
    //width: 709px;
    //height: 327px;
  }
}
</style>
