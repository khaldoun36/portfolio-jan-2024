// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  // importing the global stylesheet
  css: ["~/assets/css/main.css"],

  // Global head config
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "Khaldoo.Dev",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "description", content: "Free Web tutorials" },
      ],

      link: [
        {
          rel: "preload",
          href: "/fonts/GeistVariableVF.woff2",
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
