// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // importing the global stylesheet
  css: ["~/assets/css/main.css"],

  // Global head config
  app: {
    head: {
      link: [
        {
          rel: "preload",
          href: "/_nuxt/fonts/GeistVariableVF.woff2",
          crossorigin: "",
          as: "font",
          type: "font/woff2",
        },
      ],
    },
  },

  // importing Nuxt modules
  modules: ["@nuxt/image", "nuxt-icon", "@vueuse/nuxt"],

  // default image configurations
  image: {
    format: ["avif", "webp"],
  },
});
