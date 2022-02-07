<template>
  <div v-if="active">
    <svg
      width="25"
      height="9"
      viewBox="0 0 25 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="20.4184"
        y1="4.90446"
        x2="4.41838"
        y2="4.91294"
        :stroke="fillColor"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  <div v-else>
    <svg
      width="25"
      height="9"
      viewBox="0 0 25 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="20.4184"
        y1="4.90446"
        x2="4.41838"
        y2="4.91294"
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
  name: "mob-longIndicator",
  props: {
    active: Number,
    fillColor: String,
  },
};
</script>

<style scoped></style>
