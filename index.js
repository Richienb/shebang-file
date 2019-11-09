"use strict"

const firstLine = require("firstline")
const shebangCommand = require("shebang-command")
const toBluebird = require("to-bluebird")

module.exports = (filename) => toBluebird(firstLine(filename)).then((line) => shebangCommand(line))
