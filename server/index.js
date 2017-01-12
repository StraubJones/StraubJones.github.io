require('dotenv').config()

var express = require('express')
var router = express.Router()
var Path = require('path')

require('./config')(router)

//
// Example endpoint (also tested in test/server/index_test.js)
//
router.get('/api/tags-example', function(req, res) {
  res.send(['node', 'express', 'browserify', 'mithril'])
})

if (process.env.NODE_ENV !== 'test') {
  //
  // We're in development or production mode;
  // create and run a real server.
  //
  var app = express()

  // Parse incoming request bodies as JSON
  app.use( require('body-parser').json() )

  // Mount our main router
  app.use('/', router)

  // Start the server!
  var port = process.env.PORT || 4000
  app.listen(port)
  console.log("Listening on port", port)
}
else {
  // We're in test mode; make this file importable instead.
  module.exports = router
}
