<template>
  <form>
    <div class="p-3">
      <input type="text" />
      <button>Search</button>
    </div>
  </form>
  <div
    class="
      col-4
      mx-2
      shadow
      bg-light
      rounded
      p-3
      d-flex
      align-items-center
      justify-content-center
    "
  >
    <img
      src="https://thiscatdoesnotexist.com"
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
      alt="broken image"
    />
    <h1>Profile Name</h1>
  </div>
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