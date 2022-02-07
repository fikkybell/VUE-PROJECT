<template>
  <div>
    <div v-if="!type">
      <div v-if="activeIndicator">
        <div :class="activeColor" class="indicator"></div>
      </div>
      <div v-else class="indicator inactive"></div>
    </div>
    <div v-else>
      <div v-if="activeIndicator">
        <div :class="activeColor" class="indicator-short"></div>
      </div>
      <div v-else class="indicator-short inactive"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "mob-carouselIndicator",
  props: {
    activeIndicator: Boolean,
    type: Number,
    activeColor: String,
  },
};
</script>

<style scoped>
.indicator {
  width: 30px;
  height: 0px;
  transform: rotate(179.97deg);
}
.indicator-short {
  width: 15px;
  height: 0px;
}
.activeGreen {
  border-radius: 15px;
  border-bottom: 15px solid #31bd37;
}
.activeBrown {
  border-radius: 15px;
  border-bottom: 15px solid rgba(214, 92, 21, 1);
}

.inactive {
  border-radius: 15px;
  border-bottom: 15px solid #c3bdcf;
}
</style>
