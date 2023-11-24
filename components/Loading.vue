<template>
  <div class="load_wrapper">
    <img class="load_txt" src="/index/load_txtImg.svg" alt="NowLoading" />
    <div class="load_loader">
      <div class="load_loader-dot" v-for="n in 4"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.load {
  &_wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: min(3.5%, 3rem);
    position: fixed;
    margin: 0;
    padding: 0;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: v.$p_c-blue;
    background-image: url("/index/load_bgImg.svg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  &_txt {
    display: block;
    margin: 0;
    padding: 0;
    width: 70%;
    max-width: 60rem;
  }

  &_loader {
    container: load_loader / inline-size;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 35%;
    max-width: 30rem;
    background-color: transparent;

    &-dot {
      box-sizing: border-box;
      flex-shrink: 0;
      margin: 8cqw;
      padding: 0;
      width: 15cqw;
      height: 15cqw;
      background-color: v.$p_c-orange;
      border: 3cqw solid v.$p_c-white;
      border-radius: 50%;
      animation: expandLoader 2s linear infinite;

      @keyframes expandLoader {
        0% {
          transform: scale(1);
        }
        25% {
          transform: scale(1.5);
        }
        50% {
          transform: scale(1);
        }
        100% {
          transform: scale(1);
        }
      }

      &:nth-of-type(1) {
        animation-delay: 0s;
      }
      &:nth-of-type(2) {
        animation-delay: 0.5s;
      }
      &:nth-of-type(3) {
        animation-delay: 1s;
      }
      &:nth-of-type(4) {
        animation-delay: 1.5s;
      }
    }
  }
}
</style>

<script setup lang="ts"></script>
