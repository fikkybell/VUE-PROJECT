<template>
  <div v-if="active">
    <svg
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="4.60856"
        y1="4.88688"
        x2="7.80087"
        y2="4.88519"
        :stroke="fillColor"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  <div v-else>
    <svg
      width="12"
      height="9"
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="4.60856"
        y1="4.88688"
        x2="7.80087"
        y2="4.88519"
        stroke="#C3BDCF"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "mob-shortIndicator",
  props: {
    active: Number,
    fillColor: String,
  },
};
</script>

<style scoped></style>
