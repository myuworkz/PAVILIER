<template>
  <div class="cmvARemark">
    <div class="cmvARemark_wrapper">
      <!-- Title -->
      <div class="cmvARemark_title">
        <h3>ARemark</h3>
      </div>
      <!-- Summary -->
      <div class="cmvARemark_img cmvARemark_img-summary">
        <span v-for="n in 4"></span>
        <video
          src="/index/contents/ARemark/cmvARemark_heroVid.mp4"
          poster="/index/contents/ARemark/cmvARemark_txt1.png"
          loop
          autoplay
          muted
          playsinline
        ></video>
      </div>
      <p class="cmvARemark_p cmvARemark_p-summary">
        誰かが投稿したテキストを、カメラで景色と共に閲覧するＳＮＳアプリ。投稿時の位置情報を元にテキストをＡＲ技術で掲示する。
      </p>
      <!-- Introduction -->
      <div class="cmvARemark_img cmvARemark_img-intro">
        <span v-for="n in 4"></span>
        <img src="/index/contents/ARemark/cmvARemark_txt1.png" />
      </div>
      <p class="cmvARemark_p cmvARemark_p-intro">
        通常、ＳＮＳなどにテキストや画像を投稿すると、その情報は現実世界から切り離されインターネット上に配置される。しかし、投稿をＡＲと位置情報を用いて現実世界に再配置することで、ユーザーは情報を現実世界と地続きのモノとして認識しやすくなる。よりリアルな情報によって、従来なかった新しい刺激やコミュニケーションに繋がってほしいと制作した。
      </p>
      <!-- Details -->
      <div
        class="cmvARemark_img cmvARemark_img-details cmvARemark_img-details--1"
      >
        <span v-for="n in 4"></span>
        <img src="/index/contents/ARemark/cmvARemark_post1.png" />
      </div>
      <p class="cmvARemark_p cmvARemark_p-details cmvARemark_p-details--1">
        テキスト投稿時の位置情報がその投稿に紐づけられる。ＡＲ画面では、端末の位置情報を取得して、それをもとに投稿の表示を行う。
      </p>
      <div
        class="cmvARemark_img cmvARemark_img-details cmvARemark_img-details--2"
      >
        <span v-for="n in 4"></span>
        <img src="/index/contents/ARemark/cmvARemark_txt2.png" />
      </div>
      <p class="cmvARemark_p cmvARemark_p-details cmvARemark_p-details--2">
        同じものに言及している人たちが身近にいたり、投稿時にあったものがなくなっていたり、様々な情景が想像できる。インターネットと現実世界をより近づけたアプリケーションになっている。
      </p>
    </div>
  </div>
</template>

<style scoped lang="scss">
$main-color: #f62b70;

.cmvARemark {
  container: cmvARemark / inline-size;
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
    margin: 0.5rem auto 2rem;
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
      margin: 0 auto 5rem;
      padding: 3rem 0;
      max-width: 450px;
      font-size: 1.7rem;
      line-height: 3.3rem;
    }

    &-summary {
      margin: 0 0 3rem;
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
        margin: 0 0 2rem;

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
      max-height: 220px;
      border: 0.4rem solid v.$p_c-yellow;
      border-radius: 0.7rem;

      @include m.mq(v.$bp-mid) {
        max-height: 330px;
        border-width: 0.6rem;
        border-radius: 1rem;
      }
    }

    > video {
      max-width: 100%;
      max-height: 220px;
      border: 0.4rem solid v.$p_c-yellow;
      border-radius: 0.7rem;

      @include m.mq(v.$bp-mid) {
        max-height: 330px;
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
        height: 99%;
        background-color: v.$p_c-orange;
        border-radius: 0.7rem;
      }
    }
  }
}
</style>
