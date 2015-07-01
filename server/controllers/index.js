/**
 * Index Controller
 */

'use strict';
var env = process.env.NODE_ENV || 'development';
var index = function(req, res) {
  res.render('index', {
    title: 'Home',
    env: env
  });
};

var about = function(req, res) {
  res.render('about', {
    title: 'About',
    env: env
  });
};

var faq = function(req, res) {
  res.render('faq', {
    title: 'FAQ',
    env: env
  });
};

var contact = function(req, res) {
  res.render('contact', {
    title: 'Contact',
    env: env
  });
};

var sponsors = function(req, res) {
  res.render('sponsors', {
    title: 'Sponsors',
    env: env
  });
};

var challenges = function(req, res) {
  res.render('challenges', {
    title: 'Sample Challenges',
    env: env
  });
};

module.exports = {
  index: index,
  about: about,
  faq: faq,
  contact: contact,
  sponsors: sponsors,
  challenges: challenges
};
