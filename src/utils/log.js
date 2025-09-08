const c = require('chalk')

const info = (...msg) => (console.log(c.yellow(...msg)))
const success = (...msg) => (console.log(c.bgCyan(c.whiteBright(...msg))))
const error = (...msg) => (console.log(c.bgRed(c.whiteBright(...msg))))

const log = {
	info,
	success,
	error
}

module.exports = log
