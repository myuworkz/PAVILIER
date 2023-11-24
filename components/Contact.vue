<template>
  <address class="contact">
    <ul class="contact_ul">
      <li
        class="contact_li contact_li--Mail"
        :class="{ resizeMail: isResizeMail }"
      >
        <div>
          <button
            class="contact_li-btn"
            :class="{ openMail: isOpenMail }"
            @click="toggleMailForm"
          >
            <client-only>
              <font-awesome-icon
                class="contact_li-btnIcon"
                :icon="['fas', 'envelope']"
              />
            </client-only>
            <span>E-Mail</span>
          </button>
        </div>
        <div class="contact_li--Mail-form">
          <transition
            name="mailForm-slide"
            mode="out-in"
            @afterLeave="afterLeaveMailForm"
          >
            <div v-show="isOpenMail">
              <ContactMailForm @emitCloseMailForm="toggleMailForm" />
            </div>
          </transition>
        </div>
      </li>
      <li class="contact_li">
        <div>
          <a
            href="https://github.com/myuworkz"
            target="_blank"
            rel="noopener noreferrer"
            class="contact_li-btn"
          >
            <client-only>
              <font-awesome-icon
                class="contact_li-btnIcon"
                :icon="['fab', 'github']"
              />
            </client-only>
            <span>Github</span>
          </a>
        </div>
      </li>
      <li class="contact_li">
        <div>
          <a
            href="https://discordapp.com/users/1153686955553460306"
            target="_blank"
            rel="noopener noreferrer"
            class="contact_li-btn"
          >
            <client-only>
              <font-awesome-icon
                class="contact_li-btnIcon"
                :icon="['fab', 'discord']"
              />
            </client-only>
            <span>Discord</span>
          </a>
        </div>
      </li>
    </ul>
  </address>
</template>

<style scoped lang="scss">
.contact {
  font-style: normal;

  &_ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;

    @include m.mq(v.$bp-mid) {
      justify-content: flex-start;
      margin-left: 4rem;
    }
  }

  &_li {
    margin: 0;
    padding: 0;
    list-style: none;

    &--Mail {
      width: auto;

      &.resizeMail {
        width: 100%;
      }

      > div {
        display: flex;
        justify-content: center;
        margin: 0 auto;
        padding: 0;

        @include m.mq(v.$bp-mid) {
          justify-content: flex-start;
        }
      }

      button {
        transition: background-color 0.2s linear;

        @include m.mq(v.$bp-mid) {
          animation: none;
        }

        //animation
        animation-name: outMailButton;
        animation-duration: 0.5s;
        animation-timing-function: ease;

        @keyframes outMailButton {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-7.2rem);
          }
        }

        &.openMail {
          transform-origin: center;
          background-color: v.$p_c-lightblue;
          box-shadow: inset 0.1rem 0.1rem 0.2rem rgba(35, 52, 62, 0.4);

          @include m.mq(v.$bp-mid) {
            animation: none;
          }

          //animation
          animation-name: inMailButton;
          animation-fill-mode: forwards;
          animation-duration: 0.5s;
          animation-timing-function: ease;

          @keyframes inMailButton {
            from {
              transform: translateX(-7.2rem);
            }
            to {
              transform: translateX(0);
            }
          }
        }
      }

      &-form {
        overflow: hidden;
        margin: 0;
        padding: 0;

        > div {
          width: 100%;
        }
      }
    }

    &-btn {
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 1rem;
      padding: 0;
      width: 5.2rem;
      height: 5.2rem;
      background-color: v.$p_c-white;
      border: 0.2rem solid v.$p_c-white;
      border-radius: 2.6rem;
      box-shadow: 0.1rem 0.2rem 0.2rem v.$p_c-darkblue;
      text-decoration: none;
      cursor: pointer;

      @include m.mq(v.$bp-mid) {
        flex-direction: row;
        width: 13rem;
      }

      @include m.hover {
        transform: translateY(0.3rem);
      }

      &:focus-visible {
        outline: 0.2rem v.$p_c-orange solid;
      }

      span {
        display: inline-block;
        margin: 0;
        padding: 0;
        color: v.$p_c-black;
        font-family: "Yusei Magic", sans-serif;
        font-size: 1rem;
        font-weight: 700;
        user-select: none;

        @include m.mq(v.$bp-mid) {
          margin: 0 0.3rem;
          font-size: 1.8rem;
        }
      }

      &Icon {
        margin: 0;
        padding: 0;
        color: v.$p_c-black;
        font-size: 1.8rem;

        @include m.mq(v.$bp-mid) {
          margin: 0 0.4rem;
          font-size: 2.4rem;
        }
      }
    }
  }
}

.mailForm-slide-enter-active,
.mailForm-slide-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s ease-out;
}

.mailForm-slide-enter-from,
.mailForm-slide-leave-to {
  transform: translateY(-100%);
  opacity: 0.3;
}
</style>

<script setup lang="ts">
const isResizeMail = ref(false);
const isOpenMail = ref(false);

function toggleMailForm(): void {
  if (isResizeMail.value === false) {
    isResizeMail.value = true;
    isOpenMail.value = true;
  } else if (isResizeMail.value === true) {
    isOpenMail.value = false;
  }
}

function afterLeaveMailForm(): void {
  isResizeMail.value = false;
}
</script>
