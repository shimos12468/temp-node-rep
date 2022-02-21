const _ = require('lodash')
const items = [1, 2, [4, [6, [5, 4, 3]], 3]]
const newItems = _.flattenDeep(items)
console.log(newItems)
