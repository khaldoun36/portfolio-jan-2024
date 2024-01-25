<template>
  <NuxtLink to="/" class="logo">
    <span class="text-light">khaldoon</span>
    <div class="logo-circle"></div>
    <span class="text-2xl text-light font-semibold">dev</span>
  </NuxtLink>
</template>

<script setup></script>

<style scoped>
  .logo {
    display: flex;
    flex-wrap: nowrap;
    gap: var(--space-2);
    align-items: baseline;

    text-decoration: none;
  }

  .logo > span {
    font: var(--fs-500);
    font-weight: 600;
  }
  .logo-circle {
    border-radius: 100%;
    width: var(--space-8);
    aspect-ratio: 1;
    background: linear-gradient(
      315deg,
      hsl(var(--indigo-500)) 0%,
      hsl(var(--indigo-300)) 100%
    );
  }
</style>
