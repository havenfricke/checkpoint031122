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
        style="width: auto; height: 20vh; transform: translateY(-5vh)"
      />
      <h1>{{ profile.name }}</h1>
      <p>{{ profile.bio }}</p>
      <p>{{ profile.class }}</p>
      <p>Graduated From Codeworks: {{ profile.graduated }}</p>
      <p><i class="mdi mdi-email-outline"> </i> {{ profile.email }}</p>

      <a v-if="profile.linkedin" :href="profile.linkedin"
        ><p><i class="mdi mdi-linkedin"> Linkedin</i></p></a
      >
      <a v-if="profile.github" :href="profile.github"
        ><p><i class="mdi mdi-github"> Github</i></p></a
      >
      <a v-if="profile.resume" :href="profile.resume"
        ><p><i class="mdi mdi-file-outline"> Resume</i></p></a
      >
      <div class="d-flex justify-content-end"></div>
    </div>
    <div
      class="row d-flex justify-content-center mt-3 p-2 rounded"
      v-for="p in posts"
      :key="p.id"
    >
      <Post :post="p" />
    </div>
    <div class="row d-flex justify-content-around">
      <div class="text-center col-12">
        <i
          @click="changePage(-1)"
          type="button"
          class="mdi mdi-arrow-left mx-3 p-2"
        ></i>
        Newer Posts | Older Posts
        <i
          @click="changePage(2)"
          type="button"
          class="mdi mdi-arrow-right mx-3 p-2"
        ></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
import { onMounted, watchEffect } from "@vue/runtime-core";
import { useRoute } from "vue-router";
export default {
  name: "Profile",

  // props: {
  //   post: {
  //     type: Object,
  //     required: true,
  //   },
  // },
  setup() {
    const route = useRoute();
    watchEffect(async () => {
      try {
        postsService.getProfile(route.params.id);
        postsService.getProfilePosts(route.params.id);
      } catch (error) {
        logger.error(error);
      }
    });
    return {
      posts: computed(() => AppState.activePosts.posts),
      profile: computed(() => AppState.activeProfile),
      async changePage(val) {
        try {
          await postsService.changePageProfile(val);
        } catch (error) {
          logger.error(error);
        }
      },
    };
  },
};
</script>

<style>
</style>