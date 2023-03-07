export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'AAC_marketplace',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },



  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  // components: true,

  components: {
    dirs: [
      '~/components',
      '~/components/uploader/'
    ]
  },
  

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    '@nuxtjs/vuetify',
    '@nuxtjs/auth-next',

  ],

  fetch: {
    baseURL: 'http://127.0.0.1:8000',
  },


  vuetify: {
    /* module options */
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ['csv-parse']

  },
  axios: {
    baseURL: "http://127.0.0.1:8000"
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          //required: true,
          type: ''
        },
        user: {
          property: '',

          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/v1/auth/login', method: 'post',propertyName: 'token' },
          // logout: { url: '/api/auth/logout', method: 'post' },
          user: { url: '/api/v1/auth/user', method: 'get', propertyName: 'user'}
        }
      }
    }
  }

}


