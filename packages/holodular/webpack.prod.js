const { merge }=require('webpack-merge')
const commonConf=require('./webpack.common')

const TerserPlugin=require("terser-webpack-plugin")
module.exports=(env, args) =>
  merge(commonConf(env, args),
    {
      mode: 'production',
      optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
      },
    })