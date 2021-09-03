const { merge }=require('webpack-merge')
const commonConf=require('./webpack.common')

module.exports=(env, args) =>
  merge(commonConf(env, args),
    {
      mode: 'development',
      devtool: 'inline-source-map',
    })