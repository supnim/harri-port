# babel-preset-es2015-sane

> Babel preset for all es2015 plugins except renegerator.

## Install

```sh
$ npm install --save-dev babel-preset-es2015-sane
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "presets": ["es2015-sane"]
}
```

### Via CLI

```sh
$ babel script.js --presets es2015-sane
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  presets: ["es2015-sane"]
});
```
