<template>
  <div
    class="
      row
      p-3
      mt-2
      border
      bg-light
      rounded
      shadow
      d-flex
      justify-content-around
    "
  >
    <p class="">Post created {{ new Date(post.createdAt) }}</p>
    <div class="d-flex justify-content-end">
      <div
        class="
          col-lg-1 col-md-1 col-sm-4
          p-2
          bg-secondary
          rounded-pill
          d-flex
          justify-content-around
        "
      >
        <i
          type="button"
          class="mdi p-1 hoverable rounded-circle mdi-delete selectable"
        ></i>
        <i
          type="button"
          class="mdi p-1 hoverable rounded-circle mdi-pencil selectable"
        ></i>
      </div>
    </div>
    <img
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
      alt="broken image"
    />
    <div class="col-10 p-3 fs-2">
      {{ post.creator.name }}
      <p>{{ post.graduated }}</p>
      <p class="fs-6 p-1 rounded" min="25" max="2000">
        {{ post.body }}
      </p>
    </div>
    <div class="d-flex justify-content-end"></div>
    <div class="col-6 d-flex justify-content-center">
      <img
        v-if="post.imgUrl"
        class="img-fluid bg-dark"
        :src="post.imgUrl"
        alt=""
      />
    </div>
    <div class="row p-3 d-flex justify-content-end">
      <i
        type="button"
        class="
          mdi mdi-thumb-up
          col-lg-1 col-md-1 col-sm-2
          rounded-circle
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
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  setup() {
    return {};
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