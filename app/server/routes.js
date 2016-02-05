var _ = require('lodash');
var fs = require('fs');
var path = require('path');

module.exports = function(app) {
  var sendIndex = (req, res) => {
    res.sendFile(path.join(__dirname, '/../web/dist/index.html'));
  }

  app.get('/', sendIndex);
}
