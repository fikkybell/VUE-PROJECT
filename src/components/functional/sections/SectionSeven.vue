<template>
  <!-- Mobile Section One   -->
  <div
    class="
      mobile
      visible-mobile visible-small-mobile
      hidden-tablet hidden-laptop hidden-desktop
    "
  >
    <div>
      <div class="section-title">Reliable Support</div>
      <div class="section-text">
        Our team is here to provide you with personalized and outstanding
        service. We also have self-learning tools in our support center.
      </div>
      <div class="mob-mt-33">
        <div>
          <mob-card
            is-pink-card
            note="Lorem Ipsum is simply dummy text of the printing
         and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text."
            title="How to get started"
          ></mob-card>
        </div>
        <div class="mob-mt-16">
          <mob-card
            is-pink-card
            note="Lorem Ipsum is simply dummy text of the printing
         and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text."
            title="Billing"
          ></mob-card>
        </div>
        <div class="mob-mt-16">
          <mob-card
            is-pink-card
            note="Lorem Ipsum is simply dummy text of the printing
         and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text."
            title="Become a Partner Bank"
          ></mob-card>
        </div>
        <div class="mob-mt-16">
          <mob-card
            is-pink-card
            note="Lorem Ipsum is simply dummy text of the printing
         and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text."
            title="Billing & Subscription"
          ></mob-card>
        </div>
      </div>
    </div>
  </div>

  <!-- tablet Section One   -->
  <div
    class="
      tablet
      hidden-mobile hidden-small-mobile
      visible-tablet
      hidden-laptop hidden-desktop
    "
  >
    <div>
      <div class="section-title">Reliable Support</div>
      <div class="section-text">
        Our team is here to provide you with personalized and outstanding
        service. We also have self-learning tools in our support center.
      </div>

      <div class="mob-mt-33">
        <div class="p-grid">
          <div class="p-col-5">
            <mob-card
              is-pink-card
              note="Lorem Ipsum is simply dummy text of the printing
               and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text."
              title="Billing & Subscription"
            ></mob-card>
          </div>
          <div class="p-col-2">
            <Divider layout="vertical" />
          </div>
          <div class="p-col-5">
            <mob-card
              is-pink-card
              note="Lorem Ipsum is simply dummy text of the printing
               and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text."
              title="Billing & Subscription"
            ></mob-card>
          </div>
          <div class="p-col-12">
            <Divider layout="horizontal" />
          </div>
          <div class="p-col-5">
            <mob-card
              is-pink-card
              note="Lorem Ipsum is simply dummy text of the printing
               and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text."
              title="Billing & Subscription"
            ></mob-card>
          </div>
          <div class="p-col-2">
            <Divider layout="vertical" />
          </div>
          <div class="p-col-5">
            <mob-card
              is-pink-card
              note="Lorem Ipsum is simply dummy text of the printing
               and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text."
              title="Billing & Subscription"
            ></mob-card>
          </div>
        </div>
      </div>
      <div class="mob-mt-100">
        <router-link active-class="active" class="mob-link" to="/talkWithUs">
          <div class="p-text-center">
            <mob-button
              type="gradient"
              name="speak with us"
              icon
              iconType="pi pi-chevron-right"
            ></mob-button>
          </div>
        </router-link>
      </div>
    </div>
  </div>

  <!-- laptop Section One   -->
  <div
    class="
      laptop
      hidden-mobile hidden-small-mobile hidden-tablet
      visible-laptop visible-desktop
    "
  >
    <div>
      <div class="section-title">Reliable Support</div>
      <div class="section-text">
        Our team is here to provide you with personalized and outstanding
        service. We also have self-learning tools in our support center.
      </div>
      <div>
        <div class="p-grid">
          <div class="p-col-7">
            <mob-card
              is-pink-card
              note="Lorem Ipsum is simply dummy text of the printing
               and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text."
              title="Billing & Subscription"
            ></mob-card>
          </div>
          <div class="p-col-1">
            <Divider layout="vertical" />
          </div>
          <div class="p-col-4">
            <mob-card
              is-pink-card
              note="Lorem Ipsum is simply dummy text of the printing
               and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text."
              title="Billing & Subscription"
            ></mob-card>
          </div>
          <div class="p-col-12">
            <Divider layout="horizontal" />
          </div>

          <div class="p-col-4">
            <mob-card
              is-pink-card
              note="Lorem Ipsum is simply dummy text of the printing
               and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text."
              title="Billing & Subscription"
            ></mob-card>
          </div>
          <div class="p-col-1">
            <Divider layout="vertical" />
          </div>
          <div class="p-col-7">
            <mob-card
              is-pink-card
              note="Lorem Ipsum is simply dummy text of the printing
               and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text."
              title="Billing & Subscription"
            ></mob-card>
          </div>
        </div>
      </div>
      <div class="mob-mt-100">
        <router-link active-class="active" class="mob-link" to="/talkWithUs">
          <div class="p-text-center">
            <mob-button
              type="gradient"
              name="speak with us"
              icon
              iconType="pi pi-chevron-right"
            ></mob-button>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Divider from "primevue/divider";
import MobButton from "../../utitility/Button";
import MobCard from "../../utitility/Card";
export default {
  name: "mob-sectionSeven",
  components: { MobCard, MobButton, Divider },
};
</script>

<style scoped>
section {
  text-align: center !important;
  padding: 5em 6em;
}
.section-title {
  color: #571d7a;
  font-weight: 500;
  text-align: center;
  font-size: 35px;
  line-height: 52px;
}
.section-text {
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  margin: 40px auto;
}
.section-background {
  position: absolute;
  top: 180px;
  right: 0;
}
.cards {
  background: #4f1a6c;
  color: #ffffff;
  //text-align: start;
  padding: 1em 2em;
}

.card-title {
  font-weight: 500;
  font-size: 22px;
  line-height: 33px;
}

.card-body {
  font-family: "Nunito", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
}

.update .container .contact-input {
  background: white;
  color: #bebdbd;
  line-height: 5px;
  width: 290px;
  padding: 0.6rem 1.4rem;
  border: none;
  position: relative;
  //left: 10px;
  top: 0px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
}

.container {
  //width: 360px;
  height: 120px;
  background-color: #571d7a;
  position: relative;
  top: 5px;
  //right: 50px;
  border-radius: 7px;
}

h5 {
  font-weight: 600;
  font-size: 13px;
  line-height: 28px;
  position: relative;
  top: 15px;
  left: -5px;
}

@media screen and (max-width: 760px) {
  section {
    //padding: 5em 6em;
  }
  .section-title {
    color: #571d7a;
    font-weight: 1000;
    font-size: 27px;
    position: relative;
    //right: 70px;
  }

  .section-text {
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    margin: 40px auto;
    position: relative;
    //right: 55px;
    bottom: 30px;
  }
  .p-d-flex {
    display: block !important;
  }
  .p-grid {
    display: block;
    flex-wrap: wrap;
    margin-right: -0.5rem;
    margin-left: -0.5rem;
    position: relative;
    //right: 40px;
  }
  .gradient {
    display: none;
  }

  .cards {
    background: #4f1a6c;
    color: #ffffff;
    text-align: start;
    width: 430px;
    height: 182px;
    padding: 9px;
    position: relative;
    //right: 15px;
  }
}
@media screen and (min-width: 768px) {
  .section-title {
    color: #571d7a;
    font-weight: 600;
    font-size: 35px;
    line-height: 52px;
  }
  .section-text {
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    width: 100%;
    margin: 40px auto;
  }

  .cards {
    background: #4f1a6c;
    color: #ffffff;
    //text-align: start;
    padding: 1em 1em;
  }
  .mob-mt-33 {
    //width: 340px;
  }

  .update .container .contact-input {
    background: white;
    color: #bebdbd;
    line-height: 5px;
    width: 330px;
    padding: 0.6rem 1.4rem;
    border: none;
    position: relative;
    left: 0px;
    top: 20px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }

  .container {
    width: 360px;
    height: 180px;
    background-color: #571d7a;
    position: relative;
    top: 70px;
    //right: -200px;
    border-radius: 7px;
  }

  h5 {
    font-weight: 600;
    font-size: 18px;
    line-height: 28px;
    position: relative;
    top: 30px;
    color: white;
    left: -55px;
  }
}

@media screen and (min-width: 992px) {
  section {
    text-align: center !important;
    padding: 5em 6em;
  }
  .section-title {
    color: #571d7a;
    font-weight: 500;
    font-size: 35px;
    line-height: 52px;
  }
  .section-text {
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    width: 50%;
    margin: 40px auto;
  }
  .section-background {
    position: absolute;
    top: 180px;
    right: 0;
  }
  .cards {
    background: #4f1a6c;
    color: #ffffff;
    //text-align: start;
    padding: 1em 2em;
  }

  .mob-mt-33 {
    width: 430px;
    position: relative;
    left: 40px;
  }

  .card-title {
    font-weight: 500;
    font-size: 22px;
    line-height: 33px;
  }

  .card-body {
    font-family: "Nunito", sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
  }

  .update .container .contact-input {
    background: white;
    color: #bebdbd;
    line-height: 5px;
    width: 290px;
    padding: 0.6rem 1.4rem;
    border: none;
    position: relative;
    //left: 10px;
    top: 0px;
    font-family: "Montserrat", sans-serif;
    font-weight: bold;
  }

  .container {
    width: 360px;
    height: 120px;
    background-color: #571d7a;
    position: relative;
    top: 5px;
    //right: 50px;
    border-radius: 7px;
  }

  h5 {
    font-weight: 600;
    font-size: 13px;
    line-height: 28px;
    position: relative;
    top: 15px;
    left: -5px;
  }
}
</style>
