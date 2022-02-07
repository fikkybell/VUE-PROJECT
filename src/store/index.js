import { createStore } from "vuex";

export default createStore({
  state: {
    isMobileNav: false,
    isModal: false,
    carouselControlOne: 1,
    carouselControlTwo: 1,
    carouselControlThree: 1,
    carouselControlFour: 1,
  },
  mutations: {
    switchNav(state) {
      state.isMobileNav = !this.state.isMobileNav;
    },
    switchModal(state) {
      state.isModal = !this.state.isModal;
    },
    switchCarouselOne(state, value) {
      state.carouselControlOne = value;
    },
    switchCarouselTwo(state, value) {
      state.carouselControlTwo = value;
    },
    switchCarouselThree(state, value) {
      state.carouselControlThree = value;
    },
    switchCarouselFour(state, value) {
      state.carouselControlFour = value;
    },
  },
  actions: {},
  getters: {
    getIsMobileNav: (state) => {
      return state.isMobileNav;
    },
    getIsModal: (state) => {
      return state.isModal;
    },
    getControlOne: (state) => {
      return state.carouselControlOne;
    },
    getControlTwo: (state) => {
      return state.carouselControlTwo;
    },
    getControlThree: (state) => {
      return state.carouselControlThree;
    },
    getControlFour: (state) => {
      return state.carouselControlFour;
    },
  },
  modules: {},
});
