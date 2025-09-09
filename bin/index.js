#!/usr/bin/env node

const arg = require('arg')
const getConfig = require('../src/config/config-mgr')
const start = require('../src/commands/start')
const log = require('../src/utils/log')('bin')

try {
	const args = arg({
		'--start': Boolean,
		'--build': Boolean
	})

	if (args['--start']) {
		const config = getConfig()
		start(config)
	}

	log.debug('Received args', args)

} catch (e) {
	log.warning('Error!', e.message, '\n')
	usage()
}

function usage() {
	log.warning(`cli [CMD]
	--start \tStarts the app
	--build \tBuilds the app
		`)
}
