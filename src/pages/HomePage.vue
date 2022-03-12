<template>
  <div class="container-fluid">
    <Ads />
    <div class="row p-2 mx-2 rounded">
      <CreatePost />
    </div>
    <div class="row d-flex justify-content-center mt-3 p-2 rounded">
      <Post />
    </div>
    <div class="row d-flex justify-content-around">
      <div class="text-center col-12">
        <i type="button" class="mdi mdi-arrow-left mx-5 p-2"></i>
        page 1 of 10
        <i type="button" class="mdi mdi-arrow-right mx-5 p-2"></i>
      </div>
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
