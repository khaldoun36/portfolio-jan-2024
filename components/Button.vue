<template>
  <component :is="as" class="btn">
    <slot />
  </component>
</template>

<script setup>
  import { NuxtLink } from "#components";
  const props = defineProps({
    as: {
      default: "button",
    },
  });

  const allowedTypes = [NuxtLink, "button"];

  const checkType = () => {
    if (allowedTypes.includes(props.as)) {
      return;
    }
    throw new Error("Not allowed button type passed");
  };

  checkType();
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  /* **************************** */
  /* ******* Base Styling ******* */
  /* **************************** */
  .btn {
    cursor: pointer;
    display: inline-block;
    border: none;

    display: flex;
    align-items: center;
    text-align: center;
    gap: var(--space-8);

    height: var(--space-40);
    padding-inline: var(--space-20);

    font-size: var(--fs-100);
    font-weight: 500;

    color: hsl(var(--slate-50));
    transition: all 250ms ease-in-out;
  }

  /* ******************************* */
  /* ******* Variant Styling ******* */
  /* ******************************* */

  /* 
    1. Gradient Button
  */
  .btn.btn__gradient {
    position: relative;
    background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);

    background-size: 300%;
    animation: anime 6s linear infinite;
  }

  .btn.btn__gradient:before,
  .btn.btn__gradient :after {
    content: "";
    position: absolute;
    pointer-events: none;
  }

  .btn.btn__gradient:before {
    inset: 0.5px;
    box-shadow: 0 0 0 0.5px hsl(var(--slate-50) / 0.7) inset;
    mix-blend-mode: overlay;
    filter: blur(0.25px);
    border-radius: 8px;
    z-index: 1;
  }

  @keyframes anime {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .btn.btn__gradient:active,
  .btn.btn__secondary:active {
    transform: scale(0.95);
  }

  /* 
    2. Secondary Button
  */

  .btn.btn__secondary {
    background-color: hsl(var(--slate-90));
    color: hsl(var(--slate-300));
    border: 1.5px solid var(--clr-border);
  }

  @media screen and (hover: hover) {
    .btn.btn__gradient:hover,
    .btn.btn__gradient:focus {
      filter: brightness(1.3);
    }
    .btn.btn__secondary:hover,
    .btn.btn__secondary:focus {
      color: hsl(var(--slate-50));
      border-color: var(--clr-border-hover);
    }
  }
</style>
