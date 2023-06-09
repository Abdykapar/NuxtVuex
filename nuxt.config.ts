export default defineNuxtConfig({
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  script: [
    {
      src: 'bootstrap/dist/js/bootstrap.bundle.min.js',
    },
  ],
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})
