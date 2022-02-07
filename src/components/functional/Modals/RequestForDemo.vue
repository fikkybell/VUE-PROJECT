<template>
  <div>
    <div class="p-grid">
      <div class="p-col-12">
        <div
          class="
            visible-mobile visible-small-mobile
            hidden-desktop hidden-laptop hidden-tablet
          "
        >
          <p class="mobile demo-title-mobile">Kindly enter your details</p>
          <p class="mobile demo-note-mobile">Our team will reach out to you</p>
        </div>

        <div
          class="
            hidden-mobile hidden-small-mobile hidden-desktop
            visible-tablet
            hidden-laptop
          "
        >
          <p class="tablet demo-title-tablet">Kindly enter your details</p>
          <p class="tablet demo-note-tablet">Our team will reach out to you</p>
        </div>

        <div
          class="
            hidden-mobile hidden-small-mobile hidden-desktop
            visible-laptop
            hidden-tablet
          "
        >
          <p class="laptop demo-title-desktop">Kindly enter your details</p>
          <p class="laptop demo-note-desktop">Our team will reach out to you</p>
        </div>

        <div
          class="
            hidden-mobile hidden-small-mobile
            visible-desktop
            hidden-laptop hidden-tablet
          "
        >
          <p class="desktop demo-title-desktop">Kindly enter your details</p>
          <p class="desktop demo-note-desktop">
            Our team will reach out to you
          </p>
        </div>
      </div>
      <div class="p-col-12">
        <mob-input-field
          label="Full name"
          label-color="white"
          required
          placeholder="e.g Tayo Smith"
        >
        </mob-input-field>
      </div>
      <div class="p-col-12">
        <mob-input-field
          label="Email address"
          label-color="white"
          required
          placeholder="name@company.com"
        >
        </mob-input-field>
      </div>
      <div class="p-col-12">
        <mob-input-field
          label="Company name"
          label-color="white"
          required
          placeholder="Onome and sons"
        >
        </mob-input-field>
      </div>
      <div class="p-col-12">
        <mob-input-field
          label="Phone number"
          label-color="white"
          required
          placeholder=""
        >
        </mob-input-field>
      </div>
      <div class="p-col-12">
        <div class="mob-mt-45">
          <mob-button type="green" name="Submit Request"> </mob-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MobInputField from "../../utitility/InputField";
import MobButton from "../../utitility/Button";
export default {
  name: "mob-requestADemo",
  components: { MobButton, MobInputField },
};
</script>

<style scoped>
.demo-title-mobile {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  /* white */
  color: #ffffff;
}
.demo-title-tablet {
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  align-items: center;
  text-align: center;
  /* white */
  color: #ffffff;
}

.demo-title-desktop {
  font-weight: 500;
  font-size: 26px;
  line-height: 39px;
  align-items: center;
  text-align: center;
  /* white */
  color: #ffffff;
}

.demo-note-mobile {
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  align-items: center;
  text-align: center;
  /* text-muted */
  color: #babcbe;
}
.demo-note-tablet {
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  align-items: center;
  text-align: center;
  /* text-muted */
  color: #babcbe;
}

.demo-note-desktop {
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  align-items: center;
  text-align: center;
  /* text-muted */
  color: #babcbe;
}
</style>
