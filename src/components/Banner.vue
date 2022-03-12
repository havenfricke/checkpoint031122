<template>
  <div class="d-flex justify-content-center">
    <div
      v-for="b in banner"
      :key="b.title"
      class="col-lg-6 col-md-6 col-sm-12 p-2"
    >
      <img class="col-12" :src="b.banner" alt="" />
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { watchEffect } from "@vue/runtime-core";
import { bannerService } from "../services/BannerService";
export default {
  setup() {
    watchEffect(async () => {
      try {
        await bannerService.getBanner();
      } catch (error) {
        logger.error(error);
      }
    });
    return {
      banner: computed(() => AppState.banner),
    };
  },
};
</script>

<style>
</style>