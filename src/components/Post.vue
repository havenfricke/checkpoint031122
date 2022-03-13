<template>
  <div class="row mx-5 mt-2 d-flex justify-content-around">
    <div class="col-lg-8 col-md-10 col-sm-12 border bg-light rounded shadow">
      <div class="d-flex justify-content-end align-items-center">
        <p class="col-8">Post created {{ new Date(post.createdAt) }}</p>
        <div
          class="
            fs-2
            col-lg-1 col-md-1 col-sm-4
            p-1
            rounded-pill
            d-flex
            justify-content-around
          "
        >
          <i
            @click="deletePost"
            type="button"
            class="mdi mx-1 p-1 hoverable rounded-circle mdi-delete selectable"
          ></i>
        </div>
      </div>
      <img
        @click="activeProfile"
        :src="post.creator.picture"
        style="width: auto; height: 20vh"
        class="
          img-fluid
          rounded-circle
          p-0
          d-flex
          flex-column
          col-4
          selectable
          hoverable
        "
        alt=""
      />
      <div class="col-10 p-1 fs-2">
        {{ post.creator.name }}
        <p>{{ post.graduated }}</p>
        <p class="fs-6 p-1 rounded" min="25" max="2000">
          {{ post.body }}
        </p>
      </div>
      <div class="d-flex justify-content-end"></div>
      <div class="col-12 d-flex justify-content-center">
        <img
          v-if="post.imgUrl"
          class="img-fluid col-12 bg-dark"
          :src="post.imgUrl"
          alt=""
        />
      </div>
      <div class="row p-3 d-flex justify-content-end">
        <i
          @click="like"
          type="button"
          class="
            fs-2
            mdi mdi-thumb-up
            col-lg-1 col-md-1 col-sm-1
            rounded
            selectable
            hoverable
            text-center
            p-2
          "
        >
          {{ post.likeIds.length }}</i
        >
      </div>
    </div>
  </div>
</template>

<script>
import { computed, watchEffect } from "@vue/runtime-core";
import { AppState } from "../AppState";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { useRouter } from "vue-router";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    return {
      activeProfile() {
        postsService.activeProfile(props.post.creatorId);
      },
      async like() {
        try {
          await postsService.like(props.post.id);
          logger.log(props.post.id);
        } catch (error) {
          logger.error(error);
        }
      },
      async deletePost() {
        try {
          if (await Pop.confirm) {
            await postsService.deletePost(props.post.id);
          }
          logger.log(props.post.id);
        } catch (error) {
          logger.error(error);
        }
      },
    };
  },
};
</script>

<style>
.hoverable:hover {
  transform: scale(1.01);
  box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.3);
  transition: 10ms ease-in-out;
}
.hoverable:active {
  transform: scale(0.77);
  transition: 10ms ease-in-out;
}
</style>