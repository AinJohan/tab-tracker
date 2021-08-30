<<<<<<< HEAD
var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
=======
'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"'
})
