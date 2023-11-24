<template>
  <div class="cmvPlanesh">
    <div class="cmvPlanesh_wrapper">
      <!-- Title -->
      <div class="cmvPlanesh_title">
        <h3>ぷらねっしゅ</h3>
      </div>
      <!-- Summary -->
      <div class="cmvPlanesh_img cmvPlanesh_img-summary">
        <span v-for="n in 4"></span>
        <img src="/index/contents/Planesh/cBtn_img-Planesh.webp" />
      </div>
      <p class="cmvPlanesh_p cmvPlanesh_p-summary">
        身体を使って遊ぶメディアアート展示。遊ぶ人の身体の動きをトラッキングし、それに応じて画面上のエンティティが動く。
      </p>
      <!-- Introduction -->
      <div class="cmvPlanesh_img cmvPlanesh_img-intro">
        <span v-for="n in 4"></span>
        <img src="/index/contents/Planesh/cmvPlanesh_coop.jpg" />
      </div>
      <p class="cmvPlanesh_p cmvPlanesh_p-intro">
        感染症流行下でも、子供たちが安全に楽しく身体を動かす機会を得られるようにと企画された。相手やコントローラーに触れることなく、協力して遊ぶことができる。
      </p>
      <!-- Details -->
      <div
        class="cmvPlanesh_img cmvPlanesh_img-details cmvPlanesh_img-details--1"
      >
        <span v-for="n in 4"></span>
        <img src="/index/contents/Planesh/cmvPlanesh_tracking.jpg" />
      </div>
      <p class="cmvPlanesh_p cmvPlanesh_p-details cmvPlanesh_p-details--1">
        不時着したUFOをプレイヤーが運んであげるという設定。カメラや深度センサー等を内蔵したKinectを用いて、プレイヤーのモーショントラッキングを行っている。これによりプレイヤーの「影」が画面上に現れ、UFOを触って動かすことができる。
      </p>
      <div
        class="cmvPlanesh_img cmvPlanesh_img-details cmvPlanesh_img-details--2"
      >
        <span v-for="n in 4"></span>
        <img src="/index/contents/Planesh/cmvPlanesh_screen.jpg" />
      </div>
      <p class="cmvPlanesh_p cmvPlanesh_p-details cmvPlanesh_p-details--2">
        スクリーンに映してスケール感を増し、より全身を使って、また時には協力して、コース上の障害物を避けながらゴールを目指す。
      </p>
      <img
        class="cmvPlanesh_logoImg"
        src="/index/contents/Planesh/cmvPlanesh_logo.png"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
$main-color: #125773;

.cmvPlanesh {
  container: cmvPlanesh / inline-size;
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

  &_logoImg {
    display: block;
    margin: 0 auto;
    max-width: 65%;
    max-height: 250px;
    filter: drop-shadow(0.1rem 0.1rem 0 $main-color);

    @include m.mq(v.$bp-mid) {
      max-width: 70%;
      max-height: 280px;
      filter: drop-shadow(0.2rem 0.2rem 0 $main-color);
    }
  }
}
</style>
