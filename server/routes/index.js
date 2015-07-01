/**
 * User Routes
 */

'use strict';

var indexController = require('../controllers/index');
var path = require('path');
var fs = require('fs');

var routes = function(app) {

  // Dynamically load all routes
  fs.readdirSync(__dirname).forEach(function(file) {
    // Dont load this index.js file
    if (!/index/.test(file)) {
      var route = path.join(__dirname, file);
      require(route)(app);
    }
  });

  // Home
  app.get('/', indexController.index);
  app.get('/about', indexController.about);
  app.get('/faq', indexController.faq);
  app.get('/contact', indexController.contact);
  app.get('/sponsors', indexController.sponsors);
  app.get('/challenges', indexController.challenges);

};

module.exports = routes;
