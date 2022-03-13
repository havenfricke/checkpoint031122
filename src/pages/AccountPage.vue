<template>
  <Ads />
  <div class="container">
    <div>
      <img
        class="img-fluid"
        :src="account.coverImg"
        alt=""
        style="height: 33vh; width: 100vw; overflow: auto background-size: fit;"
      />
    </div>
    <div class="col-12 p-3 bg-light">
      <img
        class="rounded-circle img"
        :src="account.picture"
        alt=""
        style="transform: translateY(-5vh)"
      />
      <h1>{{ account.name }}</h1>
      <p>{{ account.bio }}</p>
      <p><i class="mdi mdi-pencil"> </i>{{ account.email }}</p>
      <p><i class="mdi mdi-pencil"> </i>{{ account.linkedin }}</p>
      <p><i class="mdi mdi-pencil"> </i>{{ account.github }}</p>
      <p><i class="mdi mdi-pencil"> </i>{{ account.resume }}</p>
      <div class="d-flex justify-content-end"></div>
    </div>
  </div>

  <div class="mt-3">
    <div class="col-12 bg-dark p-4 rounded">
      <form class="container">
        Cover Image Url
        <input v-model="editable.coverImg" class="col-12" type="text" />
        Bio
        <input v-model="editable.bio" class="col-12" type="text" />
        Profile Picture Url
        <input v-model="editable.picture" class="col-12" type="text" />
        Email
        <input v-model="editable.email" class="col-12" type="text" />
        Github Url
        <input v-model="editable.github" class="col-12" type="text" />
        Resume Url
        <input v-model="editable.resume" class="col-12" type="text" />
        Linkedin Url
        <input v-model="editable.linkedin" class="col-12" type="text" />
        <button type="button" class="btn-dark rounded" @click="update">
          Save Changes
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { computed, ref, watchEffect } from "vue";
import { AppState } from "../AppState";
import { accountService } from "../services/AccountService";
export default {
  name: "Account",
  setup() {
    const editable = ref({});
    watchEffect(() => {
      editable.value = AppState.account;
    });
    return {
      editable,
      async update() {
        try {
          await accountService.update(editable.value);
        } catch (error) {
          logger.error(error);
        }
      },
      account: computed(() => AppState.account),
      user: computed(() => AppState.user),
    };
  },
};
</script>

<style scoped>
.img {
  max-width: 100px;
}
</style>
