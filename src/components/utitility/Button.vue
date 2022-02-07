<template>
  <div class="main">
    <button :class="type">
      {{ name }} <i v-if="icon" :class="iconType" class="icon"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "mob-button",
  props: {
    name: String,
    type: String,
    icon: Boolean,
    iconType: String,
  },
};
</script>

<style scoped>
.main {
  cursor: pointer !important;
}

.primary {
  background: #4f1a6c;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.32);
  border-radius: 5px;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  height: 40px;
  border: 0;
  min-width: 268px;
  /* identical to box height */
  text-align: center;
  text-transform: capitalize;
  /* white */
  color: #ffffff;
}

.secondary {
  background: #d65c15;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.32);
  border-radius: 5px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  border: 0;
  line-height: 24px;
  text-align: center;
  text-transform: capitalize;
  min-width: 234px;
  height: 40px;
  cursor: pointer;
  color: #ffffff;
}

.white {
  background: #f4f6fc;
  color: #571d7a;
  font-size: 16px;
  font-weight: 400;
  border: 0;
  line-height: 24px;
  text-align: center;
  border-radius: 25px;
  height: 40px;
  cursor: pointer;
  padding: 0 2em;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.75);
}

.white2 {
  background: #f4f6fc;
  color: #571d7a;
  font-size: 16px;
  font-weight: 400;
  border: 0;
  line-height: 24px;
  text-align: center;
  border-radius: none;
  width: 312px;
  height: 50px;
  cursor: pointer;
  padding: 0 2em;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.75);
}
.green {
  width: 100%;
  background: #25bc4f;
  border-radius: 5px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  height: 40px;
  border: 0;
  line-height: 24px;
  color: #ffffff;
}

@media only screen and (max-width: 450px) {
  .green {
    width: 100% !important;
  }
}

.icon {
  float: right;
  position: relative;
  top: 7px;
  font-size: 8px;
  right: 5px;
}

.gradient {
  background: linear-gradient(
    136.64deg,
    #d65c15 0%,
    #d65c15 43.21%,
    #d61515 115.23%
  );
  border-radius: 22px;
  transform: rotate(-0.03deg);
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  min-width: 204px;
  height: 40px;
  border: 0;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
}

.small-gradient {
  width: 170px;
  height: 34px;
  color: white;
  background: linear-gradient(
    136.64deg,
    #d65c15 0%,
    #d65c15 43.21%,
    #d61515 115.23%
  );
  border-radius: 22px;
  transform: rotate(-0.03deg);
}

.primary-two {
  background: #4f1a6c;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.32);
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  height: 40px;
  border: 0;
  min-width: 268px;
  /* identical to box height */
  text-align: center;
  /* white */
  color: #ffffff;
}

@media screen and (max-width: 760px) {
  .gradient {
    background: linear-gradient(
      136.64deg,
      #d65c15 0%,
      #d65c15 43.21%,
      #d61515 115.23%
    );
    border-radius: 22px;
    transform: rotate(-0.03deg);
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    min-width: 140px;
    height: 40px;
    position: relative;
    //left: 15px;
    bottom: 3px;
  }
}

@media screen and (max-width: 760px) {
  .white {
    background: #f4f6fc;
    color: #571d7a;
    font-size: 12px;
    font-weight: 500;
    border: 0;
    line-height: 24px;
    text-align: center;
    border-radius: 25px;
    height: 50px;
    width: 240px;
    cursor: pointer;
    padding: 0 2em;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.75);
  }

  @media screen and (min-width: 768px) {
    .gradient {
      background: linear-gradient(
        136.64deg,
        #d65c15 0%,
        #d65c15 43.21%,
        #d61515 115.23%
      );
      border-radius: 22px;
      transform: rotate(-0.03deg);
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      min-width: 140px;
      height: 40px;
      position: relative;
      left: 15px;
      bottom: 3px;
    }
  }
}
</style>
