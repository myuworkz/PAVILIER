<template>
  <div class="bg">
    <div class="bg_wrapper">
      <div class="bg_highlight"></div>
      <div class="bg_shade"></div>
      <div class="bg_animation">
        <div class="bg_animation-shapes" ref="aniShapesElement"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  position: fixed;
  inset: 0;
  width: 100%;
  min-width: v.$bp-min;
  height: 100%;
  min-height: v.$h-min;

  &_wrapper {
    position: relative;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to bottom, v.$p_c-blue 0%, v.$p_c-blue 25%, v.$p_c-lightblue 100%);
  }

  &_highlight {
    position: absolute;
    top: 0;
    left: min(5%, 50px);
    width: 6%;
    max-width: 40px;
    height: 100%;
    background-color: v.$p_c-white;
    opacity: 0.2;
  }

  &_shade {
    position: absolute;
    right: 0;
    bottom: 0;
    width: 35%;
    max-width: 250px;
    height: 45%;
    max-height: 500px;
    background-color: v.$p_c-darkblue;
    opacity: 0.3;
    clip-path: polygon(100% 100%, 0% 100%, 100% 0%);
  }

  &_animation {
    position: absolute;
    inset: 0;
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    &-shapes {
      position: relative;
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
    }
  }
}
</style>

<script setup lang="ts">
import gsap from "gsap";

const aniShapesElement = ref();

function generateShape(): HTMLElement {
  const shapeDiv = document.createElement("div");
  const shapes: string[] = ["circle", "circle", "circleFrame", "rectangle", "triangle"];
  const shapeType = shapes[Math.floor(Math.random() * shapes.length)];
  let shapeStyle: string = "";
  shapeDiv.classList.add("shape", shapeType);

  if (shapeType === shapes[0] || shapeType === shapes[1]) {
    //circle
    shapeStyle = "width: 80px; height: 80px; background-color: #E0FFF0; border-radius: 50%;";
  } else if (shapeType === shapes[2]) {
    //circle frame
    shapeStyle = "width: 60px; height: 60px; background-color: transparent; border: 15px solid #a2faea; border-radius: 50%;";
  } else if (shapeType === shapes[3]) {
    //rectangle
    shapeStyle = "width: 50px; height: 50px; background-color: #E0FFF0; border-radius: 0;";
  } else if (shapeType === shapes[4]) {
    //triangle
    shapeStyle = "width: 50px; height: 43.3px; background-color: #E0FFF0; clip-path: polygon(50% 0, 100% 100%, 0 100%);";
  }

  shapeDiv.setAttribute("style", shapeStyle + "position: absolute; margin: 0px; padding: 0px;");

  return shapeDiv;
}

function getRandomInRange(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function animateShape(shape: HTMLElement): void {
  const divWidth = aniShapesElement.value.offsetWidth;
  const divHeight = aniShapesElement.value.offsetHeight;
  const xPos = getRandomInRange(0, divWidth);
  const yPosTo = getRandomInRange(divHeight * -0.1, divHeight * 0.2);
  const scale = getRandomInRange(0.3, 1.0);
  const rotation = getRandomInRange(360, 1080) * (divHeight / 745);
  const duration = getRandomInRange(10.0, 14.0) * (divHeight / 745);
  const delay = getRandomInRange(0, 30.0) * (divHeight / 745);
  const repeatDelay = getRandomInRange(16.0, 20.0) * (divHeight / 745);

  gsap.set(shape, {
    x: xPos,
    y: divHeight + 50 * scale,
    scale: scale,
    opacity: 0.9,
    rotation: 0,
    transformOrigin: "50% 70%",
  });

  gsap.to(shape, {
    y: yPosTo,
    scale: scale + 0.1,
    opacity: 0,
    rotation: rotation,
    duration: duration,
    delay: delay,
    repeat: -1,
    repeatDelay: repeatDelay,
    ease: "Power1.easeOut",
  });
}

function setAnimationShape(): void {
  const setAnimation = () => {
    const shape = generateShape();
    aniShapesElement.value.appendChild(shape);
    animateShape(shape);
  };

  const divWidth = aniShapesElement.value.offsetWidth;
  const shapesNum: number = 20 + Math.floor(divWidth / 40);

  for (let i: number = 0; i < shapesNum; i++) {
    setAnimation();
  }
}

function deleteShapes(): void {
  while (aniShapesElement.value.firstChild) {
    aniShapesElement.value.removeChild(aniShapesElement.value.firstChild);
  }
}

let resizeObserver: ResizeObserver | null = null;

onMounted(() => {
  setAnimationShape();

  resizeObserver = new ResizeObserver(() => {
    deleteShapes();
    setAnimationShape();
  });
  resizeObserver.observe(aniShapesElement.value);
});

onUnmounted(() => {
  resizeObserver?.unobserve(aniShapesElement.value);
});
</script>
