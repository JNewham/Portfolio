module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'JNewham',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Load Foundation
  */
  css: [
    'foundation-sites/scss/foundation.scss',
    '@/assets/scss/main.scss',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' }
  /*
  ** Build configuration
  */
}
