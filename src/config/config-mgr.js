const log = require('../utils/log')('config:mgr')
const Ajv = require('ajv')
const betterAjvErrors = require('better-ajv-errors').default
const schema = require('./schema.json')
const { cosmiconfigSync } = require('cosmiconfig')

const ajv = new Ajv()
const configLoader = cosmiconfigSync('cli')

module.exports = function getConfig() {
  const result = configLoader.search(process.cwd())

  if (result?.config) {
    const isValid = ajv.validate(schema, result.config)

    if (!isValid) {
      log.warning('Invalid configuration was supplied \n')
      console.log(betterAjvErrors(schema, result.config, ajv.errors))
      process.exit(1)
    }

    log.debug(
      'Found configuration: ',
      JSON.stringify(result.config, null, 2),
      '\n'
    )
    return result.config
  } else {
    log.warning('Could not find configuration, using default')
    log.debug('Default config:', JSON.stringify({}, null, 2))
    return {}
  }
}
