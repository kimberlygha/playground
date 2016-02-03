var _ = require('lodash');
var Converter = require('csvtojson').Converter;
var fs = require('fs');
var moment = require('moment');
var path = require('path');

module.exports = function(app) {
  var sendIndex = (req, res) => {
    res.sendFile(path.join(__dirname, '/web/dist/index.html'));
  }

  app.get('/', sendIndex);
}
