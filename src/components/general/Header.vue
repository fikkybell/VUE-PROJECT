<template>
  <div class="custom-fluid">
    <div v-if="getIsModal">
      <mob-custom-dialog>
        <slot>
          <mob-request-a-demo></mob-request-a-demo>
        </slot>
      </mob-custom-dialog>
    </div>
    <div>
      <Sidebar
        id="sideBar"
        dismissable
        :visible="getIsMobileNav"
        position="right"
      >
        <div class="p-text-center">
          <p
            @click="goto('homeSectionII')"
            class="cursor-pointer nav-text mob-mt-27"
          >
            Features
          </p>
          <p class="cursor-pointer nav-text mob-mt-27">Partners</p>
          <p class="cursor-pointer nav-text mob-mt-27">Pricing</p>
          <p class="cursor-pointer nav-text mob-mt-27 additional-text-color">
            Login
          </p>
        </div>
      </Sidebar>
    </div>

    <div
      class="
        mobile
        visible-laptop visible-small-mobile
        hidden-desktop hidden-laptop hidden-tablet
        height-71
        mobile-position-adjustment
      "
    >
      <div class="p-grid">
        <div class="p-col-5">
          <div class="mob-float-left mob-mt-18">
            <router-link to="/">
              <mob-optimusIcon height="33" width="156"></mob-optimusIcon>
            </router-link>
          </div>
        </div>
        <div class="p-col-7">
          <div class="mob-float-right mob-m-27 cursor-pointer">
            <mob-navicon-icon @click="switchNav"></mob-navicon-icon>
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        tablet
        visible-tablet
        hidden-mobile hidden-laptop hidden-desktop hidden-small-mobile
        height-65
      "
    >
      <div>
        <div class="p-grid">
          <div class="p-col-2">
            <div class="mob-float-left mob-mt-12">
              <router-link to="/">
                <mob-optimusIcon height="36" width="178"></mob-optimusIcon>
              </router-link>
            </div>
          </div>
          <div class="p-col-10">
            <div class="mob-float-right">
              <div class="p-grid">
                <div class="p-col">
                  <p
                    @click="goto('homeSectionII')"
                    class="cursor-pointer mob-mt-19 nav-text"
                  >
                    Features
                  </p>
                </div>
                <div class="p-col mob-ml-7">
                  <p class="cursor-pointer mob-mt-19 nav-text">Partners</p>
                </div>
                <div class="p-col mob-ml-7">
                  <p class="cursor-pointer mob-mt-19 nav-text">Pricing</p>
                </div>
                <div class="p-col mob-ml-7">
                  <div class="vertical-line"></div>
                </div>
                <div class="p-col mob-ml-7">
                  <p
                    class="
                      cursor-pointer
                      mob-mt-19
                      additional-text-color
                      nav-text
                    "
                  >
                    Login
                  </p>
                </div>
                <div class="p-col mob-ml-7">
                  <div class="mob-mt-12 mob-mr-39">
                    <mob-button
                      name="Request for Demo"
                      @click="requestADemo"
                      type="small-gradient"
                    ></mob-button>
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
        visible-laptop
        hidden-mobile hidden-desktop hidden-tablet hidden-small-mobile
        height-97
      "
    >
      <div class="p-grid">
        <div class="p-col-4">
          <div class="mob-mt-13 mob-mb-16">
            <router-link to="/">
              <mob-optimusIcon height="63" width="187"></mob-optimusIcon>
            </router-link>
          </div>
        </div>
        <div class="p-col-8">
          <div class="mob-f-r mob-mt-19 mob-mb-37">
            <div class="p-grid">
              <div class="p-col">
                <p
                  @click="goto('homeSectionII')"
                  class="mob-link mob-opacity-8"
                >
                  Features
                </p>
              </div>
              <div class="p-col mob-ml-7">
                <router-link
                  active-class="active"
                  class="mob-link"
                  to="/partners"
                >
                  <p class="mob-opacity-8">Partners</p></router-link
                >
              </div>
              <div class="p-col mob-ml-7">
                <p class="mob-link mob-opacity-8">Pricing</p>
              </div>
              <div class="p-col mob-ml-7">
                <div class="vertical-line"></div>
              </div>
              <div class="p-col mob-ml-7">
                <div>
                  <p class="mob-link mob-opacity-8">Login</p>
                </div>
              </div>
              <div class="p-col mob-ml-7">
                <div class="mob-mt-7">
                  <mob-button
                    type="gradient"
                    @click="requestADemo"
                    name="Request for Demo"
                  ></mob-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        desktop
        visible-desktop
        hidden-laptop hidden-tablet hidden-mobile hidden-small-mobile
        height-97
      "
    >
      <div class="p-grid">
        <div class="p-col-3">
          <div class="mob-mt-13 mob-mb-16">
            <router-link to="/">
              <mob-optimusIcon height="63" width="187"></mob-optimusIcon>
            </router-link>
          </div>
        </div>
        <div class="p-col-9">
          <div class="mob-f-r mob-mt-19 mob-mb-37">
            <div class="p-grid">
              <div class="p-col">
                <p
                  @click="goto('homeSectionII')"
                  class="mob-link mob-opacity-8"
                >
                  Features
                </p>
              </div>
              <div class="p-col">
                <div class="mob-ml-37">
                  <router-link
                    active-class="active"
                    class="mob-link"
                    to="/partners"
                  >
                    <p class="mob-opacity-8">Partners</p></router-link
                  >
                </div>
              </div>
              <div class="p-col">
                <div class="mob-ml-37">
                  <p class="mob-link mob-opacity-8">Pricing</p>
                </div>
              </div>
              <div class="p-col">
                <div class="mob-ml-37">
                  <div class="vertical-line"></div>
                </div>
              </div>
              <div class="p-col">
                <div class="mob-ml-37">
                  <p class="mob-link mob-opacity-8">Login</p>
                </div>
              </div>
              <div class="p-col">
                <div class="mob-mt-7 mob-ml-37">
                  <mob-button
                    type="gradient"
                    @click="requestADemo"
                    name="Request for Demo"
                  ></mob-button>
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
import MobOptimusIcon from "../../components/icons/OptimusIcon";
import MobButton from "../../components/utitility/Button";
import MobNaviconIcon from "../icons/NaviconIcon";
import MobCustomDialog from "../utitility/CustomDialog";
import MobRequestADemo from "../functional/Modals/RequestForDemo";
// import MobCustomDialog from "../utitility/CustomDialog";
// import MobRequestADemo from "../functional/Modals/RequestForDemo";
export default {
  name: "mob-header",
  computed: {
    getIsMobileNav() {
      return this.$store.getters.getIsMobileNav;
    },
    getIsModal() {
      return this.$store.getters.getIsModal;
    },
  },
  components: {
    MobRequestADemo,
    MobCustomDialog,
    // MobRequestADemo,
    // MobCustomDialog,
    MobNaviconIcon,
    MobOptimusIcon,
    MobButton,
  },
  mounted: function () {
    window.addEventListener("click", this.closeModal);
  },
  unmounted: function () {
    window.removeEventListener("click", this.closeModal);
  },
  data() {
    return {
      display: true,
    };
  },
  methods: {
    switchNav: function () {
      this.$store.commit("switchNav");
    },
    closeModal: function (event) {
      if (
        event.target.classList.contains("p-sidebar-mask") &&
        this.getIsMobileNav
      ) {
        this.$store.commit("switchNav");
      }
      // } else if (
      //   event.target.classList.contains("p-sidebar-mask") &&
      //   this.getIsModal
      // ) {
      //   this.$store.commit("switchModal");
      // }
    },
    requestADemo: function () {
      this.$store.commit("switchModal");
    },
    goto(id) {
      const element = document.getElementById(`${id}`);
      const top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>

<style scoped>
.active {
  font-weight: 600 !important;
}
.mobile-position-adjustment {
  position: relative;
  top: -4px;
}
.vertical-line {
  margin-top: 14px;
  height: 30px;
  border-left: 0.7px solid #000000;
}
</style>
