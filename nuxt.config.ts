// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: 'app',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'IRCYS 2026 | International Research Competition & Olympiad',
      link: [{ rel: 'icon', type: 'image/png', href: '/img/logo.png' }]
    }
  }
})
