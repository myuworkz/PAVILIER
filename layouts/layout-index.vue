<template>
  <Transition name="loading-fadeout">
    <Loading class="Loading" v-if="loading"
  /></Transition>
  <div v-show="!loading">
    <Background class="Background" />
    <Header class="Header" />
    <BottomMenu class="BottomMenu" />
    <main class="Main">
      <slot />
    </main>
    <Footer class="Footer" />
  </div>
</template>

<style scoped lang="scss">
.Loading {
  z-index: 1000;
}

.loading-fadeout-leave-active {
  transition: opacity 0.5s ease;
}

.loading-fadeout-leave-to {
  opacity: 0;
}

.Background {
  z-index: -1;
}

.Header {
  padding: 0px;
  z-index: 100;
}

.BottomMenu {
  z-index: 10;
}

.Main {
  z-index: 0;
}

.Footer {
  z-index: 1;
}
</style>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
const loading = ref(true);

nuxtApp.hook("page:start", () => {
  loading.value = true;
});
nuxtApp.hook("page:finish", () => {
  setTimeout(() => {
    loading.value = false;
  }, 1500);
});
</script>
