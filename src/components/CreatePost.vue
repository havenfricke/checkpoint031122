<template>
  <form>
    <div class="col-12 p-3 rounded bg-light shadow">
      <div class="p-2">
        <input
          class="col-12 p-1"
          type="text"
          placeholder="What's on your mind?"
        />
      </div>
      <div class="p-2">
        <input class="col-12 p-1" type="text" placeholder="Post image Url" />
      </div>
      <div class="mt-3 d-flex justify-content-end">
        <button class="col-2 rounded btn-success">Post!</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style>
</style>