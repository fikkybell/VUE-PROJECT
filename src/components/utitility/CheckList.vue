<template>
  <div>
    <div class="p-grid list-size">
      <div class="p-col-4">
        <div class="p-mt-5">
          <div v-if="checkColor === 'green'">
            <div v-if="checkType === 'outlined'">
              <mob-check-lisk-not-filled></mob-check-lisk-not-filled>
            </div>
            <div v-else>
              <mob-green-check-icon></mob-green-check-icon>
            </div>
          </div>
          <div v-else-if="checkColor === 'brown'">
            <mob-brown-check-icon></mob-brown-check-icon>
          </div>
          <div v-else>
            <slot />
            <component v-bind:is="customIcon"></component>
          </div>
        </div>
      </div>
      <div class="p-col-8">
        <p v-if="margin" class="note addNoteMargin" :class="noteColor">
          {{ note }}
        </p>
        <p
          v-else-if="extraClass"
          class="note removeMarginLeft"
          :class="noteColor"
        >
          {{ note }}
        </p>
        <p v-else class="note" :class="noteColor">
          {{ note }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MobGreenCheckIcon from "../icons/GreenCheckIcon";
import MobBrownCheckIcon from "../icons/BrownCheckIcon";
import MobCheckLiskNotFilled from "../icons/CheckLiskNotFilled";
export default {
  name: "mob-checkList",
  props: {
    note: String,
    checkColor: String,
    noteColor: String,
    checkType: String,
    margin: Boolean,
    customIcon: undefined,
    extraClass: Boolean,
  },
  components: { MobCheckLiskNotFilled, MobBrownCheckIcon, MobGreenCheckIcon },
};
</script>

<style scoped>
.note {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  /* light-grey */
  transform: rotate(-0.03deg);
}
.removeMarginLeft {
  margin-left: -3em;
}
.checkNoteWhite {
  color: #f4f6fc;
}

.checkNoteBlack {
  color: #000000;
}
.addNoteMargin {
  position: relative;
  top: 0.7em;
}

.purpleVariant {
  color: #571d7a !important;
}

.list-size {
  width: 420px;
}

@media screen and (max-width: 760px) {
  .p-grid .list-size {
    //width: 600px;
  }
  .note {
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 30px;
    position: relative;
    left: -5.5em;
    /* light-grey */
    transform: rotate(-0.03deg);
  }
}

@media screen and (min-width: 768px) {
  .p-grid .list-size {
    width: 600px;
  }
  .note {
    font-style: normal;
    font-weight: 500;
    font-size: 19px;
    line-height: 30px;
    position: relative;
    right: 139px;
    /* light-grey */
    transform: rotate(-0.03deg);
  }
}
</style>
