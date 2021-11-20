module.exports = {
  outputDir: "./dist2",
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
