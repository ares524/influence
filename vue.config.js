module.exports = {
  devServer: {
    open: process.platform === 'darwin',
    host: 'localhost',
    port: 8080,
    https: true,
    hotOnly: false,
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import '@/assets/styles/variables.scss';
        `,
      },
    },
  },
}
