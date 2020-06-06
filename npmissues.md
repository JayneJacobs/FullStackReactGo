
# Issues with npm

I used this version:

- node-v12.13.0-linux-x64.tar.xz
  
which I got here:

- https://nodejs.org/dist/v12.13.0/

Server running at https://pr0con2.jaynejacobs.com:1234

```sh
🚨  /var/www/parcel_blueprint/src/Components/App.js: Duplicate plugin/preset detected.
If you'd like to use two separate instances of a plugin,
they need separate names, e.g.

  plugins: [
    ['some-plugin', {}],
    ['some-plugin', {}, 'some unique name'],
  ]

Duplicates detected are:
[
  {
    "alias": "/var/www/parcel_blueprint/node_modules/@babel/plugin-proposal-class-properties/lib/index.js",
    "dirname": "/var/www/parcel_blueprint",
    "ownPass": false,
    "file": {
      "request": "@babel/plugin-proposal-class-properties",
      "resolved": "/var/www/parcel_blueprint/node_modules/@babel/plugin-proposal-class-properties/lib/index.js"
    }
  },
  {
    "alias": "base$3",
    "options": {
      "loose": "#__internal__@babel/preset-env__prefer-false-but-true-is-ok-if-it-prevents-an-error"
    },
    "dirname": "/var/www/parcel_blueprint",
    "ownPass": false
  }
]
If you'd like to use two separate instances of a plugin,
they need separate names, e.g.

  plugins: [
    ['some-plugin', {}],
    ['some-plugin', {}, 'some unique name'],
  ]

Duplicates detected are:
[
  {
    "alias": "/var/www/parcel_blueprint/node_modules/@babel/plugin-proposal-class-properties/lib/index.js",
    "dirname": "/var/www/parcel_blueprint",
    "ownPass": false,
    "file": {
      "request": "@babel/plugin-proposal-class-properties",
      "resolved": "/var/www/parcel_blueprint/node_modules/@babel/plugin-proposal-class-properties/lib/index.js"
    }
  },
  {
    "alias": "base$3",
    "options": {
      "loose": "#__internal__@babel/preset-env__prefer-false-but-true-is-ok-if-it-prevents-an-error"
    },
    "dirname": "/var/www/parcel_blueprint",
    "ownPass": false
  }
]
    at assertNoDuplicates (/var/www/parcel_blueprint/node_modules/@babel/core/lib/config/config-descriptors.js:206:13)
    at createDescriptors (/var/www/parcel_blueprint/node_modules/@babel/core/lib/config/config-descriptors.js:114:3)
    at createPluginDescriptors (/var/www/parcel_blueprint/node_modules/@babel/core/lib/config/config-descriptors.js:105:10)
    at /var/www/parcel_blueprint/node_modules/@babel/core/lib/config/config-descriptors.js:63:53
    at cachedFunction (/var/www/parcel_blueprint/node_modules/@babel/core/lib/config/caching.js:62:27)
    at cachedFunction.next (<anonymous>)
    at evaluateSync (/var/www/parcel_blueprint/node_modules/gensync/index.js:244:28)
    at sync (/var/www/parcel_blueprint/node_modules/gensync/index.js:84:14)
    at plugins (/var/www/parcel_blueprint/node_modules/@babel/core/lib/config/config-descriptors.js:28:77)
    at mergeChainOpts (/var/www/parcel_blueprint/node_modules/@babel/core/lib/config/config-chain.js:319:26)

```

## Packages installed

  npm install --save parcel-bundler 
  npm install --save react
  npm install --save react react-dom
  
  npm install  --save @babel/core

  npm install styled-components --save
  npm install --save @babel/plugin-transform-runtime 
  npm install --save @babel/plugin-proposal-class-properties

installing modules causes many dependany issues
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"linux","arch":"x64"})

added 6 packages from 14 contributors and audited 793 packages in 6.856s
found 4 vulnerabilities (2 moderate, 1 high, 1 critical)
  run `npm audit fix` to fix them, or `npm audit` for details

```s
root@pr0con2:/var/www/parcel_blueprint# npm run start

> parcel_blueprint@1.0.0 start /var/www/parcel_blueprint
> parcel src/index.html --host pr0con2.jaynejacobs.com --https --cert /etc/letsencrypt/live/pr0con2.jaynejacobs.com/cert.pem --key /etc/letsencrypt/live/pr0con2.jaynejacobs.com/privkey.pem --hmr-hostname pr0con2.jaynejacobs.com --hmr-port 5000 --no-autoinstall --no-source-maps
```
