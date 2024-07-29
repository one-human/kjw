const { defineConfig } = require("@vue/cli-service");
const Timestamp = new Date().getTime();
const CompressionPlugin = require("compression-webpack-plugin");
module.exports = defineConfig({
  transpileDependencies: true,
  //当运行 vue-cli-service build 时生成的生产环境构建文件的目录
  outputDir: "KJW",

  //部署应用包时的基本 URL
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  productionSourceMap: false,

  //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
  assetsDir: "assets",
  // webpack-dev-server 相关配置
  devServer: {
    hot: true,
    // host: 'localhost', //设置主机地址
    host: "0.0.0.0",
    open: false, // 是否自动打开浏览器页面
    port: 8080, //端口地址
    //设置代理
    proxy: {
      // "/api": {
      //     target: process.env.BASE_URL,
      //     changeOrigin: true
      // },
    },
  },
  configureWebpack: {
    //警告 webpack 的性能提示
    performance: {
      hints: "warning",
      //入口起点的最大体积
      maxEntrypointSize: 50000000,
      //生成文件的最大体积
      maxAssetSize: 30000000,
      //只给出 js 文件的性能提示
      assetFilter: function (assetFilename) {
        return assetFilename.endsWith(".js");
      },
    },
    output: {
      // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
      filename: `[name]${Timestamp}.js?v=${Timestamp}`,
      chunkFilename: `[name]${Timestamp}.js?v=${Timestamp}`,
    },
  },
  css: {
    // 是否使用css分离插件 ExtractTextPlugin 生产环境下是true,开发环境下是false
    extract: false,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    // modules: false
  },
  chainWebpack: (config) => {
    //删除prefetch插件
    // config.plugins.delete('prefetch')
    /* 添加分析工具*/
    config.plugins.delete("prefetch");
    config.plugin("compressionPlugin").use(
      new CompressionPlugin({
        algorithm: "gzip", // 使用gzip压缩
        test: /\.js$|\.html$|\.css/, // 匹配文件名
        filename: "[path][base].gz",
        minRatio: 0.8,
        threshold: 10240, // 对超过10k的数据压缩
        deleteOriginalAssets: false, // 不删除源文件
      })
    );
    if (process.env.NODE_ENV === "production") {
      if (process.env.npm_config_report) {
        config
          .plugin("webpack-bundle-analyzer")
          .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
          .end();
        config.plugins.delete("prefetch");
      }
    }
  },
});
