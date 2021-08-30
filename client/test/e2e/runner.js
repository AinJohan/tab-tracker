// 1. start the dev server using production config
process.env.NODE_ENV = 'testing'
<<<<<<< HEAD
var server = require('../../build/dev-server.js')

server.ready.then(() => {
  // 2. run the nightwatch test suite against it
  // to run in additional browsers:
  //    1. add an entry in test/e2e/nightwatch.conf.json under "test_settings"
=======

const webpack = require('webpack')
const DevServer = require('webpack-dev-server')

const webpackConfig = require('../../build/webpack.prod.conf')
const devConfigPromise = require('../../build/webpack.dev.conf')

let server

devConfigPromise.then(devConfig => {
  const devServerOptions = devConfig.devServer
  const compiler = webpack(webpackConfig)
  server = new DevServer(compiler, devServerOptions)
  const port = devServerOptions.port
  const host = devServerOptions.host
  return server.listen(port, host)
})
.then(() => {
  // 2. run the nightwatch test suite against it
  // to run in additional browsers:
  //    1. add an entry in test/e2e/nightwatch.conf.js under "test_settings"
>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)
  //    2. add it to the --env flag below
  // or override the environment flag, for example: `npm run e2e -- --env chrome,firefox`
  // For more information on Nightwatch's config file, see
  // http://nightwatchjs.org/guide#settings-file
<<<<<<< HEAD
  var opts = process.argv.slice(2)
=======
  let opts = process.argv.slice(2)
>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)
  if (opts.indexOf('--config') === -1) {
    opts = opts.concat(['--config', 'test/e2e/nightwatch.conf.js'])
  }
  if (opts.indexOf('--env') === -1) {
    opts = opts.concat(['--env', 'chrome'])
  }

<<<<<<< HEAD
  var spawn = require('cross-spawn')
  var runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' })
=======
  const spawn = require('cross-spawn')
  const runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' })
>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)

  runner.on('exit', function (code) {
    server.close()
    process.exit(code)
  })

  runner.on('error', function (err) {
    server.close()
    throw err
  })
})
