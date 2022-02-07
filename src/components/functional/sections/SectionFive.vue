<template>
  <div>
    <div
      class="
        hidden-tablet hidden-laptop hidden-desktop
        visible-mobile visible-small-mobile
      "
    >
      <div class="curve-icon-mobile">
        <mob-curve-pick-cover></mob-curve-pick-cover>
      </div>
      <div class="p-grid">
        <div class="p-col-12">
          <div class="mob-mt-94">
            <p class="section-five-title">Unparalleled Product</p>
            <p
              style="width: 240px; position: relative; top: -0.5em"
              class="section-five-sub-title"
            >
              Designed and Built for your business
            </p>
            <p class="section-five-note mob-mt-31">
              Corporates can setup transaction limit for different users and
              different levels of authorization that suits unique processes .
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum is simply
            </p>
          </div>
        </div>
        <div class="p-col-12">
          <div class="p-grid">
            <div class="p-col-6">
              <div class="mob-mt-100">
                <div class="p-grid">
                  <div class="p-col-12">
                    <mob-card
                      card-color="pinkCard"
                      cube-color="pinkCube"
                      title="Security"
                      note="Guaranteed protection on all data and transaction details"
                    >
                      <mob-security></mob-security>
                    </mob-card>
                  </div>
                  <div class="p-col-12">
                    <mob-card
                      card-color="yellowCard"
                      cube-color="yellowCube"
                      title="Efficiency"
                      note="Improved turn-around-time in trade transaction request and processes"
                    >
                      <mob-efficient-icon></mob-efficient-icon>
                    </mob-card>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-col-6">
              <div class="mob-ml-8">
                <div class="p-grid">
                  <div class="p-col-12">
                    <mob-card
                      card-color="greenCard"
                      cube-color="greenCube"
                      title="Regulatory Compliance"
                      note="Ensures conformity to Nigerian regulatory requirements"
                    >
                      <mob-regulatory-icon></mob-regulatory-icon>
                    </mob-card>
                  </div>
                  <div class="p-col-12">
                    <mob-card
                      card-color="brownCard"
                      cube-color="brownCube"
                      title="Convenience"
                      note="Initiate transactions and receive updates from the comfort of your home/office anywhere in the world"
                    >
                      <mob-convinence></mob-convinence>
                    </mob-card>
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
        visible-tablet visible-laptop visible-desktop
        hidden-mobile hidden-small-mobile
      "
    >
      <div class="section-five">
        <div class="curve-icon-tablet">
          <div class="visible-tablet hidden-laptop hidden-desktop">
            <mob-curve-pick-cover-icon
              width="380"
              height="288"
            ></mob-curve-pick-cover-icon>
          </div>
        </div>
        <div class="curve-icon">
          <div class="hidden-tablet visible-laptop visible-desktop">
            <mob-curve-pick-cover-icon
              width="681"
              height="517"
            ></mob-curve-pick-cover-icon>
          </div>
        </div>
        <div class="p-grid">
          <div class="p-col-7">
            <div class="p-grid">
              <div class="p-col-6">
                <div class="mob-mt-100">
                  <div class="p-grid">
                    <div class="p-col-12">
                      <mob-card
                        card-color="pinkCard"
                        cube-color="pinkCube"
                        title="Security"
                        note="Guaranteed protection on all data and transaction details"
                      >
                        <mob-security></mob-security>
                      </mob-card>
                    </div>
                    <div class="p-col-12">
                      <mob-card
                        card-color="yellowCard"
                        cube-color="yellowCube"
                        title="Efficiency"
                        note="Improved turn-around-time in trade transaction request and processes"
                      >
                        <mob-efficient-icon></mob-efficient-icon>
                      </mob-card>
                    </div>
                  </div>
                </div>
              </div>
              <div class="p-col-6">
                <div class="p-ml-1">
                  <div class="p-grid">
                    <div class="p-col-12">
                      <mob-card
                        card-color="greenCard"
                        cube-color="greenCube"
                        title="Regulatory Compliance"
                        note="Ensures conformity to Nigerian regulatory requirements"
                      >
                        <mob-regulatory-icon></mob-regulatory-icon>
                      </mob-card>
                    </div>
                    <div class="p-col-12">
                      <mob-card
                        card-color="brownCard"
                        cube-color="brownCube"
                        title="Convenience"
                        note="Initiate transactions and receive updates from the comfort of your home/office anywhere in the world"
                      >
                        <mob-convinence></mob-convinence>
                      </mob-card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="p-col-5">
            <div class="mob-mr-59 mob-mt-100 mob-ml-25">
              <p class="section-five-title">Unparalleled Product</p>
              <p class="section-five-sub-title">
                Designed and Built for your business
              </p>
              <p class="section-five-note mob-mt-31">
                Corporates can setup transaction limit for different users and
                different levels of authorization that suits unique processes .
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum is simply
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MobCard from "../../utitility/Card";
import MobCurvePickCoverIcon from "../../icons/CurvePickCoverIcon";
import MobSecurity from "../../icons/Security";
import MobRegulatoryIcon from "../../icons/RegulatoryIcon";
import MobEfficientIcon from "../../icons/EfficientIcon";
import MobConvinence from "../../icons/Convinence";
import MobCurvePickCover from "../../icons/CurvePickCover";
export default {
  name: "mob-sectionFive",
  components: {
    MobCurvePickCover,
    MobConvinence,
    MobEfficientIcon,
    MobRegulatoryIcon,
    MobSecurity,
    MobCurvePickCoverIcon,
    MobCard,
  },
};
</script>

<style scoped>
.section-five {
  position: relative !important;
}
.curve-icon {
  position: absolute;
  right: -9em;
  top: -16.5em;
}
.curve-icon-tablet {
  position: absolute;
  right: -6em;
  top: -5.5em;
}
.curve-icon-mobile {
  position: absolute;
  left: -2em;
  top: 0;
}
.section-five-title {
  font-style: normal;
  font-weight: 500;
  /* identical to box height */
  text-transform: uppercase;
  /* gray */
  color: #5a5b5d;
  transform: rotate(-0.03deg);
}
.section-five-sub-title {
  font-style: normal;
  font-weight: 500;
  /* black */
  color: #000000;
  transform: rotate(-0.03deg);
}
.section-five-note {
  font-style: normal;
  font-weight: normal;
  /* black */
  color: #000000;
  transform: rotate(-0.03deg);
}
</style>
