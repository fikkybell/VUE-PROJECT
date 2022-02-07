<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 377 369"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M287.087 23.5772C201.703 -21.3709 71.882 1.30213 -31.0392 81.2007C-85.4506 123.441 -130.803 180.713 -133.532 255.045C-138.41 387.92 -13.4084 375.968 63.2509 356.336C100.319 346.843 136.954 341.911 172.188 341.491C235.576 340.735 339.285 319.635 371.049 195.662C394.071 105.806 343.961 53.517 287.087 23.5772Z"
      fill="#F1EFF6"
    />
  </svg>
</template>

<script>
export default {
  name: "mob-grayBackgroundIcon",
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
