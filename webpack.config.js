/*eslint no-undef: 0*/
const merge = require('webpack-merge')
const commonWebpack = require('./scripts/webpack/common')
const devWebpack = require('./scripts/webpack/development')
const prodWebpack = require('./scripts/webpack/production')

const TARGET = process.env.npm_lifecycle_event

module.exports = (TARGET === 'start' || !TARGET)
    ? merge(commonWebpack, devWebpack)
    : merge(commonWebpack, prodWebpack)
