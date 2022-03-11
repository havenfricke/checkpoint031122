<template>
  <div class="about text-center">
    <h1>Welcome {{ user.name }}</h1>
    <img class="rounded" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState";
export default {
  name: "Account",
  setup() {
    return {
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
    };
  },
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
