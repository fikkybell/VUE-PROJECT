<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 562 567"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.22"
      d="M85.9991 219.119C131.064 92.439 276.488 5.75497 444.105 9.10151C532.718 10.8707 625.223 38.0255 690.687 122.159C807.71 272.555 676.033 367.52 584.884 411.44C540.809 432.677 501.01 458.846 466.386 489.045C404.095 543.375 285.397 609.146 149.747 492.528C51.4276 408.002 55.9813 303.501 85.9991 219.119Z"
      fill="#6B2397"
    />
  </svg>
</template>

<script>
export default {
  name: "mob-pinkBackgroundIcon",
  props: {
    width: String,
    height: String,
  },
};
</script>

<style scoped>
@media screen and (max-width: 760px) {
  svg {
    display: block;
  }
}
</style>
