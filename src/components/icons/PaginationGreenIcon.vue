<template>
  <div v-if="!getControlTwo">
    <svg
      width="120"
      height="13"
      viewBox="0 0 120 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="74.7963"
        y1="6.70259"
        x2="82.4886"
        y2="6.69851"
        stroke="#C3BDCF"
        stroke-width="12.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="43.606"
        y1="6.71913"
        x2="6.29598"
        y2="6.7389"
        stroke="#31BD37"
        stroke-width="12.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  <div v-else>
    <svg
      width="120"
      height="13"
      viewBox="0 0 120 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="74.7963"
        y1="6.70259"
        x2="82.4886"
        y2="6.69851"
        stroke="#31BD37"
        stroke-width="12.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="43.606"
        y1="6.71913"
        x2="6.29598"
        y2="6.7389"
        stroke="#C3BDCF"
        stroke-width="12.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "mob-paginationGreenIcon",
  computed: {
    getControlTwo() {
      return this.$store.getters.getControlTwo;
    },
  },
};
</script>

<style scoped></style>
