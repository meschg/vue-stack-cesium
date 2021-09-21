
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

const debug = process.env.NODE_ENV !== 'production'
let cesiumSource = './node_modules/cesium/Source/'
let cesiumBuild = 'node_modules/cesium/Build/Cesium/'

//let cesiumWebpackPathUsage = cesiumBuild;
//cesiumWebpackPathUsage = cesiumSource + "/"; // comment to use build version

module.exports = {
  //Cesium webpack settings
  publicPath: '',
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  configureWebpack: {
    output: {
      sourcePrefix: ' '
    },
    amd: {
      toUrlUndefined: true
    },
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve('src'),
        'cesium': path.resolve(__dirname, cesiumSource)
      }
    },
    plugins: [
      new CopyWebpackPlugin([{ from: cesiumSource + 'Workers', to: 'Workers' }]),
      new CopyWebpackPlugin([{ from: cesiumSource + 'ThirdParty', to: 'ThirdParty' }]),
      new CopyWebpackPlugin([{ from: cesiumBuild + 'Assets', to: 'Assets' }]),
      new CopyWebpackPlugin([{ from: cesiumBuild + 'Widgets', to: 'Widgets' }]),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('./')
      })
    ],
    module: {
      unknownContextRegExp: /\/cesium\/cesium\/Source\/Core\/buildModuleUrl\.js/,
      unknownContextCritical: false,
      rules: [{
        // Remove pragmas within cesium as recommended - https://github.com/AnalyticalGraphicsInc/cesium-webpack-example/blob/master/webpack.release.config.js
        test: /\.js$/,
        enforce: 'pre',
        include: path.resolve(__dirname, 'node_modules/cesium/Source'),
        sideEffects: false,
        use: [{
          loader: 'strip-pragma-loader',
          options: {
            pragmas: {
              debug: false
            }
          }
        }]
      },{
        test: /\.js$/,
        use: { loader: require.resolve('@open-wc/webpack-import-meta-loader') }
      }]
    }
  },
  transpileDependencies: [
    "vuetify"
  ],
  lintOnSave: false,
}