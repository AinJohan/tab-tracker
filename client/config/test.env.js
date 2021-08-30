<<<<<<< HEAD
var merge = require('webpack-merge')
var devEnv = require('./dev.env')
=======
'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')
>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"'
})
