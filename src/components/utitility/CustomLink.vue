<template>
  <div>
    <a :class="type" class="custom-link"
      ><span
        ><span>{{ name }}</span></span
      ><i :class="iconType"></i
    ></a>
  </div>
</template>

<script>
export default {
  name: "mob-customLink",
  props: {
    name: String,
    iconType: String,
    type: String,
  },
};
</script>

<style scoped>
.custom-link {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height */
  text-decoration-line: underline;
  /* bright_blue */
  transform: rotate(-0.03deg);
}
.primaryLink {
  color: #5866eb;
}
.tertiary {
  color: #0ccc36;
}
.custom-link i {
  margin-left: 6px;
  font-size: 13px;
}
</style>
