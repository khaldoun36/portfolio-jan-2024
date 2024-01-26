<template>
  <header class="primary-header full-width content-grid">
    <div class="primary-header__layout">
      <PrimaryLogo />
      <nav class="primary-nav rounded-pill">
        <Button
          :as="NuxtLink"
          v-for="link in links"
          :key="link.text"
          :to="link.path"
          class="nav-link rounded-pill"
          >{{ link.text }}</Button
        >
      </nav>
      <Button
        class="btn__gradient rounded"
        :as="NuxtLink"
        to="mailto:khaldoun36@gmail.com"
        >Let's work together</Button
      >
    </div>
    <div class="mobile-nav__layout full-width content-grid">
      <nav class="primary-nav primary-nav__mobile">
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
  </header>
</template>

<script setup>
  import { NuxtLink } from "#components";
  import links from "../util/navigationLinks";
</script>

<style scoped>
  .logo {
    height: var(--space-36);
  }

  .primary-header__layout {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .primary-header {
    padding-block: var(--space-8);
    border-bottom: 1px solid var(--clr-border);
    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;
    background: var(--clr-header-background);
    backdrop-filter: blur(8px);
    transition: padding-block 250ms ease-in-out;
  }

  .primary-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--space-4);
    padding: var(--space-4);
    border: 1px solid var(--clr-border);
  }

  .mobile-nav__layout {
    display: none;
  }

  .nav-link {
    text-decoration: none;
    background-color: transparent;
    transition: background-color ease-in 250ms;
  }

  .router-link-exact-active:not(.logo) {
    background-color: var(--clr-nav-link-hover);
    border: 1px solid var(--clr-border);
  }

  @media (hover: hover) {
    .nav-link:hover,
    .nav-link:focus {
      background-color: var(--clr-nav-link-hover);
    }
  }

  /* ********************************** */
  /* ********* Mobile Styling ********* */
  /* ********************************** */

  @media screen and (max-width: 54rem) {
    .primary-header {
      border: 0;
      padding-block: var(--space-16);
      padding-bottom: var(--space-0);
    }

    .primary-nav {
      display: none;
    }

    .mobile-nav__layout {
      display: grid;
      margin-top: var(--space-16);
      padding-block: var(--space-8);
      border: 0;
      border-block: 1px solid var(--clr-border);
    }

    .primary-nav.primary-nav__mobile {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      border: none;
    }

    .primary-nav__mobile > .nav-link {
      scroll-snap-align: start;
    }

    .primary-nav.primary-nav__mobile::-webkit-scrollbar {
      display: none;
    }
  }
</style>
