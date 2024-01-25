<template>
  <div class="main-layout">
    <main class="hero-section">
      <h1 class="text-2xl text-light font-semibold">
        <span class="text-dark">Hello! مرحباً! こんにちは!</span> I'm Khaldoon -
        a Dubai-based independent web designer and developer. I specialize in
        crafting pixel-perfect web applications that elevate everyday user
        experiences.
      </h1>
      <div class="hero-buttons">
        <Button
          v-for="link in heroSocialLinks"
          :key="link.id"
          class="btn__secondary rounded"
          :as="NuxtLink"
          :to="link.link"
          target="_blank"
          rel="noopener"
        >
          <Icon :name="link.iconAlt" />
          <span>@{{ link.handle }}</span>
        </Button>
      </div>
    </main>
    <section class="featured-work">
      <h2 class="text-xl text-light font-semibold">Featured</h2>
    </section>
  </div>
</template>

<script setup>
  import { NuxtLink } from "#components";

  import socialLinks from "~/util/socialLinks";

  const heroSocialLinks = socialLinks.slice(0, 2);
</script>

<style scoped>
  .hero-section {
    max-width: 90ch;
  }

  .hero-buttons {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--space-24);

    padding-top: var(--space-24);
  }
</style>
