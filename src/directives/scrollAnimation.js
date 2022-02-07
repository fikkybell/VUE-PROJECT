const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("enter");
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  }
);
export default {
  // eslint-disable-next-line no-unused-vars
  beforeMount(el, binding) {
    el.classList.add("before-enter");
    animatedScrollObserver.observe(el);
  },
};
