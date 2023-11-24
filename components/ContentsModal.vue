<template>
  <dialog class="cModal" ref="cModal">
    <div class="cModal_overlay" @click.self="closeCModal"></div>
    <div class="cModal_wrapper">
      <div class="cModal_window">
        <div class="cModal_window-slot">
          <keep-alive>
            <component :is="views[activeView]" />
          </keep-alive>
        </div>
        <button
          ref="closeBtn"
          class="cModal_window-closeBtn"
          @click="closeCModal"
        >
          <div></div>
        </button>
      </div>
    </div>
  </dialog>
</template>

<style scoped lang="scss">
.cModal[open] {
  margin: auto;
  padding: 0;
  background-color: transparent;
  border: none;
}

.cModal {
  &::backdrop {
    background-image: url("/index/cModal_overlayImg.svg");
    background-repeat: repeat;
    background-position: center;
    background-size: 20%;
    opacity: 0.4;

    @include m.mq(v.$bp-mid) {
      background-size: min(10%, 160px);
    }
  }

  &_overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: -10;
    width: 100vw;
    height: 100vh;
  }

  &_wrapper {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    margin: 0;
    width: 100vw;
    height: 75vh;

    @include m.mq(v.$bp-mid) {
      inset: 0;
      margin: auto;
      width: 80vw;
      max-width: 1100px;
      height: 80vh;
    }
  }

  &_window {
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: v.$p_c-white;
    border: 1rem solid v.$p_c-yellow;

    @include m.mq(v.$bp-mid) {
      border: 1.3rem solid v.$p_c-yellow;
    }

    &-slot {
      width: 100%;
      height: 100%;
      mask-image: linear-gradient(
        to bottom,
        transparent,
        black 1.5rem,
        black calc(100% - 3.5rem),
        transparent
      );
    }

    &-closeBtn {
      position: absolute;
      top: -5.4rem;
      right: -0.8rem;
      background-color: transparent;
      border: none;
      cursor: pointer;
      filter: drop-shadow(0.1rem 0.2rem 0.1rem v.$p_c-brown);

      &:focus-visible {
        outline: 0.2rem v.$p_c-orange solid;
      }

      @include m.mq(v.$bp-mid) {
        top: -3.2rem;
        right: -3.3rem;
      }

      > div {
        width: 3.5rem;
        height: 3.5rem;
        background-color: v.$p_c-orange;
        clip-path: polygon(
          20% 0%,
          0% 20%,
          30% 50%,
          0% 80%,
          20% 100%,
          50% 70%,
          80% 100%,
          100% 80%,
          70% 50%,
          100% 20%,
          80% 0%,
          50% 30%
        );

        @include m.mq(v.$bp-mid) {
          width: 5rem;
          height: 5rem;
          transform: rotate(8deg);
        }
      }

      @include m.hover {
        > div {
          background-color: v.$p_c-darkwhite;
        }
      }
    }
  }
}
</style>

<script setup lang="ts">
//Modal List ("View + contentsKey")
import ViewExample from "./ModalView/ModalViewExample.vue";
import ViewPlanesh from "./ModalView/ModalViewPlanesh.vue";
import ViewARemark from "./ModalView/ModalViewARemark.vue";
import ViewATree from "./ModalView/ModalViewATree.vue";

const views = {
  ViewExample,
  ViewPlanesh,
  ViewARemark,
  ViewATree,
};

const props = defineProps({
  contentsKey: {
    type: String,
    required: true,
  },
});

defineExpose({
  openCModal,
});

const cModal: Ref<HTMLDialogElement | null> = ref(null);
const closeBtn: Ref<HTMLElement | null> = ref(null);
let scrollPosY: number = 0;

function openCModal(): void {
  if (cModal.value) {
    const paddingForBar = window.innerWidth - document.body.clientWidth;
    scrollPosY = window.scrollY;

    cModal.value.showModal();
    if (closeBtn.value) {
      closeBtn.value.focus();
      closeBtn.value.blur();
    }

    //prevent to scroll
    document.body.style.position = "fixed";
    document.body.style.top = "-" + scrollPosY + "px";
    document.body.style.paddingRight = paddingForBar + "px";

    //add "press esc" event
    document.addEventListener("keydown", forPressedEsc);
  }
}

function closeCModal(): void {
  if (cModal.value) {
    cModal.value.close();

    //remove "press esc" event
    document.removeEventListener("keydown", forPressedEsc);

    //allow to scroll
    document.body.style.cssText = "position: static; top: 0; padding-right: 0;";
    window.scroll(0, scrollPosY);
  }
}

function forPressedEsc(e: KeyboardEvent): void {
  if (e.key === "Escape") {
    closeCModal();
  }
}

//Dynamic Components
const activeView: Ref<keyof typeof views> = ref("ViewExample");

onMounted(() => {
  const view = ("View" + props.contentsKey) as keyof typeof views;
  activeView.value = view;
});
</script>
