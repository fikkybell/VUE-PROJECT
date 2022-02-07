<template>
  <div>
    <div
      class="
        visible-mobile visible-small-mobile
        hidden-tablet hidden-laptop hidden-desktop
      "
    >
      <div class="position-relative mob-centralize section-four">
        <div>
          <div class="p-grid">
            <div class="p-col-12">
              <div>
                <p
                  class="section-four-title mob-font-size-14 mob-line-height-21"
                >
                  Control and Access
                </p>
                <p
                  class="section-four-note mob-font-size-22 mob-line-height-33"
                >
                  Reduce reliance on technical support from your IT staff and
                  bank account managers
                </p>
              </div>
              <div>
                <div>
                  <mob-check-list
                    check-color="brown"
                    margin
                    note-color="checkNoteBlack"
                    note="Pay and print payment receipts for custom duties, NESS fees etc."
                  ></mob-check-list>
                </div>
                <div>
                  <mob-check-list
                    check-color="brown"
                    margin
                    note-color="checkNoteBlack"
                    note="Consolidated view of your trade transactions in all your banks"
                  ></mob-check-list>
                </div>
              </div>
            </div>
            <div class="p-col-12">
              <div>
                <div class="brown-bg mob-centralize"></div>
                <div style="position: relative; top: -22em">
                  <mob-carousel v-bind:carousel-no="3"></mob-carousel>
                </div>

                <div
                  style="
                    width: 80px;
                    margin: 1em auto;
                    position: relative;
                    top: -20em;
                  "
                >
                  <div class="p-text-center">
                    <div style="display: inline">
                      <div style="display: inline-block">
                        <mob-long-indicator
                          @click="switchIconState(1, 'Carousel_IndicatorI')"
                          fill-color="#d65c15"
                          v-model:active="caroselIndicatorI"
                        ></mob-long-indicator>
                      </div>
                      <div class="p-ml-2" style="display: inline-block">
                        <mob-short-indicator
                          @click="switchIconState(2, 'Carousel_IndicatorII')"
                          v-model:active="caroselIndicatorII"
                          fill-color="#d65c15"
                        ></mob-short-indicator>
                      </div>
                      <div class="p-ml-2" style="display: inline-block">
                        <mob-short-indicator
                          @click="switchIconState(3, 'Carousel_IndicatorIII')"
                          v-model:active="caroselIndicatorIII"
                          fill-color="#d65c15"
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
        hidden-mobile hidden-small-mobile
        visible-tablet visible-laptop visible-desktop
      "
    >
      <div class="position-relative mob-centralize section-four">
        <div>
          <div class="p-grid">
            <div class="p-col-6">
              <div>
                <div class="brown-bg mob-centralize"></div>
                <div style="position: relative; top: -22em">
                  <mob-carousel v-bind:carousel-no="3"></mob-carousel>
                </div>

                <div
                  style="
                    width: 80px;
                    margin: 1em auto;
                    position: relative;
                    top: -20em;
                  "
                >
                  <div class="p-text-center">
                    <div style="display: inline">
                      <div style="display: inline-block">
                        <mob-long-indicator
                          @click="switchIconState(1, 'Carousel_IndicatorI')"
                          fill-color="#d65c15"
                          v-model:active="caroselIndicatorI"
                        ></mob-long-indicator>
                      </div>
                      <div class="p-ml-2" style="display: inline-block">
                        <mob-short-indicator
                          @click="switchIconState(2, 'Carousel_IndicatorII')"
                          v-model:active="caroselIndicatorII"
                          fill-color="#d65c15"
                        ></mob-short-indicator>
                      </div>
                      <div class="p-ml-2" style="display: inline-block">
                        <mob-short-indicator
                          @click="switchIconState(3, 'Carousel_IndicatorIII')"
                          v-model:active="caroselIndicatorIII"
                          fill-color="#d65c15"
                        ></mob-short-indicator>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-col-6">
              <div>
                <p
                  class="section-four-title mob-font-size-14 mob-line-height-21"
                >
                  Control and Access
                </p>
                <p
                  class="section-four-note mob-font-size-22 mob-line-height-33"
                >
                  Reduce reliance on technical support from your IT staff and
                  bank account managers
                </p>
              </div>
              <div>
                <div>
                  <mob-check-list
                    check-color="brown"
                    margin
                    note-color="checkNoteBlack"
                    note="Pay and print payment receipts for custom duties, NESS fees etc."
                  ></mob-check-list>
                </div>
                <div>
                  <mob-check-list
                    check-color="brown"
                    margin
                    note-color="checkNoteBlack"
                    note="Consolidated view of your trade transactions in all your banks"
                  ></mob-check-list>
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
import MobCheckList from "../../utitility/CheckList";
import MobCarousel from "../../utitility/Carousel";
import MobLongIndicator from "../../icons/LongIndicator";
import MobShortIndicator from "../../icons/ShortIndicator";
export default {
  name: "mob-sectionFour",
  components: {
    MobShortIndicator,
    MobLongIndicator,
    MobCarousel,
    MobCheckList,
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
      this.$store.commit("switchCarouselThree", itemNo);
    },
  },
};
</script>

<style scoped>
.brown-bg {
  width: 225.89px;
  height: 387.65px;
  background: #f1c8af;
  border-radius: 8px;
  transform: rotate(179.97deg);
}
.section-four {
  top: 4em;
}
.section-four-title {
  font-weight: 500;
  text-transform: uppercase;
  /* gray */
  color: #5a5b5d;
}
.section-four-note {
  /* black */
  font-weight: 600;
  color: #000000;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
</style>
