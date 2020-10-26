export default {
  target: 'static',
  modern: process.env.NODE_ENV === 'development' ? false : 'client',
  head: {
    title: '%s - Aleks Petrov',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'author', conatent: 'Aleksei Petrov' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:site_name', content: 'Aleks Petrov' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:handle', content: 'alekspetrov_' },
      { property: 'twitter:creator', content: 'alekspetrov_' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['@/assets/styles/index.pcss'],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  modules: ['@nuxtjs/pwa', 'nuxt-purgecss', '@nuxt/image'],
  purgeCSS: {
    mode: 'postcss',
    enabled: process.env.NODE_ENV === 'production',
  },
  build: {
    postcss: {
      plugins: {
        'postcss-import': {},
        'postcss-nested': {},
      },
    },
    preset: {
      stage: 1,
    },
  },
}
