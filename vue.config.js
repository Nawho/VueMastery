const { defineConfig } = require("@vue/cli-service");
const { resolve } = require("core-js/fn/promise");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: true,
  resolve: {
    fallback: {
      "path": require.resolve("path-browserify"),
      "zlib": require.resolve("browserify-zlib"),
      "stream": require.resolve("stream-browserify"),
      "querystring": require.resolve("querystring-es3"),

    }
  }
});
