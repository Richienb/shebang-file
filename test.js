import test from "ava"
import shebangFile from "."

test("main", async (t) => {
    t.is(await shebangFile("fixtures/test.txt"), "bash")
    t.is(await shebangFile("fixtures/testb.txt"), null)
})
