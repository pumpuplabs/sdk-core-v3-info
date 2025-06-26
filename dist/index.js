
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./info-sdk-core.cjs.production.min.js')
} else {
  module.exports = require('./info-sdk-core.cjs.development.js')
}
