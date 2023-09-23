// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
        link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
        title: 'Nuxt Job Portal'
    }
},
  devtools: { 
    enabled: true,
    timeline: {
      enabled: true,
    }
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['bootstrap-icons/font/bootstrap-icons.min.css'],
  runtimeConfig:{
    public:{
      apiKey: process.env.API_KEY,
      apiHost: process.env.API_HOST
    }
  }
})
