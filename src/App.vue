<template>
  <div class="app-main">
    <!--    <Dialog v-model:visible="display">-->
    <!--      <mob-request-a-demo></mob-request-a-demo>-->
    <!--    </Dialog>-->
    <div class="header">
      <mob-header></mob-header>
    </div>
    <div id="main">
      <transition
        mode="out-in"
        enter-active-class="animate__animated animate__fadeIn animate__slow"
        leave-active-class="animate__animated animate__fadeOut animate__slow "
      >
        <router-view />
      </transition>
    </div>
    <div class="footer">
      <mob-footer></mob-footer>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars

import MobHeader from "./components/general/Header";
import MobFooter from "./components/general/Footer";

export default {
  name: "App",
  components: {
    MobFooter,
    MobHeader,
  },
  mounted() {},
  data() {
    return {
      display: false,
    };
  },
};
</script>

<style></style>
