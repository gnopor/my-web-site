export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "T-Blaise",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Blaise TAYOU personal website"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Roboto"
      }
    ]
  },
  pwa: {
    icon: {
      iconSrc: "./static/favicon.ico"
    },
    meta: {
      name: "Blaise_TAYOU",
      theme_color: "#07252d",
      lang: "en"
    },
    manifest: {
      name: "Blaise_TAYOU",
      lang: "en",
      theme_color: "#07252d",
      useWebmanifestExtension: false
    }
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["@/assets/css/global.css"],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    "@/plugins/helpers",
    {
      src: "@/plugins/mdivue.js",
      mode: "client"
    }
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa"
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {}
};
