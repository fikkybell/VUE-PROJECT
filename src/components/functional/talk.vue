<template>
  <div class="talk-to-us talk-to-us-margin">
    <div
      class="
        hidden-desktop hidden-laptop
        visible-mobile
        hidden-tablet
        visible-small-mobile
      "
    >
      <div class="talk-to-us-bg">
        <mob-partner-plain-cover-icon
          width="236"
          height="179"
        ></mob-partner-plain-cover-icon>
      </div>
    </div>
    <div
      class="
        hidden-desktop hidden-laptop hidden-mobile
        visible-tablet
        hidden-small-mobile
      "
    >
      <div class="talk-to-us-bg">
        <mob-partner-plain-cover-icon
          width="417"
          height="316"
        ></mob-partner-plain-cover-icon>
      </div>
    </div>
    <div
      class="
        visible-desktop visible-laptop
        hidden-mobile hidden-tablet hidden-small-mobile
      "
    >
      <div class="talk-to-us-bg">
        <mob-partner-plain-cover-icon
          width="511"
          height="388"
        ></mob-partner-plain-cover-icon>
      </div>
    </div>

    <div>
      <div
        class="
          visible-mobile visible-small-mobile
          hidden-tablet hidden-laptop hidden-desktop
        "
      >
        <div style="position: relative; top: -6em">
          <p class="talk-to-us-title">Talk with our Team</p>
          <p class="talk-to-us-note">
            Looking for more information? Fill out the form below and our
            consultants will follow up to answer any question you might have
          </p>
        </div>
      </div>

      <div
        class="
          hidden-mobile hidden-small-mobile
          visible-tablet visible-laptop visible-desktop
        "
      >
        <p class="talk-to-us-title">Talk with our Team</p>
        <p class="talk-to-us-note">
          Looking for more information? Fill out the form below and our
          consultants will follow up to answer any question you might have
        </p>
      </div>

      <div class="talk-to-us-form">
        <div class="p-grid">
          <div class="p-col-12">
            <mob-input-field
              filled
              required
              label="Full name"
              placeholder="e.g Tayo Smith"
            ></mob-input-field>
          </div>
          <div class="p-col-12">
            <mob-input-field
              filled
              label="Email Address"
              placeholder="name@company.com"
            ></mob-input-field>
          </div>
          <div class="p-col-12">
            <mob-input-field
              filled
              label="Company name"
              placeholder=""
            ></mob-input-field>
          </div>
          <div class="p-col-12">
            <mob-input-field
              filled
              required
              label="Phone number"
              placeholder=""
            ></mob-input-field>
          </div>
          <div class="p-col-12">
            <mob-input-field
              is-text-area
              filled
              label="What will you like to discuss?"
              placeholder="Tell us about your team and provide some details about your process"
            ></mob-input-field>
          </div>
          <div class="p-col-12">
            <mob-input-field
              is-check-box
              filled
              placeholder="Not a robot?"
            ></mob-input-field>
          </div>
          <div class="p-col-12">
            <div class="mob-mt-57">
              <mob-button type="green" name="Submit"></mob-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MobPartnerPlainCoverIcon from "../icons/PartnerPlainCover";
import MobInputField from "../utitility/InputField";
import MobButton from "../utitility/Button";
export default {
  name: "mob-talkToUs",
  components: { MobButton, MobInputField, MobPartnerPlainCoverIcon },
};
</script>

<style scoped>
.talk-to-us {
  position: relative;
  padding-bottom: 134px;
}
.talk-to-us-form {
  margin-top: 68px;
}
.talk-to-us-bg {
  position: absolute;
  top: -14em;
  left: 228px;
  right: 0;
  z-index: -2;
}

.talk-to-us-title {
  font-weight: 600;
  text-align: center;
  /* purple_variant */
  color: #571d7a;
}
.talk-to-us-note {
  text-align: center;
  /* black */
  color: #000000;
}
</style>
