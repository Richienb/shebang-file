# Shebang File [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/shebang-file/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/shebang-file)

Parse the shebang (if any) of a file.

[![NPM Badge](https://nodei.co/npm/shebang-file.png)](https://npmjs.com/package/shebang-file)

## Install

```sh
npm install shebang-file
```

## Usage

```js
const shebangFile = require("shebang-file");

(async () => {
	await shebangFile("myScript.sh");
	//=> 'bash'
})();
```

## API

### shebangFile(filename)

#### filename

Type: `string`

The filename to parse the shebang from.

## Migrating from v1

- If a shebang isn't found, `undefined` is now returned instead of `null`.
- Bluebird promises have been swapped out for native ones.
- The minimum required Node.js version is now 8.x.
