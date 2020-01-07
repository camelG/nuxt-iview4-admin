const pkg = require("./package");

module.exports = {
  mode: "spa",

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "pink" },

  /*
   ** Global CSS
   */
  css: ["~static/style.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: "~plugins/iview" }],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios",
    "@nuxtjs/auth"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: process.env.LOCAL_LOGIN_ENDPOINT,
            method: "post",
            propertyName: "token"
          },
          logout: { url: "/api/auth/logout", mehtod: "post" },
          user: { url: "/api/auth/user", method: "get", propertyName: "user" }
        },
        tokenRequired: true,
        tokenName: "Authorization",
        tokenType: "Bearer"
      },
      facebook: {
        client_id: process.env.FACEBOOK_CLIENT_ID,
        userinfo_endpoint:
          "https://graph.facebook.com/v2.12/me?fields=about,name,picture{url},email,birthday",
        scope: ["public_profile", "email", "user_birthday"]
      },
      google: {
        client_id: process.env.GOOGLE_CLIENT_ID
      },
      github: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET
      },
      twitter: {
        client_id: process.env.TWITTER_CLIENT_ID
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
