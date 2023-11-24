<template>
  <header class="h">
    <div>
      <div class="h_bg"></div>
      <div class="h_wrapper">
        <div class="h_logo">
          <a href="">
            <h1><img src="/index/h_logo.svg" alt="PAVILIER" /></h1>
          </a>
        </div>
        <nav class="h_nav">
          <menu class="h_nav-menu">
            <li class="h_nav-li">
              <button @click="scrollToSection($event, 'contents')">
                Contents
              </button>
            </li>
            <span>|</span>
            <li class="h_nav-li">
              <button @click="scrollToSection($event, 'profile')">
                Profile
              </button>
            </li>
            <span>|</span>
            <li class="h_nav-li">
              <button @click="scrollToSection($event, 'contact')">
                Contact
              </button>
            </li>
          </menu>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.h {
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  min-width: v.$bp-min;
  height: 20vw;
  max-height: 115px;
  min-height: 62px;

  > div {
    position: relative;
    height: 100%;
  }

  &_bg {
    position: absolute;
    width: 100vw;
    min-width: v.$bp-min;
    height: 100%;
    background-image: url("/index/h_bgImg.svg");
    background-size: auto 100%;
    background-repeat: repeat-x;
    filter: drop-shadow(0 0.2rem 0.1rem v.$p_c-darkblue);
  }

  &_wrapper {
    container: header / inline-size;
    @include m.p_wrapper("default");
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: v.$bp-max;
    height: 85%;

    @include m.mq(v.$bp-mid) {
      @include m.p_wrapper(v.$bp-mid);
    }
  }

  &_logo {
    transform: translateX(12%);
    margin: 0 1rem;

    @include m.mq(v.$bp-mid) {
      transform: translateX(0);
    }

    a {
      display: block;
      margin: -1cqw;
      padding: 1cqw;
      width: 45cqw;
      cursor: pointer;

      &:focus-visible {
        outline: none;
      }

      @include m.mq(v.$bp-mid) {
        width: 24rem;
      }
    }

    img {
      display: block;
      width: 100%;
    }
  }

  &_nav {
    display: none;

    @include m.mq(v.$bp-mid) {
      display: block;
      margin-right: 1cqw;
      margin-left: auto;

      &-menu {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-end;
        padding-left: 0;
      }

      &-li {
        list-style: none;

        button {
          box-sizing: border-box;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0;
          padding: 0.1rem 0.5rem;
          width: 100%;
          background-color: transparent;
          border: none;
          text-align: center;
          color: v.$p_c-black;
          font-family: "Yusei Magic", sans-serif;
          font-size: min(3.2cqw, 2.2rem);
          font-weight: 700;

          @include m.hover {
            transform: translateY(0.2rem);
          }

          &:focus-visible {
            outline: 0.2rem v.$p_c-orange solid;
          }
        }
      }

      span {
        display: inline-block;
        margin: 0.1rem 0.3rem;
        padding: 0;
        font-family: "Zen Kaku Gothic Antique", sans-serif;
        font-size: min(3.2cqw, 2.2rem);
        color: v.$p_c-black;
        cursor: default;
        user-select: none;
      }
    }
  }
}
</style>

<script setup lang="ts">
function scrollToSection(event: Event, targetId: string): void {
  event.preventDefault();
  const targetSection = document.getElementById(targetId);
  if (targetSection) {
    window.scrollTo({
      top: targetSection.offsetTop,
      behavior: "smooth",
    });
  }
}
</script>
