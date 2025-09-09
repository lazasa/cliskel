const c = require('chalk')
const debug = require('debug')

const info = (...msg) => (console.log(c.gray(...msg)))
const success = (...msg) => (console.log(c.bgCyan(c.whiteBright(...msg))))
const error = (...msg) => (console.log(c.bgRed(c.whiteBright(...msg))))
const warning = (...msg) => (console.log(c.yellow(...msg)))
const highlight = (...msg) => (console.log(c.bgCyanBright(c.black(...msg))))

module.exports = function createLogger (name) {
	return {
		info,
		success,
		error,
		highlight,
		debug: debug(name)
	}
}
