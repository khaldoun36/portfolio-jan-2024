<template>
  <footer class="primary-footer full-width content-grid">
    <div class="primary-footer__layout">
      <PrimaryLogo />
      <nav class="primary-nav">
        <Button
          :as="NuxtLink"
          v-for="link in links"
          :key="link.text"
          :to="link.path"
          class="nav-link rounded-pill"
          >{{ link.text }}</Button
        >
      </nav>
    </div>
  </footer>
</template>

<script setup>
  import { NuxtLink } from "#components";
  import links from "../util/navigationLinks";
</script>

<style scoped>
  .logo {
    height: var(--space-36);
  }

  .primary-footer {
    padding-block: var(--space-16);
    border-top: 1px solid var(--clr-border);
  }

  .primary-footer__layout {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .primary-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-4);
  }

  .nav-link {
    text-decoration: none;
    background-color: transparent;
    transition: background-color ease-in 250ms;
  }

  @media (hover: hover) {
    .nav-link:hover,
    .nav-link:focus {
      background-color: var(--clr-nav-link-hover);
    }

    .nav-link {
      padding-inline: var(--space-20);
    }
  }

  /* ********************************** */
  /* ********* Mobile Styling ********* */
  /* ********************************** */

  @media screen and (max-width: 54rem) {
    .logo {
      width: 165px;
    }

    .primary-footer__layout {
      gap: var(--space-8);
      flex-direction: column;
      align-items: center;
    }

    .primary-nav {
      gap: var(--space-20);
    }

    .nav-link {
      padding-inline: 0;
    }
  }
</style>
