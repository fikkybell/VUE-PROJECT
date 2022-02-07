<template>
  <div class="section-six">
    <div class="get-started">GET STARTED</div>
    <div class="question mob-mt-7 mob-mb-16">
      Watch Optimus in action and see everything work in one space
    </div>
    <div class="mob-mb-100">
      <mob-button
        type="white2"
        name="Request For Demo -  It’ s Free"
      ></mob-button>
    </div>
    <div class="right-dashes">
      <img
        src="@/assets/white-dash.svg"
        alt="white-dash"
        height="130"
        width="130"
      />
    </div>
    <div class="left-dashes">
      <img
        src="@/assets/white-dash.svg"
        alt="white-dash"
        height="130"
        width="130"
      />
    </div>
  </div>
</template>

<script>
import MobButton from "../../utitility/Button";
export default {
  name: "mob-sectionSix",
  components: { MobButton },
};
</script>

<style scoped>
.get-started {
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  margin-top: 45px;
}
.want {
  margin-top: 10px;
  font-size: 35px;
  line-height: 52px;
}
.section-six {
  position: relative;
  background: url("~@/assets/contact-bg.png") no-repeat;
  background-size: cover;
  color: #ffffff;
  padding: 3em;
  text-align: center;
  overflow: hidden;
}
.right-dashes {
  position: absolute;
  top: -35px;
  right: -38px;
}
.left-dashes {
  position: absolute;
  bottom: -10px;
  left: -35px;
  transform: scaleY(-1);
}
.question {
  text-align: center;
  font-weight: 500;
}
</style>
