// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  routeRules: {
    "/": { prerender: true },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "ja",
        prefix: "og: https://ogp.me/ns#",
      },
      title: "",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "",
        },
        { hid: "og:type", property: "og:type", content: "website" },
        { property: "og:site_name", content: "" },
        {
          hid: "og:url",
          property: "og:url",
          content: "",
        },
        { hid: "og:title", property: "og:title", content: "" },
        {
          hid: "og:description",
          property: "og:description",
          content: "",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "",
        },
      ],
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Yusei+Magic&family=Zen+Kaku+Gothic+Antique:wght@900&display=swap",
          crossorigin: "",
        },
        { rel: "icon", href: "" },
        { rel: "apple-touch-icon", href: "", sizes: "180x180" },
      ],
    },
  },
  css: [
    "@/assets/styles/main.scss",
    "@fortawesome/fontawesome-svg-core/styles.css",
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls: {
          includeAbsolute: false,
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData:
            '@use "sass:math";  @use "@/assets/styles/_variables.scss" as v;  @use "@/assets/styles/_mixin.scss" as m;',
        },
      },
    },
  },
});
