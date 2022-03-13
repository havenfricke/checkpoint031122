<template>
  <div class="container">
    <div>
      <img
        class="img-fluid"
        :src="profile.coverImg"
        alt=""
        style="height: 33vh; width: 100vw; overflow: auto background-size: fit;"
      />
    </div>
    <div class="col-12 p-3 bg-light">
      <img
        class="rounded-circle img"
        :src="profile.picture"
        alt=""
        style="transform: translateY(-5vh)"
      />
      <h1>{{ profile.name }}</h1>
      <p>{{ profile.bio }}</p>
      <p><i class="mdi mdi-pencil"> </i>{{ profile.email }}</p>
      <p><i class="mdi mdi-pencil"> </i>{{ profile.linkedin }}</p>
      <p><i class="mdi mdi-pencil"> </i>{{ profile.github }}</p>
      <p><i class="mdi mdi-pencil"> </i>{{ profile.resume }}</p>
      <div class="d-flex justify-content-end"></div>
    </div>
  </div>
  <div v-for="p in posts" :key="p.id">
    <Post :post="p" />
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  name: "Profile",
  setup() {
    return {
      posts: computed(() => AppState.activePosts.posts),
      profile: computed(() => AppState.activeProfile),
    };
  },
};
</script>

<style>
</style>