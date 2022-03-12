<template>
  <Ads />
  <div class="container">
    <div>
      <img
        class="img-fluid"
        src="https://media.istockphoto.com/photos/digital-eye-wave-lines-stock-background-stock-video-picture-id1226241649?b=1&k=20&m=1226241649&s=170667a&w=0&h=lXhD5bdn_YT50-ItctUnqB2WiGZ8Jye1GZHjvDsb2Xo="
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
      <p>{{ account.bio }} this is my bio</p>
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
        <input class="col-12" type="text" />
        Bio
        <input class="col-12" type="text" />
        Profile Picture Url
        <input class="col-12" type="text" />
        Email
        <input class="col-12" type="text" />
        Github Url
        <input class="col-12" type="text" />
        Resume Url
        <input class="col-12" type="text" />
        <button class="btn-dark rounded">Save Changes</button>
      </form>
    </div>
    <CreatePost />
  </div>
  <div class="mt-3">
    <Post />
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
.img {
  max-width: 100px;
}
</style>
