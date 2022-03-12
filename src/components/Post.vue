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
    <p class="">Post Create time</p>
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
          class="mdi p-1 rounded-circle mdi-delete selectable"
        ></i>
        <i
          type="button"
          class="mdi p-1 rounded-circle mdi-pencil selectable"
        ></i>
      </div>
    </div>
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
    <div class="col-10 p-3 fs-2">
      Profile Name
      <p class="fs-6 p-1 rounded" min="25" max="2000">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut nisi ipsa
        libero perspiciatis doloremque dolores maxime, fugit temporibus itaque
        suscipit dolor quod sit ullam porro iure similique vel nobis quae.
      </p>
    </div>
    <div class="d-flex justify-content-end">
      <i
        type="button"
        class="
          mdi mdi-thumb-up
          selectable
          rounded-circle
          hoverable
          text-end
          p-2
        "
      >
        32</i
      >
    </div>
    <div class="col-12 d-flex justify-content-center">
      <img
        class="img-fluid"
        src="https://i.pinimg.com/originals/8d/60/89/8d6089a1965ba4782dd0f002fb64684b.jpg"
        alt=""
      />
    </div>
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
.hoverable:hover {
  transform: scale(1.01);
  box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.3);
  transition: 10ms ease-in-out;
}
</style>