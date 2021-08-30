<<<<<<< HEAD
=======
'use strict'
>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)
require('./check-versions')()

process.env.NODE_ENV = 'production'

<<<<<<< HEAD
var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.prod.conf')

var spinner = ora('building for production...')
=======
const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const chalk = require('chalk')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')

const spinner = ora('building for production...')
>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)
spinner.start()

rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
  if (err) throw err
<<<<<<< HEAD
  webpack(webpackConfig, function (err, stats) {
=======
  webpack(webpackConfig, (err, stats) => {
>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)
    spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
<<<<<<< HEAD
      children: false,
=======
      children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)
      chunks: false,
      chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
      console.log(chalk.red('  Build failed with errors.\n'))
      process.exit(1)
    }

    console.log(chalk.cyan('  Build complete.\n'))
    console.log(chalk.yellow(
      '  Tip: built files are meant to be served over an HTTP server.\n' +
      '  Opening index.html over file:// won\'t work.\n'
    ))
  })
})
