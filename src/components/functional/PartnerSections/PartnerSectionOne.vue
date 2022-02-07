<template>
  <div class="partner-section-one">
    <div
      class="
        bg-cover
        hidden-desktop hidden-laptop
        visible-tablet visible-small-mobile visible-mobile
      "
    >
      <mob-partner-plain-cover-icon
        height="316.42"
        width="416.58"
      ></mob-partner-plain-cover-icon>
    </div>
    <div
      class="
        bg-cover
        visible-desktop visible-laptop
        hidden-small-mobile hidden-mobile hidden-tablet
      "
    >
      <mob-partner-plain-cover-icon
        height="388.19"
        width="511.06"
      ></mob-partner-plain-cover-icon>
    </div>
    <div>
      <div class="p-d-block mob-w-100P">
        <div class="p-text-center">
          <span class="partner-section-one-text mob-padding-left-50">
            Seamlessly <span class="purple">integrate</span>
            to your trade backoffice
          </span>
        </div>
        <div class="p-mt-4">
          <div class="p-grid">
            <div class="p-col-12">
              <p class="partner-note">
                Optimus connects with all the backend tools you already use to
                process all your trade transactions Lorem Ipsum is simply dummy
                text of the printing and typesetting industry
              </p>
            </div>
          </div>
        </div>
        <div class="mob-mt-50">
          <div class="p-text-center">
            <mob-button type="secondary" name="Become a partner"></mob-button>
          </div>
        </div>
        <div class="mob-mt-50">
          <div class="partner-cover-placeholder mob-centralize">
            <mob-carousel v-bind:carousel-no="1"></mob-carousel>
          </div>
          <div class="mob-mt-79">
            <!--          <div  style="margin-left: -8em">-->
            <!--            <img src="../../../assets/integrateTo.png" height="33" width="759"/>-->
            <!--          </div>-->
          </div>
        </div>
      </div>
    </div>
    <div class="mob-mt-33">
      <div class="p-grid">
        <div class="p-col-4">
          <div style="margin-left: 17px">
            <p class="integrateTo">Integrate To</p>
          </div>
        </div>
        <div class="p-col-8">
          <div style="margin-top: 19px">
            <mob-infinite-scroll-icons></mob-infinite-scroll-icons>
          </div>
        </div>
      </div>
    </div>

    <div class="mob-mt-85 mob-ml-297n">
      <div class="divider-pink mob-100P"></div>
    </div>
    <!--  <div class="mob-mt-45 mob-ml-194 mob-mr-175 p-text-center">-->
    <!--    <div class="p-grid">-->
    <!--      <div class="p-col-4">-->
    <!--        <mob-check-list  margin check-color="green" check-type="outlined"  note-color="purpleVariant" note="Free Trial Period"></mob-check-list>-->
    <!--      </div>-->
    <!--      <div class="p-col-4">-->
    <!--        <mob-check-list margin note-color="purpleVariant" note="Security and Privacy">-->
    <!--          <slot><mob-security-and-privacy-icon></mob-security-and-privacy-icon></slot>-->
    <!--        </mob-check-list>-->
    <!--      </div>-->
    <!--      <div class="p-col-4">-->
    <!--        <mob-check-list margin check-color="green" check-type="outlined"  note-color="purpleVariant" note="On-demand Demo"></mob-check-list>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--  </div>-->
    <div class="mob-mt-52 mob-ml-297n">
      <div class="divider-pink mob-100P"></div>
    </div>
  </div>
</template>

<script>
import MobPartnerPlainCoverIcon from "../../icons/PartnerPlainCover";
import MobButton from "../../utitility/Button";
import MobCarousel from "../../utitility/Carousel";
import MobInfiniteScrollIcons from "../sections/InfiniteScrollIcons";
export default {
  name: "mob-partnerSectionOne",
  components: {
    MobCarousel,
    MobButton,
    MobPartnerPlainCoverIcon,
    MobInfiniteScrollIcons,
  },
};
</script>

<style scoped>
.partner-section-one {
  position: relative;
  min-height: 600px;
}
.bg-cover {
  position: absolute;
  top: -12em;
  left: 50%;
  z-index: -2;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.partner-section-one-text {
  font-style: normal;
  font-weight: 600;
  text-align: center;
  /* black */
  color: #000000;
}
.partner-note {
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  text-align: center;
  /* black */
  color: #000000;
}
.partner-cover-placeholder {
  max-width: 650px;
  border-radius: 8px;
}

.integrateTo {
  font-weight: 500;
  font-size: 20px;
  width: 300px;
  line-height: 21px;
  /* identical to box height */
  text-transform: uppercase;
  color: #b4a8ce;
  transform: rotate(-0.03deg);
}
</style>
