<template>
  <div class="section-six">
    <div class="get-started">GET STARTED</div>
    <div class="want">Want to see Optimus in action?</div>
    <div class="question">
      Have questions? Book a customized demo to view key features and see how we
      can improve your trade processes
    </div>
    <div class="mob-mb-100">
      <mob-button
        type="white"
        name="Request For Demo -  It’ s Free"
      ></mob-button>
    </div>
    <div class="right-dashes">
      <img
        src="@/assets/white-dash.svg"
        alt="white-dash"
        height="200"
        width="200"
      />
    </div>
    <div class="left-dashes">
      <img
        src="@/assets/white-dash.svg"
        alt="white-dash"
        height="200"
        width="200"
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
  text-align: center;
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
  width: 44%;
  text-align: center;
  margin: 40px auto;
}

@media screen and (max-width: 760px) {
  .get-started {
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    margin-top: 45px;
    position: relative;

    top: 30px;
  }
  .want {
    margin-top: 10px;
    font-size: 27px;
    line-height: 52px;
    text-align: center;
    width: 450px;
    position: relative;
    top: 30px;
  }

  .question {
    width: 380px;
    text-align: center;
    margin: 40px auto;
  }
  img {
    height: 80px;
  }
}
</style>
