<template>
  <div class="cTxt_wrapper">
    <h3 class="cTxt_title" @click="emitOCM">{{ title }}</h3>
    <p class="cTxt_abstract">
      {{ abstract }}
    </p>
  </div>
</template>

<style scoped lang="scss">
.cTxt {
  &_wrapper {
    container: cTxt / inline-size;
  }

  &_title {
    display: inline;
    position: relative;
    z-index: 0;
    margin: 0.5rem 0;
    padding: 0.3rem 0.6rem;
    font-family: "Yusei Magic", sans-serif;
    font-size: 1.8rem;
    color: v.$p_c-black;
    cursor: pointer;

    &::before {
      content: "";
      position: absolute;
      z-index: -1;
      inset: 0;
      top: 45%;
      height: 50%;
      background-color: v.$p_c-white;
      border-radius: 0.3rem;
    }

    &::after {
      content: "";
      position: absolute;
      z-index: -2;
      top: calc(45% + 0.3rem);
      bottom: -0.3rem;
      left: 0.3rem;
      right: -0.3rem;
      height: 50%;
      background-color: v.$p_c-orange;
      border-radius: 0.3rem;
    }

    @container cTxt (min-width: 200px) {
      font-size: 2.2rem;
    }

    @container cTxt (min-width: 300px) {
      font-size: 2.6rem;

      &::before {
        border-radius: 0.4rem;
      }

      &::after {
        top: calc(45% + 0.4rem);
        bottom: -0.4rem;
        left: 0.4rem;
        right: -0.4rem;
        border-radius: 0.4rem;
      }
    }
  }

  &_abstract {
    margin: 1rem 0 0 1rem;
    padding: 0;
    font-size: 1.2rem;
    line-height: 2rem;
    color: v.$p_c-black;

    @container cTxt (min-width: 200px) {
      margin: 1.2rem 0 0 1.2rem;
      font-size: 1.4rem;
      line-height: 2.5rem;
    }

    @container cTxt (min-width: 300px) {
      margin: 1.4rem 0 0 1.4rem;
      font-size: 1.6rem;
      line-height: 2.9rem;
    }
  }
}
</style>

<script setup lang="ts">
const props = defineProps({
  contentsKey: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "タイトル",
  },
  abstract: {
    type: String,
    default: "概要",
  },
});

const emit = defineEmits<{ (e: "emitContentsModal", value: string): void }>();

function emitOCM(): void {
  emit("emitContentsModal", props.contentsKey);
}
</script>
