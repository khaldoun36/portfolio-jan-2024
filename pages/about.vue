<template>
  <div class="about-me__layout">
    <aside class="about-me-aside">
      <NuxtImg
        src="./images/about-me.jpeg"
        class="about-me-image rounded"
        placeholder
        width="3024"
        height="4032"
        format="webp"
        alt="Image of a person walking in a forest somewhere in Japan."
      />
      <div class="social-links social-links__desktop">
        <NuxtLink
          v-for="link in socialLinks"
          :key="link.id"
          class="social-link text-light text-sm font-medium"
          :to="link.link"
          target="_blank"
          rel="noopener"
        >
          <Icon :name="link.icon" />
          <span>{{ link.text }}</span>
        </NuxtLink>
      </div>
    </aside>
    <main class="about-me-main">
      <h1 class="text-light text-2xl font-semibold">
        Engineering a brighter future, one pixel at a time. I specialize in
        designing web experiences that empower everyday users.
      </h1>
      <div class="about-me-text">
        <p class="text-dark text-lg" v-for="text in aboutMeText" :key="text.id">
          {{ text.text }}
        </p>
      </div>
    </main>

    <div class="social-links social-links__mobile">
      <NuxtLink
        v-for="link in socialLinks"
        :key="link.id"
        class="social-link text-light text-sm font-medium"
        :to="link.link"
        target="_blank"
        rel="noopener"
      >
        <Icon :name="link.icon" />
        <span>{{ link.text }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
  // page title for SEO
  useHead({
    title: "Khaldoon.dev | About",
  });

  // import social links && About me text
  import socialLinks from "../util/socialLinks.js";
  import aboutMeText from "../util/aboutMeText.js";
</script>

<style scoped>
  .about-me-main {
    padding-block: var(--space-64);
  }
  .about-me-image {
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    object-fit: cover;
  }

  .about-me-text {
    padding-top: var(--space-32);
    display: flex;
    flex-direction: column;
    gap: var(--space-24);
  }

  .social-links {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--space-24);

    margin-top: var(--space-24);
  }

  .social-links.social-links__desktop {
    display: none;
  }

  .social-link {
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: var(--space-12);

    color: hsl(var(--slate-300));

    transition: color 250ms ease-in-out;

    max-width: fit-content;
  }

  @media (hover: hover) {
    .social-link:hover,
    .social-link:focus {
      color: hsl(var(--slate-500));
    }
  }

  .social-link:last-of-type {
    border-top: 1px solid var(--clr-border);
    padding-top: var(--space-24);
  }

  /* ******************************************* */
  /* ************* Desktop styling ************* */
  /* ******************************************* */

  @media screen and (min-width: 64rem) {
    .about-me__layout {
      display: grid;
      grid-template-columns: subgrid;
      grid-auto-rows: min-content;
    }

    .about-me-main {
      grid-row: 1;
      padding-block: var(--space-0);
      grid-column: 1 / 8;
    }
    .about-me-aside {
      grid-row: 1;
    }

    .about-me-aside {
      grid-column: 8 / -1;
    }

    .social-links.social-links__mobile {
      display: none;
    }
    .social-links.social-links__desktop {
      display: flex;
    }
  }
</style>
