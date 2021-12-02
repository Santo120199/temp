// npm -global command, comes with node
//npm --version

//local dependecy
// npm i

//global dependecy
//npm install -g
//sudo npm install -g

//package.jso - manifest file (stores important info)
// manueal approach in the root
//npm init
// npm init -y

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]

const newItems = _.flattenDeep(items)
console.log(newItems)
