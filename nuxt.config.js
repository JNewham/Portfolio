module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'landing-page-template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'description' }
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
    '@/assets/scss/main.scss'
  ],
  script: [
  { src: 'foundation-sites' }
],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  plugins: ['~plugins/data-import.js' ],
  build: {
    publicPath: 'http://bluefrog-digital.com/clients/landing-page/'
  },
  //mode: 'spa',
  generate: {
    dir: 'landing-page'
  },
  router: {
    base: '/clients/landing-page'
  }
}
