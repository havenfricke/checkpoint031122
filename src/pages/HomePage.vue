<template>
  <div class="container-fluid">
    <Ads />
    <div class="row p-2 mx-2 rounded">
      <CreatePost />
    </div>
    <div class="row d-flex justify-content-center mt-3 p-2 rounded">
      <Post />
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
