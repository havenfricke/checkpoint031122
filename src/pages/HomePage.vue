<template>
  <div class="container-fluid">
    <Banner />
    <div class="row p-2 mx-2 dflex justify-content-center rounded">
      <CreatePost />
      <div class="col-lg-6 col-md-8 col-sm-12">
        <form @submit.prevent="search" class="p-2 bg-light rounded mt-5">
          <input
            v-model="searchTerm"
            class="rounded col-10"
            placeholder="Search..."
          />
          <button class="btn-success rounded col-2">Go!</button>
        </form>
      </div>
    </div>
    <div
      v-for="p in posts"
      :key="p.id"
      class="row d-flex justify-content-center mt-3 p-2 rounded"
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
import { computed, ref } from "@vue/reactivity";
import { postsService } from "../services/PostsService";
import { AppState } from "../AppState";
import { onMounted, watchEffect } from "@vue/runtime-core";
import { logger } from "../utils/Logger";
export default {
  name: "Home",
  setup() {
    const searchTerm = ref("");
    watchEffect(async () => {
      try {
        await postsService.getAllPosts();
      } catch (error) {
        logger.error(error);
      }
    });
    watchEffect(async () => {
      try {
        await postsService.getPage();
      } catch (error) {
        logger.error(error);
      }
    });
    watchEffect(async () => {
      try {
        await postsService.getPageOf();
      } catch (error) {
        logger.error(error);
      }
    });

    return {
      searchTerm,
      async search() {
        try {
          await postsService.getAllPosts({ query: searchTerm.value });
        } catch (error) {
          logger.error(error);
        }
      },
      async changePage(val) {
        try {
          logger.log("changepage", val);
          await postsService.changePage(val);
        } catch (error) {
          logger.error(error);
        }
      },
      posts: computed(() => AppState.posts),
      page: computed(() => AppState.page),
      pageOf: computed(() => AppState.pageOf),
    };
  },
};
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
