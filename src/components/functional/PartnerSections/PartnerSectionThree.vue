<template>
  <div class="mob-mt-225 home-margin">
    <div class="p-text-center">
      <p class="join-partner">
        Join other partners that are using Optimus to get more done
      </p>
    </div>

    <div class="mob-mt-33">
      <mob-infinite-scroll-badges></mob-infinite-scroll-badges>
    </div>
  </div>
</template>

<script>
import MobInfiniteScrollBadges from "../sections/InfiniteScrollBadges";
export default {
  name: "mob-partnerSectionThree",
  components: { MobInfiniteScrollBadges },
};
</script>

<style scoped>
.join-partner {
  font-weight: 600;
}
</style>
