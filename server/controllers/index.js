/**
 * Index Controller
 */

'use strict';

var nodemailer = require("nodemailer");
var smtp = require("nodemailer-smtp-transport")

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
var transport = nodemailer.createTransport(smtp(
  {
    service: "zoho",
    auth: {
      user: "notice@icec.tf",
      pass:"Thb9nLgTdecfzXZKXUyW"
    }
  }));
var contact_post = function(req,res) {
  console.log(req.body);
  if(typeof req.body.name === "undefined" || req.body.name.length == 0)
    return res.json({success: 0, message: "Missing name!"});
  else if (typeof req.body.email === "undefined" || req.body.email.length == 0)
    return res.json({success: 0, message: "Missing email!"});
  var ret = {success: 1};
  if (req.body.name.trim().toLowerCase() === "linus torvalds") {
    if(req.body.email.trim().toLowerCase() === "torvalds@osdl.org")
      ret.message = "I love you! Here is the flag: {i_<3_LiNuX}";
    else
      ret.message = "I don't believe its you!";
  } else {
    ret.message = "Thanks!";
  }
  transport.sendMail({
    from: "notice@icec.tf",
    replyTo: req.body.email,
    sender: req.body.email,
    to: "icectf@icec.tf",
    subject: "IceCTF Contact - " + req.body.name,
    text: "Name: " + req.body.name + "\n Email: " + req.body.email + "\n Message: \n" + req.body.message
  }, function(error, info) {
    if(error) {
      ret.success = 0;
      return res.json(ret);
    }
    res.json(ret);
  });
}

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
  contact_post: contact_post,
  sponsors: sponsors,
  challenges: challenges
};
