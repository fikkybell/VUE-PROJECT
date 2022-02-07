<template>
  <div>
    <div class="p-grid">
      <div v-if="type === '1'" class="p-col-12">
        <mob-pagination-primary-icon></mob-pagination-primary-icon>
      </div>
      <div v-if="type === '2'" class="p-col-12">
        <mob-pagination-secondary-icon></mob-pagination-secondary-icon>
      </div>
      <div v-if="type === '3'" class="p-col-12">
        <mob-pagination-green-icon></mob-pagination-green-icon>
      </div>
    </div>
  </div>
</template>

<script>
import MobPaginationPrimaryIcon from "../icons/PaginationPrimaryIcon";
import MobPaginationSecondaryIcon from "../icons/PaginationSecondaryIcon";
import MobPaginationGreenIcon from "../icons/PaginationGreenIcon";
export default {
  name: "mob-pagination",
  components: {
    MobPaginationGreenIcon,
    MobPaginationSecondaryIcon,
    MobPaginationPrimaryIcon,
  },
  props: {
    type: String,
  },
};
</script>

<style scoped>
.wider-dots {
  width: 49.81px;
  height: 0px;
  transform: rotate(179.97deg);
}
.primaryDot {
  border: 12.5px solid #5c69e0;
}
.secondaryDot {
  border: 12.5px solid #c3bdcf;
}
.smaller-dots {
  width: 4.81px;
  height: 0px;
  transform: rotate(179.97deg);
}

@media screen and (max-width: 760px) {
  .p-grid {
  }
}
</style>
