<template>
  <form
    @submit.prevent="onSubmit"
    method="post"
    name="mailForm"
    class="mailForm"
    :class="sendingState"
    data-netlify="true"
    data-netlify-honeypot="botcheck"
  >
    <fieldset>
      <input type="hidden" name="form-name" value="mailForm" />
      <label class="mailForm_Col">
        <input
          type="text"
          name="name"
          class="mailForm_Input mailForm_Input--Name"
          placeholder="名前/Name"
          required
          :disabled="disabledInput"
          v-model="formData.name"
        />
      </label>
      <label class="mailForm_Col">
        <input
          type="email"
          name="email"
          class="mailForm_Input mailForm_Input--Email"
          placeholder="メールアドレス/E-Mail"
          required
          :disabled="disabledInput"
          v-model="formData.email"
        />
      </label>
      <label class="mailForm_Col">
        <textarea
          name="message"
          class="mailForm_Input mailForm_Input--Msg"
          placeholder="ご依頼についての詳細&#13; /Details about your request"
          required
          :disabled="disabledInput"
          v-model="formData.message"
        ></textarea>
      </label>
      <label class="mailForm_Col mailForm_Col--botCheck" v-show="false">
        <input
          name="botcheck"
          :disabled="disabledInput"
          v-model="formData.botCheck"
        />
        スパムでない場合は空欄のままにしてください /If not spam, leave blank.
      </label>
      <p class="mailForm_errorTxt" v-if="sendingState === 'isError'">
        {{ errorTxt }}
      </p>
      <button type="submit" class="mailForm_Submit">送信/Send</button>
    </fieldset>
    <dialog class="mailForm_statusModal" ref="statusModal">
      <div
        class="mailForm_statusModal-overlay"
        @click.self="exitComplete"
      ></div>
      <div class="mailForm_statusModal-window">
        <p class="mailForm_statusModal-statusTxt">{{ statusTxt }}</p>
        <button
          class="mailForm_statusModal-exitBtn"
          @click="exitComplete"
          v-if="isCloseModalBtn"
        >
          <span>✔</span>
        </button>
      </div>
    </dialog>
  </form>
</template>

<style scoped lang="scss">
.mailForm {
  margin: 1rem auto;
  padding: 0;

  &.isSending {
    input {
      pointer-events: none;
    }
  }

  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
    border: none;
  }

  &_Col {
    margin: 0.5rem 0;
    padding: 0.8rem 1.2rem;
    width: 80%;
    max-width: 35rem;
    min-width: 25rem;
    background-color: v.$p_c-white;
    border: none;
    border-radius: 1.8rem;
    box-shadow: inset 0.1rem 0.2rem 0.2rem rgba(35, 52, 62, 0.4);
    user-select: none;

    @include m.mq(v.$bp-mid) {
      margin: 0.6rem 0;
      padding: 1.2rem 2.2rem;
      max-width: 120rem;
      border: none;
      border-radius: 2.7rem;
    }

    //focus
    &:has(> input:focus, > textarea:focus) {
      outline: 0.2rem v.$p_c-orange solid;
      outline-offset: 0.2rem;
      box-shadow: none;

      @include m.mq(v.$bp-mid) {
        outline: 0.3rem v.$p_c-orange solid;
        outline-offset: 0.3rem;
      }
    }

    //valid email
    &:has(> .mailForm_Input--Email:user-invalid) {
      &::after {
        content: "有効なメールアドレスではありません /Not a valid email address.";
        font-family: "Zen Kaku Gothic Antique", sans-serif;
        font-size: 1rem;
        color: #ff646d;

        @include m.mq(v.$bp-mid) {
          font-size: 1.4rem;
        }
      }
    }

    //valid txt
    &:has(
        > .mailForm_Input--Name:user-invalid,
        .mailForm_Input--Msg:user-invalid
      ) {
      &::after {
        content: "テキストを入力してください /Please enter text.";
        font-family: "Zen Kaku Gothic Antique", sans-serif;
        font-size: 1rem;
        color: #ff646d;

        @include m.mq(v.$bp-mid) {
          font-size: 1.4rem;
        }
      }
    }

    //sending
    .mailForm.isSending & {
      box-shadow: none;
    }

    &--botCheck {
      color: gray;
      font-family: "Zen Kaku Gothic Antique", sans-serif;
      font-size: 1rem;
      text-overflow: ellipsis;

      @include m.mq(v.$bp-mid) {
        font-size: 1.4rem;
      }
    }
  }

  &_Input {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 2rem;
    background-color: transparent;
    outline: none;
    border: none;
    border-radius: 0rem;
    font-family: "Zen Kaku Gothic Antique", sans-serif;
    font-size: 1.2rem;
    cursor: text;
    caret-color: v.$p_c-black;

    &::placeholder {
      color: gray;
      font-family: "Zen Kaku Gothic Antique", sans-serif;
      font-size: 1.2rem;
      text-overflow: ellipsis;
      user-select: none;
    }

    &:disabled {
      color: v.$p_c-lightblack;
    }

    &--Msg {
      resize: vertical;
      margin-top: 0.5rem;
      height: 15rem;
      min-height: 15rem;
      max-height: 100rem;
    }

    @include m.mq(v.$bp-mid) {
      height: 3rem;
      font-size: 1.6rem;

      &::placeholder {
        font-size: 1.6rem;
      }

      &--Msg {
        min-height: 18rem;
      }
    }

    //sending
    &:disabled {
      cursor: default;
      pointer-events: none;
      user-select: none;
      caret-color: transparent;
    }
  }

  &_errorTxt {
    font-family: "Zen Kaku Gothic Antique", sans-serif;
    font-size: 1rem;
    color: #ff646d;

    @include m.mq(v.$bp-mid) {
      font-size: 1.4rem;
    }
  }

  &_Submit {
    box-sizing: border-box;
    margin: 0.5rem 0;
    width: 8rem;
    min-width: 8rem;
    height: 3rem;
    background-color: v.$p_c-lightgray;
    border: none;
    border-radius: 1.5rem;
    color: v.$p_c-black;
    font-family: "Zen Kaku Gothic Antique", sans-serif;
    font-size: 1.2rem;
    box-shadow: 0.1rem 0.1rem 0.2rem rgba(35, 52, 62, 0.4);
    cursor: pointer;

    @include m.hover {
      transform: translateY(0.3rem);
    }

    @include m.mq(v.$bp-mid) {
      margin: 0.6rem 0;
      width: 11rem;
      min-width: 11rem;
      height: 4rem;
      border-radius: 2rem;
      font-size: 1.6rem;
    }

    &:focus-visible {
      outline: 0.2rem v.$p_c-orange solid;
    }

    //sending
    .mailForm.isSending & {
      transform: translateY(0.3rem);
      background-color: v.$p_c-gray;
      color: v.$p_c-lightblack;
      box-shadow: none;
      pointer-events: none;
    }
  }

  &_statusModal[open] {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;

    &:focus-visible {
      outline: none;
    }
  }

  &_statusModal {
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

    &-overlay {
      position: fixed;
      top: 0;
      left: 0;
      z-index: -10;
      width: 100vw;
      height: 100vh;
    }

    &-window {
      box-sizing: border-box;
      z-index: 100;
      margin: 0;
      padding: 2rem;
      width: 80vw;
      max-width: 280px;
      background-color: v.$p_c-white;
      border-radius: 0.5rem;
      overflow: hidden scroll;
      -ms-overflow-style: none;
      overscroll-behavior-y: contain;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        display: none;
      }

      @include m.mq(v.$bp-mid) {
        padding: 3.5rem 4rem;
        max-width: 80vw;
        border-radius: 1.2rem;
      }
    }

    &-statusTxt {
      margin: 0 0 2.5rem;
      padding: 0;
      font-family: "Zen Kaku Gothic Antique", sans-serif;
      font-size: 1.4rem;
      color: v.$p_c-black;
      white-space: pre-wrap;

      @include m.mq(v.$bp-mid) {
        margin: 0 0 4rem;
        font-size: 2rem;
      }
    }

    &-exitBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 auto;
      padding: 1rem;
      width: 6rem;
      height: 3rem;
      background-color: v.$p_c-blue;
      border: none;
      border-radius: 0.2rem;
      box-shadow: 0.1rem 0.1rem 0.2rem rgba(35, 52, 62, 0.4);
      cursor: pointer;

      > span {
        text-align: center;
        font-family: "Zen Kaku Gothic Antique", sans-serif;
        font-size: 1.4rem;
        color: v.$p_c-white;
      }

      @include m.mq(v.$bp-mid) {
        padding: 1.5rem;
        width: 10rem;
        height: 5rem;
        background-color: v.$p_c-blue;
        border: none;
        border-radius: 0.4rem;
        box-shadow: 0.2rem 0.2rem 0.2rem rgba(35, 52, 62, 0.4);

        > span {
          font-size: 3rem;
        }
      }

      @include m.hover {
        transform: translateY(0.4rem);
      }
    }
  }
}
</style>

<script setup lang="ts">
const sendingState: Ref<"isWaiting" | "isSending" | "isError" | "isComplete"> =
  ref("isWaiting");
const statusTxt: Ref<string> = ref("");
const errorTxt: Ref<string> = ref("");
const disabledInput: Ref<boolean> = ref(false);
const formData: Ref<{
  name: string;
  email: string;
  message: string;
  botCheck: string;
}> = ref({
  name: "",
  email: "",
  message: "",
  botCheck: "",
});
const isStatusModal: Ref<boolean> = ref(false);
const statusModal: Ref<HTMLDialogElement | null> = ref(null);
const isCloseModalBtn: Ref<boolean> = ref(false);
let scrollPosY: number = 0;

function onSubmit(): void {
  //state check
  if (sendingState.value === "isWaiting" || sendingState.value === "isError") {
    //input empty check
    if (
      formData.value.name !== "" &&
      formData.value.email !== "" &&
      formData.value.message !== ""
    ) {
      sendingState.value = "isSending";
      disabledInput.value = true;

      //add "prevent to press esc" event
      if (statusModal.value !== null) {
        statusModal.value.addEventListener("cancel", (event) => {
          event.preventDefault();
        });
      }

      //status message
      statusTxt.value =
        "送信中です...しばらくお待ちください\r\n/Now Sending... Please Wait a moment.";
      openSModal();

      //post the form
      asyncPost();
    } else {
      console.log("Error the form is empty");
      sendingState.value = "isError";
      errorTxt.value =
        "入力が完了していません /You have not completed the form.";
    }
  }
}

function setParamsFromForm(): URLSearchParams {
  const params = new URLSearchParams();
  params.append("form-name", "mailForm");
  params.append("name", formData.value.name);
  params.append("email", formData.value.email);
  params.append("message", formData.value.message);
  if (formData.value.botCheck) {
    params.append("botcheck", formData.value.botCheck);
  }
  return params;
}

async function asyncPost(): Promise<void> {
  await useFetch("/", {
    method: "post",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: setParamsFromForm().toString(),
  })
    .then((res) => {
      if (res.error.value) {
        console.log(res.error.value);
      } else {
        console.log(res.data.value);
      }
      onComplete();
    })
    .catch((error) => {
      console.log(error);
      sendingState.value = "isError";
      errorTxt.value =
        "送信に失敗しました。お手数ですが、入力内容に誤りがないか確認し、もう一度お試しください /The form submission failed. Please check that the information you entered is correct and try again.";
      closeSModal();
    });
}

function onComplete(): void {
  //remove "prevent to press esc" event
  if (statusModal.value !== null) {
    statusModal.value.removeEventListener("cancel", (event) => {
      event.preventDefault();
    });
  }

  //add "press esc" event
  document.addEventListener("keydown", forPressedEsc);

  sendingState.value = "isComplete";
  isCloseModalBtn.value = true;
  statusTxt.value =
    "送信を受け付けました。自動返信メールをご確認ください。\r\n/Your request has been accepted. Please check your auto-reply email.";
}

function resetForm(): void {
  sendingState.value = "isWaiting";
  statusTxt.value = "";
  disabledInput.value = false;
  formData.value.botCheck = "";
  isCloseModalBtn.value = false;
}

function openSModal(): void {
  //check statusModal closed
  if (statusModal.value !== null && isStatusModal.value === false) {
    const paddingForBar = window.innerWidth - document.body.clientWidth;
    scrollPosY = window.scrollY;

    isStatusModal.value = true;
    statusModal.value.showModal();

    //prevent to scroll
    document.body.style.position = "fixed";
    document.body.style.top = "-" + scrollPosY + "px";
    document.body.style.paddingRight = paddingForBar + "px";
  }
}

function closeSModal(): void {
  //check statusModal opened
  if (statusModal.value !== null && isStatusModal.value === true) {
    isStatusModal.value = false;
    statusModal.value.close();

    //allow to scroll
    document.body.style.cssText = "position: static; top: 0; padding-right: 0;";
    window.scroll(0, scrollPosY);
  }
}

function forPressedEsc(e: KeyboardEvent): void {
  if (e.key === "Escape") {
    exitComplete();
  }
}

function exitComplete(): void {
  if (sendingState.value === "isComplete") {
    //remove "press esc" event
    document.removeEventListener("keydown", forPressedEsc);

    resetForm();
    setTimeout(() => {
      emitCMF();
    }, 500);
    closeSModal();
  }
}

//auto close emit
const emit = defineEmits<{ (e: "emitCloseMailForm"): void }>();

function emitCMF(): void {
  emit("emitCloseMailForm");
}
</script>
