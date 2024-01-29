<template>
  <NuxtLink to="https://www.macrumors.com/" class="post-card">
    <p class="post-card__date text-base font-medium">April 15, 1996</p>
    <div class="post-card__content">
      <h2 class="text-light">Building a Design System from scratch</h2>
      <p class="text-dark text-base">
        As someone who's always been striving for consistency, building
        delightful and accessible experiences, and trying to do all that faster
        than ever, the concept of ✨design systems✨ has always interested me.
      </p>
      <p class="post-card__link text-gradient">
        <span>Read more</span>
        <Icon name="ph:caret-right" size="16px" />
      </p>
    </div>
  </NuxtLink>
</template>

<script setup></script>

<style scoped>
  .post-card {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    gap: var(--space-24);

    max-width: fit-content;

    border-radius: 0 8px 8px 0;

    padding: var(--space-24);

    border-left: 1px solid transparent;

    transition: all 250ms ease-in-out;
  }

  @media screen and (min-width: 64rem) {
    .post-card {
      flex-direction: row;
    }
  }

  @media screen and (hover: hover) {
    .post-card:hover,
    .post-card:focus {
      background-color: hsl(var(--slate-900));
      border-color: var(--clr-border-hover);
    }
  }
  .post-card__date {
    color: hsl(var(--slate-300));
  }

  .post-card__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    max-width: 65ch;
  }

  .post-card__content > p {
    padding-top: var(--space-8);
  }

  .post-card__content > .post-card__link {
    display: flex;
    align-items: center;
    gap: var(--space-4);

    padding-top: var(--space-16);
  }
</style>
