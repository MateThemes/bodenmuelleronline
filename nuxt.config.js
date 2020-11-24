export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Loading
  loading: '~/components/loading.vue',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'de'
    },
    title: 'Der perfekte Boden :: Boden Müller München',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Der perfekte Fußboden für Ihr Zuhause von Boden Müller München' }
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' }
    ],
    script: [
      { src: 'js/uikit.min.js', body: true },
      { src: 'js/uikit-icons.min.js', body: true },
      { src: 'js/custom.js', body: true },
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/styles.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      "nuxt-cookie-control",
      {
        barPosition: "bottom-full",
        blockIframe: true,
        colors: {
          barTextColor: "#fff",
          barBackground: "#333",
          barButtonColor: "#333",
          barButtonBackground: "#fff",
          barButtonHoverColor: "#333",
          barButtonHoverBackground: "#f04f6d",
          modalButtonBackground: "#333",
          modalButtonHoverColor: "#fff",
          controlButtonBackground: "#333",
          controlButtonHoverBackground: "#f04f6d",
          controlButtonIconHoverColor: "#fff",
          controlButtonIconColor: "#fff",
          modalButtonHoverBackground: "#2e495e",
          checkboxActiveBackground: "#2e495e",
          checkboxInactiveBackground: "#ede1e1",
          checkboxActiveCircleBackground: "#00c58e",
          checkboxInactiveCircleBackground: "#f44336",
          checkboxDisabledBackground: "#ddd",
          checkboxDisabledCircleBackground: "#fff"
        }
      }
    ]
  ],

  cookies: {
    necessary: [
      {
        name: {
          en: "Default cookies",
          de: "Notwendige Cookies"
        },

        description: {
          en: "Is used to ensure the function of the page.",
          de: "Wird verwendet um die Funktion der Seite zu gewährleisten."
        }
      }
    ],
    optional: [
      {
        name:  'Google Analytics',
        //if you don't set identifier, slugified name will be used
        identifier: 'ga',
        //if multilanguage
        description: {
          en:  'Google GTM is ...'
        },
        //else
        description:  'Google GTM is...',

        initialState: true,
        src:  'https://www.googletagmanager.com/gtag/js?id=<API-KEY>',
        async:  true,
        cookies: ['_ga', '_gat', '_gid'],
        accepted: () =>{
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
          });
        },
        declined: () =>{
        }
      }
    ]
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    extractCSS: true
  }
}
