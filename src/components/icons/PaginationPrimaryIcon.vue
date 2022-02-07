<template>
  <div v-if="!getControlOne">
    <svg
      width="90"
      height="13"
      viewBox="0 0 90 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="75.1488"
        y1="6.69398"
        x2="82.8411"
        y2="6.68991"
        stroke="#C3BDCF"
        stroke-width="12.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="43.9585"
        y1="6.71059"
        x2="6.64851"
        y2="6.73035"
        stroke="#5C69E0"
        stroke-width="12.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
  <div v-else>
    <svg
      width="90"
      height="13"
      viewBox="0 0 90 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="75.1488"
        y1="6.69398"
        x2="82.8411"
        y2="6.68991"
        stroke="#5C69E0"
        stroke-width="12.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line
        x1="43.9585"
        y1="6.71059"
        x2="6.64851"
        y2="6.73035"
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
  name: "mob-paginationPrimaryIcon",
  props: {
    iconState: Number,
  },
  computed: {
    getControlOne() {
      return this.$store.getters.getControlOne;
    },
  },
};
</script>

<style scoped></style>
