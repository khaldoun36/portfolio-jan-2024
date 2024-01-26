<template>
  <article class="card rounded">
    <NuxtLink to="https://khaldoon.dev/">
      <NuxtImg
        src="https://images.unsplash.com/photo-1512354739413-60f30ea4e0ab?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        format="webp"
        class="card-illustration"
      />
      <div class="card-text">
        <h3 class="text-xl text-light font-semibold">Hello world</h3>
        <p class="text-base text-dark">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
        </p>
      </div>
    </NuxtLink>
  </article>
</template>

<script setup></script>

<style scoped>
  .card {
    border: 1px solid var(--clr-border);
    overflow: clip;
    background: url(../assets/images/Card.png) repeat, var(--clr-card-gradient);

    transition: border-color 250ms ease-in-out;
  }

  .card > * {
    text-decoration: none;
  }

  .card .card-illustration {
    max-width: 100%;
    height: auto;
    aspect-ratio: 4 / 3;

    mask: linear-gradient(180deg, hsl(var(--slate-900)) 60%, transparent 100%);
  }
  .card .card-text {
    padding: var(--space-24);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    gap: var(--space-8);
  }

  @media (hover: hover) {
    .card:hover,
    .card:focus {
      border-color: var(--clr-border-hover);
    }
  }
</style>
