module.exports = {
  outputDir: "./dist",
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/base.scss";
        `,
      },
    },
  },
};
