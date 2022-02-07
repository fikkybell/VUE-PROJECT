<template>
  <div v-if="!isPinkCard">
    <div :class="cardColor" class="customCard">
      <div>
        <slot />
      </div>
      <div>
        <p class="custom-card-title">{{ title }}</p>
        <p class="custom-card-note">{{ note }}</p>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="customPinkCard p-text-left">
      <div>
        <p class="customPinkCardTitle">{{ title }}</p>
      </div>
      <div class="mob-mt-12">
        <p class="customPinkCardNote">{{ note }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mob-card",
  components: {},
  props: {
    title: String,
    note: String,
    cardColor: String,
    cubeColor: String,
    isPinkCard: Boolean,
  },
};
</script>

<style scoped>
.customPinkCard {
  width: 100%;
  height: auto;
  /* Primary color */
  background: #4f1a6c;
  padding: 29px 9px 40px 20px;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.customPinkCardTitle {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  /* white */
  color: #ffffff;
}
.customPinkCardNote {
  font-size: 14px;
  line-height: 21px;
  /* or 150% */
  /* white */
  color: #ffffff;
  transform: matrix(1, 0, 0, 1, 0, 0);
}
.customCard {
  max-width: 293px;
  height: auto;
  padding: 67px 15px 15px 28px;
}
.pinkCard {
  background: #b5bae7;
  border-radius: 8px;
}
.greenCard {
  background: #a9d6ab;
  /* dashboard_shadow */
  box-shadow: 0px 4px 23px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
}
.yellowCard {
  background: #f7ecb0;
  border-radius: 8px;
}
.brownCard {
  background: #f1c8af;
  border-radius: 8px;
}
.customCube {
  width: 61px;
  height: 61px;
}
.greenCube {
  background: #5db262;
  opacity: 0.56;
  border-radius: 8px;
}
.yellowCube {
  background: #ddc02b;
  opacity: 0.45;
  border-radius: 8px;
  transform: rotate(179.97deg);
}
.brownCube {
  background: #e5976a;
  opacity: 0.45;
  border-radius: 8px;
}
.pinkCube {
  background: #8b94e9;
  opacity: 0.45;
  border-radius: 8px;
}
.custom-card-title {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  /* identical to box height */
  /* black */
  color: #000000;
}
.custom-card-note {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  /* black */
  color: #000000;
}
</style>
