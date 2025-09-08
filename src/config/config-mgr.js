const pkgUp = require('pkg-up')
const log = require('../utils/log')

module.exports = function getConfig() {
	const pkgPath = pkgUp.pkgUpSync({cwd: process.cwd()})
	const pkg = require(pkgPath)

	if (pkg.cli) {
		log.info('Found configuration: ', JSON.stringify(pkg.cli, null, 2), '\n')
		return pkg.cli
	} else {
		log.info('Could not find configuration, using default')
		return { port: 1234 }
	}
}
