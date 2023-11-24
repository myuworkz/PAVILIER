<template>
  <header class="b">
    <div class="b_wrapper">
      <nav class="b_nav">
        <menu class="b_nav-menu">
          <li class="b_nav-li">
            <button @click="scrollToSection($event, 'contents')">
              <span>
                <client-only>
                  <font-awesome-icon
                    class="b_nav-liIconContent"
                    :icon="['fas', 'flag']"
                  />
                </client-only>
              </span>
              <b>Contents</b>
            </button>
          </li>
          <li class="b_nav-li">
            <button @click="scrollToSection($event, 'profile')">
              <span>
                <client-only>
                  <font-awesome-icon
                    class="b_nav-liIconProfile"
                    :icon="['fas', 'user']"
                  />
                </client-only>
              </span>
              <b>Profile</b>
            </button>
          </li>
          <li class="b_nav-li">
            <button @click="scrollToSection($event, 'contact')">
              <span>
                <client-only>
                  <font-awesome-icon
                    class="b_nav-liIconContact"
                    :icon="['fas', 'envelope']"
                  />
                </client-only>
              </span>
              <b>Contact</b>
            </button>
          </li>
        </menu>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
.b {
  display: block;
  position: fixed;
  bottom: 3rem;
  width: 100%;
  max-width: v.$bp-mid;
  min-width: v.$bp-min;
  height: 7.5rem;

  @include m.mq(v.$bp-mid) {
    display: none;
  }

  &_wrapper {
    @include m.p_wrapper(v.$bp-mid);
    height: 100%;
  }

  &_nav {
    box-sizing: border-box;
    height: 100%;
    padding: 0 2.5rem;
    background-color: transparent;
    background-image: url("/index/b_bgImg-edge1.svg"),
      url("/index/b_bgImg-edge2.svg");
    background-repeat: no-repeat, no-repeat;
    background-position: left, right;
    background-size: contain, contain;
    filter: drop-shadow(0 0.2rem 0.1rem v.$p_c-darkblue);

    &-menu {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-evenly;
      align-items: center;
      margin: 0;
      padding: 0;
      height: 100%;
      background-color: transparent;
      background-image: url("/index/b_bgImg-mid.svg");
      background-repeat: repeat;
      background-position: center;
      background-size: contain;
    }

    &-li {
      list-style: none;

      > button {
        box-sizing: border-box;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-flow: column;
        margin: 0;
        padding: 0;
        width: 6.5rem;
        height: 4.8rem;
        background-color: v.$p_c-white;
        border-radius: 50% 50%;
        border-color: transparent;
        color: v.$p_c-black;
        font-size: 1.1rem;
        text-decoration: none;
        cursor: pointer;

        &:focus-visible {
          outline: 0.2rem v.$p_c-orange solid;
        }

        span {
          transform: translateY(-0.1rem);
          font-size: 1.9rem;
        }

        b {
          transform: translateY(-0.3rem);
          font-family: "Yusei Magic", sans-serif;
          font-size: 1.1rem;
          user-select: none;
        }
      }

      &IconContact {
        transform: translateY(0.1rem);
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
