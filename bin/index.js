#!/usr/bin/env node

const arg = require('arg')
const getConfig = require('../src/config/config-mgr')
const start = require('../src/commands/start')
const log = require('../src/utils/log')

try {
	const args = arg({
		'--start': Boolean,
		'--build': Boolean
	})

	if (args['--start']) {
		const config = getConfig()
		start(config)
	}


} catch (e) {
	log.error('Error!', e.message, '\n')
	usage()
}

function usage() {
	console.log(`cli [CMD]
	--start \tStarts the app
	--build \tBuilds the app
		`)
}
