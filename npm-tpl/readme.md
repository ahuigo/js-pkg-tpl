# npm pkg template
## Install
    yarn add mypkg
    npm i mypkg

## Usage: import pkg
Add new type: module in package.json

    // cat package.json
    {
      "name": "app",
      "type": "module",
      ....
    }

Import it in your code:

    // app.js
    import * as funcs from 'mypkg'
## Usage: cli
    $ hello Alex