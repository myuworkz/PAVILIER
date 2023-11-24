<template>
  <div class="cBtn_wrapper">
    <button
      class="cBtn_button"
      :class="{ hover: isHovered }"
      :key="contentsKey"
      @mouseover="isHovered = true"
      @mouseleave="isHovered = false"
      @click="emitOCM"
    >
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 105 105"
        preserveAspectRatio="xMidYMid meet"
        class="cBtn_frame"
      >
        <defs>
          <mask class="cBtn_frame-mask" :id="'cBtn_frame-mask--' + contentsKey">
            <path
              class="cBtn_frame-maskPath"
              :class="{ hover: isHovered }"
              fill="#ffffff"
              d="M52.5,102.5c-4.8,0-11.05-2.17-14.06-8.1-2.11,1.08-4.4,1.63-6.83,1.63-5.81,0-11.59-3.42-14.37-8.5-1.55-2.82-2.09-5.98-1.58-9.09-6.45-.95-11.56-5.84-12.86-12.54-.99-5.1,.54-9.95,4.1-13.4-3.56-3.44-5.09-8.3-4.1-13.39,1.3-6.71,6.43-11.61,12.86-12.55-.5-3.11,.04-6.26,1.58-9.08,2.79-5.08,8.56-8.5,14.37-8.5,2.44,0,4.73,.55,6.84,1.63,3.01-5.93,9.25-8.1,14.06-8.1s11.06,2.17,14.06,8.11c2.59-1.32,5.07-1.63,6.84-1.63,5.81,0,11.58,3.41,14.36,8.49,1.55,2.82,2.09,5.98,1.58,9.09,6.45,.95,11.57,5.86,12.86,12.58,.98,5.09-.54,9.93-4.09,13.36,3.55,3.43,5.06,8.27,4.09,13.36-1.29,6.74-6.43,11.65-12.85,12.59,.5,3.11-.04,6.27-1.58,9.09-2.78,5.08-8.55,8.49-14.36,8.49-2.44,0-4.74-.55-6.85-1.63-3.01,5.94-9.25,8.11-14.06,8.11Z"
            />
          </mask>
        </defs>
        <image
          xlink:href="/index/cBtn_frameTexture.png"
          class="cBtn_frame-texture"
          :mask="'url(#cBtn_frame-mask--' + contentsKey + ')'"
          mask-repeat="no-repeat"
          mask-size="contain"
        ></image>
      </svg>
      <div class="cBtn_img">
        <img class="cBtn_imgSrc" :src="imgSrc" />
      </div>
      <div class="cBtn_deco-Line"></div>
    </button>
    <ContentsModal ref="contentsModal" :contentsKey="contentsKey" />
  </div>
</template>

<style scoped lang="scss">
.cBtn {
  &_wrapper {
    container: cBtn / inline-size;
  }

  &_button {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    transform-origin: center;
    position: relative;
    margin: 0;
    padding: 5%;
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    border-radius: 10%;
    cursor: pointer;
    user-select: none;
    transition: transform 0.4s ease;

    &:focus-visible {
      outline: 0.2rem v.$p_c-orange solid;
    }

    &.hover {
      transform: scale(1.1);
    }
  }

  &_img {
    margin: 0;
    padding: 0;
    width: 96%;
    height: 96%;
    background-color: v.$p_c-white;
    clip-path: circle(50% at 50% 50%);

    &Src {
      object-fit: cover;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      opacity: 0.8;
      clip-path: circle(50% at 50% 50%);
    }
  }

  &_frame {
    position: absolute;
    margin: 0;
    padding: 0;
    width: 115%;
    height: 115%;
    filter: drop-shadow(0.1rem 0.2rem 0.1rem v.$p_c-darkblue);

    &-maskPath {
      transform-origin: center;
      animation: rotatePath 5s linear infinite paused;

      &.hover {
        animation-play-state: running;
      }

      @keyframes rotatePath {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }
    }

    &-texture {
      width: 100%;
      height: 100%;
    }
  }

  &_deco {
    &-Line {
      position: absolute;
      margin: 0;
      padding: 0;
      width: 75%;
      height: 75%;
      background-color: transparent;
      border: 2.2cqw solid v.$p_c-darkwhite;
      border-radius: 50%;
    }
  }
}
</style>

<script setup lang="ts">
import ContentsModal from "./ContentsModal.vue";

const props = defineProps({
  contentsKey: {
    type: String,
    required: true,
  },
  imgSrc: {
    type: String,
    default: "/index/contents/Example/cBtn_img-Example.svg",
  },
});

const isHovered = ref(false);
const emit = defineEmits<{ (e: "emitContentsModal", value: string): void }>();

function emitOCM(): void {
  emit("emitContentsModal", props.contentsKey);
}
</script>
