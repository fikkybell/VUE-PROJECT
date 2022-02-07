<template>
  <div style="width: 100%">
    <div v-if="!isResponsive">
      <svg
        :width="width"
        :height="height"
        viewBox="0 0 709 327"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="-4.81958"
          y="0.80957"
          width="713.066"
          height="326.082"
          rx="8"
          transform="rotate(-0.0303474 -4.81958 0.80957)"
          fill="#B5BAE7"
        />
      </svg>
    </div>
    <div v-else style="width: 100%; max-width: 709px">
      <svg
        :height="height"
        viewBox="0 0 709 327"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="-4.81958"
          y="0.80957"
          width="713.066"
          height="326.082"
          rx="8"
          transform="rotate(-0.0303474 -4.81958 0.80957)"
          fill="#B5BAE7"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "mob-plainRectangularBackgroundIcon",
  props: {
    width: String,
    height: String,
    isResponsive: Boolean,
  },
};
</script>

<style scoped></style>
