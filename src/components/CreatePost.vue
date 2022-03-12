<template>
  <form @submit.prevent="createPost">
    <div class="col-12 p-3 rounded bg-light shadow">
      <div class="p-2">
        <input
          v-model="state.editable.body"
          class="col-12 p-1"
          type="text"
          placeholder="What's on your mind?"
        />
      </div>
      <div class="p-2">
        <input
          v-model="state.editable.imgUrl"
          class="col-12 p-1"
          type="text"
          placeholder="Post image Url"
        />
      </div>
      <div class="mt-3 d-flex justify-content-end">
        <button class="col-2 rounded btn-success">Post!</button>
      </div>
    </div>
  </form>
</template>

<script>
import { computed, reactive } from "@vue/reactivity";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";

export default {
  setup() {
    const state = reactive({
      editable: {},
    });
    return {
      state,
      async createPost() {
        try {
          await postsService.createPost(state.editable);
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