<template>
  <footer class="f">
    <div class="f_wrapper">
      <small>&copy; 2023 myu</small>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.f {
  position: relative;
  width: 100%;
  min-width: v.$bp-min;

  &_wrapper {
    @include m.p_wrapper("default");
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: v.$bp-max;
    height: 2.5rem;
    text-align: center;

    @include m.mq(v.$bp-mid) {
      @include m.p_wrapper(v.$bp-mid);
      height: 3.2rem;
    }
  }

  small {
    margin: 0;
    padding: 0;
    color: v.$p_c-black;
    font-size: 1rem;

    @include m.mq(v.$bp-mid) {
      font-size: 1.4rem;
    }
  }
}
</style>
