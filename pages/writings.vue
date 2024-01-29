<template>
  <main class="writings">
    <h1 class="text-light text-2xl font-semibold">
      Here, I share my experiences as a frontend engineer, designer, and delve
      into everything I'm learning about software development, design, 3D
      modeling, and more.
    </h1>
    <div class="writings-container">
      <PostCard v-for="n in 5" :key="n" />
    </div>
  </main>
</template>

<script setup></script>

<style scoped>
  .writings > h1 {
    max-width: 40ch;
  }

  .writings-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-32);

    border-left: 1px solid var(--clr-border);

    margin-top: var(--space-64);
  }

  @media screen and (min-width: 64rem) {
    .writings-container {
      margin-top: var(--space-80);
    }
  }
</style>
