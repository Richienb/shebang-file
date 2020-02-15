"use strict"

const firstLine = require("firstline")
const shebangCommand = require("shebang-command")

module.exports = async (filename) => {
	const line = await firstLine(filename)
	const shebang = shebangCommand(line)
	return shebang === null ? undefined : shebang
}
