<template>
  <div class="cmvExample">
    <div class="cmvExample_wrapper">
      <!-- Title -->
      <div class="cmvExample_title">
        <h3>Example</h3>
      </div>
      <!-- Summary -->
      <div class="cmvExample_img cmvExample_img-summary">
        <span v-for="n in 4"></span>
        <img src="/index/contents/Example/cBtn_img-Example.svg" />
      </div>
      <p class="cmvExample_p cmvExample_p-summary">This is example page.</p>
      <!-- Introduction -->
      <div class="cmvExample_img cmvExample_img-intro">
        <span v-for="n in 4"></span>
        <img src="/index/contents/Example/cBtn_img-Example.svg" />
      </div>
      <p class="cmvExample_p cmvExample_p-intro">
        I needed a page that would be an example of a modal.
      </p>
      <!-- Details -->
      <div
        class="cmvExample_img cmvExample_img-details cmvExample_img-details--1"
      >
        <span v-for="n in 4"></span>
        <img src="/index/contents/Example/cBtn_img-Example.svg" />
      </div>
      <p class="cmvExample_p cmvExample_p-details cmvExample_p-details--1">
        Here are the details of the example.
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
$main-color: #000000;

.cmvExample {
  container: cmvExample / inline-size;
  width: 100%;
  height: 100%;
  overflow: hidden scroll;
  -ms-overflow-style: none;
  overscroll-behavior-y: contain;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &_wrapper {
    box-sizing: border-box;
    margin: 0;
    padding: 2rem 2.5rem;
    width: 100%;
    height: fit-content;

    @include m.mq(v.$bp-mid) {
      padding: 3rem 6rem;
    }
  }

  &_title {
    position: relative;
    margin: 0.5rem auto 1.5rem;
    width: fit-content;

    @include m.mq(v.$bp-mid) {
      margin: 1rem auto 3rem;
    }

    > h3 {
      margin: 0;
      font-family: "Yusei Magic", sans-serif;
      font-size: 3rem;
      color: $main-color;

      @include m.mq(v.$bp-mid) {
        font-size: 4rem;
      }
    }

    &::before {
      content: "";
      position: absolute;
      top: 0.1rem;
      left: -1rem;
      width: 1rem;
      height: 0.8rem;
      background-color: $main-color;
      clip-path: polygon(0 0, 0% 100%, 100% 50%);
      transform: rotate(50deg);

      @include m.mq(v.$bp-mid) {
        top: 0rem;
        left: -1.2rem;
        width: 1.4rem;
        height: 1.1rem;
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: 0.9rem;
      left: -1.4rem;
      width: 1rem;
      height: 0.8rem;
      background-color: $main-color;
      clip-path: polygon(0 0, 0% 100%, 100% 50%);
      transform: rotate(5deg);

      @include m.mq(v.$bp-mid) {
        top: 1.1rem;
        left: -1.8rem;
        width: 1.4rem;
        height: 1.1rem;
      }
    }
  }

  &_p {
    margin: 0 0 3.5rem;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    line-height: 2.3rem;

    @include m.mq(v.$bp-mid) {
      margin: 0 auto 5rem;
      padding: 3rem 0;
      max-width: 450px;
      font-size: 1.7rem;
      line-height: 3.3rem;
    }

    &-summary {
      margin: 0 0 2rem;
      padding: 1.5rem 2rem;
      font-size: 1.1rem;
      line-height: 2rem;

      @include m.mq(v.$bp-mid) {
        margin: 1rem auto 4rem;
        padding: 3rem 0;
        max-width: 450px;
        font-size: 1.5rem;
        line-height: 2.7rem;
      }
    }

    &-details {
      &--2 {
        margin: 0 0 1.5rem;

        @include m.mq(v.$bp-mid) {
          margin: 0 auto 3rem;
        }
      }
    }
  }

  &_img {
    position: relative;
    margin: 0 auto;
    width: fit-content;
    height: fit-content;

    > img {
      box-sizing: border-box;
      max-width: 100%;
      max-height: 200px;
      border: 0.4rem solid v.$p_c-yellow;
      border-radius: 0.7rem;

      @include m.mq(v.$bp-mid) {
        max-height: 300px;
        border-width: 0.6rem;
        border-radius: 1rem;
      }
    }

    > span {
      position: absolute;
      width: 0.6rem;
      height: 0.6rem;
      background-color: v.$p_c-yellow;
      border-radius: 50%;

      &:nth-child(1) {
        top: 1rem;
        left: 1rem;
      }

      &:nth-child(2) {
        top: 1rem;
        right: 1rem;
      }

      &:nth-child(3) {
        right: 1rem;
        bottom: 1.3rem;
      }

      &:nth-child(4) {
        left: 1rem;
        bottom: 1.3rem;
      }

      @include m.mq(v.$bp-mid) {
        width: 0.8rem;
        height: 0.8rem;

        &:nth-child(1) {
          top: 1.5rem;
          left: 1.5rem;
        }

        &:nth-child(2) {
          top: 1.5rem;
          right: 1.5rem;
        }

        &:nth-child(3) {
          right: 1.5rem;
          bottom: 1.9rem;
        }

        &:nth-child(4) {
          left: 1.5rem;
          bottom: 1.9rem;
        }
      }
    }

    &-summary {
      &::before {
        content: "";
        position: absolute;
        right: -1rem;
        bottom: -0.5rem;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: v.$p_c-orange;
        border-radius: 0.7rem;
      }
    }
  }
}
</style>
