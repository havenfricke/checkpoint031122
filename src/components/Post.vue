<template>
  <div class="row mx-5 mt-2 d-flex justify-content-around">
    <div class="col-lg-8 col-md-10 col-sm-12 border bg-light rounded shadow">
      <div class="d-flex justify-content-end align-items-center">
        <p class="col-10">Post created {{ new Date(post.createdAt) }}</p>
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
            v-if="post.creatorId == account.id"
            @click="deletePost"
            type="button"
            class="
              mdi
              mx-1
              col-2
              p-1
              hoverable
              rounded-circle
              mdi-delete
              selectable
            "
          ></i>
        </div>
      </div>
      <button class="rounded-circle" @click="activeProfile">
        <img
          @click="goTo('Profile')"
          :src="post.creator.picture"
          style="background-size: cover; width: auto; height: 10vh"
          class="
            rounded-circle
            img-fluid
            p-0
            d-flex
            flex-column
            col-2
            selectable
            hoverable
          "
          alt=""
        />
      </button>
      <div class="row p-1 fs-2">
        <div class="col-12">
          <b class="fs-4" style="word-wrap: break-word">{{
            post.creator.name
          }}</b>
          <p v-if="post.creator.class" class="fs-6">{{ post.creator.class }}</p>
          <p class="fs-6 p-1 rounded" min="25" max="2000">
            {{ post.body }}
          </p>
        </div>
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
import { AppState } from "../AppState";
import { postsService } from "../services/PostsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { useRouter } from "vue-router";
import { computed } from "@vue/reactivity";
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    return {
      activeProfile() {
        postsService.getProfile(props.post.creatorId);
        postsService.getProfilePosts(props.post.creatorId);
      },
      goTo(page) {
        router.push({
          name: page,
        });
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
      account: computed(() => AppState.account),
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