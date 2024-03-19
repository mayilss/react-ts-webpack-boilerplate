const { merge } = require('webpack-merge')
const commonConfig = require('./webpack.common.ts')

module.exports = ({ env }) => {
  const envConfig = require(`./webpack.${env}.ts`)
  const config = merge(commonConfig, envConfig)

  return config
}
