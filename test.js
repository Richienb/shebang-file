const test = require("ava")
const shebangFile = require(".")

test("main", async (t) => {
	t.is(await shebangFile("fixtures/test.txt"), "bash")
	t.is(await shebangFile("fixtures/testb.txt"), undefined)
})
