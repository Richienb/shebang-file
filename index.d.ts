import Promise from "bluebird"

/**
 * Parse the shebang (if any) of a file.
 * @param filename The filename to parse the shebang from.
 * @example
 * ```
 * const shebangFile = require("shebang-file");
 *
 * shebangFile("myFile.txt");
 * //=> 'bash'
 * ```
*/
declare function shebangFile(filename: string): Promise<string | null>;

export = shebangFile;
