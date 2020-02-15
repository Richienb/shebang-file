/**
 * Parse the shebang (if any) of a file.
 * @param filename The filename to parse the shebang from.
 * @example
 * ```
 * const shebangFile = require("shebang-file");
 *
 * (async () => {
 * 	await shebangFile("myScript.sh");
 * 	//=> 'bash'
 * })();
 * ```
*/
declare function shebangFile(filename: string): Promise<string | undefined>

export = shebangFile
