
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./sbx-ui-react.cjs.production.min.js')
} else {
  module.exports = require('./sbx-ui-react.cjs.development.js')
}
