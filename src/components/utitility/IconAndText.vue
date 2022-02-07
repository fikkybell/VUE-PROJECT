<template>
  <div>
    <div>
      <slot />
    </div>
    <div class="mob-mt-37">
      <p
        :class="adjustNote"
        class="mob-font-size-20 mob-line-height-30 mob-font-weight-500"
      >
        {{ note }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "mob-iconAndText",
  props: {
    note: String,
    adjustNote: String,
  },
};
</script>

<style scoped>
.align-icon {
  margin: 0 50%;
}
</style>
