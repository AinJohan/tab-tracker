<<<<<<< HEAD
var chalk = require('chalk')
var semver = require('semver')
var packageConfig = require('../package.json')
var shell = require('shelljs')
=======
'use strict'
const chalk = require('chalk')
const semver = require('semver')
const packageConfig = require('../package.json')
const shell = require('shelljs')

>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)
function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()
}

<<<<<<< HEAD
var versionRequirements = [
=======
const versionRequirements = [
>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)
  {
    name: 'node',
    currentVersion: semver.clean(process.version),
    versionRequirement: packageConfig.engines.node
  }
]

if (shell.which('npm')) {
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),
    versionRequirement: packageConfig.engines.npm
  })
}

module.exports = function () {
<<<<<<< HEAD
  var warnings = []
  for (var i = 0; i < versionRequirements.length; i++) {
    var mod = versionRequirements[i]
=======
  const warnings = []

  for (let i = 0; i < versionRequirements.length; i++) {
    const mod = versionRequirements[i]

>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()
<<<<<<< HEAD
    for (var i = 0; i < warnings.length; i++) {
      var warning = warnings[i]
      console.log('  ' + warning)
    }
=======

    for (let i = 0; i < warnings.length; i++) {
      const warning = warnings[i]
      console.log('  ' + warning)
    }

>>>>>>> c2d1c1a (https://github.com/AinJohan/tab-tracker.git)
    console.log()
    process.exit(1)
  }
}
