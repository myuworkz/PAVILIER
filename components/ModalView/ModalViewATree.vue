<template>
  <div class="cmvATree">
    <div class="cmvATree_wrapper">
      <!-- Title -->
      <div class="cmvATree_title">
        <h3>ATree</h3>
      </div>
      <!-- Summary -->
      <div class="cmvATree_img cmvATree_img-summary">
        <span v-for="n in 4"></span>
        <img src="/index/contents/ATree/cmvATree_home.png" />
      </div>
      <p class="cmvATree_p cmvATree_p-summary">
        一本の木とそれに宿するイラストたちを眺めるアニメーションアート作品。手書きイラストとその動きを自由に設定でき、それらをランダムで表示する。
      </p>
      <!-- Introduction -->
      <div class="cmvATree_img cmvATree_img-intro">
        <span v-for="n in 4"></span>
        <video
          src="/index/contents/ATree/cmvATree_heroVid.mp4"
          poster="/index/contents/ATree/cmvATree_home.png"
          loop
          autoplay
          muted
          playsinline
        ></video>
      </div>
      <p class="cmvATree_p cmvATree_p-intro">
        鑑賞者の塗り絵やイラストを読み込んで画面上で動かすような展示作品を見ていて、動きも自分の好きなように設定出来たら面白そうだと考え制作した。
      </p>
      <!-- Details -->
      <div class="cmvATree_img cmvATree_img-details cmvATree_img-details--1">
        <span v-for="n in 4"></span>
        <img src="/index/contents/ATree/cmvATree_draw.png" />
      </div>
      <div class="cmvATree_img cmvATree_img-details cmvATree_img-details--1">
        <span v-for="n in 4"></span>
        <img src="/index/contents/ATree/cmvATree_moving.png" />
      </div>
      <p class="cmvATree_p cmvATree_p-details cmvATree_p-details--1">
        イラストを描いた後、そのイラストが画面上でどう動くかを設定できる。
      </p>
      <div class="cmvATree_img cmvATree_img-details cmvATree_img-details--2">
        <span v-for="n in 4"></span>
        <img src="/index/contents/ATree/cmvATree_spring.png" />
      </div>
      <p class="cmvATree_p cmvATree_p-details cmvATree_p-details--2">
        シーンへの登場はランダムなので、偶発的な映像を楽しむことができる。気に入ったシーンは撮影してギャラリーで鑑賞できる。
      </p>
      <div class="cmvATree_img cmvATree_img-details cmvATree_img-details--3">
        <span v-for="n in 4"></span>
        <img src="/index/contents/ATree/cmvATree_autumn.png" />
      </div>
      <div class="cmvATree_img cmvATree_img-details cmvATree_img-details--3">
        <span v-for="n in 4"></span>
        <img src="/index/contents/ATree/cmvATree_shed.png" />
      </div>
      <div class="cmvATree_img cmvATree_img-details cmvATree_img-details--3">
        <span v-for="n in 4"></span>
        <img src="/index/contents/ATree/cmvATree_winter.png" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
$main-color: #888888;

.cmvATree {
  container: cmvATree / inline-size;
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
    margin: 0 0 4rem;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    line-height: 2.3rem;

    @include m.mq(v.$bp-mid) {
      margin: 0 auto 5.5rem;
      padding: 3rem 0;
      max-width: 450px;
      font-size: 1.7rem;
      line-height: 3.3rem;
    }

    &-summary {
      margin: 0 0 2.5rem;
      padding: 1.5rem 2rem;
      font-size: 1.1rem;
      line-height: 2rem;

      @include m.mq(v.$bp-mid) {
        margin: 1rem auto 4.5rem;
        padding: 3rem 0;
        max-width: 450px;
        font-size: 1.5rem;
        line-height: 2.7rem;
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
      max-height: 180px;
      border: 0.4rem solid v.$p_c-yellow;
      border-radius: 0.7rem;

      @include m.mq(v.$bp-mid) {
        max-height: 310px;
        border-width: 0.6rem;
        border-radius: 1rem;
      }
    }

    > video {
      box-sizing: border-box;
      max-width: 100%;
      max-height: 180px;
      border: 0.4rem solid v.$p_c-yellow;
      border-radius: 0.7rem;

      @include m.mq(v.$bp-mid) {
        max-height: 310px;
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
        right: -0.8rem;
        bottom: -0.4rem;
        z-index: -1;
        width: 100%;
        height: 98%;
        background-color: v.$p_c-orange;
        border-radius: 0.7rem;
      }
    }

    &-details {
      &--1 {
        &:not(:last-child) {
          margin: 0 auto 0.8rem;

          @include m.mq(v.$bp-mid) {
            margin: 0 auto 2rem;
          }
        }
      }

      &--3 {
        &:not(:last-child) {
          margin: 0 auto 0.8rem;

          @include m.mq(v.$bp-mid) {
            margin: 0 auto 2rem;
          }
        }

        &:last-child {
          margin: 0 auto 1.5rem;

          @include m.mq(v.$bp-mid) {
            margin: 0 auto 3rem;
          }
        }
      }
    }
  }
}
</style>
