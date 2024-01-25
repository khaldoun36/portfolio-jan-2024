<template>
  <div class="content-grid">
    <PrimaryHeader />

    <NuxtPage class="main" />

    <PrimaryFooter />
  </div>
</template>

<script setup>
  // preload fonts and other head tags
</script>

<style>
  .main {
    padding-block: var(--space-80);
  }

  @media screen and (min-width: 64rem) {
    .main {
      padding-block: var(--space-96);
    }
  }
</style>
