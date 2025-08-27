<template>
  <NuxtLayout name="layout-index">
    <div class="i">
      <div class="i_wrapper">
        <!--contents-->
        <section id="contents" class="i_contents">
          <h2>Contents</h2>
          <ul class="i_contents-ul">
            <li class="i_contents-li">
              <ContentsBtn
                class="i_contents-liBtn"
                contentsKey="Planesh"
                imgSrc="/index/contents/Planesh/cBtn_img-Planesh.webp"
                @emitContentsModal="openContentsModal"
              />
              <ContentsTxt
                class="i_contents-liTxt"
                contentsKey="Planesh"
                title="ぷらねっしゅ"
                abstract="身体を使って遊ぶメディアアート展示。遊ぶ人の身体の動きをトラッキングし、それに応じて画面上のエンティティが動く。"
                @emitContentsModal="openContentsModal"
              />
              <ContentsModal ref="refCModal_Planesh" contentsKey="Planesh" />
            </li>
            <li class="i_contents-li">
              <ContentsBtn
                class="i_contents-liBtn"
                contentsKey="ARemark"
                imgSrc="/index/contents/ARemark/cBtn_img-ARemark.webp"
                @emitContentsModal="openContentsModal"
              />
              <ContentsTxt
                class="i_contents-liTxt"
                contentsKey="ARemark"
                title="ARemark"
                abstract="誰かが投稿したテキストを、カメラで景色と共に閲覧するＳＮＳアプリ。投稿時の位置情報を元にテキストをＡＲ技術で掲示する。"
                @emitContentsModal="openContentsModal"
              />
              <ContentsModal ref="refCModal_ARemark" contentsKey="ARemark" />
            </li>
            <li class="i_contents-li">
              <ContentsBtn
                class="i_contents-liBtn"
                contentsKey="ATree"
                imgSrc="/index/contents/ATree/cBtn_img-ATree.webp"
                @emitContentsModal="openContentsModal"
              />
              <ContentsTxt
                class="i_contents-liTxt"
                contentsKey="ATree"
                title="A Tree"
                abstract="一本の木とそれに宿するイラストたちを眺めるアニメーションアート作品。手書きイラストとその動きを自由に設定でき、それらをランダムで表示する。"
                @emitContentsModal="openContentsModal"
              />
              <ContentsModal ref="refCModal_ATree" contentsKey="ATree" />
            </li>
          </ul>
        </section>
        <div class="i_spacing-section"></div>
        <!--profile-->
        <section id="profile" class="i_profile">
          <h2>Profile</h2>
          <ul class="i_profile-ul">
            <li class="i_profile-li">
              <!-- name -->
              <h3>Myu</h3>
              <!-- career -->
              <p>
                仙台第一高等学校/宮城大学 事業構想学群 価値創造デザイン学類 卒
              </p>
            </li>
            <!-- possible -->
            <li class="i_profile-li">
              <p>
                <strong>作ることに向き合います、デザインも実装も</strong>
                Unity、UE5、WordPress、Adobe Illustrator / Photoshop /
                AfterEffects / XD、openFrameworks、Blender、Fusion360、Arduino
                などを用いた制作(Windows/SPアプリケーション、Web、ポスター/ロゴ/UI/インフォグラフィックス、映像、3DCGモデリング、マイコン)経験があり、C++
                / C# / JavaScript / Python / PHP / VBA を扱います。
              </p>
            </li>
            <!-- interests・issues -->
            <li class="i_profile-li">
              <p>
                <strong
                  >人々の楽しさを豊かにするサービスやインターフェースに興味があります</strong
                >
                デジタルの力でよりリッチで体験的な価値を生み出したいです。インタラクションデザイン/XR/VFX/メディアアート/デジタル空間演出などの領域を特に指向しています。
              </p>
            </li>
            <!-- motivation・future -->
            <li class="i_profile-li">
              <p>
                <strong
                  >チーム制作の達成感や表現の幅を広げることにモチベーションを感じます</strong
                >
                まだ起草段階の案件や作品制作のお誘いでも歓迎です。制作について首尾一貫して携われたり、新しい技術や分野にも挑戦できる環境だと嬉しいです。
              </p>
            </li>
          </ul>
        </section>
        <div class="i_spacing-section"></div>
        <!--contact-->
        <section id="contact" class="i_contact">
          <h2>Contact</h2>
          <Contact />
        </section>
        <div class="i_spacing-section i_spacing-section--end"></div>
      </div>
    </div>
  </NuxtLayout>
</template>

<style scoped lang="scss">
.i {
  position: relative;
  font-size: 1.3rem;

  &_wrapper {
    width: 100%;
    max-width: v.$bp-max;
    min-width: v.$bp-min;
    height: auto;
    min-height: calc(100% - min(20vw, 115px));
    @include m.p_wrapper("default");

    @include m.mq(v.$bp-mid) {
      @include m.p_wrapper(v.$bp-mid);
      min-height: calc(100% - 115px);
    }
  }

  h2 {
    box-sizing: border-box;
    display: block;
    position: relative;
    margin: 1rem 10%;
    padding: 0.5rem 1rem;
    text-align: center;
    border: 0.1rem v.$p_c-black;
    border-style: none none solid;
    font-family: "Yusei Magic", sans-serif;
    font-size: 2.3rem;
    color: v.$p_c-black;

    @include m.mq(v.$bp-mid) {
      margin: 1rem 2rem;
      text-align: start;
      font-size: 3rem;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      right: -0.5rem;
      width: 1rem;
      height: 1rem;
      background-color: v.$p_c-black;
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }

    &::after {
      content: "";
      position: absolute;
      bottom: -0.5rem;
      left: -0.5rem;
      width: 1rem;
      height: 1rem;
      background-color: v.$p_c-black;
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    }
  }

  &_spacing-section {
    width: 100%;
    height: 4rem;

    &--end {
      height: calc(2rem + 7.5rem + 4rem);

      @include m.mq(v.$bp-mid) {
        height: 2rem;
      }
    }
  }

  &_contents {
    margin: 0;
    padding: 0;
    width: 100%;

    @include m.mq(v.$bp-mid) {
      margin: 6rem 0;
    }

    &-ul {
      display: flex;
      flex-flow: column;
      align-items: center;
      margin: 0;
      padding: 0;
      width: 100%;

      @include m.mq(v.$bp-mid) {
        margin: 4rem 0 0;
        flex-flow: row wrap;
        align-items: flex-start;
        gap: 4rem 0;
      }
    }

    &-li {
      container: i_contents-li / inline-size;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3%;
      margin: 6% 0;
      padding: 0;
      width: 100%;
      list-style: none;

      @include m.mq(v.$bp-mid) {
        margin: 1rem;
        max-width: 54rem;
      }

      &:nth-of-type(2n) {
        .i_contents-liBtn {
          order: 1;

          @include m.mq(v.$bp-mid) {
            order: 0;
          }
        }

        .i_contents-liTxt {
          margin: 0 4.5cqw 1cqw 0;

          @include m.mq(v.$bp-mid) {
            margin: 0 1cqw 1cqw 4cqw;
          }
        }
      }

      &Btn {
        flex-shrink: 0;
        margin: 0;
        padding: 0;
        width: 30cqw;
        max-width: 13rem;
        height: 30cqw;
        max-height: 13rem;

        @include m.mq(v.$bp-mid) {
          width: calc(12rem + 6cqw);
          max-width: 30rem;
          height: calc(12rem + 6cqw);
          max-height: 30rem;
        }
      }

      &Txt {
        margin: 0 1cqw 1cqw 4cqw;
        padding: 0;
        width: 54cqw;

        @include m.mq(v.$bp-mid) {
          min-width: 30rem;
        }
      }
    }
  }

  &_profile {
    margin: 0;
    padding: 0;
    width: 100%;

    @include m.mq(v.$bp-mid) {
      margin: 6rem 0;
    }

    &-ul {
      margin: 0;
      padding: 0;
      color: v.$p_c-black;

      @include m.mq(v.$bp-mid) {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
    }

    &-li {
      box-sizing: border-box;
      margin: 3rem 0 0 0;
      padding: 1.8rem;
      list-style: none;
      background-clip: padding-box;
      background-image: url("/index/i_profileBgImg.svg");
      background-repeat: repeat;
      background-position: center;
      background-size: 25%;
      border: 1.1rem solid rgba(255, 255, 230, 0.47);
      border-radius: 0.8rem;
      font-size: 1.2rem;
      line-height: 2.4rem;

      @include m.mq(v.$bp-mid) {
        margin: 2rem;
        padding: 3.2rem;
        border-radius: 1rem;
        width: 52rem;
        border-width: 1.5rem;
        font-size: 1.5rem;
        line-height: 3rem;
      }

      h3 {
        margin: 0;
        padding: 0 0 1.5rem 0;
        font-size: 2.2rem;

        @include m.mq(v.$bp-mid) {
          padding: 0 0 2.1rem 0;
          font-size: 2.5rem;
        }
      }

      p {
        margin: 0;
        padding: 0;

        strong {
          display: block;
          margin: 0;
          padding: 0 0 1.5rem 0;
          text-align: justify;
          font-size: 1.5rem;
          line-height: 2.6rem;

          @include m.mq(v.$bp-mid) {
            padding: 0 0 2.1rem 0;
            font-size: 1.8rem;
            line-height: 3.2rem;
          }
        }
      }

      &:nth-child(1) {
        font-size: 1.1rem;

        @include m.mq(v.$bp-mid) {
          font-size: 1.4rem;
        }
      }

      &:nth-child(n + 2) {
        margin: 4rem 0 0 0;

        @include m.mq(v.$bp-mid) {
          margin: 2rem;
        }
      }
    }
  }

  &_contact {
    margin: 0;
    padding: 0;
    width: 100%;

    @include m.mq(v.$bp-mid) {
      margin: 6rem 0;
    }
  }
}
</style>

<script setup lang="ts">
import ContentsModal from "@/components/ContentsModal.vue";

definePageMeta({
  layout: false,
});

//list of contents
const listContents: string[] = ["Planesh", "ARemark", "ATree"];
//Dom refs of contentsModals
const refCModal_Planesh: Ref<InstanceType<typeof ContentsModal> | null> =
  ref(null);
const refCModal_ARemark: Ref<InstanceType<typeof ContentsModal> | null> =
  ref(null);
const refCModal_ATree: Ref<InstanceType<typeof ContentsModal> | null> =
  ref(null);
interface RefCModals {
  [key: string]: Ref<InstanceType<typeof ContentsModal> | null>;
}
const refCModals: RefCModals = {
  "cModal--Planesh": refCModal_Planesh,
  "cModal--ARemark": refCModal_ARemark,
  "cModal--ATree": refCModal_ATree,
};

function openContentsModal(contentsKey: string): void {
  let refCModal: Ref<InstanceType<typeof ContentsModal> | null> = ref(null);

  for (const c of listContents) {
    if (c === contentsKey) {
      refCModal = refCModals["cModal--" + contentsKey];
      break;
    }
  }

  if (refCModal.value) {
    refCModal.value.openCModal();
  } else {
    console.error("'ContentsModal of" + contentsKey + "' cannot find.");
  }
}
</script>
